import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./App.css"; // Estilos globales aplicados a toda la app

// Componente principal que gestiona el acceso al dashboard o login
const App: React.FC = () => {
  const [estaAutenticado, setEstaAutenticado] = useState(false);

  // Función que valida que ambos campos tengan contenido antes de continuar
  const iniciarSesion = (usuario: string, clave: string): void => {
    if (usuario.trim() !== "" && clave.trim() !== "") {
      setEstaAutenticado(true);
    } else {
      alert("Nombre de usuario o contraseña inválidos.");
    }
  };

  return (
    <div className="app-container">
      {/* Renderiza el Dashboard si está autenticado, si no muestra el login */}
      {estaAutenticado ? <Dashboard /> : <Login onLogin={iniciarSesion} />}

      {/* Enlace para volver al menú general de tareas */}
      <div className="navigation-container">
        <a href="/tareas">
          <button className="back-btn">Volver a TasksMenu General</button>
        </a>
      </div>
    </div>
  );
};

// Selección del nodo raíz del DOM para renderizar la aplicación
const contenedor = document.getElementById("root");
if (!contenedor) throw new Error("No se pudo encontrar el contenedor raíz (#root)");

// Creación y renderización del árbol de componentes React
const raiz = ReactDOM.createRoot(contenedor);

raiz.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
