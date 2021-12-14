import HowToPlay from "../components/HowToPlay";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../css/style.css";

import PlayerIdDisplay from "../components/PlayerIdDisplay";
import SubmitAnswer from "../components/SubmitAnswer";
import QuestionAndAnswers from "../components/QuestionAndAnswers";

const Join = ({ playerId }) => {
  const [inputGameId, setInputGameId] = useState("");
  const [gameId, setGameId] = useState("");
  const [fromURL, setFromURL] = useState(false);
  const [validGameId, setValidGameId] = useState(false);
  const gameIdRegex = new RegExp(/^[0-9a-z]{5}$/);

  const checkAndSetGameId = (e) => {
    e.preventDefault();
    if (gameIdRegex.test(inputGameId)) setGameId(inputGameId);
  };

  const gameIdInput = (e) => {
    const _gameId = e.target.value;
    setInputGameId(_gameId);

    if (gameIdRegex.test(_gameId)) setValidGameId(true);
    else setValidGameId(false);
  };

  useEffect(() => {
    const gameIdRegex = new RegExp(`gameId=([0-9a-z]{5})(?:$|&)`);

    try {
      const _gameId = window.location.href.match(gameIdRegex)[1];
      setInputGameId(_gameId);
      setGameId(_gameId);
      setFromURL(true);
    } catch (error) {}
  }, []);

  return (
    <div className="middle">
      <div className="horizontal">
        <Link to="/">
          <button>Back</button>
        </Link>

        <PlayerIdDisplay playerId={playerId} />
      </div>

      <h1>Type in your answer to the question</h1>

      <h3>Game ID:</h3>
      <form onSubmit={checkAndSetGameId}>
        <input
          type="text"
          value={inputGameId}
          onChange={gameIdInput}
          readOnly={fromURL}
          required={true}
        />
        <input type="submit" value="Join" disabled={fromURL || !validGameId} />
      </form>

      {gameId !== "" ? (
        <div>
          <SubmitAnswer gameId={gameId} />
          <QuestionAndAnswers gameId={gameId} />
        </div>
      ) : null}

      <HowToPlay />
    </div>
  );
};

export default Join;
