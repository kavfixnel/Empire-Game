import { useState } from "react";

const SetGameOpts = ({ gameId, optional }) => {
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitAnswer = (e) => {
    e.preventDefault();

    console.log("submitAnswer");

    if (!gameId) return;

    fetch(`/api/submitAnswer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gameId: gameId,
        answer,
      }),
    }).then((res) => {
      if (res.status === 200) setSubmitted(true);
    });
  };

  return (
    <div>
      <h4>
        Submit your answer{" "}
        {optional ? <span style={{ color: "gray" }}>(optional)</span> : null}
      </h4>
      <form onSubmit={submitAnswer}>
        <input
          type={submitted ? "password" : "text"}
          name="answer"
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SetGameOpts;
