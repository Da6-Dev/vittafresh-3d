// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Vitta Fresh</h3>
          <p>Da inspiração de Dubai para a sua mesa.</p>
        </div>
        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <a href="/produtos">Nossos Chás</a>
          <a href="/sobre">Nossa História</a>
          <a href="/contato">Fale Conosco</a>
        </div>
        <div className="footer-section">
          <h4>Contato</h4>
          <p>sac@vittafresh.com.br</p>
          <p>+55 (11) 99999-9999</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Vitta Fresh. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
