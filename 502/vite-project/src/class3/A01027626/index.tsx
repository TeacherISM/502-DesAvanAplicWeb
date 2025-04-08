import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter";
import Login from "./Login";
import TravelRequestForm from "./TravelRequestForm";
import "./App.css";

const App = () => {
  const [view, setView] = useState<"menu" | "counter" | "login" | "travel">(
    "menu"
  );

  const TasksMenuButton = () => (
    <div className="tasks-menu-button">
      <a href="/tareas">
        <button className="nav-button">Volver al Menú Principal</button>
      </a>
    </div>
  );

  if (view === "menu") {
    return (
      <div className="app-container">
        <h1>Clase 3</h1>
        <div className="button-container">
          <button onClick={() => setView("counter")} className="nav-button">
            Counter (useState)
          </button>
        </div>
        <div className="button-container">
          <button onClick={() => setView("login")} className="nav-button">
            Login (useState y useEffect)
          </button>
        </div>
        <div className="button-container">
          <button onClick={() => setView("travel")} className="nav-button">
            Travel Request Form (useReducer)
          </button>
        </div>
        <TasksMenuButton />
      </div>
    );
  } else if (view === "counter") {
    return (
      <div className="app-container">
        <Counter />
        <div className="button-container">
          <button onClick={() => setView("menu")} className="nav-button">
            Volver al Menú Interno
          </button>
        </div>
        <TasksMenuButton />
      </div>
    );
  } else if (view === "login") {
    return (
      <div className="app-container">
        <Login />
        <div className="button-container">
          <button onClick={() => setView("menu")} className="nav-button">
            Volver al Menú Interno
          </button>
        </div>
        <TasksMenuButton />
      </div>
    );
  } else if (view === "travel") {
    return (
      <div className="app-container">
        <TravelRequestForm />
        <div className="button-container">
          <button onClick={() => setView("menu")} className="nav-button">
            Volver al Menú Interno
          </button>
        </div>
        <TasksMenuButton />
      </div>
    );
  }
};

const container = document.getElementById("root");
if (!container) throw new Error("No se encontró el elemento #root");

const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
