import React from "react";

const FinalTimeDisplay = ({ finalTime }) => {
  const formatTime = (time) => {
    const milliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return <div className="final-time">Final Time: {formatTime(finalTime)}</div>;
};

export default FinalTimeDisplay;
