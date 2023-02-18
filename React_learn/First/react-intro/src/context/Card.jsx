import React from "react";
import { useContext } from "react";
import { CartContext } from "../contextApi/CartContext";

export const Card = () => {
  const { handleChange } = useContext(CartContext);
  return (
    <div
      style={{
        width: "200px",
        height: "300px",
        padding: "10px",
        backgroundColor: "teal",
      }}
    >
      <button onClick={() => handleChange(1)}>Add To Card</button>
    </div>
  );
};
