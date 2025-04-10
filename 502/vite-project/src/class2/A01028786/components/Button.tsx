import React from 'react';

// Propiedades esperadas para el componente Button
interface ButtonProps {
  label: string;         // Texto visible dentro del botón
  onClick: () => void;   // Función que se ejecuta al hacer clic
}

// Componente funcional que renderiza un botón estilizado
const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        backgroundColor: 'blue',
        color: 'white'
      }}
    >
      {label}
    </button>
  );
};

export default Button;
