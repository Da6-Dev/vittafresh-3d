import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Detecta o scroll para mudar o fundo da navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Classes para o estado normal vs scrollado
  const navClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    scrolled
      ? "bg-white/90 backdrop-blur-md shadow-md py-4"
      : "bg-transparent py-6"
  }`;

  const linkClasses = `font-medium hover:text-[#166534] transition-colors ${
    scrolled ? "text-gray-700" : "text-gray-800"
  }`;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-[#166534] tracking-tight"
        >
          VITTA FRESH
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={linkClasses}>
            Início
          </Link>
          <Link to="/sobre" className={linkClasses}>
            Sobre
          </Link>
          <Link to="/produtos" className={linkClasses}>
            Produtos
          </Link>
          <Link to="/onde-comprar" className={linkClasses}>
            Onde Comprar
          </Link>
          <Link
            to="/contato"
            className="bg-[#166534] text-white px-6 py-2 rounded-full font-bold hover:bg-[#052e16] transition-transform transform hover:scale-105"
          >
            Contato
          </Link>
        </div>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile (Dropdown) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 items-center text-lg">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-[#166534]"
              >
                Início
              </Link>
              <Link
                to="/sobre"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-[#166534]"
              >
                Sobre
              </Link>
              <Link
                to="/produtos"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-[#166534]"
              >
                Produtos
              </Link>
              <Link
                to="/contato"
                onClick={() => setIsOpen(false)}
                className="text-[#166534] font-bold"
              >
                Contato
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
