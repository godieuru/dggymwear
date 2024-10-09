import React from "react";
import cart from "../assets/cart.svg";

export const CartWidget = () => {
  return (
    <>
      <img
        src={cart}
        alt="cart"
        style={{ width: 30, padding: "15px 0 15px 15px" }}
      />
      <span
        style={{
          width: 30,
          borderRadius: "50%",
          backgroundColor: "#000",
          color: "#fff",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        5
      </span>
    </>
  );
};
