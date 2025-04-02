import React from "react";
import ReactDOM from "react-dom/client";
import App from "../../App";
import "./index.css";

// Ejemplo de arrow function
const logMessage = (message: string) => {
  console.log(`[INFO]: ${message}`);
};

// Ejemplo de destructuring
const config = { environment: "development", debug: true };
const { environment, debug } = config;

// Ejemplo de template literals
const welcomeMessage = `
  Application starting in ${environment} mode.
  Debug mode is ${debug ? "enabled" : "disabled"}.
`;

// Ejemplo de módulo (este archivo en sí es un módulo)
logMessage(welcomeMessage);

// Renderizar la aplicación React
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
