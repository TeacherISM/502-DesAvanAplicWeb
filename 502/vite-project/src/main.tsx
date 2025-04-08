import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import TasksMenu from "./class1/A01028786/menu/ClassesMenu";

// Crear la raíz de la aplicación React
const contenedor = document.getElementById("root");
const root = createRoot(contenedor!);

// Obtener la ruta actual desde la URL
const rutaActual = window.location.pathname;

// Renderizar el componente adecuado según la ruta
root.render(
  <StrictMode>{rutaActual === "/tareas" ? <TasksMenu /> : <App />}</StrictMode>
);
