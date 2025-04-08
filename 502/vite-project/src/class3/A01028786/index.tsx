import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter";
import Login from "./Login";
import TravelRequestForm from "./TravelRequestForm";
import "./App.css";

// Componente principal de la aplicación
const App = () => {
  // Estado que determina qué vista se mostrará
  const [pantalla, cambiarPantalla] = useState<"menu" | "counter" | "login" | "travel">("menu");

  // Componente reutilizable para mostrar el botón de regreso al menú principal
  const BotonVolverMenuGeneral = () => (
    <div className="tasks-menu-button">
      <a href="/tareas">
        <button className="nav-button">Volver al Menú Principal</button>
      </a>
    </div>
  );

  // Vista principal con las opciones
  if (pantalla === "menu") {
    return (
      <div className="app-container">
        <h1>Clase 3 - Hands-On</h1>

        <div className="button-container">
          <button onClick={() => cambiarPantalla("counter")} className="nav-button">
            Counter (useState)
          </button>
        </div>

        <div className="button-container">
          <button onClick={() => cambiarPantalla("login")} className="nav-button">
            Login (useReducer)
          </button>
        </div>

        <div className="button-container">
          <button onClick={() => cambiarPantalla("travel")} className="nav-button">
            Travel Request Form (useReducer)
          </button>
        </div>

        <BotonVolverMenuGeneral />
      </div>
    );
  }

  // Vista del contador
  if (pantalla === "counter") {
    return (
      <div className="app-container">
        <Counter />
        <div className="button-container">
          <button onClick={() => cambiarPantalla("menu")} className="nav-button">
            Volver al Menú Interno
          </button>
        </div>
        <BotonVolverMenuGeneral />
      </div>
    );
  }

  // Vista del login
  if (pantalla === "login") {
    return (
      <div className="app-container">
        <Login />
        <div className="button-container">
          <button onClick={() => cambiarPantalla("menu")} className="nav-button">
            Volver al Menú Interno
          </button>
        </div>
        <BotonVolverMenuGeneral />
      </div>
    );
  }

  // Vista del formulario de viaje
  if (pantalla === "travel") {
    return (
      <div className="app-container">
        <TravelRequestForm />
        <div className="button-container">
          <button onClick={() => cambiarPantalla("menu")} className="nav-button">
            Volver al Menú Interno
          </button>
        </div>
        <BotonVolverMenuGeneral />
      </div>
    );
  }

  return null; // Fallback por si no coincide ninguna vista
};

// Buscar el contenedor raíz y montar la aplicación React
const nodoRaiz = document.getElementById("root");
if (!nodoRaiz) throw new Error("No se encontró el elemento #root");

const raiz = ReactDOM.createRoot(nodoRaiz);
raiz.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
