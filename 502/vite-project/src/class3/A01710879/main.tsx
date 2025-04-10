import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import Login from './login';
import Dashboard from './dashboard';

import './login.css';

function Class1App() {
  // Controla el estado de autenticación y el rol del usuario
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState<string | null>(null);

  // Maneja el evento de login
  const handleLogin = (username: string, password: string) => {
    // Validación de credenciales con roles:
    // Si el usuario ingresa "admin" y "1234", se le asigna rol "admin"
    // Si ingresa "user" y "1234", se le asigna rol "user"
    if (username.trim().toLowerCase() === 'admin' && password === '1234') {
      setRole('admin');
      setIsLoggedIn(true);
    } else if (username.trim().toLowerCase() === 'user' && password === '1234') {
      setRole('user');
      setIsLoggedIn(true);
    } else {
      alert('Credenciales inválidas');
    }
  };

  // Función para cerrar sesión
  const handleLogout = () => {
    setIsLoggedIn(false);
    setRole(null);
  };

  return (
    <React.StrictMode>
      {isLoggedIn ? (
        <Dashboard userRole={role} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </React.StrictMode>
  );
}

// Se monta la aplicación en el div con id="root" definido en index.html
ReactDOM.createRoot(document.getElementById('root')!).render(<Class1App />);
