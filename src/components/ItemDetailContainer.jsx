import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../assets/products.json";
import ItemDetails from "../components/ItemDetails";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = () => {
      setLoading(true);
      let foundProduct = null;
      Object.keys(productsData.store.categories).forEach((category) => {
        const categoryProducts =
          productsData.store.categories[category]?.products || [];
        const productMatch = categoryProducts.find(
          (p) => p.id === parseInt(itemId)
        );
        if (productMatch) foundProduct = productMatch;
      });

      setProduct(foundProduct);
      setLoading(false);
    };

    fetchProduct();
  }, [itemId]);

  return (
    <div>
      {loading ? (
        <p>Loading product details...</p>
      ) : product ? (
        <ItemDetails product={product} />
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
