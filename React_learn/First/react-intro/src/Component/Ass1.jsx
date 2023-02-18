import React from "react";
import "./ass.css";
export const Ass1 = () => {
  const arr = [
    { name: "Apple", style: "squre" },
    { name: "Nokia", style: "cricle" },
  ];
  return (
    <div>
      {arr.map((e) => {
        return <li className={e.style}>{e.name}</li>;
      })}
    </div>
  );
};
