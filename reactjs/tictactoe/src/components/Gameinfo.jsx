import Button from "./Button";

const Gameinfo = ({ winner, isXNext, onReset }) => {
  const handleReset = () => {
    onReset();
  };

  return (
    <div className="game-info">
      {winner ? <h2>Winner: {winner}</h2> : <h2>Next player: {isXNext ? "X" : "O"}</h2>}
      <Button onClick={handleReset}>Restart Game</Button>

      <h2>History</h2>
      <Button>Langkah #1</Button>
      <Button>Langkah #2</Button>
      <Button>Langkah #3</Button>
    </div>
  );
};

export default Gameinfo;
