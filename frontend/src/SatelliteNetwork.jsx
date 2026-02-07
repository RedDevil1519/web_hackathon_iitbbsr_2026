
import { useState } from "react";
import Satellite from "./Satellite";

export default function SatelliteNetwork({ positions }) {
  const targets = Object.values(positions);
  const firstTarget = targets.length ? targets[0] : null;

  return (
    <>
      <Satellite radius={2.5} speed={0.9} tilt={0.2} target={firstTarget} />
      <Satellite radius={4} speed={0.6} tilt={0.5} target={firstTarget} />
      <Satellite radius={6} speed={0.3} tilt={0.7} target={firstTarget} />
    </>
  );
}
