import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../assets/products.json";
import ItemList from "../components/ItemList";

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = () => {
      setLoading(true);
      setTimeout(() => {
        let filteredProducts = [];

        const normalizedCategoryId = categoryId?.toLowerCase();

        if (productsData?.store?.categories) {
          if (
            normalizedCategoryId &&
            productsData.store.categories[normalizedCategoryId]
          ) {
            const categoryProducts =
              productsData.store.categories[normalizedCategoryId]?.products ||
              [];
            filteredProducts = [...categoryProducts];
          } else {
            Object.keys(productsData.store.categories).forEach((category) => {
              const categoryProducts =
                productsData.store.categories[category]?.products || [];
              filteredProducts.push(...categoryProducts);
            });
          }
        }

        setProducts(filteredProducts);
        setLoading(false);
      }, 2000);
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className="itemListContainer">
      <h1 className="greetingText">{greeting}</h1>
      {loading ? <p>Loading products...</p> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
