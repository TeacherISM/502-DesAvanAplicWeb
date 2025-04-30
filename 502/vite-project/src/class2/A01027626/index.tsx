import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Login";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <div>
      <Login />
      <a
        href="/src/class1/A01027626/menu/menu.html"
        className="navigation-container"
      >
        <button className="back-btn">Back to Main Menu</button>
      </a>
    </div>
  </React.StrictMode>
);
