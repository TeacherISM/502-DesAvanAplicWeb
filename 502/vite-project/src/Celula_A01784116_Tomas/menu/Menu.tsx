import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  return (
    <div className="menu-container">
      <h1 className="menu-title">Menú de Trabajos en Equipo</h1>
      <h3>Hecho por: Tomas Molina, Josefina Santacruz, Gabriel Edid y Joseph Shakalo</h3>
      <p>Selecciona una opción:</p>

      {/* Link a la segunda pantalla */}
      <Link to="/EjemploClase" className="menu-button">
        Ver Detalles
      </Link>

      <Link to="/Clase4" className="menu-button">
        Clase 4
      </Link>

      <Link to="/Clase5" className="menu-button">
        Clase 5
      </Link>

      <Link to="/Clase6" className="menu-button">
        Clase 6
      </Link>

    </div>
  );
}
