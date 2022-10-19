import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { fetchSearch } from "../actions/gamesActions";
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
  return (
    <StyledNav>
      <Logo>
        {" "}
        <h1>GameInfo</h1>
      </Logo>{" "}
      <form>
        <input type="text" onChange={inputHandler} value={input}></input>
        <button type="submit" onClick={submitGameSearch}>
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 6rem;
  text-align: center;
  input {
    width: 30%;
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
    &:hover {
      background-color: rgba(0, 0, 0);
    }
  }
`;
const Logo = styled(motion.div)``;

export default Nav;
