
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
    <Canvas>
      <ambientLight />
      <pointLight position={[10,10,10]} />
      <Earth />
      <Asteroids setPositions={setPositions} />
      <SatelliteNetwork positions={positions} />
      <OrbitControls />
    </Canvas>
  );
}
