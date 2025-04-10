// src/classes/class3/App.tsx
import React, { useState } from 'react';
// Ajusta estas rutas para que apunten a tu Clase 1 original
import Login from '../class1/Login';
import Dashboard from '../class1/Dashboard';

const App: React.FC = () => {
  // Manejo del rol y estado de autenticación
  const [role, setRole] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Función para manejar el login
  const handleLogin = (username: string, password: string) => {
    // Valida credenciales (ejemplo básico)
    if (username === 'admin' && password === '1234') {
      setRole('admin');
      setIsLoggedIn(true);
    } else if (username === 'user' && password === '1234') {
      setRole('user');
      setIsLoggedIn(true);
    } else {
      alert('Credenciales inválidas');
    }
  };

  // Función para manejar el logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setRole(null);
  };

  return (
    <div>
      {!isLoggedIn ? (
        // Muestra el formulario de login
        <Login onLogin={handleLogin} />
      ) : (
        // Muestra el dashboard (y le pasamos el rol y la acción de logout)
        <Dashboard userRole={role} onLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;
