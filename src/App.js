import React from "react";
import "./App.css";
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'


function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <OrbitControls />
        <mesh rotation-x={1}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>
        <ambientLight />
      </Canvas>
    </div>
  );
}

export default App;
