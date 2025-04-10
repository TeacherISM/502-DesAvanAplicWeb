import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #3b82f6; /* Azul tipo Tailwind */
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #2563eb;
  }
`;

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default Button;
