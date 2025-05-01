import React from 'react';

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputField = ({ label, name, type, placeholder, handleChange }: InputFieldProps) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
};

export default InputField;
