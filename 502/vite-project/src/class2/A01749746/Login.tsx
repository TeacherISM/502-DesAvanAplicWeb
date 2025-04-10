import React, { useState } from "react";
import InputField from "./components/InputField";
import Button from "./components/Button";
import Card from "./components/Card";
import "./Login.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <InputField
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button label="Submit" onClick={handleSubmit} />

      <h2 className="card">Ejemplo del coponente Card</h2>
      <Card
        title="Reembolso"
        date="2025-02-23"
        description="Solicitud."
        onClick={() => console.log("Click")}
      />
    </div>
  );
};

export default Login;
