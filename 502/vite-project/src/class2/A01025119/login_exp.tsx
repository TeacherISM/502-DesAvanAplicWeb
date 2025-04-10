import { useState, useEffect } from 'react';
import InputField from '../../class2/A01025119/Input.tsx';
import Button from '../../class2/A01025119/Button.tsx';

const LoginEx = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  useEffect(() => {
    console.log(`Username changed to: ${username}`);
  }, [username]);

  useEffect(() => {
    console.log(`Password changed to: ${password}`);
  }, [password]);

  return (
    <div style={styles.container}>
      <h1>Login</h1>

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
        label="Submit"
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
};

export default LoginEx;
