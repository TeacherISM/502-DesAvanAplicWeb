//Imanol Santisteban
//A01783637
import React from 'react';
import "/src/App.css"

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ padding: '10px 20px', backgroundColor: 'orange', color: 'black' }}
    >
      {label}
    </button>
  );
};

export default Button;
