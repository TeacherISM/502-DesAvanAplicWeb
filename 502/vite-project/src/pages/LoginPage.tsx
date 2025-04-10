import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Solo acepta el usuario "lis" y contraseña "123"
    if (username === 'lis' && password === '123') {
      localStorage.setItem('isLoggedIn', 'true'); // Guardamos login
      onLogin();
      navigate('/dashboard');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        className="input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="input"
      />
      <div className="button">
        <button type="submit" className="button">Login</button>
      </div>
    </form>
  );
};

export default LoginPage;
