import React from 'react';
import './Carrinho.css';
import CarrinhoItem from '../CarrinhoItem/CarrinhoItem';
import { useCart } from '../../context/CartContext';


function Carrinho() {
  const { cartItems, isCartOpen } = useCart();
  const totalPrice = cartItems.reduce((total, livro) => total + parseFloat(livro.preco), 0);
  const formattedTotalPrice = totalPrice.toFixed(2);
  return (
    <section className="carrinho2">
      <div className="sair-carrinho">
      </div>
      <h2 className="title2">Carrinho de Compras</h2>
      
      <ul className="CarrinhoList">
        {cartItems.map((livro) => (
          <div className="cart-itens" key={livro.id}>
            <CarrinhoItem
              id={livro.id}
              title={livro.title}
              img={livro.img}
              preco={livro.preco}
            />
          </div>
        ))}
      </ul>
      <p className="cart-resume">TOTAL: R$ {formattedTotalPrice}</p>
    </section>
  );
}

export default Carrinho;
