import React, { Children } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { FullscreenMatrixRain } from "./components/FullscreenMatrixRain/FullscreenMatrixRain";
import "./index.css";
import ErrorPage from "./pages/error/ErrorPage";
import LandingPage from "./pages/landing/LandingPage";
import MainPage from "./pages/main/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <MainPage />,
        loader: <FullscreenMatrixRain />
      },
    ],
  },
]);
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
