import React from "react";

// --- Propiedades del componente InputField
// Este componente es un campo de entrada reutilizable que puede ser utilizado
// en diferentes formularios y contextos. Permite la personalización de tipo,
// placeholder, valor, y otras propiedades como required, name, className y disabled.
interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  name?: string;
  id?: string;
  className?: string;
  disabled?: boolean;
  hasError?: boolean;
  errorStyle?: React.CSSProperties;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  value,
  onChange,
  required = false,
  name,
  id,
  className = "",
  disabled = false,
  hasError = false,
  errorStyle = {},
}) => {
  // Base styles for the input
  const baseStyle = {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "100%",
    boxSizing: "border-box" as const,
    fontSize: "14px",
    outline: "none",
  };

  // Merge base styles with error styles if hasError is true
  const finalStyle = hasError
    ? { ...baseStyle, border: "1px solid #e74c3c", ...errorStyle }
    : baseStyle;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      name={name}
      id={id}
      className={className}
      disabled={disabled}
      style={finalStyle}
    />
  );
};

export default InputField;
