import React from "react";
import "./App.css";
import { Canvas, useFrame } from '@react-three/fiber'


function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>
        <ambientLight />
      </Canvas>
    </div>
  );
}

export default App;
