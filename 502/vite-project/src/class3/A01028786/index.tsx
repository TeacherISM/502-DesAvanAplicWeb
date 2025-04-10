import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter";
import Login from "./Login";
import TravelRequestForm from "./TravelRequestForm";
import Dashboard from "./Dashboard";
import "./App.css";

type Pantalla = "menu" | "counter" | "login" | "travel" | "dashboard";

const App = () => {
  const [pantalla, cambiarPantalla] = useState<Pantalla>("menu");
  const [usuario, setUsuario] = useState<{ username: string; role: string } | null>(null);

  const handleLogin = (username: string, password: string) => {
    let role = "employee"; // default role
    if (username === "admin") role = "admin";
    else if (username === "manager") role = "manager";

    setUsuario({ username, role });
    cambiarPantalla("dashboard");
  };

  const BotonVolverMenuGeneral = () => (
    <div className="tasks-menu-button">
      <a href="/tareas">
        <button className="nav-button">Menú de Tareas</button>
      </a>
    </div>
  );

  if (pantalla === "menu") {
    return (
      <div className="app-container">
        <h1>Clase 3</h1>

        <div className="button-container">
          <button onClick={() => cambiarPantalla("counter")} className="nav-button">
            Contador
          </button>
        </div>

        <div className="button-container">
          <button onClick={() => cambiarPantalla("login")} className="nav-button">
            Login y Dashboard Basado en Roles
          </button>
        </div>

        <div className="button-container">
          <button onClick={() => cambiarPantalla("travel")} className="nav-button">
            Travel Request Form
          </button>
        </div>

        <BotonVolverMenuGeneral />
      </div>
    );
  }

  if (pantalla === "counter") {
    return (
      <div className="app-container">
        <Counter />
        <div className="button-container">
          <button onClick={() => cambiarPantalla("menu")} className="nav-button">
            Menú Clase 3
          </button>
        </div>
        <BotonVolverMenuGeneral />
      </div>
    );
  }

  if (pantalla === "login") {
    return (
      <div className="app-container">
        <Login onLogin={handleLogin} />
        <div className="button-container">
          <button onClick={() => cambiarPantalla("menu")} className="nav-button">
            Menú Clase 3
          </button>
        </div>
        <BotonVolverMenuGeneral />
      </div>
    );
  }

  if (pantalla === "travel") {
    return (
      <div className="app-container">
        <TravelRequestForm />
        <div className="button-container">
          <button onClick={() => cambiarPantalla("menu")} className="nav-button">
            Menú de Clase 3
          </button>
        </div>
        <BotonVolverMenuGeneral />
      </div>
    );
  }

  if (pantalla === "dashboard" && usuario) {
    return (
      <div className="app-container">
        <Dashboard role={usuario.role} />
        <div className="button-container">
          <button onClick={() => cambiarPantalla("menu")} className="nav-button">
            Menú Clase 3
          </button>
        </div>
        <BotonVolverMenuGeneral />
      </div>
    );
  }

  return null;
};

const nodoRaiz = document.getElementById("root");
if (!nodoRaiz) throw new Error("No se encontró el elemento #root");

const raiz = ReactDOM.createRoot(nodoRaiz);
raiz.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
