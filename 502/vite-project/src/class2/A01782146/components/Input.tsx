import React from "react";

interface InputComponentProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent = ({
  type,
  placeholder,
  value,
  onChange,
}: InputComponentProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        padding: "5px",
        borderRadius: "4px",
        border: "1px solid #ccc",
      }}
    />
  );
};

export default InputComponent;
