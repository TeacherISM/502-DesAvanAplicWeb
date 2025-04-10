import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const LoginComponent = () => {
  // Credenciales estáticas de prueba:
  // Username: admin
  // Password: admin123
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    if (username === "admin" && password === "admin123") {
      alert("Login exitoso!");
    } else {
      alert("Credenciales inválidas. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Trabajo de Clase2</h1>
      <h2>Login con useState y componentes</h2>
      <p>
        <strong>Credenciales estáticas:</strong> Username: <em>admin</em>,
        Password: <em>admin123</em>
      </p>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Username:{" "}
            <Input
              type="text"
              placeholder="Ingresa el nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Password:{" "}
            <Input
              type="password"
              placeholder="Ingresa la contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <Button type="submit" text="Login" />
      </form>
      <br />
      <button
        onClick={() => {
          window.location.href = "/src/class1/A01782146/explorador/index.html";
        }}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "4px",
          backgroundColor: "#3b82f6",
          color: "#fff",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Regresar al menú
      </button>
    </div>
  );
};

export default LoginComponent;
