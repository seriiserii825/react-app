import React, { useEffect, useReducer, useRef } from "react";
import timer_vars from "../reducer_vars/timer_vars";

function getTimerFromLocalStorage() {
  const timer = localStorage.getItem("timer");
  if (timer && timer !== "undefined") {
    return +JSON.parse(timer);
  }
  return 0;
}

const {
  TIMER_START,
  TIMER_STOP,
  TIMER_RESET,
  TIMER_FROM_LOCAL_STORAGE,
  TIMER_UPDATE,
} = timer_vars;

const reducer = (state, action) => {
  switch (action.type) {
    case TIMER_START:
      return {
        ...state,
        isCounting: true,
      };
    case TIMER_STOP:
      return {
        ...state,
        isCounting: false,
      };
    case TIMER_RESET:
      return {
        ...state,
        isCounting: false,
        count: 0,
      };
    case TIMER_FROM_LOCAL_STORAGE:
      return {
        ...state,
        count: getTimerFromLocalStorage(),
      };
    case TIMER_UPDATE:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default function Timer() {
  const [{ count, isCounting }, dispatch] = useReducer(reducer, {
    count: getTimerFromLocalStorage(),
    isCounting: false,
  });

  const timerRef = useRef(null);

  const handleReset = () => {
    dispatch({ type: TIMER_RESET });
  };

  const handleStart = () => {
    dispatch({ type: TIMER_START });
  };

  const handleStop = () => {
    dispatch({ type: TIMER_STOP });
  };

  useEffect(() => {
    if (isCounting) {
      timerRef.current = setInterval(() => {
        dispatch({ type: TIMER_UPDATE });
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
