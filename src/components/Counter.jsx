import React, { useEffect } from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 2) {
      setCount(count - 1);
    }
  }

  useEffect(() => {
    // console.log("show counter");
    return () => console.log("hide counter");
  }, [count]);

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
