import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import TimerDisplay from "./TimerDisplay";
import FinalTimeDisplay from "./FinalTimeDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faStop,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";
import "./Stopwatch.css";

// Reusable Button Component with icons and tooltips
const Button = memo(({ onClick, icon, title }) => (
  <button className="stopwatch-button" onClick={onClick} title={title}>
    <FontAwesomeIcon icon={icon} />
  </button>
));

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [finalTime, setFinalTime] = useState(null);

  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const handleStartPause = useCallback(() => {
    if (isRunning) {
      setIsRunning(false);
      setIsPaused(true);
    } else {
      setIsRunning(true);
      setIsPaused(false);
    }
  }, [isRunning]);

  const handleStop = useCallback(() => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setFinalTime(time);
    setTime(0);
    setIsPaused(false);
  }, [time]);

  const handleReset = useCallback(() => {
    setIsRunning(false);
    clearInterval(timerRef.current);
    setFinalTime(null);
    setTime(0);
    setIsPaused(false);
  }, []);

  return (
    <div className="stopwatch">
      <div className="stopwatch-card">
        <h1 className="stopwatch-title">Stopwatch</h1>
        <TimerDisplay time={time} />
        {finalTime !== null && !isRunning && (
          <FinalTimeDisplay finalTime={finalTime} />
        )}
        <div className="buttons">
          {!isRunning && !isPaused && (
            <Button onClick={handleStartPause} icon={faPlay} title="Start" />
          )}
          {(isRunning || isPaused) && (
            <>
              <Button
                onClick={handleStartPause}
                icon={isPaused ? faPlay : faPause}
                title={isPaused ? "Resume" : "Pause"}
              />
              <Button onClick={handleStop} icon={faStop} title="Stop" />
              <Button onClick={handleReset} icon={faRedo} title="Reset" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
