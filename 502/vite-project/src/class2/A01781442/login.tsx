import React, { useState } from 'react';
import InputField from './form.tsx';
import Button from './button.tsx';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (): void => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="Center">
      <h1>Login</h1>
      <InputField
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      />
      <Button label="Submit" onClick={handleSubmit} />
      <a href='/src/class1/A01781442/index.html'>
      <br /><br />
      Regresar a Menú
      </a>
    </div>
  );
};

export default Login;
