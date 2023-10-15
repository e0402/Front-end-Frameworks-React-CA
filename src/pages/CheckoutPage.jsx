import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {

  const navigate = useNavigate();

  const handleCheckout = () => {
        removeAllFromCart();
        navigate('/checkout-success');
    }

  const { cartItems, removeFromCart, removeAllFromCart, updateItemQuantity } = useCart();

  const totalPrice = cartItems.reduce((total, item) => total + (item.discountedPrice * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-3xl font-bold mb-6">Your cart is empty</p>
        <Link to="/" className="text-blue-500 underline">Go back to Home</Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center text-5xl font-bold mt-12 mb-12">Order summary</h1>
      <div className="flex flex-col lg:flex-row lg:space-x-12 max-w-6xl mx-auto p-6">
        
        <div className="lg:w-3/5">
          <h2 className="text-2xl font-semibold mb-6">Items in Cart</h2>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center border p-4 rounded-md">
                <div>
                  <span className="font-medium">{item.title} - ${item.discountedPrice.toFixed(2)}</span>
                  <div className="flex mt-2">
                    <button onClick={() => updateItemQuantity(item.id, Math.max(1, item.quantity - 1))} className="px-2 font-bold">-</button>
                    <span className="px-3 py-0 mx-0 border border-gray-400">{item.quantity}</span>
                    <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}className="px-2 font-bold">+</button>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    if(item.quantity === 1) {
                      removeFromCart(item);
                    } else {
                      updateItemQuantity(item.id, item.quantity - 1);
                    }
                  }}
                  className="text-black text-xl font-bold hover:text-gray-700 transition duration-150 px-2"
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="lg:w-2/5 mt-12 lg:mt-0">
          <h2 className="text-2xl font-semibold mb-6">Cart totals</h2>
          <div className="flex justify-between items-center font-semibold text-lg mb-6">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button onClick={handleCheckout} className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-600 transition duration-150 mb-4"
          >
            Proceed to Checkout
          </button>
          <button 
            onClick={removeAllFromCart}
            className="w-full text-center text-black hover:text-gray-700 transition duration-150"
          >
            Remove All Items
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
