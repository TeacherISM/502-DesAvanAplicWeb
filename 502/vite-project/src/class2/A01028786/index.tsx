import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Login";

// Obtener el nodo raíz del DOM
const container = document.getElementById("root");

// Crear el punto de entrada React
const root = ReactDOM.createRoot(container!);

// Renderizar la aplicación dentro del modo estricto
root.render(
  <React.StrictMode>
    <main>
      <Login />

      {/* Botón de navegación para volver al menú principal */}
      <a href="/tareas">
        <button style={{ marginTop: "20px", padding: "10px 20px" }}>
          Volver al Menú de Tareas
        </button>
      </a>
    </main>
  </React.StrictMode>
);
