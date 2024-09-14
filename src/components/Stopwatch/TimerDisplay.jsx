import React from "react";

const TimerDisplay = ({ time }) => {
  const formatTime = (time) => {
    const milliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return <div className="timer">{formatTime(time)}</div>;
};

export default TimerDisplay;
