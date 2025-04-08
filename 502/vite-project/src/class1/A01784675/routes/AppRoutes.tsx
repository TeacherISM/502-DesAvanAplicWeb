import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../class1/A01784675/Pages/Login';
import Dashboard from '../class1/A01784675/Pages/Dashboard';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;

