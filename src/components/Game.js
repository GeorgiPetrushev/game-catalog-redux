import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";

const Game = ({ game }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(game.id));
  };
  const idToString = game.id.toString()

  return (
    <GameStyled layoutId={idToString} onClick={loadDetailHandler}>
      <Link to={`/game-catalog-redux/game/${game.id}`}>
        <StyleTittleGame layoutId={`tittle ${idToString}`}>{game.name}</StyleTittleGame>
        <p>{game.released}</p>
        <motion.img layoutId={`img ${idToString}`} src={game.background_image} alt={game.name}></motion.img>
      </Link>
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
  cursor: pointer;
  &:hover{
    transform: scale(1.03);
  }

  img {
    width: 100%;
    height: 30vh;
  }
`;
const StyleTittleGame = styled(motion.div)`
  height: 2rem;
  font-size: 1.3rem;
  padding: 1rem 0rem;
`;

export default Game;
