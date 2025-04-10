import React from "react";
import "./Card.css";

interface CardProps {
  title: string;
  description: string;
  date: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, date, onClick }) => {
  return (
    <div className="tarjetaEstilo" onClick={onClick}>
      <h3 className="tituloTarjeta">{title}</h3>
      <p className="descripcionTarjeta">{description}</p>
      <small className="fechaTarjeta">{date}</small>
    </div>
  );
};

export default Card;
