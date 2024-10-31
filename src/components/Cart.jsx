import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContext";
import "../styles/cart.css";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";

const CartPage = () => {
  const { cart, totalAmount, clearCart, removeFromCart, setCart } =
    useCartContext();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    phone: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, [setCart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handlePayment = async () => {
    if (paymentDetails.email !== paymentDetails.confirmEmail) {
      alert("Email confirmation does not match!");
      return;
    }

    const orderDate = new Date().toLocaleString();
    const order = {
      buyer: {
        name: paymentDetails.name,
        phone: paymentDetails.phone,
        email: paymentDetails.email,
      },
      items: cart.map((item) => ({
        id: item.id,
        title: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      date: orderDate,
      total: totalAmount,
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderDetails({
        orderId: docRef.id,
        items: order.items,
        total: totalAmount,
        orderDate: orderDate,
      });
      clearCart();
      setShowPaymentModal(false);
      setShowOrderModal(true);
    } catch (error) {}
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value,
    });
  };

  const isFormComplete = () => {
    return (
      paymentDetails.name &&
      paymentDetails.email &&
      paymentDetails.confirmEmail &&
      paymentDetails.phone &&
      paymentDetails.cardNumber &&
      paymentDetails.expirationDate &&
      paymentDetails.cvv
    );
  };

  const handleRemoveFromCart = (itemId, itemName) => {
    removeFromCart(itemId);
    Swal.fire({
      icon: "success",
      title: "Product Removed",
      text: `${itemName} has been removed from your cart.`,
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="cartPage">
      <h2 className="cartTitle">Your Cart</h2>
      {cart.length === 0 ? (
        <p>The cart is empty.</p>
      ) : (
        <>
          <div className="cartItems">
            {cart.map((item) => (
              <div key={item.id} className="cartItem">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cartItemImage"
                />
                <div className="cartItemDetails">
                  <h3 className="cartItemTitle">{item.name}</h3>
                  <p className="cartItemPrice">Price: ${item.price}</p>
                  <p className="cartItemQuantity">Quantity: {item.quantity}</p>
                </div>
                <button
                  className="removeItemButton"
                  onClick={() => handleRemoveFromCart(item.id, item.name)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cartTotal">
            <h3>Total: ${totalAmount.toFixed(2)}</h3>
            <button
              className="payButton"
              onClick={() => setShowPaymentModal(true)}
            >
              Purchase
            </button>
            <button className="clearCartButton" onClick={() => clearCart()}>
              Empty Cart
            </button>
          </div>
        </>
      )}
      <Link to="/" className="continueShoppingLink">
        Continue Shopping
      </Link>

      {showPaymentModal && (
        <div className="modal">
          <div className="modalContent">
            <h3>Payment Details</h3>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={paymentDetails.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={paymentDetails.email}
              onChange={handleChange}
            />
            <input
              type="email"
              name="confirmEmail"
              placeholder="Confirm Email"
              value={paymentDetails.confirmEmail}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={paymentDetails.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={paymentDetails.cardNumber}
              onChange={handleChange}
            />
            <input
              type="text"
              name="expirationDate"
              placeholder="Expiration Date (MM/YY)"
              value={paymentDetails.expirationDate}
              onChange={handleChange}
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={paymentDetails.cvv}
              onChange={handleChange}
            />
            <button
              onClick={handlePayment}
              disabled={!isFormComplete()}
              style={{
                backgroundColor: isFormComplete() ? "#4CAF50" : "#ccc",
                cursor: isFormComplete() ? "pointer" : "not-allowed",
              }}
            >
              Confirm Payment
            </button>
            <button
              type="button"
              className="closeButton"
              onClick={() => setShowPaymentModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {showOrderModal && (
        <div className="modal">
          <div className="modalContent">
            <h3>Order Confirmation</h3>
            {orderDetails ? (
              <>
                <p>Your order number is: {orderDetails.orderId}</p>
                <p>Order Date and Time: {orderDetails.orderDate}</p>
                <p>
                  Contact this number to coordinate delivery: (123) 456-7890
                </p>
                <p>Items in your order:</p>
                <ul>
                  {orderDetails.items.map((item) => (
                    <li key={item.id}>
                      {item.title} - ${item.price} (Quantity: {item.quantity})
                    </li>
                  ))}
                </ul>
                <p>Total Amount: ${orderDetails.total.toFixed(2)}</p>
              </>
            ) : (
              <p>Loading...</p>
            )}
            <button
              type="button"
              className="closeButton2"
              onClick={() => setShowOrderModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
