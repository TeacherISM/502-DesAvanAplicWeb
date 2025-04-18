import React from "react";
import "./Button.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="custom-button">
      {label}
    </button>
  );
};

export default Button;
