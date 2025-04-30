import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Board from "./components/Board";
import Gameinfo from "./components/Gameinfo";
import calculateWinner from "./utils/Calculatewinner";

function App() {
  const [isXNext, setIsXNext] = useState(false);
  const [board, setBoard] = useState(Array(9).fill(null));
  const winner = calculateWinner(board);

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(false);
  };

  const handleSquareClick = (index) => {
    if (winner) return;
    setBoard((currBoard) => {
      const newBoard = [...currBoard];

      if (newBoard[index]) {
        return newBoard;
      }

      newBoard[index] = isXNext ? "X" : "O";

      setIsXNext(!isXNext);
      return newBoard;
    });

    console.log("Square clicked");
  };
  return (
    <div className="container">
      <Board board={board} onAction={handleSquareClick} />
      <Gameinfo winner={winner} isXNext={isXNext} onReset={handleReset} />
    </div>
  );
}

export default App;
