import React, { useEffect, useRef, useState } from "react";

function getTimerFromLocalStorage() {
  const timer = localStorage.getItem("timer");
  if (timer) {
    return +JSON.parse(timer);
  }
  return 0;
}

export default function Timer() {
  const [count, setCount] = useState(getTimerFromLocalStorage());
  const [isCounting, setIsCounting] = useState(false);

  const timerRef = useRef(null);

  // componentDidMount() {
  //   const userCount = localStorage.getItem("count");
  //   if (userCount) setState({ count: +userCount });
  // }

  // componentDidUpdate() {
  //   localStorage.setItem("count", state.count);
  // }

  const handleReset = () => {
    setCount(0);
    setIsCounting(false);
  };

  const handleStart = () => {
    setIsCounting(true);
  };

  const handleStop = () => {
    setIsCounting(false);
  };

  useEffect(() => {
    if (isCounting) {
      timerRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => {
      timerRef.current && clearInterval(timerRef.current);
    };
  }, [isCounting]);

  useEffect(() => {
    localStorage.setItem("timer", JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <h1 className="mt4 mb4">React Timer</h1>
      <h3 className="mb4">{count}</h3>
      {!isCounting ? (
        <button className="btn blue lighten-2" onClick={handleStart}>
          Start
        </button>
      ) : (
        <button className="btn indigo darken-2" onClick={handleStop}>
          Stop
        </button>
      )}
      <button className="btn cyan lighten-2 ml2" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
