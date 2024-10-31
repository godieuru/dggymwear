import React, { useState } from "react";
import { useFavoritesContext } from "./FavoritesContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import "../styles/favorites.css";

const FavoritesPage = () => {
  const [senderName, setSenderName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const { favorites, removeFromFavorites, clearFavorites } =
    useFavoritesContext();

  const handleSendEmail = () => {
    if (recipientEmail) {
      const wishlistItems = favorites
        .map((product) => `${product.name} - $${product.price}`)
        .join("\n");

      const templateParams = {
        senderName,
        recipientEmail,
        wishlist: wishlistItems,
      };

      emailjs
        .send(
          "service_jpbc53j",
          "template_ssde1xz",
          templateParams,
          "-KXCv_IQmFmYGhZAQ"
        )
        .then(() => {
          Swal.fire({
            title: "Success!",
            text: "Your wishlist has been sent!",
            icon: "success",
            confirmButtonText: "OK",
          });
          setSenderName("");
          setRecipientEmail("");
          clearFavorites();
        })
        .catch(() => {
          Swal.fire({
            title: "Error!",
            text: "There was an error sending your wishlist. Please try again later.",
            icon: "error",
            confirmButtonText: "OK",
          });
        });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please enter a valid recipient email address.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleRemoveFromFavorites = (productId) => {
    removeFromFavorites(productId);
    Swal.fire({
      title: "Removed!",
      text: "The product has been removed from your wishlist.",
      icon: "info",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="favoritesPage">
      <h1 className="favoritesTitle">Your Wishlist</h1>
      <div className="favoritesItems">
        {favorites.length > 0 ? (
          favorites.map((product) => (
            <div key={product.id} className="favoriteItem">
              <Link
                to={`/item/${product.id}`}
                className="favoriteItemDetails"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="favoriteItemImage"
                />
                <div className="favoriteItemContent">
                  <h3 className="favoriteItemTitle">{product.name}</h3>
                  <p className="favoriteItemPrice">${product.price}</p>
                </div>
              </Link>
              <button
                className="removeItemButton"
                onClick={() => handleRemoveFromFavorites(product.id)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>No items in your wishlist.</p>
        )}
      </div>
      <div className="inputContainer">
        {" "}
        {}
        <input
          type="text"
          value={senderName}
          onChange={(e) => setSenderName(e.target.value)}
          placeholder="Your Name"
          className="nameInput"
        />
        <input
          type="email"
          value={recipientEmail}
          onChange={(e) => setRecipientEmail(e.target.value)}
          placeholder="Recipient's email"
          className="emailInput"
        />
        <button onClick={handleSendEmail} className="sendEmailButton">
          Send Wishlist via Email
        </button>
      </div>
    </div>
  );
};

export default FavoritesPage;
