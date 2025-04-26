// componentes/button.tsx
import React from 'react';

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
