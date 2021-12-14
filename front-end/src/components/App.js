import React from "react";
import "../css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";
import Cookies from "js-cookie";

import Index from "../pages/Index.js";
import NewGame from "../pages/NewGame.js";
import Join from "../pages/Join.js";
import Read from "../pages/Read.js";

const App = () => {
  const [playerId, setPlayerId] = useState(Cookies.get("playerId"));

  if (!playerId) {
    const id = crypto.randomUUID();
    Cookies.set("playerId", id);
    setPlayerId(id);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index playerId={playerId} />} />
        <Route path="/new" element={<NewGame playerId={playerId} />} />
        <Route path="/join" element={<Join playerId={playerId} />} />
        <Route path="/read" element={<Read playerId={playerId} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
