import React from "react";
import { useReducer } from "react";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "INCREMENT": {
      return state + payload;
    }
    case "DECREMENT": {
      return state - payload;
    }
    default:
      return state;
  }
};

export const Counter = () => {
  const [counter, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      Counter: {counter}
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT", payload: 5 })}>
          -
        </button>
      </div>
    </div>
  );
};
