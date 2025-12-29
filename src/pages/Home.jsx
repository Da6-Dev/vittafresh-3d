import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stage,
  Float,
  Environment,
  ContactShadows,
} from "@react-three/drei";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Leaf, Zap, Droplet, Globe, ArrowRight, Star, CheckCircle } from "lucide-react";
import { SodaCan } from "../SodaCan";

// --- Variantes de Animação ---

// Container para orquestrar animações em sequência (Stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Animação padrão de entrada (de baixo para cima)
const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 60, damping: 20 },
  },
};

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-gray-50 text-gray-800 font-sans selection:bg-[#166534] selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 pt-24 pb-12 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-green-100 via-white to-white overflow-hidden">
        
        {/* Background Decorativo */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-green-50/50 to-transparent pointer-events-none" />

        {/* Texto Hero */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="z-10 max-w-2xl text-center lg:text-left mt-10 lg:mt-0 lg:pr-12"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-green-100 text-[#166534] px-4 py-2 rounded-full font-bold text-sm mb-6 border border-green-200 shadow-sm hover:shadow-md transition-shadow cursor-default"
          >
            <Star size={16} fill="currentColor" /> Nova Receita 2.0
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-7xl xl:text-8xl font-extrabold leading-tight text-gray-900 mb-6 tracking-tight"
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
            A fusão perfeita entre a sabedoria das ervas e a inovação. 
            Sem açúcar, sem culpa, apenas <span className="font-bold text-[#166534]">frescor puro</span> para o seu dia.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(22, 101, 52, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#166534] text-white px-8 py-4 rounded-full font-bold shadow-xl flex items-center justify-center gap-3 transition-all cursor-pointer"
            >
              Comprar Agora <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#f0fdf4", borderColor: "#166534" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#166534] border-2 border-[#166534]/20 px-8 py-4 rounded-full font-bold flex items-center justify-center transition-all cursor-pointer"
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
          className="relative w-full lg:w-[50%] h-[50vh] lg:h-[80vh] z-0 flex items-center justify-center"
        >
          <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 45 }}>
            <Suspense fallback={null}>
              <Stage environment="lobby" intensity={0.8} adjustCamera={false} shadows={false}>
                <Float speed={3} rotationIntensity={0.5} floatIntensity={0.6} floatingRange={[-0.1, 0.1]}>
                  <SodaCan />
                </Float>
              </Stage>
              <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4.5} />
              <Environment preset="lobby" blur={0.8} />
            </Suspense>
            <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={3} />
          </Canvas>

          {/* Badge Flutuante */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{ y: { repeat: Infinity, duration: 4, ease: "easeInOut" }, opacity: { duration: 1, delay: 1 } }}
            className="absolute bottom-10 right-4 lg:right-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-[#166534]">
                <Leaf size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Sabor Destaque</p>
                <p className="text-lg font-bold text-[#166534]">Limão & Menta</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- MARQUEE INFINITO --- */}
      <div className="bg-[#166534] py-6 overflow-hidden relative shadow-inner z-20 transform -rotate-1 origin-left scale-[1.02] border-y-4 border-[#14532d]">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              <span className="text-white/90 text-3xl font-black tracking-widest uppercase italic">Energia Natural</span>
              <Star className="text-[#4ade80]" size={28} fill="currentColor" />
              <span className="text-[#4ade80] text-3xl font-black tracking-widest uppercase italic">Zero Açúcar</span>
              <Star className="text-white/90" size={28} fill="currentColor" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- SEÇÃO DE BENEFÍCIOS --- */}
      <section className="py-32 px-6 lg:px-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <span className="text-[#166534] font-bold tracking-wider uppercase text-sm bg-green-50 px-4 py-1 rounded-full">
              Nossa Promessa
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-6">
              Por que escolher Vitta?
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <BenefitCard
              icon={<Leaf size={32} />}
              title="100% Natural"
              desc="Ervas selecionadas manualmente. Nada sintético entra na nossa lata."
            />
            <BenefitCard
              icon={<Zap size={32} />}
              title="Energia Limpa"
              desc="Um boost natural para encarar o dia sem o crash da cafeína artificial."
            />
            <BenefitCard
              icon={<Droplet size={32} />}
              title="Hidratação Real"
              desc="Base de água purificada e infusão lenta para máximo sabor e saúde."
            />
            <BenefitCard
              icon={<Globe size={32} />}
              title="Eco-Friendly"
              desc="Compromisso com o planeta: embalagens 100% recicláveis e sustentáveis."
            />
          </motion.div>
        </div>
      </section>

      {/* --- SEÇÃO LIFESTYLE (Reescrita e Corrigida) --- */}
      <section id="escolher-vitta" className="py-32 bg-gray-50 relative overflow-hidden">
        {/* Elementos de fundo */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-1/2 right-0 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-24 relative z-10">
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="mb-16 max-w-2xl"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Feito para o seu <br/>
              <span className="text-[#166534]">estilo de vida.</span>
            </h2>
            <p className="text-xl text-gray-600">
              Descubra o que torna nossos chás únicos e essenciais para a sua rotina, do treino ao descanso.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <LifestyleCard 
              image="https://portaledicase.com/wp-content/uploads/2025/08/Cha-de-tangerina-com-anis-estrelado-e-canela--1024x683.jpg"
              title="Ingredientes Puros"
              desc="Sem letras miúdas. Selecionamos apenas o que a natureza oferece de melhor."
              delay={0}
            />
            <LifestyleCard 
              image="https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop"
              title="Sabor Inigualável"
              desc="Blends criados por sommeliers de chá para uma experiência sensorial única."
              delay={0.2}
            />
            <LifestyleCard 
              image="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop"
              title="Bem-estar Diário"
              desc="Equilíbrio perfeito para revitalizar o corpo e acalmar a mente."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-32 bg-[#052e16] text-center px-6 relative overflow-hidden">
        {/* Círculos decorativos animados */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#166534] rounded-full blur-[100px]"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Pronto para sentir o <br />
            <span className="text-[#4ade80]">verdadeiro frescor?</span>
          </h2>
          <p className="text-green-100 text-xl mb-10 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já trocaram o refrigerante por uma vida mais leve.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#4ade80] text-[#052e16] px-12 py-5 rounded-full text-xl font-bold shadow-lg shadow-green-900/50 transition-colors cursor-pointer"
          >
            Quero Experimentar
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}

// --- Componentes Auxiliares ---

function BenefitCard({ icon, title, desc }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10 }}
      className="group bg-white p-8 rounded-4xl border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-[#166534] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
      
      <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center text-[#166534] mb-6 group-hover:bg-[#166534] group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#166534] transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 leading-relaxed font-medium">
        {desc}
      </p>
    </motion.div>
  );
}

function LifestyleCard({ image, title, desc, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-4xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="h-64 overflow-hidden relative">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-8">
        <div className="flex items-center gap-2 mb-3 text-[#166534]">
            <CheckCircle size={20} />
            <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}