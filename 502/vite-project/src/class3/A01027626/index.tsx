import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter";
import Login from "./Login";
import TravelRequestForm from "./TravelRequestForm";
import Dashboard from "./Dashboard";
import "./App.css";

const App = () => {
  const [view, setView] = useState<
    "menu" | "counter" | "login" | "travel" | "dashboard"
  >("menu");
  const [role, setRole] = useState<string | null>(null);

  const handleLogin = (incomingRole: string, _password: string) => {
    setRole(incomingRole);
    setView("dashboard");
  };

  const TasksMenuButton = () => (
    <div className="tasks-menu-button">
      <a href="/tareas">
        <button className="nav-button">Back to Main Menu</button>
      </a>
    </div>
  );

  if (view === "menu") {
    return (
      <div className="app-container">
        <h1>Class 3</h1>
        <div className="button-container">
          <button onClick={() => setView("counter")} className="nav-button">
            Counter (useState)
          </button>
        </div>
        <div className="button-container">
          <button onClick={() => setView("login")} className="nav-button">
            Login (useState, useEffect & role-based dashboard)
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
            Back to Menu
          </button>
        </div>
        <TasksMenuButton />
      </div>
    );
  } else if (view === "login") {
    return (
      <div className="app-container">
        <Login onLogin={handleLogin} />
        <div className="button-container">
          <button onClick={() => setView("menu")} className="nav-button">
            Back to Menu
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
            Back to Menu
          </button>
        </div>
        <TasksMenuButton />
      </div>
    );
  } else if (view === "dashboard") {
    return (
      <div className="app-container">
        {role ? (
          <Dashboard role={role} />
        ) : (
          <p>No role found. Please log in again.</p>
        )}
        <div className="button-container">
          <button
            onClick={() => {
              setRole(null);
              setView("menu");
            }}
            className="nav-button"
          >
            Log out
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
