import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return product.title.toLowerCase().includes(lowerCaseSearchTerm) || 
           product.description.toLowerCase().includes(lowerCaseSearchTerm);
  });
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="me-12 ms-12">
      <h1 className="text-center text-6xl font-bold mt-12 mb-12">Get your bargain today!</h1>
      <div className="mt-5 ml-5 mr-5">
        <input 
          className="w-full p-2 mb-10 mt-3 border rounded focus:outline-none focus:border-black focus:border-1" 
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filteredProducts.map((product) => ( 
            <Link to={`/product/${product.id}`} key={product.id}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

async function fetchProducts() {
  try {
    const response = await fetch('https://api.noroff.dev/api/v1/online-shop');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export default Home;