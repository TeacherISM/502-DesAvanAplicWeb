import React, { useState, useEffect } from "react";
import InputField from "../../class2/A01749746/components/InputField";
import Button from "../../class2/A01749746/components/Button";
import "./Login.css";

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => setError(""), 3000);
      return () => clearTimeout(timeout);
    }
  }, [error]);

  const handleLoginClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      const validPassword = password === "password";

      if (username === "admin" && validPassword) {
        onLogin(username, password);
      } else if (username === "manager" && validPassword) {
        onLogin(username, password);
      } else if (username && validPassword) {
        onLogin("employee", password);
      } else {
        setError("Usuario o contraseña incorrectos");
      }

      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="container">
      <h2>Iniciar sesión</h2>
      {error && <p className="fail">{error}</p>}
      <InputField
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        label={isLoading ? "Cargando..." : "Entrar"}
        onClick={handleLoginClick}
      />
      <div className="info">
        <p><strong>Credenciales de prueba:</strong></p>
        <p>Admin: usuario = admin / contraseña = password</p>
        <p>Manager: usuario = manager / contraseña = password</p>
        <p>Empleado: cualquier otro usuario / contraseña = password</p>
      </div>
    </div>
  );
};

export default Login;
