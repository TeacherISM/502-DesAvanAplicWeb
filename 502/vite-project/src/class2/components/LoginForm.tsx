import { FormEvent, useState } from 'react';
import InputField from './InputField';
import Button from './Button';

interface LoginFormProps {
  onLogin: (email: string, role: string) => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes('@') || role.trim() === '') {
      setError('Por favor, introduce un correo válido y un rol.');
      return;
    }
    setError('');
    onLogin(email, role);
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', textAlign: 'center' }}>Login con Rol</h3>
      <form onSubmit={handleSubmit}>
        <InputField
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Correo Electrónico"
        />
        <InputField
          type="text"
          placeholder="admin / user / guest"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          label="Rol"
        />
        {error && <p style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '0.5rem' }}>{error}</p>}
        <div style={{ marginTop: '1.5rem' }}>
          <Button label="Iniciar Sesión" type="submit" variant="primary" fullWidth />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
