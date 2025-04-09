import React, { useState } from 'react';
import InputField from './components/InputField';
import Button from './components/Button';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        console.log('Login successful');
        setError('');
      } else {
        setError('Invalid username or password');
      }
      setLoading(false); 
    }, 1000);
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
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
      <Button label={loading ? 'Loading...' : 'Submit'} onClick={handleSubmit} />
    </div>
  );
};

export default Login;
