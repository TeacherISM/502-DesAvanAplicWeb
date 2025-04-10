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
      heading = "Dashboard de Aministrador";
      description = "Dashboard de usuarios con poderes administrativos";
      break;
    case "manager":
      heading = "Dashboard de Manager";
      description = "Dashboard de usuarios aprobadores";
      break;
    default:
      heading = "Dashboard de Empleado";
      description = "Dashboard para empleados en general";
      break;
  }

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">{heading}</h1>
      <p className="dashboard-description">{description}</p>
    </div>
  );
};

export default Dashboard;