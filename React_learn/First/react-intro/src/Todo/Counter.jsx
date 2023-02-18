import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(100);
  useEffect(() => {
    setInterval(() => {
      setCounter((preval) => {
        if (preval <= 0) {
          return 0;
        }
        return preval - 1;
      });
    }, 100);
  }, []);
  return <div>Counter:{counter}</div>;
};
