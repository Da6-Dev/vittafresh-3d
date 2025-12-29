// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Vamos usar o CSS global por enquanto

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Vitta Fresh
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/onde-comprar">Onde Comprar</Link>
          </li>
          <li>
            <Link to="/compro-online">Compro-Online</Link>
          </li>
          <li>
            <Link to="/terceirizacao">Terceirização</Link>
          </li>
          <li>
            <Link to="/contato" className="nav-btn">
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
