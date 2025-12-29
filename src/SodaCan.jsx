import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export function SodaCan(props) {
  const groupRef = useRef();

  const textureOriginal = useTexture(`${import.meta.env.BASE_URL}rotulo.jpg`);

  // Configuração da textura (mantida igual)
  const texture = useMemo(() => {
    const t = textureOriginal.clone();
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    // Se o seu rótulo parecer muito esticado ou espremido agora que a lata mudou de tamanho,
    // você pode precisar ajustar os valores do repeat.set(X, Y).
    // Tente t.repeat.set(1, 1) ou t.repeat.set(2, 1) dependendo da sua imagem.
    t.repeat.set(1, 1);
    t.offset.set(0.25, 0);
    t.colorSpace = THREE.SRGBColorSpace;
    t.needsUpdate = true;
    return t;
  }, [textureOriginal]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  // Materiais (mantidos iguais)
  const aluminumMaterial = new THREE.MeshStandardMaterial({
    color: "#e0e0e0",
    metalness: 0.9,
    roughness: 0.1,
  });

  const labelMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    metalness: 0.4,
    roughness: 0.3,
    side: THREE.DoubleSide,
  });

  // --- NOVAS MEDIDAS PARA LATA "SLIM" ---
  // Diminuí os raios e aumentei a altura principal.
  const mainRadius = 1; // Mais fina (antes era 1)
  const topRadius = 0.9; // Topo mais fino
  const baseRadius = 0.85; // Base mais fina

  const mainHeight = 4.2; // Bem mais alta (antes era 2.6)
  const taperHeight = 0.3; // Ombros ligeiramente mais altos

  // Cálculos automáticos baseados nas novas medidas
  const topTaperY = mainHeight / 2 + taperHeight / 2;
  const bottomTaperY = -(mainHeight / 2) - taperHeight / 2;
  const topRimY = topTaperY + taperHeight / 2 + 0.02;
  const bottomRimY = bottomTaperY - taperHeight / 2;

  return (
    // Removi o 'scale' que tinha aqui para usarmos o tamanho real definido acima
    <group ref={groupRef} {...props} dispose={null}>
      {/* Corpo (Rótulo) */}
      <mesh material={labelMaterial} position={[0, 0, 0]}>
        <cylinderGeometry args={[mainRadius, mainRadius, mainHeight, 64]} />
      </mesh>

      {/* Ombro Superior */}
      <mesh material={aluminumMaterial} position={[0, topTaperY, 0]}>
        <cylinderGeometry args={[topRadius, mainRadius, taperHeight, 64]} />
      </mesh>

      {/* Borda Superior (Anel) */}
      <mesh
        material={aluminumMaterial}
        position={[0, topRimY, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        {/* Ajustei o torus para o novo raio menor */}
        <torusGeometry args={[topRadius - 0.02, 0.03, 16, 64]} />
      </mesh>
      {/* Tampa */}
      <mesh material={aluminumMaterial} position={[0, topRimY - 0.02, 0]}>
        <cylinderGeometry
          args={[topRadius - 0.03, topRadius - 0.03, 0.02, 64]}
        />
      </mesh>

      {/* Base Inclinada */}
      <mesh material={aluminumMaterial} position={[0, bottomTaperY, 0]}>
        <cylinderGeometry args={[mainRadius, baseRadius, taperHeight, 64]} />
      </mesh>

      {/* Borda Inferior */}
      <mesh material={aluminumMaterial} position={[0, bottomRimY, 0]}>
        <cylinderGeometry args={[baseRadius, baseRadius, 0.05, 64]} />
      </mesh>
      {/* Fundo */}
      <mesh position={[0, bottomRimY - 0.05, 0]}>
        <cylinderGeometry
          args={[baseRadius * 0.9, baseRadius * 0.9, 0.1, 64]}
        />
        <meshStandardMaterial color="#aaaaaa" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}
