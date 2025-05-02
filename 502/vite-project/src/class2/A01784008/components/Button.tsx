type ButtonProps = {
    label: string;
    type: 'button' | 'submit';
    onClick?: () => void;
  };
  
  export default function Button({ label, type }: ButtonProps) {
    return (
      <button className="button" type={type}>
        {label}
      </button>
    );
  }
  