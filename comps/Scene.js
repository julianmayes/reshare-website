import ReactDOM from "react-dom";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Orange from "../public/Orange";

export default function Scene({ scrollTop }) {
  return (
    <Canvas
      style={{ width: "100%", height: "100vh", position: "fixed", top: 0 }}
    >
      <Suspense fallback={null}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Orange scrollTop={scrollTop} />
      </Suspense>
    </Canvas>
  );
}
