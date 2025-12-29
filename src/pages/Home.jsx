import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stage,
  Float,
  Environment,
  ContactShadows,
} from "@react-three/drei";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Zap, Droplet, Globe, ArrowRight, Star } from "lucide-react";
import { SodaCan } from "../SodaCan"; // Verifique se o caminho está correto!

// --- Variantes de Animação (Configurações Reutilizáveis) ---

// Container que orquestra os filhos (Stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Cada filho aparece 0.2s depois do anterior
      delayChildren: 0.3,
    },
  },
};

// Como cada item aparece (de baixo para cima, suave)
const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, damping: 20 },
  },
};

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-slate-50 text-gray-800 font-sans selection:bg-[#166534] selection:text-white">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 pt-24 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-green-100 via-white to-white">
        {/* Texto Hero com Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="z-10 max-w-2xl text-center lg:text-left mt-10 lg:mt-0"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-green-100 text-[#166534] px-4 py-2 rounded-full font-bold text-sm mb-6 border border-green-200 shadow-sm"
          >
            <Star size={16} fill="currentColor" /> Nova Receita 2.0
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-8xl font-extrabold leading-tight text-gray-900 mb-6 tracking-tight"
          >
            Refresque sua <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#166534] to-emerald-500">
              Natureza.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            A fusão perfeita entre a sabedoria das ervas e a tecnologia de
            infusão. Sem açúcar, sem culpa, apenas{" "}
            <span className="font-bold text-[#166534]">frescor puro.</span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(22, 101, 52, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#166534] text-white px-8 py-4 rounded-full font-bold shadow-xl flex items-center justify-center gap-3 transition-all"
            >
              Comprar Agora <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#f0fdf4" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#166534] border-2 border-[#166534]/20 px-8 py-4 rounded-full font-bold flex items-center justify-center transition-all hover:border-[#166534]"
            >
              Ver Sabores
            </motion.button>
          </motion.div>
        </motion.div>

        {/* 3D Model Interativo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full lg:w-[55%] h-[50vh] lg:h-[85vh] z-0 cursor-grab active:cursor-grabbing"
        >
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, 0, 9], fov: 45 }}
          >
            <Suspense fallback={null}>
              <Stage
                environment="lobby"
                intensity={0.8}
                adjustCamera={false}
                shadows={false}
              >
                <Float
                  speed={3}
                  rotationIntensity={0.5}
                  floatIntensity={0.6}
                  floatingRange={[-0.1, 0.1]}
                >
                  <SodaCan />
                </Float>
              </Stage>
              <ContactShadows
                position={[0, -2.8, 0]}
                opacity={0.4}
                scale={10}
                blur={2.5}
                far={4.5}
              />
              <Environment preset="lobby" blur={0.8} />
            </Suspense>
            <OrbitControls
              enableZoom={false}
              autoRotate={true}
              autoRotateSpeed={3}
            />
          </Canvas>

          {/* Badge flutuante sobre o 3D */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute bottom-20 right-10 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 hidden lg:block"
          >
            <p className="text-xs font-bold text-gray-500 uppercase">
              Sabor em destaque
            </p>
            <p className="text-xl font-bold text-[#166534]">Limão & Menta</p>
          </motion.div>
        </motion.div>
      </section>

      {/* --- MARQUEE INFINITO (Faixa) --- */}
      <div className="bg-[#166534] py-5 overflow-hidden relative shadow-inner z-20 transform -rotate-1 origin-left scale-105 border-y-4 border-[#14532d]">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 mx-6">
              <span className="text-white/90 text-2xl font-black tracking-widest uppercase italic">
                Energia Natural
              </span>
              <Star className="text-[#dcfce7]" size={24} fill="currentColor" />
              <span className="text-[#dcfce7] text-2xl font-black tracking-widest uppercase italic">
                Zero Açúcar
              </span>
              <Star className="text-white/90" size={24} fill="currentColor" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- GRID DE BENEFÍCIOS (Staggered Scroll) --- */}
      <section className="py-32 px-6 lg:px-24 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-[#166534] font-bold tracking-wider uppercase text-sm">
              Nossa Promessa
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
              Por que escolher Vitta?
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <BenefitCard
              icon={<Leaf size={32} />}
              title="100% Natural"
              desc="Ervas selecionadas manualmente. Nada sintético entra na nossa lata."
              delay={0}
            />
            <BenefitCard
              icon={<Zap size={32} />}
              title="Vitamina C"
              desc="Um boost de imunidade em cada gole para encarar o dia."
              delay={0.1}
            />
            <BenefitCard
              icon={<Droplet size={32} />}
              title="Hidratação Real"
              desc="A base de água purificada e infusão lenta para máximo sabor."
              delay={0.2}
            />
            <BenefitCard
              icon={<Globe size={32} />}
              title="Planeta Feliz"
              desc="Embalagens 100% recicláveis e cadeia de produção justa."
              delay={0.3}
            />
          </motion.div>
        </div>
      </section>

      {/* --- LIFESTYLE SECTION (Parallax) --- */}
      <section id="escolher-vitta" class="reasons-section">
        <div class="container">
          <h2>Por que escolher Vitta?</h2>
          <p class="subtitle">
            Descubra o que torna nossos chás únicos e essenciais para o seu dia
            a dia.
          </p>

          <div class="reasons-grid">
            <div class="reason-card">
              <div class="image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1563911302283-d2bc129e7c1f?q=80&w=800&auto=format&fit=crop"
                  alt="Folhas de chá naturais"
                />
              </div>
              <div class="card-content">
                <h3>100% Natural</h3>
                <p>
                  Ingredientes selecionados diretamente da natureza, sem
                  conservantes ou aditivos artificiais.
                </p>
              </div>
            </div>

            <div class="reason-card">
              <div class="image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop"
                  alt="Xícara de chá quente e aconchegante"
                />
              </div>
              <div class="card-content">
                <h3>Sabor Inigualável</h3>
                <p>
                  Blends exclusivos criados por especialistas para proporcionar
                  uma experiência sensorial única.
                </p>
              </div>
            </div>

            <div class="reason-card">
              <div class="image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop"
                  alt="Mulher relaxada bebendo chá"
                />
              </div>
              <div class="card-content">
                <h3>Bem-estar Real</h3>
                <p>
                  Fórmulas pensadas para revitalizar seu corpo e acalmar sua
                  mente a cada gole.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-24 bg-[#052e16] text-center px-6 relative overflow-hidden">
        {/* Círculos decorativos no fundo */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#166534] rounded-full mix-blend-screen filter blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#166534] rounded-full mix-blend-screen filter blur-3xl opacity-20 transform translate-x-1/2 translate-y-1/2"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Pronto para sentir o <br />{" "}
            <span className="text-[#4ade80]">verdadeiro frescor?</span>
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#4ade80] text-[#052e16] px-10 py-5 rounded-full text-xl font-bold shadow-lg shadow-green-900/50 hover:bg-white transition-colors"
          >
            Quero Experimentar Agora
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}

// Componente Card Melhorado
function BenefitCard({ icon, title, desc }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group bg-white p-8 rounded-4xl border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-15px_rgba(22,101,52,0.15)] transition-all duration-300 relative overflow-hidden"
    >
      {/* Efeito de brilho no hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#166534] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center text-[#166534] mb-6 group-hover:scale-110 group-hover:bg-[#166534] group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#166534] transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
