import React from "react";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/game-catalog-redux" element={<Home />}>
            <Route path="/game-catalog-redux/game/:id" element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
