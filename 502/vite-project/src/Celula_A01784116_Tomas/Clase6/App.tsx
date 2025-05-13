import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom"; // Use Outlet to render nested routes
import UserDashboard from "./UserDashboard";
import AdminPanel from "./AdminPanel";
import NotAuthorized from "./NotAuthorized"; // Page to show for unauthorized access
import ProtectedRoute from "./ProtectedRoute";

const Clase6: React.FC = () => {
  return (
    <div>
        <h3>Protected Routes:</h3>
        <p>/admin: only admins can access it.</p>
        <p>/employee: employees, managers and admins can access it.</p>
      <UserDashboard />
      {/* Define nested routes */}
      <Routes>
        <Route path="not-authorized" element={<NotAuthorized />} />

        {/* Protected Routes */}
        <Route
          path="admin"
          element={
            <ProtectedRoute allowedRoles={['admin']} redirectTo="/Clase6/not-authorized">
              <AdminPanel />
            </ProtectedRoute>
          }
        />

        {/* You can add other protected or regular routes */}
        <Route
          path="employee"
          element={
            <ProtectedRoute allowedRoles={['employee', 'manager', 'admin']} redirectTo="/Clase6/not-authorized">
              <div>
                <h2>Employee Dashboard</h2>
              </div>
            </ProtectedRoute>
          }
        />

        {/* Default Route for Clase6 */}
        <Route path="/" element={<div></div>} />
      </Routes>

      {/* Outlet to render nested routes */}
      <Outlet />
      <Link to="/" className="menu-button">
        Volver al Menú
      </Link>
    </div>
  );
};

export default Clase6;
