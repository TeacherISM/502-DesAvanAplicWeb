import React from 'react';


// --- Propiedades del componente botón
// Dejando una función onClick opcional para manejar eventos de clic,
// haciendo que el botón sea reutilizable en diferentes contextos
interface ButtonProps {
    label: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    type = 'button',
    className = '',
    disabled = false
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={className}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;