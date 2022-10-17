import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//REDUX
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/combineReducers";
import { Provider } from "react-redux";

const store = configureStore({ reducer: rootReducer });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
