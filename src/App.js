import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Cart from './components/Cart'; // 👈 novo componente
import { CartProvider, useCart } from './context/CartContext';
import './App.css';

function AppContent() {
  const [showCart, setShowCart] = useState(false);
  const { cartItems } = useCart();

  return <div className="App">
    <Header />
    <button className="buttons" onClick={() => setShowCart(!showCart)}>
      {showCart ? 'Fechar carrinho' : `Visualizar carrinho ${cartItems.length}`}
    </button>

    {showCart && <Cart />}
    <ProductList />
    <Footer />
  </div>
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
