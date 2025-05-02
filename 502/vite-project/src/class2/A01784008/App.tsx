import { useState } from 'react'; import LoginForm from './components/LoginForm';
import TravelForm from './components/TravelForm';
import Navbar from './components/NavbarLB';
import './App.css';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app-container">
      <Navbar />
      <h1>Login para solicitante de viaje</h1>
      <h3>ctrl + a para ver tus credenciales</h3>
      <div className='credenciales'>
        <p>Usuario = ivan</p>
        <p>Contraseña = admin</p>
      </div>
      {!isLoggedIn ? (
        <LoginForm onLoginSuccess={() => setIsLoggedIn(true)} />
      ) : (
        <>
          <h2>Bienvenido Ivan!</h2>
          <TravelForm />
        </>
      )}
    </div>
  );
}
