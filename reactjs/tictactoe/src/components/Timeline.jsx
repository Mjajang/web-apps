import Button from "./Button";
import React from "react";
const Timeline = ({ timeline, onTimelineItemClick }) => {
  return (
    // this is <></> shortcut for React.Fragment
    <>
      <h2>History</h2>
      {timeline.map((_, index) => {
        return (
          <Button key={index} onClick={() => onTimelineItemClick(index)}>
            Langkah #{index}
          </Button>
        );
      })}
    </>
  );
};

export default Timeline;
