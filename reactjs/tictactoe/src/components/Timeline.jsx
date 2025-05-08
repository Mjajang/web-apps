import Button from "./Button";
import React from "react";
const Timeline = ({ timeline, onTimelineItemClick, currentStep }) => {
  return (
    // this is <></> shortcut for React.Fragment
    <>
      <h2>History</h2>
      {timeline.map((_, index) => {
        let buttonText = `Langkah #${index}`;
        if (index === 0) {
          buttonText = "Game Start";
        }
        return (
          <Button
            active={currentStep === index}
            key={index}
            onClick={() => onTimelineItemClick(index)}
          >
            {buttonText}
          </Button>
        );
      })}
    </>
  );
};

export default Timeline;
