import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={{
        backgroundColor: "#3498db",
        color: "white",
        padding: "10px 15px",
        border: "none",
        borderRadius: "4px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.7 : 1,
        fontSize: "14px",
        fontWeight: "bold",
        transition: "background-color 0.3s",
        width: "100%",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
