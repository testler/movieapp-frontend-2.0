import React from "react";
import "./App.css";
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import LandingPage from "./pages/LandingPage";


function App() {
  return (
    <div id="canvas-container">
      {/* <Canvas>
      </Canvas> */}
      <LandingPage/>
    </div>
  );
}

export default App;
