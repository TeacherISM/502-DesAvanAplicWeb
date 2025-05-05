// A01025119/Dashboard.tsx
import React, { useContext } from "react";
import "./Dashboard.css";
import { UserContext } from "./UserContext";

const ContextDashboard: React.FC = () => {
  const { user } = useContext(UserContext);

  let heading = "";
  let description = "";

  switch (user.role) {
    case "admin":
      heading = "Admin Dashboard";
      description = "You have administrative privileges.";
      break;
    case "manager":
      heading = "Manager Dashboard";
      description = "You can manage and approve travel requests.";
      break;
    default:
      heading = "Employee Dashboard";
      description = "Welcome to the employee portal!";
  }

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">{heading}</h1>
      <p className="dashboard-description">{description}</p>

      <div className="dashboard-info">
        {user.role === "employee" && (
          <div>
            <h2 className="text-xl font-semibold">Employee View</h2>
            <p>Submitted Travel Requests</p>
          </div>
        )}
        {user.role === "manager" && (
          <div>
            <h2 className="text-xl font-semibold">Manager View</h2>
            <p>Pending Travel Requests</p>
          </div>
        )}
        {user.role === "admin" && (
          <div>
            <h2 className="text-xl font-semibold">Admin View</h2>
            <p>User Management</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContextDashboard;
