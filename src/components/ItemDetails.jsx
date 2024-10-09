import React from 'react';
import '../styles/itemdetails.css';

const ItemDetails = ({ product }) => {
  const shippingDetails = product.stock > 10 ? "3-5 Business Days" : "Envío calculado al finalizar la compra";

  return (
    <div className="itemDetail">
      <div className="itemDetailImageContainer">
        <img src={product.image} alt={product.name} className="itemDetailImage" />
      </div>
      <div className="itemDetailInfo">
        <h1 className="itemDetailTitle">{product.name}</h1>
        <p className="itemDetailDescription">{product.description}</p>
        <p className="itemDetailPrice"><strong>Price:</strong> ${product.price.toFixed(2)}</p>
        <p className="itemDetailStock"><strong>Stock:</strong> {product.stock}</p>
        <p className="itemDetailShipping"><strong>Shipping:</strong> {shippingDetails}</p>
        <button className="addToCartBtn">Add to cart</button>
      </div>
    </div>
  );
};

export default ItemDetails;
