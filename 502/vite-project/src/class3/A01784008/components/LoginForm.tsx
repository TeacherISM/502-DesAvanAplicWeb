import { useState, FormEvent } from 'react';
import '../../../class2/A01784008/App.tsx';
import InputField from '../../../class2/A01784008/components/InputField';
import Button from '../../../class2/A01784008/components/Button';

type Props = {
  onLoginSuccess: () => void;
};

export default function LoginForm({ onLoginSuccess }: Props) {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    setTimeout(() => {
      if (usuario === 'ivan' && contrasena === 'admin') {
        onLoginSuccess();
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
