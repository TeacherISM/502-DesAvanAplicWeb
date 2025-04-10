import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Clase2 from './class2/A01028066/ejemplo';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <h1>Welcome</h1>

        <Routes>
          {!isLoggedIn && (
            <Route path="*" element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} />
          )}

          {isLoggedIn && (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/clase2" element={<Clase2 />} />
              <Route
                path="/"
                element={
                  <div> 
                    <div className="button">
                      <button onClick={() => window.location.href = '/src/class1/L03535511/index.html'}>
                        Clase 1
                      </button>
                    </div>
                    <div className="button">
                      <Link to="/clase2"><button>Clase 2</button></Link>
                    </div>

                  </div>
                }
              />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
