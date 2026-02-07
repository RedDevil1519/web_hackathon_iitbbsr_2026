
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function OrbitalAsteroid({ data, index, onUpdate }) {
  const ref = useRef();
  const radius = 3 + (index % 8);
  const speed = parseFloat(data.velocity) / 1000000;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    const x = radius * Math.cos(t);
    const z = radius * Math.sin(t);
    ref.current.position.set(x, 0, z);
    onUpdate && onUpdate(index, [x,0,z]);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[data.hazardous ? 0.18 : 0.1, 16, 16]} />
      <meshStandardMaterial
        color={data.hazardous ? "red" : "cyan"}
        emissive={data.hazardous ? "red" : "cyan"}
        emissiveIntensity={0.6}
      />
    </mesh>
  );
}
