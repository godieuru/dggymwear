import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetails";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const productDetails = doc(db, "items", id);

      try {
        const docSnap = await getDoc(productDetails);
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Loading product details...</p>
      ) : product ? (
        <ItemDetail product={product} />
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
