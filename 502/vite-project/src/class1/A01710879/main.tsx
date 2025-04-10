// src/classes/class1/main.tsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import Login from './login';
import Dashboard from './dashboard';

import './login.css';

function Class1App() {
  // Controla si el usuario está logueado
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Maneja el evento de login
  const handleLogin = (username: string, password: string) => {

    if (username === 'ramiro' && password === '1234') {
      setIsLoggedIn(true);
    } else {
      alert('Credenciales inválidas');
    }
  };

  return (
    <React.StrictMode>
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </React.StrictMode>
  );
}

// Montar en el div#root definido en index.html
ReactDOM.createRoot(document.getElementById('root')!).render(<Class1App />);
