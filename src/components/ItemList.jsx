import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useFavoritesContext } from "../components/FavoritesContext";
import "../styles/itemlist.css";

const ItemList = React.memo(({ products = [] }) => {
  const { addToFavorites, removeFromFavorites, favorites } =
    useFavoritesContext();

  const handleFavoriteClick = (event, product) => {
    event.stopPropagation();
    if (favorites.some((fav) => fav.id === product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <div className="itemList">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="itemCard">
            <Link to={`/item/${product.id}`} className="itemLink">
              <img
                src={product.image}
                alt={product.name}
                className="itemImage"
              />
              <h3 className="itemName">{product.name}</h3>
              <p className="itemPrice">${product.price}</p>
              <button className="addToCartBtn">View Details</button>
            </Link>
            <div
              className="favoriteIconWrapper"
              onClick={(e) => handleFavoriteClick(e, product)}
            >
              <FontAwesomeIcon
                icon={faHeart}
                className={`favoriteIcon ${
                  favorites.some((fav) => fav.id === product.id)
                    ? "favorite"
                    : ""
                }`}
              />
            </div>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
});

export default ItemList;
