import React from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace(',', '.')), 0).toFixed(2);

  return (
    <div className="cart">
      <h2>🛍️ Carrinho de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio 😢</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.img} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                <button onClick={() => removeFromCart(index)}>Remover</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: R${total}</h3>
    </div>
  );
};

export default Cart;
