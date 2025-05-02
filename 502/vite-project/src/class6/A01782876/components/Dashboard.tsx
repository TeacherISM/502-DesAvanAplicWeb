import React, { useContext } from "react";
import withAuth from "./withAuth";
import TravelRequestFetcher from "../../../class4/A01784008/components/TravelRequestFetcher";
import "./Dashboard.css";
import ExpenseForm from "../../../class4/A01784008/components/ExpenseForm";
import TravelRequestForm from "./TravelRequestForm";
import { UserContext } from "./UserContext";

const Dashboard: React.FC = () => {
  const { user } = useContext(UserContext);
  console.log("User role:", user.role);
  console.log("User context:", user);
  return (
    <div className="dashboard-container">
      <h2>Welcome to the Dashboard!</h2>

      {/* Sección de Render Props */}
      {user.role === "admin" && (
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
      )}

      {/* Travel Request Form */}
      {(user.role === "manager" || user.role === "employee") && (
        <section className="form-wrapper">
          <TravelRequestForm />
        </section>
      )}

      {/* Expense Form */}
      {user.role === "employee" && (
        <section className="form-wrapper">
          <ExpenseForm />
        </section>
      )}
    </div>
  );
};

export default withAuth(Dashboard);
