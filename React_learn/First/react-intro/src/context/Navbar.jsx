import React from "react";
import { useContext } from "react";
import { CartContext } from "../contextApi/CartContext";

export const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "end",
        padding: "15px",
        border: "1px solid red",
        fontSize: "25px",
      }}
    >
      Cart : {cart}
    </nav>
  );
};
