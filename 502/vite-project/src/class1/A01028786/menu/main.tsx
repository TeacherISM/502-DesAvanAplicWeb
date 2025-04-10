import React from "react";
import ReactDOM from "react-dom/client";
import TasksMenu from "./ClassesMenu";

// Obtener el nodo raíz del DOM donde se renderizará la aplicación
const contenedor = document.getElementById("root");

// Crear el punto de entrada para la aplicación React
const app = ReactDOM.createRoot(contenedor!);

// Renderizar el componente principal dentro del modo estricto
app.render(
  <React.StrictMode>
    <TasksMenu />
  </React.StrictMode>
);
