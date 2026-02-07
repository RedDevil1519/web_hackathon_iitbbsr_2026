
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import Asteroids from "./Asteroids";
import SatelliteNetwork from "./SatelliteNetwork";

function Earth() {
  return (
    <mesh>
      <sphereGeometry args={[2,32,32]} />
      <meshStandardMaterial color="#0b3d91" />
    </mesh>
  );
}

export default function EarthScene() {
  const [positions,setPositions]=useState({});

  return (
    <Canvas 
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      camera={{ position: [0, 5, 15], fov: 60 }}
    >
      <ambientLight />
      <pointLight position={[10,10,10]} />
      <Earth />
      <Asteroids setPositions={setPositions} />
      <SatelliteNetwork positions={positions} />
      <OrbitControls />
    </Canvas>
  );
}
