// src/pages/Home.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stage,
  Float,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { SodaCan } from "../SodaCan"; // Ajuste o caminho se necessário (se SodaCan estiver em src/)

export default function Home() {
  return (
    <div className="home-container">
      {/* Seção HERO com o 3D */}
      <section className="hero-section">
        <div className="hero-text fade-in-left">
          <h1>
            Bem-vindo à <br />
            <span className="highlight">Vitta Fresh!</span>
          </h1>
          <p className="hero-quote">
            "Imagine uma bebida que une a tradição das ervas, a inovação da
            tecnologia e o frescor de uma ideia que nasceu no deserto."
          </p>
          <button className="cta-button">Conheça Nossos Sabores</button>
        </div>

        <div className="hero-3d fade-in-right">
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, 0, 10], fov: 45 }}
          >
            <Suspense fallback={null}>
              <Stage
                environment="lobby"
                intensity={0.8}
                adjustCamera={false}
                shadows={false}
              >
                <Float
                  speed={2}
                  rotationIntensity={0.2}
                  floatIntensity={0.5}
                  floatingRange={[-0.1, 0.1]}
                >
                  <SodaCan />
                </Float>
              </Stage>
              <ContactShadows
                position={[0, -2.8, 0]}
                opacity={0.5}
                scale={10}
                blur={2}
                far={4.5}
              />
              <Environment preset="lobby" blur={0.6} />
            </Suspense>
            <OrbitControls
              enableZoom={false}
              autoRotate={true}
              autoRotateSpeed={2}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 1.5}
            />
          </Canvas>
        </div>
      </section>

      {/* Seção História */}
      <section className="info-section light-bg scroll-animate">
        <div className="container">
          <h2>Nossa História</h2>
          <p>
            Somos a primeira empresa brasileira a criar chás gaseificados com
            técnica 100% de infusão de ervas, sem aditivos químicos, sem
            conservantes e sem complicações.
          </p>
          <p>
            Nossa história começou em uma missão empresarial para Dubai, onde
            nossos fundadores se inspiraram na riqueza cultural e na busca por
            experiências únicas. Foi lá, entre o deserto e o mar, que surgiu a
            ideia de reinventar o conceito de bebidas saudáveis, combinando
            técnicas da indústria cervejeira com a sinergia das plantas.
          </p>
        </div>
      </section>

      {/* Seção Filosofia */}
      <section className="info-section dark-bg scroll-animate">
        <div className="container">
          <h2>Cuidado e Prazer</h2>
          <p>
            Na Vitta Fresh, acreditamos que o cuidado com o corpo e o prazer do
            paladar podem andar juntos. Por isso, criamos blends exclusivos de
            ervas e mates, sem adição de açúcares, aromatizados com óleos
            essenciais e enriquecidos com vitamina C.
          </p>
          <p>
            Cada gole é uma experiência que respeita o seu corpo e o meio
            ambiente, trazendo o frescor da natureza diretamente para o seu dia
            a dia.
          </p>
        </div>
      </section>

      {/* Seção Final */}
      <section className="cta-section scroll-animate">
        <div className="container">
          <h2>Viva de forma mais leve</h2>
          <p>
            Nossos produtos são mais do que bebidas; são um convite para viver
            de forma mais leve, saudável e consciente. Com processos
            sustentáveis e ingredientes naturais, estamos redefinindo o que
            significa cuidar de si.
          </p>
          <h3 className="final-quote">
            "Da inspiração de Dubai para a sua mesa, a Vitta Fresh é a escolha
            certa para quem busca sabor, saúde e um toque de aventura em cada
            gole."
          </h3>
        </div>
      </section>
    </div>
  );
}
