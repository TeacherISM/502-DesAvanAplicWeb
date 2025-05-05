
interface info {title:string; description: string, date:string}


const Card = ({ title, description, date }: info) => {
  
  const cardStyle: React.CSSProperties = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
    backgroundColor: '#ccc',
  };


  // Internal onClick handler that shows an alert message
  const handleClick = () => {
    alert('Clicked');
  };

  return (
    <div
      style={cardStyle}
      onClick={handleClick}
    >
      <h2 style={{ color: '#000'}}>{title}</h2>
      <p style={{ color: '#333'}}>{description}</p>
      <p style={{ color: '#666', fontSize: '0.9em' }}>{date}</p>
    </div>
  );
};

export default Card;