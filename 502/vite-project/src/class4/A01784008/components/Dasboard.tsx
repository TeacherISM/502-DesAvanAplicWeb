import React from 'react';
import withAuth from './withAuth';
import TravelRequestFetcher from './TravelRequestFetcher';
import './Dashboard.css';
import ExpenseForm from './ExpenseForm';
import TravelRequestForm from './TravelRequestForm';

const Dashboard: React.FC = () => {
    return (
      <div className="dashboard-container">
        <h2>Welcome to the Dashboard!</h2>
  
        {/* Sección de Render Props */}
        <section className="travel-section">
          <h3>Solicitudes de viaje (Render Props):</h3>
          <TravelRequestFetcher
          render={({ travelRequests, loading, error }) => {
            if (loading) return <p>Cargando solicitudes...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <ul className="travel-list">
                {travelRequests.map((req: any) => (
                  <li key={req.id}>Destino: {req.destination}</li>
                ))}
              </ul>
            );
          }}
        />
        </section>
  
        {/* Travel Request Form */}
        <section className="form-wrapper">
          <TravelRequestForm />
        </section>
  
        {/* Expense Form */}
        <section className="form-wrapper">
          <ExpenseForm />
        </section>
      </div>
    );
  };

export default withAuth(Dashboard);
