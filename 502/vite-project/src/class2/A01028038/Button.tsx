interface ButtonProps {
    type: "submit" | "button" | "reset";
    label: string;
  }


const Button = ({ type, label }: ButtonProps) => {
    const buttonStyles: React.CSSProperties = {
        padding: "10px 20px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
    };

    return (
        <button type={type} style={buttonStyles}>
            {label}
        </button>
    );
};

export default Button;