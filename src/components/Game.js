import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ game }) => {
  return (
    <GameStyled>
      <h3>{game.name}</h3>
      <p>{game.released}</p>
      <img src={game.background_image} alt={game.name}></img>
    </GameStyled>
  );
};

const GameStyled = styled(motion.div)`
  min-height: 30vh;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    text-align: center;
    border-radius: 1rem;
    overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
  }
`;

export default Game;
