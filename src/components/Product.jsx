import React from 'react';
import { useCart } from '../context/CartContext';

const Product = ({ img, title, desc, price }) => {
  const { addToCart } = useCart();

  return (
    <div className="produto">
      <button className="botao-produto" onClick={() => addToCart({ img, title, desc, price })}>
        Adicionar ao carrinho!
      </button>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
      <span className="preco">R${price}</span>
    </div>
  );
};

export default Product;
