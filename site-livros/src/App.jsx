import React from 'react';
import './App.css';
import { useState } from 'react';
import Header from './componentes/Header/Header';
import BookList from './componentes/BookList/BookList';
import Carrinho from './componentes/Carrinho/Carrinho';
import CartProvider from './context/CartContext';
import { TiShoppingCart } from 'react-icons/ti';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpen = () => {
    setIsCartOpen(true);
  };

  const handleClose = () => {
    setIsCartOpen(false);
  };
  
  return (
    <CartProvider>
      <button type="button" className="cart__button" onClick={handleOpen}>
        <TiShoppingCart size={40} />
      </button>
      <Header />
      <BookList />
      {isCartOpen && <Carrinho onClick={handleClose} />}
    </CartProvider>
  );
}

export default App;

