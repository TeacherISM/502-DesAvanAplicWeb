import React, { useState } from 'react';
import InputField from './input_field';
import Button from './button';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = (): void => {
    if (username === 'admin' && password === '1234') {
      console.log('Login correcto - Admin');
      setErrorMessage('Bienvenido, Admin');
      setTimeout(() => {
        window.location.href = '/dashboard'; // Redirige al dashboard después de 1 segundo
      }, 1000);
    } else if (username === 'user' && password === 'abcd') {
      console.log('Login correcto - User');
      setErrorMessage('Bienvenido, Usuario');
      setTimeout(() => {
        window.location.href = '/dashboard'; // Redirige al dashboard después de 1 segundo
      }, 1000);
    } else {
      setErrorMessage('Credenciales incorrectas');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <InputField
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <Button label="Submit" onClick={handleSubmit} />
      <br />
      <a href="../class3/A01782557/dashboard.tsx">
        <button style={{ marginTop: '1rem' }}>Inicio</button>
      </a>
      <br />

      {/* Mostrar mensaje de error o bienvenida */}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Login;
