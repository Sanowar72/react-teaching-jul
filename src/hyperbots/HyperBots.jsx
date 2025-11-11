import React, { useEffect, useRef, useState } from "react";

const HyperBots = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("start");
  const timerRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleReset = () => {
    setProgress(0);
    setStatus("start");
    clearInterval(timerRef.current);
  };

  const handleStart = () => {
    if (status === "start") {
      setStatus("running");
    } else if (status === "running") {
      clearInterval(timerRef.current);
      setStatus("pause");
    } else if ("pause") {
      setProgress(progress);
      setStatus("running");
    } else if ("resume") {
      setStatus("running");
    }
  };

  useEffect(() => {
    if (status === "running") {
      timerRef.current = setInterval(() => {
        setProgress((pre) => {
          if (pre >= 100) {
            clearInterval(timerRef.current);
            return 100;
          } else {
            return pre + 1;
          }
        });
      }, 100);
    }
    return () => clearInterval(timerRef.current);
  }, [status]);

  useEffect(() => {
    console.log("this is count value", count);

    return () => {
      console.log("this will before clean up function......");
    };
  }, [count]);

  return (
    <>
      <div className="progress-bar-container">
        <div
          className="progress"
          style={{
            width: `${progress}%`,
            height: "100%",
          }}
          ref={timerRef}
        >
          {progress}%
        </div>
        {progress !== 100 && <button onClick={handleStart}>{status}</button>}

        <button onClick={handleReset}>reset</button>
        <button onClick={() => setCount((pre) => pre + 1)}>count</button>
      </div>
    </>
  );
};

export default HyperBots;
