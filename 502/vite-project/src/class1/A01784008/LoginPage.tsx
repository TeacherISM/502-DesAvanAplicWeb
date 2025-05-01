import { ChangeEvent, FC, useState } from "react";

interface Credenciales {
  usuario: string;
  contrasena: string;
}

const LoginPage: FC = () => {
  const [credenciales, setCredenciales] = useState<Credenciales>({
    usuario: "",
    contrasena: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setCredenciales((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing again
    if (error) setError(null);
  };

  const handleSubmit = () => {
    const { usuario, contrasena } = credenciales;

    // Simple validation
    if (!usuario || !contrasena) {
      setError("Por favor ingrese usuario y contraseña");
      return;
    }

    // Mock authentication - in a real app this would be an API call
    if (usuario === "admin" && contrasena === "password123") {
      console.log(
        `Usuario ingresado: ${usuario}\nContraseña ingresada: ${contrasena}`,
      );
      // Success handling would go here (e.g., redirect, set auth state)
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>

      {error && (
        <div className="error-message" data-testid="login-error">
          {error}
        </div>
      )}

      <input
        type="text"
        name="usuario"
        placeholder="Usuario"
        value={credenciales.usuario}
        onChange={handleChange}
      />
      <input
        type="password"
        name="contrasena"
        placeholder="Contraseña"
        value={credenciales.contrasena}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Ingresar</button>
    </div>
  );
};

export default LoginPage;
