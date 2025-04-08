import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Login";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <div>
      <Login />
      <a href="/tareas" className="navigation-container">
        <button className="back-btn">Volver al Menú Principal</button>
      </a>
    </div>
  </React.StrictMode>
);
