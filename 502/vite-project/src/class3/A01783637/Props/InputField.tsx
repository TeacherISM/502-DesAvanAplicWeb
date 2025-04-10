//Imanol Santisteban
//A01783637
import React from 'react';
import "/src/App.css"

interface InputFieldProps {
  type: string;
  //If value is a int or float, we need to parse it. 
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ padding: '10px', margin: '10px 0' }}
    />
  );
};

export default InputField;
