import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  
  const handleAddToCart = () => {
    if(onAddToCart) onAddToCart(product);
  };

  return (
    <div className="border rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out bg-white cursor-pointer h-full mt-5">
      <img src={product.imageUrl} alt={product.title} className="w-full h-40 object-cover" />
      <div className="p-4 flex flex-col h-56">
        <h2 className="text-lg font-semibold mb-2 truncate flex-shrink-0">{product.title}</h2>
        <p className="text-gray-600 line-clamp-3 flex-grow">{product.description}</p>
        <div className="mt-2 flex-shrink-0">
          {product.discountedPrice ? (
            <div className="flex items-center space-x-2">
              <span className="text-base text-gray-500 line-through">${product.price}</span>
              <span className="text-base text-green-500 font-semibold">${product.discountedPrice}</span>
            </div>
          ) : (
            <span className="text-base text-blue-600 font-semibold">${product.price}</span>
          )}
        </div>
        <button 
          onClick={handleAddToCart} 
          className="mt-4 bg-gray-900 text-white py-1 px-4 rounded-md hover:bg-gray-800 transition-colors duration-300 ease-in-out flex-shrink-0">
          View product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
