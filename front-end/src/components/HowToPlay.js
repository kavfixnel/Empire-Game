const HowToPlay = () => {
  return (
    <div>
      <hr />
      <h2>How to play</h2>
      <p>
        At the beginning of the game, a question is asked and everyone must join
        with the code and answer the question in the form (either truthfully or
        not).
      </p>
      <p>
        Once everyone is done, the person who created the game will start the
        game and all words will get displayed two times, after which they will
        disappear forever.
      </p>
      <p>
        Everyone starts as the head of their Empire. Players will go around one
        by one guessing who answered the question with what answer. If they
        guess correctly, the guessed player and their Empire will secede and
        join the guesser's Empire. Their job now is to help the head of the
        Empire guess the remaining answers. The guesser can guess as often as
        they guess correctly.
      </p>
      <p>The winner of the game is the head of the last Empire.</p>
      <p style={{ color: "gray" }}>
        Hint: Competing Empires will not want to share the words, since words
        are only displayed once at the very beginning. Every Empire should
        collaborate internally to remember the answers themselves!
      </p>
    </div>
  );
};

export default HowToPlay;
