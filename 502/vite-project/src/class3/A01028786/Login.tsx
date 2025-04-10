import React, { useState, useEffect } from "react";
import InputField from "../../class2/A01028786/components/InputField";
import Button from "../../class2/A01028786/components/Button";
import "./Login.css";

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  // Estado local
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Efecto para limpiar errores luego de un tiempo
  useEffect(() => {
    if (!error) return;

    const timer = setTimeout(() => setError(""), 3000);
    return () => clearTimeout(timer);
  }, [error]);

  // Manejo del submit
  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      let userRole: string | null = null;

      if (username === "admin" && password === "administrator") {
        userRole = "admin";
      } else if (username === "manage" && password === "manager") {
        userRole = "manager";
      } else if (username !== "admin" && username !== "manage" && password === "employee") {
        userRole = "employee";
      }

      if (userRole) {
        onLogin(userRole, password);
      } else {
        setError("Invalid username or password");
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>

      <div className="login-info">
        <p>
          <strong>Roles y Credenciales</strong>
        </p>
        <p>Admin: Usuario: admin | Contraseña: administrator</p>
        <p>Manager: Usuario: manage | Contraseña: manager</p>
        <p>Employee: Usuario: Cualquier usuario que no sea "admin" o "manage" | Contraseña: employee</p>
      </div>

      {error && <p className="error">{error}</p>}

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

      <Button
        label={loading ? "Loading..." : "Submit"}
        onClick={handleSubmit}
      />
    </div>
  );
};

export default Login;
