import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//REDUX
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/combineReducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = configureStore({ reducer: rootReducer, thunk });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Provider store={store}>
    
      <App />
     
    </Provider>
  </div>
);
