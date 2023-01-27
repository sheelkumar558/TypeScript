import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCount, subCount } from "../redux/action";
export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Count : {count}</h1>
      <br />
      <button onClick={() => dispatch(addCount(1))}>+</button>
      <button onClick={() => dispatch(subCount(-1))}>-</button>
    </div>
  );
};
