import React from 'react';
import '../styles/itemdetails.css';

const ItemDetails = ({ product }) => {
  const shippingDetails = product.stock > 10 ? "3-5 Business Days" : "Envío calculado al finalizar la compra";

  return (
    <div className="item-detail">
      <div className="item-detail-image-container">
        <img src={product.image} alt={product.name} className="item-detail-image" />
      </div>
      <div className="item-detail-info">
        <h1 className="item-detail-title">{product.name}</h1>
        <p className="item-detail-description">{product.description}</p>
        <p className="item-detail-price"><strong>Price:</strong> ${product.price.toFixed(2)}</p>
        <p className="item-detail-stock"><strong>Stock:</strong> {product.stock}</p>
        <p className="item-detail-shipping"><strong>Shipping:</strong> {shippingDetails}</p>
        <button className="add-to-cart-btn">Add to cart</button>
      </div>
    </div>
  );
};

export default ItemDetails;
