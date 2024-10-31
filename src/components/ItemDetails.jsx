import React, { useState, useEffect } from "react";
import "../styles/itemdetails.css";
import ItemCount from "../components/ItemCount";
import { Link, useLocation } from "react-router-dom";
import { useCartContext } from "../components/CartContext";

const ItemDetails = ({ product }) => {
  const { addToCart } = useCartContext();
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const location = useLocation();

  const handleAdd = (count) => {
    addToCart({ ...product, quantity: count });
    setIsAddedToCart(true);
  };

  // Scroll to top when the component mounts or when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="itemDetail">
      <div className="itemDetailContent">
        {product?.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="itemDetailImage"
          />
        ) : (
          <p>No image available</p>
        )}
        <div className="itemDetailText">
          <h2 className="itemDetailTitle">{product.name}</h2>
          <p className="itemDetailPrice">Price: ${product.price}</p>
          <p className="itemDetailDescription">{product.description}</p>
          <p className="itemDetailStock">Stock: {product.stock} available</p>

          <div className="itemDetailShipping">
            <h3>Shipping Info</h3>
            <p>Shipping within 3 to 5 business days.</p>
          </div>

          {!isAddedToCart ? (
            <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
          ) : (
            <div className="buttonContainer">
              <Link to="/cart" className="finishPurchaseBtn">
                Finish Purchase
              </Link>
              <Link to="/" className="continueShoppingBtn">
                Continue Buying
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
