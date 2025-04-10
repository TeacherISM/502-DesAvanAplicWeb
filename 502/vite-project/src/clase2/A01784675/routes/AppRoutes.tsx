import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import TravelRequestForm from '../Pages/TravelRequestForm';

const AppRoutes: React.FC = () => {
  const [role, setRole] = useState<'admin' | 'manager' | 'employee' | null>(null);

  const handleLogin = (username: string, password: string) => {
    const normalized = username.toLowerCase(); 
  
    if (normalized === 'admin') setRole('admin');
    else if (normalized === 'manager') setRole('manager');
    else setRole('employee');
  };
  
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      
      {/* 👇 Protegemos Dashboard: solo muestra si hay rol */}
      <Route
      path="/dashboard"
      element={role ? <Dashboard role={role} /> : <Navigate to="/login" replace />}
      />

      <Route path="/travel-request" element={<TravelRequestForm />} />
    </Routes>
  );
};

export default AppRoutes;
