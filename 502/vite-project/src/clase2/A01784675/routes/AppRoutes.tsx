import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import TravelRequestForm from '../Pages/TravelRequestForm'; 

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/travel-request" element={<TravelRequestForm />} /> 
    </Routes>
  );
};

export default AppRoutes;
