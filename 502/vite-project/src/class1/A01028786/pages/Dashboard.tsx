import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // Función de fetch usando async/await y template literals
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const result = await response.json();
      setData(result);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
    setLoading(false);
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>Bienvendio</p>

      {data && (
        <div className="data-container">
          <h2>Data from API:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
      <br></br>
      <br></br>
      <button onClick={fetchData} className="fetch-button">
        {loading ? "Loading..." : "Fetch Data"}
      </button>
    </div>
  );
};

export default Dashboard;
