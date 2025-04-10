import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Actualiza el estado al escribir en el input de usuario
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  // Actualiza el estado al escribir en el input de contraseña
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // Maneja el submit del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      alert('Por favor, ingresa usuario y contraseña');
      return;
    }
    onLogin(username, password);
    alert(`Se ha enviado el formulario para el usuario: ${username}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-yellow-100">
      <div className="login-container bg-white p-10 rounded-md shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Usuario"
            name="username"
            type="text"
            placeholder="Ingresa tu usuario"
            value={username}
            onChange={handleUsernameChange}
          />
          <InputField
            label="Contraseña"
            name="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button type="submit" text="Iniciar sesión" />
        </form>
      </div>
    </div>
  );
};

export default Login;
