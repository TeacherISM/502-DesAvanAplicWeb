// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Login from "./class2/A01783980/login.tsx";
import HooksImplementation from "./class3/A01783980/implementation.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hooks" element={<HooksImplementation />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
