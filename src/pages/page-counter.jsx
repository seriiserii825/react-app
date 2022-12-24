import { useState } from "react";
import Counter from "../components/Counter";
import Timer from "../components/Timer";

const CounterPage = () => {
  const [show_counter, setShowCounter] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  function toggleCounter() {
    setShowCounter(!show_counter);
  }
  function toggleTimer() {
    setShowTimer(!showTimer);
  }
  return (
    <div style={{ textAlign: "center", margin: "3rem" }}>
      <button
        onClick={() => toggleCounter()}
        className="waves-effect waves-light btn"
      >
        Show counter
      </button>
      {show_counter && <Counter />}
      <hr />

      <button
        onClick={() => toggleTimer()}
        className="waves-effect waves-light btn mt4"
      >
        Show timer
      </button>
      {showTimer && <Timer />}
    </div>
  );
};

export default CounterPage;
