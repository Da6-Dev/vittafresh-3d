// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";


// import About from './pages/About';
// import Products from './pages/Products';

function App() {
  return (
    <Router>
      <div className="app-main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Adicione as rotas para as outras páginas aqui quando criá-las */}
          <Route
            path="/sobre"
            element={<div className="page-placeholder">Página Sobre</div>}
          />
          <Route
            path="/produtos"
            element={<div className="page-placeholder">Página Produtos</div>}
          />
          <Route
            path="/onde-comprar"
            element={
              <div className="page-placeholder">Página Onde Comprar</div>
            }
          />
          <Route
            path="/compro-online"
            element={<div className="page-placeholder">Loja Online</div>}
          />
          <Route
            path="/terceirizacao"
            element={<div className="page-placeholder">Terceirização</div>}
          />
          <Route
            path="/contato"
            element={<div className="page-placeholder">Contato</div>}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
