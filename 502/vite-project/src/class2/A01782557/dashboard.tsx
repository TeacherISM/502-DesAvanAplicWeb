import React from 'react';

const Dashboard: React.FC = () => {
  const handleButtonClick = (button: string) => {
    alert(`Has hecho clic en el botón: ${button}`);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <button onClick={() => handleButtonClick('Botón 1')} style={{ margin: '10px' }}>
          Botón 1
        </button>
        <button onClick={() => handleButtonClick('Botón 2')} style={{ margin: '10px' }}>
          Botón 2
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
