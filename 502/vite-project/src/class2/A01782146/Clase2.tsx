import { useState } from "react";
import "/src/App.css";

interface Clase2Props {
  onLoginSuccess: () => void;
}

const Clase2 = ({ onLoginSuccess }: Clase2Props) => {
  // Credenciales estáticas que funcionan:
  // Usuario: admin
  // Contraseña: admin123

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Usuario:", username);
    console.log("Contraseña:", password);
    if (username === "admin" && password === "admin123") {
      // Invoca la función para cambiar de pantalla
      onLoginSuccess();
    } else {
      alert("Credenciales inválidas. Por favor, inténtalo de nuevo.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Iniciar sesión (Clase2)</h1>
      {/* Información de credenciales estáticas para pruebas */}
      <p>
        <strong>Credenciales estáticas:</strong> Usuario: <em>admin</em>,
        Contraseña: <em>admin123</em>
      </p>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Usuario:{" "}
            <input
              type="text"
              value={username}
              placeholder="Ingresa el usuario"
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Contraseña:{" "}
            <input
              type="password"
              value={password}
              placeholder="Ingresa la contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      <br />
      <a href="/">Regresar a la página principal</a>
    </div>
  );
};

export default Clase2;
