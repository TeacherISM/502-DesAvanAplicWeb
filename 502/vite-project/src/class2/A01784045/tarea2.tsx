import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.type === "password" ? "password" : "username"]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10 p-4 shadow-md rounded">
      <InputField type="text" placeholder="Username" value={formData.username} onChange={handleChange} />
      <InputField type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      <Button label="Login" onClick={handleSubmit} />
    </form>
  );
};

export default Login;
