interface ButtonComponentProps {
  type?: "button" | "submit" | "reset";
  text: string;
  onClick?: () => void;
}

const ButtonComponent = ({
  type = "button",
  text,
  onClick,
}: ButtonComponentProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "10px 20px",
        border: "none",
        borderRadius: "4px",
        backgroundColor: "#3b82f6",
        color: "#fff",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
