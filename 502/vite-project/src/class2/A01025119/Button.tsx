import React from 'react';
import '../../class1/A01025119/webpage/main_design.css';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = "button" }) => {
  return (
    <button className="main-button" onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;
