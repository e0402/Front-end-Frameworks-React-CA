import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out bg-white cursor-pointer">
      <img src={product.imageUrl} alt={product.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 truncate">{product.title}</h2>
        <p className="text-gray-600 line-clamp-3">{product.description}</p>
        <div className="mt-2">
          {product.discountedPrice ? (
            <div className="flex items-center space-x-2">
              <span className="text-base text-gray-500 line-through">${product.price}</span>
              <span className="text-base text-green-500 font-semibold">${product.discountedPrice}</span>
            </div>
          ) : (
            <span className="text-base text-blue-600 font-semibold">${product.price}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
