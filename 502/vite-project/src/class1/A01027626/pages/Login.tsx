import React, { useState } from "react";
import "./Login.css";

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Arrow function para manejar el cambio de inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  // Se usa template literals para enviar datos para mensajes dinámicos
  const handleSubmit = () => {
    const { username, password } = credentials;
    if (!username || !password) {
      setError(`Please complete all fields.`);
      return;
    }
    // Template literal para hacer log in al usuario que intenta iniciar sesión
    console.log(`Trying to log in with user: ${username}`);
    setError("");
    onLogin(username, password);
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      {error && <p className="error">{error}</p>}
      <div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <button onClick={handleSubmit} className="submit-button">
        Submit
      </button>
    </div>
  );
};

export default Login;
