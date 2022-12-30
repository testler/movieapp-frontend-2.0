import React from "react";
import "./App.css";
import LandingPage from "./pages/landing/LandingPage.jsx";
import ErrorPage from "./pages/error/ErrorPage";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { FullscreenMatrixRain } from "./pages/loaders/FullscreenMatrixRain/FullscreenMatrixRain";
import MainPage from "./pages/main/MainPage.jsx"
import FilmLeader from "./pages/loaders/FilmLeader/FilmLeader";
import MatrixRain from "./components/MatrixRain/MatrixRain";
import Credentials from "./pages/credentials/Credentials";

function App() {
  return (
      <Routes>
        <Route path="/" element={<FilmLeader/>}/>
        <Route path="/landingPage" element={<LandingPage/>}/>
        <Route path="/homeLoader" element={<FullscreenMatrixRain/>}/>
        <Route path="/home" element={<MainPage/>}/>
        <Route path="/testbed" element={<MatrixRain/>}/>
        <Route path="/credentials" element={<Credentials />}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
  );
}

export default App;
