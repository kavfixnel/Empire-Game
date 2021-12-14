import HowToPlay from "../components/HowToPlay";
import { Link } from "react-router-dom";
import "../css/style.css";

import PlayerIdDisplay from "../components/PlayerIdDisplay";

const Index = ({ playerId }) => {
  return (
    <div className="middle">
      <h1>Empire</h1>

      <PlayerIdDisplay playerId={playerId} />

      <Link to="/new">
        <button>New Game</button>
      </Link>
      <Link to="/join">
        <button>Join Game</button>
      </Link>

      <HowToPlay />
    </div>
  );
};

export default Index;
