import React from "react";

// --- Propiedades del componente botón
interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
      style={{
        backgroundColor: "#007bff", // Azul primario
        color: "white", // Texto blanco
        border: "none", // Sin borde
        padding: "10px 20px", // Espaciado interno
        fontSize: "16px", // Tamaño de fuente
        borderRadius: "5px", // Bordes redondeados
        cursor: disabled ? "not-allowed" : "pointer", // Cursor cambia si está deshabilitado
        transition: "background-color 0.3s ease", // Animación suave
        opacity: disabled ? 0.6 : 1, // Reducir opacidad si está deshabilitado
      }}
      onMouseOver={(e) => {
        if (!disabled) e.currentTarget.style.backgroundColor = "#0056b3"; // Azul más oscuro al pasar
      }}
      onMouseOut={(e) => {
        if (!disabled) e.currentTarget.style.backgroundColor = "#007bff"; // Azul original al salir
      }}
      onMouseDown={(e) => {
        if (!disabled) e.currentTarget.style.backgroundColor = "#003f7f"; // Azul más oscuro al hacer clic
      }}
    >
      {label}
    </button>
  );
};

export default Button;
