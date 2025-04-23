import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// COMPONENTES DE TU PROYECTO
import LoginForm from './components/LoginForm';
import TravelRequestList from '../../class4/A01784008/components/TravelRequestList';
import TravelRequestFetcher from '../../class4/A01784008/components/TravelRequestFetcher';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <h1>Class 5: Form Handling and Validation</h1>

        <Routes>
          {/* LOGIN */}
          <Route path="/login" element={<LoginForm />} />

          {/* HOC - Dashboard con withAuth */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Render Props */}
          <Route
            path="/requests-render"
            element={
              <TravelRequestFetcher
                render={({ travelRequests, loading, error }: { travelRequests: { id: string; destination: string }[]; loading: boolean; error: Error | null }) => {
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
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
