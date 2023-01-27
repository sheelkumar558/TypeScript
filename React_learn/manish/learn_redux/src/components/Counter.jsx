import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCount, subCount } from "../Redux/action";
export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  return (
    <div>
      <h1>Count: {count}</h1>
      <div>
        <button onClick={() => dispatch(addCount(1))}>+</button>
        <button onClick={() => dispatch(subCount(1))}>-</button>
      </div>
    </div>
  );
};
