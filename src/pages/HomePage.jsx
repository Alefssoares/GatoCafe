import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import '../styles/global.css'; // Importar o CSS global para o botão

// Imagens fictícias para os produtos
const coffeeImage = 'https://img.freepik.com/fotos-gratis/chocolate-quente-em-copo-branco-isolado-em-fundo-branco_123827-26892.jpg';
const latteImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKsUWzPrqsC8kzTl7syQAuw0UhtvIfIxZi_Q&s';
const cappuccinoImage = 'https://img.freepik.com/vetores-gratis/ilustracao-de-icone-vetorial-realista-3d-taca-de-cafe-branca-bebida-de-cappuccino-isolada-em-fundo-branco_134830-2254.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724716800&semt=ais_hybrid';
const cakeImage = 'https://png.pngtree.com/png-clipart/20230429/original/pngtree-cake-chocolate-cut-png-image_9120780.png';

function HomePage() {
  const products = [
    { name: 'Café Expresso', description: 'Intenso e cheio de sabor.', price: 'R$ 7,00', image: coffeeImage },
    { name: 'Latte', description: 'Leite vaporizado com um toque de café.', price: 'R$ 10,00', image: latteImage },
    { name: 'Cappuccino', description: 'Café expresso com espuma de leite.', price: 'R$ 12,00', image: cappuccinoImage },
    { name: 'Bolo de Chocolate', description: 'Deliciosa fatia de bolo de chocolate.', price: 'R$ 8,00', image: cakeImage }
  ];

  return (
    <div className="home-page">
      <h2>Faça seu pedido por aqui, entregaremos na sua mesa!!</h2>
      <p>Desfrute do melhor café e deliciosos produtos em um ambiente acolhedor.</p>
      <div className="products">
        <h3>Produtos em Destaque</h3>
        <div className="product-list">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <span>{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link to="/cart" className="cart-button">
        🛒 {/* Substitua pelo ícone desejado */}
      </Link>
    </div>
  );
}

export default HomePage;
