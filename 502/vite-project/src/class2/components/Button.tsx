interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  variant: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

const Button = ({ label, type = "button", variant, onClick, fullWidth = false }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: '0.75rem 1.25rem',
        borderRadius: '0.375rem',
        backgroundColor: variant === 'primary' ? '#3b82f6' : '#e5e7eb',
        color: variant === 'primary' ? 'white' : '#1f2937',
        border: 'none',
        fontWeight: '500',
        fontSize: '0.875rem',
        cursor: 'pointer',
        width: fullWidth ? '100%' : 'auto'
      }}
    >
      {label}
    </button>
  );
};

export default Button;