import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./ui/pages/HomePage";
import DepletingResourcePage from "./ui/pages/DepletingResourcePage";
import LayoutPage from "./ui/pages/LayoutPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/depleting-resource" element={<DepletingResourcePage />} />
        <Route path="/layout" element={<LayoutPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
