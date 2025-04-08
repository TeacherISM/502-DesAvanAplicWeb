import React, { useState } from "react";
import "./Login.css";

// Props esperadas por el componente de inicio de sesión
interface LoginProps {
  onLogin: (usuario: string, contraseña: string) => void;
}

// Componente funcional para la página de inicio de sesión
const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [formulario, setFormulario] = useState({
    username: "",
    password: "",
  });

  const [mensajeError, setMensajeError] = useState("");

  // Actualiza los campos del formulario a medida que el usuario escribe
  const actualizarCampo = (evento: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evento.target;
    setFormulario(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Verifica que los campos estén completos antes de enviar los datos
  const enviarFormulario = () => {
    const { username, password } = formulario;

    if (username.trim() === "" || password.trim() === "") {
      setMensajeError("Por favor, complete todos los campos.");
      return;
    }

    console.log(`Usuario ingresado: ${username}`); // Mostrar en consola para depuración
    setMensajeError(""); // Limpiar el mensaje de error si lo había
    onLogin(username, password);
  };

  return (
    <div className="login-container">
      <h1>Página de Inicio de Sesión</h1>

      {mensajeError && <p className="error">{mensajeError}</p>}

      <div>
        <input
          type="text"
          name="username"
          placeholder="Usuario"
          value={formulario.username}
          onChange={actualizarCampo}
          className="input-field"
        />
      </div>

      <div>
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formulario.password}
          onChange={actualizarCampo}
          className="input-field"
        />
      </div>

      <button onClick={enviarFormulario} className="submit-button">
        Iniciar sesión
      </button>
    </div>
  );
};

export default Login;
