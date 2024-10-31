import React from "react";
import { useCartContext } from "../components/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/cartwidget.css";

const CartWidget = () => {
  const { cart } = useCartContext();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cartWidget">
      {}
      <Link to="/cart" className="navbarIcon">
        <FontAwesomeIcon icon={faCartShopping} />
        {totalItems > 0 && <span className="itemCount">{totalItems}</span>}
      </Link>
    </div>
  );
};

export default CartWidget;
