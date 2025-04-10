import React, { useState } from 'react';
import InputField from './form.tsx';
import Button from './button.tsx';
import '/src/class1/A01781442/index.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (): void => {
    console.log('Username:', username);
    console.log('Password:', password);
    setSubmitted(true); 
  };

  return (
    <div className="Center">
      <div className="LoginBox">
        <h1 className="LoginTitle">Login</h1>
        <div className="LoginForm">
          <InputField
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUsername(e.target.value);
              setSubmitted(false); 
            }}
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
              setSubmitted(false); 
            }}
          />
          <Button label="Submit" onClick={handleSubmit} />
        </div>

        {/* Mensaje de confirmación */}
        {submitted && (
          <p style={{ marginTop: '1rem', color: 'green', textAlign: 'center' }}>
            Usuario y contraseña impresos en consola ✔️
          </p>
        )}

        <a href="/src/class1/A01781442/index.html" style={{ marginTop: '1.5rem', display: 'block', textAlign: 'center' }}>
          Regresar a Menú
        </a>
      </div>
    </div>
  );
};

export default Login;
