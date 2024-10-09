import React from "react";
import { Link } from "react-router-dom";
import "../styles/itemlist.css";

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map((product) => (
        <div key={product.id} className="item-card">
          {}
          <Link
            to={`/item/${product.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="item-image"
            />
            <h3 className="item-name">{product.name}</h3>
            <p className="item-price">${product.price}</p>
            <button className="add-to-cart-btn">View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
