import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick} className={styles.button}>
    {label}
  </button>
);

export default Button;
