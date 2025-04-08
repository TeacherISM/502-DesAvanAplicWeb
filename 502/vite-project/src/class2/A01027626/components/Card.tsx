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
    <div className="card" onClick={onClick}>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <small className="card-date">{date}</small>
    </div>
  );
};

export default Card;
