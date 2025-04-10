type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
};

const Button = ({ children, type = "submit" }: ButtonProps) => {
  return (
    <button
      type={type}
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
};

export default Button;
