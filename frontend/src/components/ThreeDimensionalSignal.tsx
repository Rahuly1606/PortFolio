import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function SignalCore() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.x += delta * 0.16;
    group.current.rotation.y += delta * 0.24;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.15, 2]} />
        <meshStandardMaterial
          color="#a49aff"
          emissive="#433d7a"
          emissiveIntensity={0.55}
          roughness={0.24}
          metalness={0.62}
        />
      </mesh>
      <mesh scale={1.08}>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshBasicMaterial color="#d8d3ff" wireframe transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

export function ThreeDimensionalSignal({ reduce }: { reduce: boolean | null }) {
  return (
    <div className="absolute inset-0 z-0 opacity-80" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.3], fov: 42 }}
        dpr={[1, 1.5]}
        frameloop={reduce ? "demand" : "always"}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[3, 3, 4]} intensity={18} color="#b9b2ff" distance={8} />
        <pointLight position={[-3, -2, 2]} intensity={12} color="#ebe9e3" distance={7} />
        <Float speed={reduce ? 0 : 1.2} rotationIntensity={0.2} floatIntensity={0.35}>
          <SignalCore />
        </Float>
        <Sparkles count={34} scale={4.4} size={1.6} speed={reduce ? 0 : 0.18} color="#a49aff" />
      </Canvas>
    </div>
  );
}
