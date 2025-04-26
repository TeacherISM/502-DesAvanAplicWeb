import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '../../class1/A01784238/index.css'
import SimpleCounter from './SimpleCounter'
import SimpleFetch from './SimpleFetch'
import TravelForm from './TravelForm'
import Login from './LoginForm'

const App = () => {
    // Estado simple para controlar si el usuario ha iniciado sesión
    // se coloca en el App solo para demostración
    const [loggedUser, setLoggedUser] = useState(false);

    // Función que maneja el inicio de sesión
    const handleLogin = () => {
        setLoggedUser(true);
        console.log("Usuario ha iniciado sesión");
    };

    // Función para cerrar sesión
    const handleLogout = () => {
        setLoggedUser(false);
        console.log("Usuario ha cerrado sesión");
    };

    return (
        <StrictMode>
            <h2>Using useState Example</h2>
            <SimpleCounter />

            <h2>Using useEffect Example</h2>
            <SimpleFetch />

            <h2>Login Form using useReducer</h2>
            <Login onClickFunction={handleLogin} />

            {/* Botón de logout sólo visible cuando el usuario ha iniciado sesión */}
            {loggedUser && (
                <button
                    onClick={handleLogout}
                    style={{ margin: '10px 0', padding: '5px 10px' }}
                >
                    Cerrar Sesión
                </button>
            )}

            {loggedUser ? (
                <>
                    <h2>Welcome to travel form</h2>
                    <TravelForm
                        onClick={() => alert("Gracias por subir tu solicitud de viaje, recibirás una notificación cuando su estado esté disponible")}
                    />
                </>
            ) : (
                <div style={{
                    padding: '20px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    backgroundColor: '#f9f9f9',
                    textAlign: 'center',
                    color: 'black'
                }}>
                    Por favor, inicia sesión para acceder al formulario de solicitud de viaje.
                </div>
            )}
        </StrictMode>
    );
};

createRoot(document.getElementById('root')!).render(<App />);

export default App;