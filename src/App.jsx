import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stage,
  Float,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { SodaCan } from "./SodaCan";
import "./App.css";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background:
          "radial-gradient(circle at 50% 50%, #f0fdf4 0%, #dcfce7 100%)",
      }}
    >
      {/* Afastei um pouco mais a câmera (Z=12) pois a lata agora é mais alta */}
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 12], fov: 45 }}>
        <Suspense fallback={null}>
          {/* IMPORTANTE: shadows={false} aqui. 
            Isso impede que o Stage tente criar sua própria sombra, que causaria conflito.
          */}
          <Stage
            environment="lobby"
            intensity={0.8}
            adjustCamera={false}
            shadows={false}
          >
            <Float
              speed={2}
              rotationIntensity={0.2} // Rotação de flutuação bem suave
              floatIntensity={0.5}
              floatingRange={[-0.1, 0.1]} // Flutua menos para cima e para baixo
            >
              <SodaCan />
            </Float>
          </Stage>

          {/* Sombra de Contato (ContactShadows)
            - position={[0, -2.8, 0]}: Coloquei ela bem embaixo da lata.
            - opacity={0.4} e blur={2}: Deixa a sombra suave.
            - frames={1}: Renderiza a sombra apenas uma vez para economizar performance e evitar que ela "trema". 
              Se você quiser que a sombra acompanhe o movimento de "Float", remova o "frames={1}".
          */}
          <ContactShadows
            position={[0, -2.8, 0]}
            opacity={0.5}
            scale={10}
            blur={2}
            far={4.5}
            resolution={256} // Resolução melhor para não ficar serrilhada
            color="#000000"
          />

          <Environment preset="lobby" blur={0.6} />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>

      {/* Interface (mantida igual) */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            fontFamily: "sans-serif",
            color: "#166534",
            margin: 0,
            fontWeight: 800,
            letterSpacing: "-2px",
          }}
        >
          Vitta Fresh
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            color: "#15803d",
            maxWidth: "400px",
            lineHeight: "1.4",
          }}
        >
          Sabor autêntico. <br />
          Refrescância natural em 360°.
        </p>
        <button
          style={{
            pointerEvents: "auto",
            padding: "1rem 2.5rem",
            fontSize: "1.1rem",
            fontWeight: "bold",
            background: "#166534",
            color: "white",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            marginTop: "25px",
            boxShadow: "0 4px 15px rgba(22, 101, 52, 0.3)",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          EXPERIMENTAR
        </button>
      </div>
    </div>
  );
}

export default App;
