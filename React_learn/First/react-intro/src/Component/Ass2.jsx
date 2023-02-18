import React from "react";
import "./ass.css";
export const Ass2 = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {arr.map((e) => {
        return <li className={e % 2 === 0 ? "squre" : "cricle"}>{e}</li>;
      })}
    </div>
  );
};
