/* eslint-disable */
import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const newItem = { ...item, id: uuidv4() };
    setCartItems([...cartItems, newItem]);
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };  

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useCart() {
  return useContext(CartContext);
}


