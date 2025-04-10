import { useState } from "react";
import InputField from "./input_field";
import Button from "./button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = () => {
    setError("");
    setMessage("");

    if (!validateEmail(email)) {
      setError("Por favor, ingresa un correo válido.");
      return;
    }

    if (!password) {
      setError("La contraseña es obligatoria.");
      return;
    }

    // Simular login
    setTimeout(() => {
      if (email === "admin@example.com" && password === "password") {
        setMessage("Datos válidos");
        setError("");
      } else {
        setError("Correo o contraseña incorrectos");
        setMessage("");
      }
    }, 500);
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}

      <InputField
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <InputField
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <Button onClick={handleSubmit}>Iniciar sesión</Button>
    </div>
  );
};

export default Login;
