import React from "react";
import { Link } from "react-router-dom";
import "../menu/Menu.css"; // reutilizamos estilos

export default function EjemploClase() {
  return (
    <div className="menu-container">
      <h1 className="menu-title">Ejemplo de Clase</h1>
      <p>Este es un ejemplo de una configuracion para una clase</p>

      {/* Volver al menú */}
      <Link to="/" className="menu-button">
        Volver al Menú
      </Link>
    </div>
  );
}
