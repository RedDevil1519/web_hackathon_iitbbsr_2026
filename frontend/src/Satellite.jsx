
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Satellite({ radius, speed, tilt, target }) {
  const ref = useRef();
  const lineRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    const x = radius * Math.cos(t);
    const z = radius * Math.sin(t);
    const y = Math.sin(t * 0.5) * tilt;
    ref.current.position.set(x,y,z);

    if(target && lineRef.current){
      const positions = new Float32Array([x,y,z, target[0],target[1],target[2]]);
      lineRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(positions,3));
    }
  });

  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry args={[0.15,0.1,0.1]} />
        <meshStandardMaterial color="white" emissive="cyan" emissiveIntensity={0.7} />
      </mesh>

      {target && (
        <line ref={lineRef}>
          <bufferGeometry />
          <lineBasicMaterial color="cyan" />
        </line>
      )}
    </group>
  );
}
