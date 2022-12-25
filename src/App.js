import React from "react";
import "./App.css";
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import LandingPage from "./pages/landing/LandingPage.jsx";


function App() {
  return (
    <div id="app">
      {/* <Canvas>
      </Canvas> */}
      <LandingPage/>
    </div>
  );
}

export default App;
