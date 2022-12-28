import React from "react";
import "./App.css";
import LandingPage from "./pages/landing/LandingPage.jsx";
import ErrorPage from "./pages/error/ErrorPage";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { FullscreenMatrixRain } from "./pages/loaders/FullscreenMatrixRain/FullscreenMatrixRain";
import MainPage from "./pages/main/MainPage.jsx"
import FilmLeader from "./pages/loaders/FilmLeader/FilmLeader";

function App() {
  return (
      <Routes>
        <Route path="/" element={<FilmLeader/>}/>
        <Route path="/landingPage" element={<LandingPage/>}/>
        <Route path="/homeLoader" element={<FullscreenMatrixRain/>}/>
        <Route path="/home" element={<MainPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
  );
}

export default App;
