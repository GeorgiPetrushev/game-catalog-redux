import axios from "axios";
import {
  popularGamesURL,
  upcomingGameURL,
  newGameURL,
  searchGameURL,
} from "../api";

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGameURL());
  const newGamesData = await axios.get(newGameURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      newGames: newGamesData.data.results,
      upcoming: upcomingData.data.results,
    },
  });
};

export const fetchSearch = (gameName) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(gameName));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};

export const clearSearch = (dispatch) => {
  dispatch({ type: "CLEAR_SEARCH" });
};
