import React, { useEffect } from "react";

const reducerVars = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerVars.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case reducerVars.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

function Counter() {
  const [{ count }, dispatch] = React.useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: reducerVars.INCREMENT });
  }

  function decrement() {
    if (count > 2) {
      dispatch({ type: reducerVars.DECREMENT });
    }
  }

  return (
    <div className={"counter"}>
      <h1>Counter</h1>
      <button onClick={() => decrement()}>-</button>
      <span>{count}</span>
      <button onClick={() => increment()}>+</button>
    </div>
  );
}

export default Counter;
