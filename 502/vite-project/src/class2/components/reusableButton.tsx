import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #68a391;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  margin-top: 12px;
  cursor: pointer;

  &:hover {
    background-color: #4f7c6f;
  }
`;

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default Button;
