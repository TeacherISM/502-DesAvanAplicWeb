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
        <a href="/src/class1/A01027626/menu/menu.html">
          <button className="back-btn">Back to Main Menu</button>
        </a>
      </div>
    </div>
  );
};

const container = document.getElementById("root");
if (!container) throw new Error("Element #root not found");

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
