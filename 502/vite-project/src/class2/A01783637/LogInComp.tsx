import React, { useState } from 'react';
import InputField from './Components/InputField';
import Button from './Components/Button';
import "/src/App.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          name="username" // Asegúrate de que este nombre esté bien configurado
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
        />
        <InputField
          name="password" // Asegúrate de que este nombre esté bien configurado
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
        <Button label="Submit" type="submit" />
      </form>
    </div>
  );
};

export default Login;
