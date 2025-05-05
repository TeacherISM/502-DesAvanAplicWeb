const Button = ({ label, onClick }: { label: string; onClick: () => void }) => {
    return (
      <button
        onClick={onClick}
        style={{ padding: "10px 20px", backgroundColor: "blue", color: "white" }}
      >
        {label}
      </button>
    );
  };
  
  export default Button;