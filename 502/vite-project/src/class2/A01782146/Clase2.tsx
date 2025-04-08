import { useState } from "react";
import "/src/App.css";

interface Clase2Props {
  onLoginSuccess: () => void;
}

const Clase2 = ({ onLoginSuccess }: Clase2Props) => {
  // Static credentials that work:
  // Username: admin
  // Password: admin123

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    if (username === "admin" && password === "admin123") {
      alert("Login successful!");
      // Invoca la función para cambiar de pantalla
      onLoginSuccess();
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Login (and Class2 Work)</h1>
      {/* Información de credenciales estáticas para pruebas */}
      <p>
        <strong>Static credentials:</strong> Username: <em>admin</em>, Password:{" "}
        <em>admin123</em>
      </p>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Username:{" "}
            <input
              type="text"
              value={username}
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Password:{" "}
            <input
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
      <br />
      <a href="/">Regresar al menú</a>
    </div>
  );
};

export default Clase2;
