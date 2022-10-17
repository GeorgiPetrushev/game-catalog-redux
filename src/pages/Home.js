import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesActions";

const Home = () => {

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadGames());
    });


  return <div>Home</div>;
};

export default Home;
