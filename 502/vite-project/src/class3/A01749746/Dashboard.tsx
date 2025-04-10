import React from "react";
import "./Dashboard.css";

interface Props {
  role: string;
}

const Dashboard: React.FC<Props> = ({ role }) => {
  const getTitle = () => {
    if (role === "admin") return "Panel de Administrador";
    if (role === "manager") return "Panel de Gerente";
    return "Panel de Empleado";
  };

  const getMessage = () => {
    switch (role) {
      case "admin":
        return "Tienes acceso completo al sistema.";
      case "manager":
        return "Puedes revisar y autorizar solicitudes.";
      default:
        return "Bienvenido al portal del personal.";
    }
  };

  return (
    <div className="container">
      <h2 className="title">{getTitle()}</h2>
      <p className="message">{getMessage()}</p>
      <section className="box">
        <p><strong>Credenciales de prueba:</strong></p>
        <ul>
          <li><span>Admin:</span> admin / password</li>
          <li><span>Manager:</span> manager / password</li>
          <li><span>Empleado:</span> cualquier otro usuario / password</li>
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
