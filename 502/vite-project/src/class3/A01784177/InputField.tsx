import React from 'react';

interface InputFieldProps {
    label: string;
    name: string;
    type: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ label, name, type, handleChange }: InputFieldProps) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} name={name} onChange={handleChange} />
        </>
    );
};

export default InputField;