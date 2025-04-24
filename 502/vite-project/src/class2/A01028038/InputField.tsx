interface InputFieldProps {
    label: string;
    name: string;
    type: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ label, name, type, handleChange }: InputFieldProps) => {
    const labelStyle: React.CSSProperties = {
        display: 'block',
        marginBottom: '8px',
        fontWeight: 'bold',
    };

    const inputStyle: React.CSSProperties = {
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width: '100%',
        boxSizing: 'border-box',
    };

    return (
        <>
            <label htmlFor={name} style={labelStyle}>{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                onChange={(e) => handleChange(e)}
                style={inputStyle}
            />
        </>
    );
}

export default InputField;