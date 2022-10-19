import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { fetchSearch,clearSearch } from "../actions/gamesActions";
import { useDispatch } from "react-redux";

const Nav = () => {
  const [input, setInout] = useState("");
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInout(e.target.value);
  };

  const submitGameSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(input));
    setInout("");
  };

  const clearSearchResult =() =>{
    dispatch(clearSearch);
  }

  return (
    <StyledNav>
      <Logo onClick={clearSearchResult}>
        {" "}
        <h1>Game World</h1>
      </Logo>{" "}
      <form>
        <input type="text" onChange={inputHandler} value={input} placeholder="Search for game by name ..."></input>
        <button type="submit" onClick={submitGameSearch}>
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 3rem;
  text-align: center;
  font-size: 0.8rem;
  input {
    width: 45%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    font-weight: bold;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    transition: 400ms;
    &:hover {
      background-color: rgba(0, 0, 0);
      transform: scale(1.05);
    }
  }
`;
const Logo = styled(motion.div)`
  cursor: pointer;
`;

export default Nav;
