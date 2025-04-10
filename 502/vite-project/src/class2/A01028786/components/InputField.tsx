import React from 'react';

// Propiedades requeridas para el campo de entrada
interface InputFieldProps {
  type: string; // Define el tipo de input (texto, email, etc.)
  placeholder?: string; // Texto de ayuda dentro del campo
  value: string; // Valor actual del input
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Manejador de cambios
}

// Componente que representa un input de texto configurable
const InputField: React.FC<InputFieldProps> = (props) => {
  const { type, placeholder, value, onChange } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        padding: '10px',
        margin: '10px 0'
      }}
    />
  );
};

export default InputField;
