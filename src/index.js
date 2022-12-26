import React, { Children } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FullscreenMatrixRain } from "./components/FullscreenMatrixRain/FullscreenMatrixRain";
import "./index.css";
import App from "./App"



const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
