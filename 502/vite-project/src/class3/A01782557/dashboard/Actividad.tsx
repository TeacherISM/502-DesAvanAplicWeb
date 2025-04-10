import React from 'react';

const Dashboard: React.FC = () => {

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <button onClick={() => window.location.href = "/src/class1/A01782557/index.html"} style={{ margin: '10px' }}>
          Clase 1
        </button>
        <button onClick={() => window.location.href = "/src/class2/A01782557/index.html"} style={{ margin: '10px' }}>
          Clase 2
        </button>
        <button
            onClick={() => {
                window.location.href = "/src/class3/A01782557/index.html";
            }}
            style={{ margin: '10px' }}
        >
        Clase 3
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

