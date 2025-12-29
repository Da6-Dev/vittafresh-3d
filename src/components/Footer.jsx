import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#052e16] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Coluna 1: Marca */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">VITTA FRESH</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Reinventando bebidas saudáveis com a tradição das ervas e a inovação tecnológica. Do deserto para sua mesa.
          </p>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div>
          <h4 className="text-white font-semibold mb-6">Explorar</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/produtos" className="hover:text-[#dcfce7] transition-colors">Nossos Chás</Link></li>
            <li><Link to="/sobre" className="hover:text-[#dcfce7] transition-colors">Nossa História</Link></li>
            <li><Link to="/terceirizacao" className="hover:text-[#dcfce7] transition-colors">Terceirização</Link></li>
            <li><Link to="/onde-comprar" className="hover:text-[#dcfce7] transition-colors">Encontrar Loja</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Contato */}
        <div>
          <h4 className="text-white font-semibold mb-6">Fale Conosco</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>sac@vittafresh.com.br</li>
            <li>+55 (11) 99999-9999</li>
            <li>Av. das Nações, 1000 - SP</li>
          </ul>
        </div>

        {/* Coluna 4: Social */}
        <div>
          <h4 className="text-white font-semibold mb-6">Siga-nos</h4>
          <div className="flex gap-4">
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#166534] transition-colors">
              <Instagram size={20} className="text-white" />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#166534] transition-colors">
              <Facebook size={20} className="text-white" />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#166534] transition-colors">
              <Twitter size={20} className="text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-16 pt-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Vitta Fresh. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}