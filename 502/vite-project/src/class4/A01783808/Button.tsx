import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <button
    {...rest}
    className={`w-full py-2  px-4 rounded-md text-white transition
                ${
                  rest.disabled
                    ? "bg-blue-300 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
  >
    {children}
  </button>
);

export default Button;
