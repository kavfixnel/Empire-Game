const QuestionAndAnswers = ({ round, num, answer, count, handleClick }) => {
  return (
    <div>
      <div className="card" onClick={handleClick}>
        <h3 id="answer">
          {round > 2
            ? "No more rounds"
            : round === 2 && num === 0
            ? "See answers again"
            : round === 1 && num === 0
            ? "Click to see answers"
            : answer}
        </h3>
      </div>
      <p>
        Round: <span id="round">{round < 3 ? round : "Done"}</span>
      </p>
      <p>
        Card {num}/{count}
      </p>
    </div>
  );
};

export default QuestionAndAnswers;
