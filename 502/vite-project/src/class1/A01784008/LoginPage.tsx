import { ChangeEvent, FC, useState } from 'react';

interface Credenciales {
  usuario: string;
  contrasena: string;
}

const LoginPage: FC = () => {
  const [credenciales, setCredenciales] = useState<Credenciales>({
    usuario: '',
    contrasena: '',
  });

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) =>
    setCredenciales((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = () => {
    const { usuario, contrasena } = credenciales;
    console.log(`Usuario ingresado: ${usuario}\nContraseña ingresada: ${contrasena}`);
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
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
