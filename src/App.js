import React from "react";
import "./App.css";
import LandingPage from "./pages/landing/LandingPage.jsx";
import ErrorPage from "./pages/error/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FullscreenMatrixRain } from "./components/FullscreenMatrixRain/FullscreenMatrixRain";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/home",
      element: <FullscreenMatrixRain />,
      errorElement: <ErrorPage />,
    },
  ]);
  return (
    <div id="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
