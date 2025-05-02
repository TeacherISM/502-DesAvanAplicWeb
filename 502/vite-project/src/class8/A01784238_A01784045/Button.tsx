import React from "react";

// Define correct types for button props
type ButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset"; // Restrict to allowed values
  className?: string;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button", // Default to "button"
  className = "",
  disabled = false,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={className}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
