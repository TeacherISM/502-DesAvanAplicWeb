import { ChangeEvent } from 'react';

interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const InputField = ({ type, placeholder, value, onChange, label }: InputFieldProps) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      {label && <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#475569' }}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          width: '100%',
          padding: '0.75rem',
          borderRadius: '0.375rem',
          border: '1px solid #cbd5e1',
          fontSize: '0.875rem'
        }}
      />
    </div>
  );
};

export default InputField;