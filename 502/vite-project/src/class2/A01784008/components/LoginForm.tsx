import { useState, FormEvent } from 'react';
import InputField from './InputField';
import Button from './Button';

type Props = {
  onLoginSuccess: () => void;
};

export default function LoginForm({ onLoginSuccess }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (email === 'ivan' && password === 'admin') {
      onLoginSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <InputField
        type="text"
        placeholder="Usuario"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="error">Usuario o contraseña incorrectos</p>}
      <Button label="Ingresar" type="submit" />
    </form>
  );
}
