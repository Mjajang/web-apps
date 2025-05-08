import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Board from "./components/Board";
import Gameinfo from "./components/Gameinfo";
import calculateWinner from "./utils/Calculatewinner";
import Timeline from "./components/Timeline";

function App() {
  // const [isXNext, setIsXNext] = useState(false);
  // const [board, setBoard] = useState(Array(9).fill(null));
  const [timeline, setTimeline] = useState([
    {
      board: Array(9).fill(null),
      isXNext: false,
    },
  ]);
  const [currentStep, setCurrentStep] = useState(0);

  const board = timeline[currentStep].board;
  const winner = calculateWinner(board);
  const isXNext = timeline[currentStep].isXNext;

  // const handleReset = () => {
  // setBoard(Array(9).fill(null));
  // setIsXNext(false);
  // };

  const handleSquareClick = (index) => {
    if (winner) return;
    const newBoard = [...board];

    if (newBoard[index]) {
      return newBoard;
    }

    newBoard[index] = isXNext ? "X" : "O";

    setTimeline([
      ...timeline.splice(0, currentStep + 1),
      {
        board: newBoard,
        isXNext: !isXNext,
      },
    ]);
    setCurrentStep(currentStep + 1);
    /* setBoard((currBoard) => {
      const newBoard = [...currBoard];

      if (newBoard[index]) {
        return newBoard;
      }

      newBoard[index] = isXNext ? "X" : "O";

      setIsXNext(!isXNext);
      return newBoard;
    });

    console.log("Square clicked"); */
  };

  const handleTimelineItemClick = (index) => {
    setCurrentStep(index);
  };
  return (
    <div className="container">
      <Board board={board} onAction={handleSquareClick} />
      <div>
        <Gameinfo winner={winner} isXNext={isXNext} /* onReset={handleReset} */ />
        <Timeline
          currentStep={currentStep}
          timeline={timeline}
          onTimelineItemClick={handleTimelineItemClick}
        />
      </div>
    </div>
  );
}

export default App;
