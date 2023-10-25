import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import Addcart from '../AddCart/AddCart';
import { useCart } from '../../context/CartContext';

export default function Book(props) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: props.id,
      title: props.title,
      autor: props.autor,
      img: props.img,
      preco: props.preco,
      editora: props.editora,
    });
  };

  return (
    <div>
      <li className="book">
        <div className="posicao-botao">
          <Addcart onClick={handleAddToCart} />
        </div>
        <img src={props.img} alt="book__image" className="capas" /> 
        <h2 className="titulo">{props.title}</h2>
        <p>{props.autor}</p>
        <p className="editora">{props.editora}</p>
        <p className="preco">R${props.preco}</p>
      </li>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  preco: PropTypes.string.isRequired,
  editora: PropTypes.string.isRequired,
};

