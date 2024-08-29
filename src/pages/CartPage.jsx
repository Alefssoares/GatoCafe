import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import '../styles/CartPage.css';

function CartPage() {
  const [items, setItems] = useState([]);
  const [hours, setHours] = useState(1);
  const [tableNumber, setTableNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const groupedItems = cartItems.reduce((acc, item) => {
      const existingItem = acc.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        acc.push({ ...item, quantity: 1 });
      }
      return acc;
    }, []);
    setItems(groupedItems);
  }, []);

  const removeItemFromCart = (itemId) => {
    const newItems = items.filter(item => item.id !== itemId);
    setItems(newItems);
    localStorage.setItem('cart', JSON.stringify(newItems.flatMap(item => Array(item.quantity).fill(item))));
  };

  const calculateTotal = () => {
    const totalItemCost = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalHourCost = hours === 1 ? 20 : 20 + (hours - 1) * 15;
    return totalItemCost + totalHourCost;
  };

  const handleTableNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setTableNumber(value);
      setError('');
    } else {
      setError('Por favor, insira apenas números.');
    }
  };

  const generateInvoicePDF = () => {
    const doc = new jsPDF();
  
    
    doc.setFontSize(18);
    doc.text('Nota Fiscal', 105, 10, null, null, 'center');
    
    
    doc.setFontSize(12);
    doc.text(`Número da Mesa: ${tableNumber}`, 20, 30);
    doc.text(`Quantidade de Horas: ${hours}`, 20, 40);
  
    
    doc.setFontSize(14);
    doc.text('Itens:', 20, 60);
    doc.setFontSize(12);
    
    items.forEach((item, index) => {
      const yPosition = 70 + (index * 10);
      doc.text(`${index + 1}. ${item.name} - Quantidade: ${item.quantity} - R$ ${(item.price * item.quantity).toFixed(2)}`, 20, yPosition);
    });
  
 
    const totalCost = calculateTotal().toFixed(2);
    doc.setFontSize(14);
    doc.text(`Total: R$ ${totalCost}`, 20, 80 + (items.length * 10));
  
   
    doc.save(`Nota_Fiscal_Mesa_${tableNumber}.pdf`);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tableNumber) {
      setError('Número da mesa é obrigatório.');
      return;
    }
    if (error) {
      return;
    }
  
    generateInvoicePDF(); // Gera a nota fiscal
    alert(`Compra finalizada! Número da mesa: ${tableNumber}, Horas: ${hours}`);
  
    // Limpar o carrinho e redirecionar para a página inicial
    localStorage.removeItem('cart');
    setItems([]);
    navigate('/'); // Navega para a página inicial
  };
  

  return (
    <div className="cart-page">
      <h2>Carrinho de Compras</h2>
      <div className="cart-items">
        <h3>Itens no Carrinho</h3>
        {items.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <div className="item-info">
                  <span>{item.name}</span>
                  <span className="quantity">Quantidade: {item.quantity}</span>
                  <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <button onClick={() => removeItemFromCart(item.id)}>Remover</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="checkout-form">
        <div>
          <label htmlFor="hours">Quantidade de Horas:</label>
          <input
            type="number"
            id="hours"
            value={hours}
            onChange={(e) => setHours(Math.min(Number(e.target.value), 8))}
            min="1"
            max="8"
          />
        </div>
        <div>
          <label htmlFor="tableNumber">Número da Mesa:</label>
          <input
            type="text"
            id="tableNumber"
            value={tableNumber}
            onChange={handleTableNumberChange}
            placeholder="Digite o número da mesa"
          />
          {error && <p className="error-message">{error}</p>}
        </div>
        <button type="submit">Finalizar Compra</button>
      </form>

      <div className="total-section">
        <h3>Total das Compras</h3>
        <p>Itens: R$ {items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
        <p>Custo de Horas: R$ {hours === 1 ? 20 : (20 + (hours - 1) * 15).toFixed(2)}</p>
        <p><strong>Total: R$ {calculateTotal().toFixed(2)}</strong></p>
      </div>

      <button className="back-to-menu" onClick={() => navigate('/menu')}>
        Voltar ao Menu
      </button>
    </div>
  );
}

export default CartPage;
