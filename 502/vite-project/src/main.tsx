import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import TasksMenu from "./class1/A01027626/menu/TasksMenu";

const root = createRoot(document.getElementById("root")!);

const path = window.location.pathname;

root.render(
  <StrictMode>{path === "/tareas" ? <TasksMenu /> : <App />}</StrictMode>
);
