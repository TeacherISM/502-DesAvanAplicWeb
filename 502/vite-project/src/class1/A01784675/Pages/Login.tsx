import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';

const Login: React.FC = () => {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(`Username: ${form.username}`);
    console.log(`Password: ${form.password}`);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold">Login</h1>
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
      <Button label="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default Login;
