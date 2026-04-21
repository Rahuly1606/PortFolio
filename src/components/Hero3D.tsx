import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function Knot() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={ref} scale={1.3}>
        <torusKnotGeometry args={[1, 0.32, 220, 32]} />
        <MeshDistortMaterial
          color="#E9F460"
          distort={0.35}
          speed={1.6}
          roughness={0.15}
          metalness={0.85}
        />
      </mesh>
    </Float>
  );
}

function SmallSphere({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh position={position}>
        <sphereGeometry args={[0.28, 32, 32]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
      </mesh>
    </Float>
  );
}

export function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-5, -5, -5]} intensity={0.6} color="#E9F460" />
      <Suspense fallback={null}>
        <Knot />
        <SmallSphere position={[2, 1.3, -1]} color="#0B0B0B" />
        <SmallSphere position={[-2.2, -1.2, -1]} color="#E9F460" />
        <SmallSphere position={[-1.8, 1.5, -2]} color="#21C45A" />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
