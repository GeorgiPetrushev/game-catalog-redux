import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesActions";
import Game from "../components/Game";
import GameDetails from "../components/GameDetail";
//Style
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";


const Home = () => {

  // get current location
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    <GameList>
      {path && <GameDetails />}
      <h1>Upcoming Games</h1>
      <Games>
        {upcoming.map((game) => (
          <Game game={game} key={game.id} />
        ))}
      </Games>
      <h1>Popular Games</h1>
      <Games>
        {popular.map((game) => (
          <Game game={game} key={game.id} />
        ))}
      </Games>
      <h1>New Games</h1>
      <Games>
        {newGames.map((game) => (
          <Game game={game} key={game.id} />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 2rem 5rem;
  h1 {
    padding: 3rem 1rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
  grid-gap:  6rem 3rem;
`;

export default Home;
