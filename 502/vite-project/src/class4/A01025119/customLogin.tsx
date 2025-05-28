import { useState, useEffect } from 'react';
import InputField from '../../class2/A01025119/Input.tsx';
import Button from '../../class2/A01025119/Button.tsx';
import LoginSuccess from './loginSucess.tsx';
import LoginFailed from './loginFail.tsx';

const customLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [loginState, setLoginState] = useState<'idle' | 'success' | 'fail'>('idle');

  const validate = (username: string, password: string): string => {
    if (!username || !password) return 'Please fill all fields';
    return '';
  };

  const handleSubmit = () => {
    const validationError = validate(username, password);

    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError('');

    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        setLoginState('success');
      } else {
        setLoginState('fail');
      }
      setLoading(false);
    }, 1000);
  };

  const handleBack = () => {
    setUsername('');
    setPassword('');
    setError('');
    setLoginState('idle');
  };

  useEffect(() => {
    if (error) {
      console.warn('Login error:', error);
    }
  }, [error]);

  // Render conditional views
  if (loginState === 'success') {
    return <LoginSuccess username={username} onBack={handleBack} />;
  }

  if (loginState === 'fail') {
    return <LoginFailed onBack={handleBack} />;
  }

  // Default login form view
  return (
    <div style={styles.container}>
      <h1>Login</h1>
      {error && <p style={styles.error}>{error}</p>}

      <InputField
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <InputField
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        label={loading ? 'Loading...' : 'Submit'}
        onClick={handleSubmit}
      />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textAlign: 'center' as const,
  },
  error: {
    color: 'red',
    fontSize: '14px',
  },
};

export default customLogin;
