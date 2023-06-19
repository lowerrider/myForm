import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import CreateFormPage from "./pages/CreateFormPage/CreateFormPage";
import { ROUTES } from "./constants/constants";
import "./fonts/SBSansInterface.ttf";
import "./fonts/SBSansInterfaceBold.ttf";

import "./index.css";
const router = createBrowserRouter([
  {
    path: ROUTES.index,
    element: <MainPage />,
  },
  {
    path: ROUTES.createForm,
    element: <CreateFormPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
