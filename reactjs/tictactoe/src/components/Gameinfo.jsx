import Button from "./Button";

const Gameinfo = ({ winner, isXNext, onReset }) => {
  const handleReset = () => {
    onReset();
  };

  return (
    <div className="game-info">
      {winner ? <h2>Winner: {winner}</h2> : <h2>Next player: {isXNext ? "X" : "O"}</h2>}
      <Button onClick={handleReset}>Restart Game</Button>
    </div>
  );
};

export default Gameinfo;
