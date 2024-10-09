import React from "react";
import { Link } from "react-router-dom";
import "../styles/itemlist.css";

const ItemList = ({ products }) => {
  return (
    <div className="itemList">
      {products.map((product) => (
        <div key={product.id} className="itemCard">
          {}
          <Link
            to={`/item/${product.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="itemImage"
            />
            <h3 className="itemName">{product.name}</h3>
            <p className="itemPrice">${product.price}</p>
            <button className="addToCartBtn">View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
