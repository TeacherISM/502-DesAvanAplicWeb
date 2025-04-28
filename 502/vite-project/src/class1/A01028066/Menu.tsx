import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Clase1 from './Clase1'; 
import Clase2 from '../../class2/A01028066/App';
import Clase3 from '../../class3/App';
const Menu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) {
      setIsLoggedIn(true);
    } else {
      alert('Correo inválido');
    }
  };

  return (
    <BrowserRouter>
      <div className="clase1-container">
        <h1 className="clase1-title">Menú Milestone 1</h1>

        {!isLoggedIn ? (
          <form onSubmit={handleLogin} className="clase1-section">
            <h2>Iniciar Sesión</h2>
            <input
              className="clase1-input"
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="clase1-btn">Entrar</button>
          </form>
        ) : (
          <>
            <div className="clase1-section">
              <h2>Bienvenida, {email}</h2>
              <div className="menu-buttons" style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '1rem' }}>
                <Link to="/">Inicio</Link>
                <Link to="/clase1">Clase 1</Link>
                <Link to="/clase2">Clase 2</Link>
                <Link to="/clase3">Clase 3</Link>
              </div>    
            </div>
            <Routes>
              <Route path="/clase1" element={<Clase1 />} />
              <Route path="/clase2" element={<Clase2 />} />
              <Route path="/clase3" element={<Clase3 />} />
            </Routes>
          </>
        )}
      </div>
    </BrowserRouter>
  );
};

export default Menu;
