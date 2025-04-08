import React from "react";
import "./Card.css";

// Propiedades necesarias para renderizar la tarjeta
interface CardProps {
  title: string;           // Encabezado principal de la tarjeta
  description: string;     // Texto descriptivo
  date: string;            // Información de fecha
  onClick?: () => void;    // Función opcional al hacer clic
}

// Componente visual que muestra información en formato de tarjeta
const Card: React.FC<CardProps> = (props) => {
  const { title, description, date, onClick } = props;

  return (
    <div className="container" onClick={onClick}>
      <h3 className="container-title">{title}</h3>
      <p className="container-description">{description}</p>
      <small className="container-date">{date}</small>
    </div>
  );
};

export default Card;
