import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

import HowToPlay from "../components/HowToPlay";
import CodeDisplay from "../components/CodeDisplay";
import SetGameOpts from "../components/SetGameOpts";
import QuestionAndAnswers from "../components/QuestionAndAnswers";
import PlayerIdDisplay from "../components/PlayerIdDisplay";

const NewGame = ({ playerId }) => {
  const [game, setGame] = useState({
    gameId: null,
    gameLink: null,
    gameQR: null,
  });

  useState(() => {
    fetch("/api/newGame")
      .then((res) => res.json())
      .then((data) => {
        setGame(data);
      });
  }, []);

  return (
    <div className="middle">
      <div className="horizontal">
        <Link to="/">
          <button>Back</button>
        </Link>

        <PlayerIdDisplay playerId={playerId} />
      </div>

      <h1>Let others join</h1>

      <CodeDisplay game={game} />

      <SetGameOpts gameId={game.gameId} />

      <hr />

      <QuestionAndAnswers gameId={game.gameId} />

      <Link to={`/read?gameId=${game.gameId}`}>
        <button>Read Answers</button>
      </Link>

      <HowToPlay />
    </div>
  );
};

export default NewGame;
