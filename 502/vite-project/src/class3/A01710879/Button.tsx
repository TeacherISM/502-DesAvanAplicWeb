import React from 'react';

interface ButtonProps {
  type: "button" | "submit" | "reset";
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type, text, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
    >
      {text}
    </button>
  );
};

export default Button;
