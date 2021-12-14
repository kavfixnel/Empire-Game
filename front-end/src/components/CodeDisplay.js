import CopyIcon from "../icons/content_copy_black_24dp.svg";

const CodeDisplay = ({ game }) => {
  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(game.gameLink);
  };

  return (
    <div>
      <p>
        Code:{" "}
        <span id="gameIdCode" className="gameIdCode">
          {game.gameId}
        </span>
      </p>
      {game.gameLink ? (
        <button
          onClick={copyLinkToClipboard}
          className="horizontal"
          style={{ justifyContent: "flex-start", gap: "0.5rem" }}
        >
          <img src={CopyIcon} alt="Copy Icon" />
          <p to={game.gameLink}>Copy Sharable Link</p>
        </button>
      ) : null}
      {game.gameQR ? (
        <img className="gameQR" src={game.gameQR} alt="QR Code" />
      ) : null}
    </div>
  );
};

export default CodeDisplay;
