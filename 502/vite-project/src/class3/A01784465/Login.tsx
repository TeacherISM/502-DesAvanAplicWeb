import { useState, useEffect } from 'react';
import InputField from './components/InputField';
import Button from './components/Button';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setError('');
    setLoading(true);
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        console.log('Login successful');
      } else {
        setError('Usuario o contraseña incorrectos');
      }
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    console.log('Login component mounted');
  }, []);

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <InputField
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button label={loading ? 'Cargando...' : 'Ingresar'} onClick={handleSubmit} />
    </div>
  );
};

export default Login;
