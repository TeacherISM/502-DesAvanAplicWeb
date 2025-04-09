import { useState } from 'react';
import LoginForm from './components/LoginForm';
import Counter from './components/Counter';
import UserData from './components/UserData';
import TravelReducerForm from './components/TravelReducerForm.tsx';
import Navbar from '../../class2/A01784008/components/NavbarLB';
import '../../class2/A01784008/App.tsx';
import './App.css';

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    return (
      <div className="app-container">
        <Navbar />
        <h1>Clase 3: React Hooks</h1>
  
        {!isLoggedIn && (
          <>
            <h3>ctrl + a para ver tus credenciales</h3>
            <div className='credenciales'>
              <p>Usuario = ivan</p>
              <p>Contraseña = admin</p>
            </div>
          </>
        )}
  
        {!isLoggedIn ? (
          <LoginForm onLoginSuccess={() => setIsLoggedIn(true)} />
        ) : (
          <>
            <h2>¡Bienvenido!</h2>
            <div className="layout-horizontal">
              <Counter />
              <UserData />
              <TravelReducerForm />
            </div>
          </>
        )}
      </div>
    );
  }
  