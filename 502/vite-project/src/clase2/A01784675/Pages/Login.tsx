import React, { useState, useEffect } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';

const Login: React.FC = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setLoading(true);
    setError('');
    setTimeout(() => {
      if (form.username === 'admin' && form.password === 'password') {
        console.log('Login successful');
      } else {
        setError('Invalid username or password');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold">Login</h1>
      {error && <p className="text-red-500">{error}</p>}
      <InputField
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
      />
      <InputField
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />
      <Button label={loading ? 'Loading...' : 'Submit'} onClick={handleSubmit} />
    </div>
  );
};

export default Login;
