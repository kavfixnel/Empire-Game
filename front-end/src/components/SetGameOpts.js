import { useState } from "react";
import SubmitAnswer from "./SubmitAnswer";

const SetGameOpts = ({ gameId }) => {
  const [question, setQuestion] = useState("");

  const updateQuestion = (e) => {
    e.preventDefault();

    if (!gameId) return;

    fetch(`/api/setQuestion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gameId,
        question,
      }),
    });

    console.log("question updated");
  };

  return (
    <div>
      <h4>
        Set question <span style={{ color: "gray" }}>(optional)</span>
      </h4>
      <form onSubmit={updateQuestion}>
        <input
          type="text"
          name="question"
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
          required={true}
        />
        <input type="submit" value="Update" />
      </form>

      <SubmitAnswer gameId={gameId} optional={true} />
    </div>
  );
};

export default SetGameOpts;
