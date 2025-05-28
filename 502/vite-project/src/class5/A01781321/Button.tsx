interface ButtonProps {
    type: "submit" | "button" | "reset";
    label: string;
  }


const Button = ({type,label}: ButtonProps) => {
  return (
    <button type={type}> {label}</button>
  )
}

export default Button;