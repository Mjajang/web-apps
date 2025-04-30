import Button from "./Button";
import Timeline from "./Timeline";

const Gameinfo = ({ winner, isXNext, onReset, timeline }) => {
  const handleReset = () => {
    onReset();
  };

  return (
    <div className="game-info">
      {winner ? <h2>Winner: {winner}</h2> : <h2>Next player: {isXNext ? "X" : "O"}</h2>}
      <Button onClick={handleReset}>Restart Game</Button>

      <Timeline timeline={timeline} />
    </div>
  );
};

export default Gameinfo;
