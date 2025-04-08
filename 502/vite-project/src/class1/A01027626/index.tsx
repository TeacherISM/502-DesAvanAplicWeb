import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./App.css";

const App: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = (username: string, password: string) => {
    if (username.trim() && password.trim()) {
      setAuthenticated(true);
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="app-container">
      {authenticated ? <Dashboard /> : <Login onLogin={handleLogin} />}
      <div className="navigation-container">
        <a href="/tareas">
          <button className="back-btn">Volver al Menú Principal</button>
        </a>
      </div>
    </div>
  );
};

const container = document.getElementById("root");
if (!container) throw new Error("No se encontró el elemento #root");

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
