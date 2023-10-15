import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const findItemIndex = (id) => cartItems.findIndex(item => item.id === id);

  const addToCart = (itemToAdd) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === itemToAdd.id);
  
      if (existingItem) {
        return prevItems.map(item =>
          item.id === itemToAdd.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...itemToAdd, quantity: 1 }];
      }
    });
  };
  

  const updateItemQuantity = (id, quantity) => {
    const itemIndex = findItemIndex(id);
    if (itemIndex !== -1) {
      const newCart = [...cartItems];
      if (quantity <= 0) {
        removeFromCart(newCart[itemIndex]);
      } else {
        newCart[itemIndex].quantity = quantity;
        setCartItems(newCart);
      }
    }
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemToRemove.id));
  };

  const removeAllFromCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    removeAllFromCart,
    updateItemQuantity
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
