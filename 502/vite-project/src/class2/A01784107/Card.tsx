import React from 'react';
import './style.css';

interface CardProps {
  title: string;
  description: string;
  date: string;
}

const Card: React.FC<CardProps> = ({ title, description, date }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{date}</span>
    </div>
  );
};

export default Card;
