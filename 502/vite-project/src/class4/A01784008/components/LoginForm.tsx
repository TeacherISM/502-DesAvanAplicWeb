import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../../class2/A01784008/components/InputField';
import Button from '../../../class2/A01784008/components/Button';
import '../../../class2/A01784008/App.tsx';

export default function LoginForm() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    setTimeout(() => {
      if (usuario === 'ivan' && contrasena === 'admin') {
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/dashboard');
      } else {
        setError(true);
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <InputField
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Contraseña"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
      />
      {error && <p className="error">Credenciales incorrectas</p>}
      {loading && <p className="loading">Procesando login...</p>}
      <Button label="Ingresar" type="submit" />
    </form>
  );
}
