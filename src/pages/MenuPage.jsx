import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/MenuPage.css';
import '../styles/global.css'; // Importar o CSS global para o botão

function MenuPage() {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  // Itens do cardápio
  const menuItems = [
    { id: 1, name: 'Café Expresso', price: 7.00 },
    { id: 2, name: 'Latte', price: 10.00 },
    { id: 3, name: 'Cappuccino', price: 12.00 },
    { id: 4, name: 'Bolo de Chocolate', price: 8.00 },
    { id: 5, name: 'Café Americano', price: 6.00 },
    { id: 6, name: 'Macchiato', price: 9.00 },
    { id: 7, name: 'Mochaccino', price: 11.00 },
    { id: 8, name: 'Cheesecake', price: 10.00 },
    { id: 9, name: 'Brownie', price: 7.00 },
    { id: 10, name: 'Tiramisu', price: 12.00 },
    { id: 11, name: 'Muffin de Blueberry', price: 9.00 },
    { id: 12, name: 'Panquecas', price: 12.00 },
    { id: 13, name: 'Frappuccino', price: 13.00 },
    { id: 14, name: 'Café com Leite', price: 8.00 },
    { id: 15, name: 'Bolo de Limão', price: 9.00 }
  ];

  const handleAddToCart = (item) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(item);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    navigate('/cart');
  };

  return (
    <div className="menu-page">
      <h2>Cardápio</h2>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <h4>{item.name}</h4>
            <span>R$ {item.price.toFixed(2)}</span>
            <button onClick={() => setSelectedItem(item)}>Detalhes</button>
            {selectedItem?.id === item.id && (
              <button className="add-button" onClick={() => handleAddToCart(item)}>Adicionar ao Carrinho</button>
            )}
          </div>
        ))}
      </div>
      <Link to="/cart" className="cart-button">
        🛒 {/* Substitua pelo ícone desejado */}
      </Link>
    </div>
  );
}

export default MenuPage;




