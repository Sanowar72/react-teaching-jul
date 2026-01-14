import React, { useEffect, useMemo, useRef, useState } from "react";

const useCounter = (initial = 0, step = 1, interval = 1000) => {
  const [seconds, setSeconds] = useState(initial);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const start = () => {
    if (isRunning) return;
    setSeconds(initial);
    setIsRunning(true);

    timerRef.current = setInterval(() => {
      setSeconds((s) => s + step);
    }, interval);
  };

  const pause = () => {
    if (!isRunning) return;
    clearInterval(timerRef.current);
    timerRef.current = null;
    setIsRunning(false);
  };

  const resume = () => {
    if (isRunning) return;
    setIsRunning(true);

    timerRef.current = setInterval(() => {
      setSeconds((s) => s + step);
    }, interval);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setSeconds(initial);
    setIsRunning(false);
  };

  return { seconds, start, pause, resume, reset, isRunning };
};

const ProgressBar = () => {
  const { seconds, start, pause, resume, reset, isRunning } = useCounter(
    0,
    1,
    100
  );

  const widthPercentage = Math.min(seconds, 100);

  useEffect(() => {
    if (seconds >= 100) pause();
  }, [seconds]);

  const getPrimaryButton = () => {
    if (seconds === 0) return { label: "Start", action: start };
    if (isRunning) return { label: "Stop", action: pause };
    return { label: "Resume", action: resume };
  };

  const primaryButton = getPrimaryButton();

  return (
    <>
      <div className="progress-bar-container">
        <div
          className="progress"
          style={{ width: `${widthPercentage}%`, height: "100%" }}
        >
          {widthPercentage > 0 && <p>{widthPercentage} %</p>}
        </div>
      </div>

      <button onClick={primaryButton.action}>{primaryButton.label}</button>

      <button onClick={reset} style={{ marginLeft: 8 }}>
        Reset
      </button>
    </>
  );
};

export default ProgressBar;
