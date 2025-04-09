import React, { useState } from 'react';
import InputField from '../../class2/A01784045/Components/InputField';
import Button from '../../class2/A01784045/Components/Botton';
import styles from '../../class2/A01784045/Login.module.css';
import Card from '../../class2/A01784045/Components/Card';

interface LoginFormData {
    username: string;
    password: string;
  }
  
  const Login: React.FC = () => {
    const [formData, setFormData] = useState<LoginFormData>({
      username: '',
      password: ''
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { type, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [type === 'password' ? 'password' : 'username']: value
      }));
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log(formData);
    };
  
    const handleCardClick = () => {
      console.log('Solicitud de viaje clicada');
    };
  
    return (
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <h1 className={styles.title}>Login</h1>
          <InputField type="text" placeholder="Username" value={formData.username} onChange={handleChange} />
          <InputField type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          <Button label="Login" onClick={handleSubmit} />
        </form>
  
        {/* Ejemplo de uso del componente Card */}
        <Card
          title="Viaje a Monterrey"
          description="Reunión con cliente importante"
          date="2025-04-10"
          onClick={handleCardClick}
        />
      </div>
    );
  };
  
  export default Login;
