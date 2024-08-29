import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import PlaytimePage from './pages/PlaytimePage';
import './app.css'


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Café Gato</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/menu">Menu</a>
            <a href="/playtime">Gatos</a>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/playtime" element={<PlaytimePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 Café Gato. Todos os direitos reservados.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
