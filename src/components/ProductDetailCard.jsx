import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';

const ProductDetailCard = ({ productinfo }) => {
  const { addToCart, removeFromCart, cartItems } = useCart();

  const itemInCart = cartItems.find(item => item.id === productinfo.id);
  const [quantity, setQuantity] = useState(itemInCart ? itemInCart.quantity : 1);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(productinfo);
    }
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    } else {
      removeFromCart(productinfo);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 mt-10">
      <div className="w-full max-w-2xl md:max-w-4xl lg:max-w-6xl rounded overflow-hidden shadow-lg p-4 bg-white">
        <div className="md:flex">
          <div className="md:w-1/2 lg:w-3/5">
            <img src={productinfo.imageUrl} alt={productinfo.title} className="w-full object-cover h-full" />
          </div>
          <div className="md:w-1/2 lg:w-2/5 p-4">
            <div className="font-bold text-xl mb-5">{productinfo.title}</div>
            <p className="text-gray-700 text-base mb-5">{productinfo.description}</p>
            <div className="mb-4">
              <span className="inline-block bg-yellow-300 text-yellow-800 rounded-full px-2 py-0.5 text-sm font-semibold">
                ★ {productinfo.rating}
              </span>
            </div>
            <div className="mb-4 flex flex-wrap gap-2">
              {productinfo.tags.map((tag, index) => (
                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-5">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-2 mb-5">
              <span className="text-base text-gray-500 line-through">${productinfo.price.toFixed(2)}</span>
              <span className="text-base text-green-500 font-semibold">${productinfo.discountedPrice.toFixed(2)}</span>
            </div>
            <div className="mb-5 flex items-center space-x-2">
              <button onClick={decreaseQuantity} className="px-1 font-bold">-</button>
              <span className="px-3 border border-gray-400">{quantity}</span>
              <button onClick={increaseQuantity} className="px-1 font-bold">+</button>
            </div>
            <button 
              onClick={handleAddToCart}
              className="w-full bg-gray-900 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 mt-5"
            >
              Add to cart
            </button>
            <div className="mb-4">
              <div className="font-semibold mt-5 mb-5">Reviews:</div>
              {productinfo.reviews && productinfo.reviews.length > 0 ? (
                  productinfo.reviews.map((review) => (
                    <div key={review.id} className="border-t pt-2">
                      <div className="text-sm font-semibold">{review.username} - ★ {review.rating}</div>
                      <p className="text-sm text-gray-700">{review.description}</p>
                    </div>
                  ))
              ) : (
                  <p className="text-gray-500">No reviews yet. Be the first!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
