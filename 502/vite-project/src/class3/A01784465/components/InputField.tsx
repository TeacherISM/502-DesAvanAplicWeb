interface InputFieldProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const InputField = ({ type, placeholder, value, onChange }: InputFieldProps) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ padding: '10px', margin: '10px 0', width: '100%' }}
      />
    );
  };
  
  export default InputField;
  