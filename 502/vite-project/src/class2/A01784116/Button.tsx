
interface info {label:string; onClick: () => void}

const Button = ({ label, onClick }: info) => {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white' }}>
      {label}
    </button>
  );
};

export default Button;