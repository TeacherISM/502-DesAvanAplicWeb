import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white' }}>
      {label}
    </button>
  );
};

export default Button;
