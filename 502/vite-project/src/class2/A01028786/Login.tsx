import React, { useState } from "react";
import InputField from "./components/InputField";
import Button from "./components/Button";
import Card from "./components/Card";
import "./Login.css";

// Componente principal de inicio de sesión
const Login: React.FC = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  // Manejador para enviar los datos de inicio de sesión
  const enviarCredenciales = (): void => {
    console.log("Username:", user);
    console.log("Password:", pass);
  };

  return (
    <div className="container">
      <h1 className="title">Login</h1>

      {/* Campo para ingresar el nombre de usuario */}
      <InputField
        type="text"
        placeholder="Username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      {/* Campo para ingresar la contraseña */}
      <InputField
        type="password"
        placeholder="Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />

      {/* Botón para enviar la información */}
      <Button label="Submit" onClick={enviarCredenciales} />

      {/* Sección con una tarjeta informativa */}
      <h2 className="card-title">Tarjeta de Solicitud de Viaje</h2>
      <Card
        title="Viaje a Acapulco"
        description="Solicitud para un viaje de 3 días"
        date="2025-05-08"
        onClick={() => console.log("Tarjeta seleccionada!")}
      />
    </div>
  );
};

export default Login;
