import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailCard from "../components/ProductDetailCard";

function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const response = await fetch(`https://api.noroff.dev/api/v1/online-shop/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false);
      }
    }

    fetchProductDetails();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
<div>
  {product && <ProductDetailCard productinfo={product} />}
</div>
  );
}

export default ProductPage;
