// src/class2/components/reusableInputField.tsx
import React from 'react';
import styled from 'styled-components';

interface InputFieldProps {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, value, onChange }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
