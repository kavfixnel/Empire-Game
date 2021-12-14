import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PlayerIdDisplay from "../components/PlayerIdDisplay";
import HowToPlay from "../components/HowToPlay";
import Card from "../components/Card";

const Read = ({ playerId }) => {
  const [round, setRound] = useState(1);
  const [num, setNum] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const gameIdRegex = new RegExp(`gameId=([0-9a-z]{5})(?:$|&)`);
    let gameId = null;

    try {
      gameId = window.location.href.match(gameIdRegex)[1];
    } catch (error) {
      window.location.href = "/";
    }

    fetch("/api/listAnswers?gameId=" + gameId)
      .then((res) => {
        if (res.status !== 200) window.location.href = "/";
        return res.json();
      })
      .then((data) => {
        setAnswers(data.sort(() => Math.random() - 0.5));
      })
      .catch(() => {
        window.location.href = "/";
      });
  }, []);

  const handleClick = () => {
    if (answers === [] || round > 2 || num > answers.length) return;

    setNum((num) => {
      num += 1;
      if (num > answers.length) {
        setRound((round) => round + 1);
        return 0;
      }
      return num;
    });
  };

  return (
    <div className="middle">
      <div className="horizontal">
        <Link to="/">
          <button>Back</button>
        </Link>

        <PlayerIdDisplay playerId={playerId} />
      </div>

      <Card
        round={round}
        num={num}
        answer={answers.length > 0 ? answers[Math.max(0, num - 1)] : ""}
        count={answers.length}
        handleClick={handleClick}
      />

      <HowToPlay />
    </div>
  );
};

export default Read;
