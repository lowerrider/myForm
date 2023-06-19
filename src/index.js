import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import CreateFormPage from "./pages/CreateFormPage/CreateFormPage";
import { ROUTES } from "./constants/constants";
import "./fonts/SBSansInterface.ttf";
import "./fonts/SBSansInterfaceBold.ttf";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.index} element={<MainPage />} />
        <Route path={ROUTES.createForm} element={<CreateFormPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
