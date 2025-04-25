/*
 * Main application file that sets up routing, authentication, and role-based access control.
 *
 * Last edit: April 25, 2025
 * Authors: José Manuel García Zumaya
 */

import { useContext } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import { UserProvider, UserContext } from "./components/UserContext";
import ProtectedRoute from "./components/ProtectedRoute";

/*
 * Component: AuthRedirect
 * Redirects users based on their authentication status.
 * If authenticated, redirects to the dashboard.
 * If not authenticated, displays the login form and user role information.
 */
const AuthRedirect = () => {
  const { isLoggedIn } = useContext(UserContext);

  // Redirect to dashboard if the user is logged in
  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  // Show login form and user role information if not logged in
  return (
    <div>
      <LoginForm />

      {/* Information box with user credentials for testing */}
      <div
        style={{
          maxWidth: "600px",
          margin: "30px auto",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          border: "1px solid #ddd",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ color: "#333", marginBottom: "10px" }}>
          Prueba de acceso basado en roles
        </h3>

        <p style={{ marginBottom: "15px" }}>
          Intenta con las siguientes credenciales y observa cómo cambia el
          contenido según el rol del usuario:
        </p>

        {/* Table displaying hardcoded user credentials */}
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2", textAlign: "left" }}>
              <th style={{ padding: "8px", border: "1px solid #ddd" }}>
                Usuario
              </th>
              <th style={{ padding: "8px", border: "1px solid #ddd" }}>
                Email
              </th>
              <th style={{ padding: "8px", border: "1px solid #ddd" }}>
                Contraseña
              </th>
              <th style={{ padding: "8px", border: "1px solid #ddd" }}>Rol</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                John Doe
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                john@example.com
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                123456
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                solicitante
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                Jane Smith
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                jane@example.com
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                123456
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                aprobador
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                Alice Johnson
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                alice@example.com
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                123456
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                administrador
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

/*
 * Component: AppContent
 * Main content of the application, including navigation and routing.
 * Displays a navigation bar when the user is logged in.
 */
const AppContent = () => {
  const { user, isLoggedIn, logout } = useContext(UserContext);

  return (
    <div className="app-container">
      {/* Navigation bar for logged-in users */}
      {isLoggedIn && (
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem",
            backgroundColor: "#f0f0f0",
            marginBottom: "1rem",
          }}
        >
          <div>
            Usuario: <strong>{user?.name}</strong> | Rol:{" "}
            <strong>{user?.role}</strong>
          </div>
          <button
            onClick={logout}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Cerrar sesión
          </button>
        </nav>
      )}

      {/* Application routes */}
      <Routes>
        {/* Default route redirects based on authentication */}
        <Route path="/" element={<AuthRedirect />} />

        {/* Protected route for dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              allowedRoles={["solicitante", "aprobador", "administrador"]}
            >
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Route for access denied */}
        <Route path="/access-denied" element={<div>Acceso denegado</div>} />

        {/* Catch-all route redirects to default */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

/*
 * Component: App
 * Root component that wraps the application with routing and user context.
 */
const App = () => {
  return (
    <Router>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </Router>
  );
};

// Render the application
createRoot(document.getElementById("root")!).render(<App />);

export default App;
