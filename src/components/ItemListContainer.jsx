import React, { useEffect, useState, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import "../styles/itemlist.css";
import ItemList from "../components/ItemList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = ({ username }) => {
  const { categoryId } = useParams();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const itemListRef = useRef(null);

  const categoryMapping = {
    womens: "Women's",
    mens: "Men's",
    accessories: "Accessories",
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const db = getFirestore();
      const itemsCollection = collection(db, "items");
      const itemsQuery = categoryId
        ? query(
            itemsCollection,
            where("category", "==", categoryMapping[categoryId.toLowerCase()])
          )
        : itemsCollection;

      try {
        const querySnapshot = await getDocs(itemsQuery);
        const fetchedProducts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(fetchedProducts);
      } catch {
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  const scrollToItems = () => {
    if (itemListRef.current) {
      itemListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="itemListContainer">
      {location.pathname === "/" && (
        <>
          <h1 className="greetingText">
            {username ? `Welcome, ${username}!` : "Welcome!"}
          </h1>
          <div className="banner" onClick={scrollToItems} />
        </>
      )}
      {loading ? (
        <div className="loadingContainer">
          <FontAwesomeIcon icon={faSpinner} spin />
        </div>
      ) : (
        <div ref={itemListRef} className="productsContainer">
          {products.length > 0 ? (
            <ItemList products={products} />
          ) : (
            <p>No products available in this category.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
