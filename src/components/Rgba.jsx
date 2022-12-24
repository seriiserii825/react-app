import { useReducer } from "react";

const limitRgba = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);
const step = 50;

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_RED":
      return {
        ...state,
        r: limitRgba(state.r + step),
      };
    case "DECREMENT_RED":
      return {
        ...state,
        r: limitRgba(state.r - step),
      };
    case "INCREMENT_GREEN":
      return {
        ...state,
        g: limitRgba(state.g + step),
      };
    case "DECREMENT_GREEN":
      return {
        ...state,
        g: limitRgba(state.g - step),
      };
    case "INCREMENT_BLUE":
      return {
        ...state,
        b: limitRgba(state.b + step),
      };
    case "DECREMENT_BLUE":
      return {
        ...state,
        b: limitRgba(state.b - step),
      };
    default:
      return state;
  }
};

const Rgba = () => {
  const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 0, b: 150, g: 155 });
  return (
    <div>
      <h1
        style={{
          color: `rgba(${r}, ${g}, ${b})`,
          marginBottom: "4rem",
          textAlign: "center",
        }}
      >
        RGBA color
      </h1>
      <div style={{ margin: "0 auto", maxWidth: "200px", textAlign: "left" }}>
        <div className="mb2">
          <span style={{display: "inline-block", width: "8rem"}}>RED</span>
          <button
            className="btn ml2 mr1"
            onClick={() => dispatch({ type: "DECREMENT_RED" })}
          >
            -
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "INCREMENT_RED" })}
          >
            +
          </button>
        </div>

        <div className="mb2">
          <span style={{display: "inline-block", width: "8rem"}}>GREEN</span>
          <button
            className="btn ml2 mr1"
            onClick={() => dispatch({ type: "DECREMENT_GREEN" })}
          >
            -
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "INCREMENT_GREEN" })}
          >
            +
          </button>
        </div>
        <div className="mb2">
          <span style={{display: "inline-block", width: "8rem"}}>BLUE</span>
          <button
            className="btn ml2 mr1"
            onClick={() => dispatch({ type: "DECREMENT_BLUE" })}
          >
            -
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "INCREMENT_BLUE" })}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rgba;
