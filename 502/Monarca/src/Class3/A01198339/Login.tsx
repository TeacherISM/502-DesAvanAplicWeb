import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

interface LoginProps {
    onLogin: (username: string, password: string) => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [user, setUser] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
        onLogin (user.username, user.password)
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <h1>Login Page</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <InputField label="Username" name="username" type="text" handleChange={handleChange} />
        <InputField label="Password" name="password" type="password" handleChange={handleChange} />
        <Button type="submit" label={loading ? 'Loading...' : 'Login'} />
      </form>
    </>
  );
};

export default Login;
