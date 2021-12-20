import { useEffect, useState } from "react";

const QuestionAndAnswers = ({ gameId }) => {
  const [totalAnswers, setTotalAnswers] = useState(null);
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    if (gameId == null) return;

    console.log("connecting to socket" + gameId);

    let ws = new WebSocket(
      `ws${location.protocol === "https:" ? "s" : ""}://${
        window.location.host
      }/api/ws?gameId=${gameId}`
    );
    ws.onmessage = (data) => {
      let message = JSON.parse(data.data);

      if (message.numAnswers != null) setTotalAnswers(message.numAnswers);
      if (message.question != null) setQuestion(message.question);
    };
  }, [gameId]);

  return (
    <div>
      {question ? (
        <div>
          <h3>Question</h3>
          <p>{question}</p>
        </div>
      ) : null}
      <h3>
        Total answers in pool: <span id="numAnswers">{totalAnswers}</span>
      </h3>
    </div>
  );
};

export default QuestionAndAnswers;
