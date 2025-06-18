import React from 'react';

const MenuButtons = () => {
  

  console.log("Itens no carrinho:", cartItems); // 🛠️ Aqui!

  return (
    <div className="container-menu">
      <button className="buttons">
        Visualizar carrinho 🛍️ ({cartItems.length})
      </button>
      <button className="buttons">Outro botão</button>
    </div>
  );
};

export default MenuButtons;
