import axios from "axios";
import { getDetailsURL, gameScreenshotURL,getStoreURL,getTrailerURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAILS",
  });
  const detailData = await axios.get(getDetailsURL(id));
  const screenShotData = await axios.get(gameScreenshotURL(id));
  const getStore = await axios.get(getStoreURL(id));
  const getTrailer = await axios.get(getTrailerURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
      store: getStore.data,
      trailer: getTrailer.data,
    },
  });
};
