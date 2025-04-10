import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h2>Lisette Melo Reyes</h2>

      <div className="button">
        <button onClick={() => window.location.href = '/src/class1/L03535511/index.html'}>
          Clase 1
        </button>
      </div>

      <div className="button">
        <Link to="/clase2">
          <button>Clase 2</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
