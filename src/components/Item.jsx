import React from "react";
import "../styles/productdetail.css";

const ProductDetail = ({ product, onClose }) => {
  return (
    <div className="productDetail">
      <button className="closeButton" onClick={onClose}>
        X
      </button>
      <h2>{product.name}</h2>
      <p>
        <strong>Price:</strong> {product.price}
      </p>
      <p>
        <strong>Materials:</strong> {product.materials}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
      <p>
        <strong>Shipping:</strong> {product.shippingDetails}
      </p>
      <button className="addToCartButton">Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
