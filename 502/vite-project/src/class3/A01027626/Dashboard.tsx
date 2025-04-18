import React from "react";
import "./Dashboard.css";

interface DashboardProps {
  role: string;
}

const Dashboard: React.FC<DashboardProps> = ({ role }) => {
  let heading = "";
  let description = "";

  switch (role) {
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
      break;
  }

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">{heading}</h1>
      <p className="dashboard-description">{description}</p>
      <div className="dashboard-info">
        <p>
          <strong>Test Credentials:</strong>
        </p>
        <p>
          Admin:{" "}
          <span className="credential">username=admin / password=password</span>
        </p>
        <p>
          Manager:{" "}
          <span className="credential">
            username=manager / password=password
          </span>
        </p>
        <p>
          Employee:{" "}
          <span className="credential">
            username=any other username / password=password
          </span>
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
