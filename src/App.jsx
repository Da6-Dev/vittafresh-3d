import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Importação dinâmica (Lazy Loading) para otimizar performance.
// O navegador só baixa o código da página quando o usuário acessa a rota.
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const WhereToBuy = lazy(() => import("./pages/WhereToBuy"));
const ShopOnline = lazy(() => import("./pages/ShopOnline"));
const Outsourcing = lazy(() => import("./pages/Outsourcing"));
const Contact = lazy(() => import("./pages/Contact"));

// Componente simples de Loading para exibir durante a navegação
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-12 h-12 border-4 border-gray-200 border-t-[#166534] rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      {/* 'min-h-screen' e 'flex-col' garantem que o footer fique no chão */}
      <div className="app-main flex flex-col min-h-screen">
        <Navbar />

        {/* 'flex-grow' empurra o footer para baixo ocupando o espaço vazio */}
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/produtos" element={<Products />} />
              <Route path="/onde-comprar" element={<WhereToBuy />} />
              <Route path="/compro-online" element={<ShopOnline />} />
              <Route path="/terceirizacao" element={<Outsourcing />} />
              <Route path="/contato" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
