import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  description: string;
  date: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, date, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <span className={styles.date}>{date}</span>
    </div>
  );
};

export default Card;
