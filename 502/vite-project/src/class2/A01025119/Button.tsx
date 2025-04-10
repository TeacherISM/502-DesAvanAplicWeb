import React from 'react';
import '../../class1/A01025119/webpage/main_design.css';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="main-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
