import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === 'admin' && password === '1234') {
      alert('¡Login exitoso!');
      onLogin(username, password);
    } else {
      alert('Credenciales inválidas');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Se aplica la clase personalizada para la tarjeta de login */}
      <div className="login-container">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Usuario"
            name="username"
            type="text"
            placeholder="Ingresa tu usuario"
            value={formData.username}
            onChange={handleChange}
          />
          <InputField
            label="Contraseña"
            name="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            value={formData.password}
            onChange={handleChange}
          />
          <Button type="submit" text="Ingresar" />
        </form>
      </div>
    </div>
  );
};

export default Login;
