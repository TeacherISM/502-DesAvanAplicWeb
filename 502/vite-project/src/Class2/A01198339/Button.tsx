
interface ButtonProps {
    type: "button" | "submit" | "reset";
    label: string;
}

const Button = ({ type, label }: ButtonProps) => {
    return (
        <button type={type}>
            {label}
        </button>
    )
}

export default Button;