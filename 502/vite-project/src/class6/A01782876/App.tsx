import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// COMPONENTES DE TU PROYECTO
import LoginForm from "./components/LoginForm";
import TravelRequestList from "../../class4/A01784008/components/TravelRequestList";
import TravelRequestFetcher from "../../class4/A01784008/components/TravelRequestFetcher";
import Dashboard from "./components/Dashboard";
import "./App.css";
import Login from "./components/Login";
import { UserProvider } from "./components/UserProvider";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <h1>Class 6: Role-Based Access Control (RBAC)</h1>
        <UserProvider>
          <Routes>
            {/* LOGIN */}
            <Route path="/class6/A01782876/login" element={<Login />} />

            {/* LOGIN FORM */}
            <Route
              path="/class6/A01782876/login-form"
              element={<LoginForm />}
            />

            {/* HOC - Dashboard con withAuth */}
            <Route path="/class6/A01782876/dashboard" element={<Dashboard />} />

            {/* Render Props */}
            <Route
              path="/class6/A01782876/requests-render"
              element={
                <TravelRequestFetcher
                  render={({
                    travelRequests,
                    loading,
                    error,
                  }: {
                    travelRequests: { id: string; destination: string }[];
                    loading: boolean;
                    error: Error | null;
                  }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error: {error.message}</p>;
                    return (
                      <ul>
                        {travelRequests.map((req: any) => (
                          <li key={req.id}>{req.destination}</li>
                        ))}
                      </ul>
                    );
                  }}
                />
              }
            />

            {/* PUNTO 3: Custom Hook */}
            <Route path="/requests-hook" element={<TravelRequestList />} />

            {/* REDIRECCIÓN DEFAULT */}
            <Route
              path="*"
              element={<Navigate to="/class6/A01782876/login" />}
            />
          </Routes>
        </UserProvider>
      </div>
    </Router>
  );
};

export default App;
