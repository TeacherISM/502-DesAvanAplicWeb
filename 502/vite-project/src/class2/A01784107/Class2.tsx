import React, { useState } from 'react';
import InputField from './InputField.tsx';
import Button from './Button.tsx';
import Card from './Card.tsx';
import './style.css';

interface FormComponentProps {
  onSubmit: (value: string) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({ onSubmit }) => {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) =>
      setForm(prev => ({ ...prev, [name]: value }));

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form Data:', form);
  };

  return (
      <div className="formContainer">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
              <InputField
                  type="text"
                  placeholder="Username"
                  value={form.username}
                  onChange={handleChange}
                  name="username"
              />
              <InputField
                  type="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  name="password"
              />
              <Button label="Login" onClick={handleSubmit} />
          </form>
          
          {/* Renderiza tu Card aquí */}
          <Card 
              title="Travel Request" 
              description="Flight to New York for a business meeting." 
              date="April 10, 2025" 
          />
      </div>
  );
};

export default FormComponent;
