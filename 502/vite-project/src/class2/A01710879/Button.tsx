import React from 'react';

interface ButtonProps {
  type: "button" | "submit" | "reset";
  text: string;
}

const Button: React.FC<ButtonProps> = ({ type, text }) => {
  return (
    <button
      type={type}
      className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
    >
      {text}
    </button>
  );
};

export default Button;
