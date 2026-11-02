
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Text3D,
  Center,
  Float,
  ContactShadows,
} from "@react-three/drei";
import { MeshStandardMaterial } from "three";

const FONT_URL =
  "https://threejs.org/examples/fonts/helvetiker_bold.typeface.json";

function VYNEText() {
  const groupRef = useRef();

  const material = new MeshStandardMaterial({
    color: "#ffffff",
    metalness: 0.12,
    roughness: 0.3,
  });

  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.elapsedTime;

    groupRef.current.rotation.y =
      Math.sin(time * 0.75) * 0.16;

    groupRef.current.rotation.x =
      Math.sin(time * 0.55) * 0.05;

    groupRef.current.rotation.z =
      Math.sin(time * 0.4) * 0.02;

    groupRef.current.position.y =
      Math.sin(time * 1.1) * 0.07;
  });

  return (
    <>
      <Float
        speed={1.1}
        rotationIntensity={0.025}
        floatIntensity={0.04}
      >
        <group ref={groupRef}>
          <Center>
            <Text3D
              font={FONT_URL}
              size={2}
              height={0.55}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.045}
              bevelSize={0.025}
              bevelSegments={3}
              material={material}
            >
              VYNE
            </Text3D>
          </Center>
        </group>
      </Float>

      {/* ظل ثابت لتقليل استهلاك المعالج الرسومي */}
      <ContactShadows
        position={[0, -1.25, 0]}
        opacity={0.55}
        scale={7}
        blur={2}
        far={3}
        resolution={256}
        frames={1}
        color="#ffffff"
      />
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="hero-3d">
      <Canvas
        camera={{
          position: [0, 0, 8.5],
          fov: 36,
        }}
        dpr={[1, 1.25]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "low-power",
        }}
      >
        <ambientLight intensity={0.8} />

        <directionalLight
          position={[-4, 6, 7]}
          intensity={3}
        />

        <pointLight
          position={[5, 1, 3]}
          intensity={1.5}
          color="#d9e5ff"
        />

        <pointLight
          position={[-4, -2, -3]}
          intensity={1.5}
          color="#ffffff"
        />

        <VYNEText />
      </Canvas>
    </div>
  );
}
