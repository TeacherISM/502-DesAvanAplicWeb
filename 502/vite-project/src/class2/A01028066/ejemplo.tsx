import React, { useReducer } from 'react';
import '../../App.css'; 

// Define la estructura del estado que maneja useReducer
interface State {
  username: string;
  email: string;
  showCard: boolean;
}

// Estado inicial para el formulario
const initialState: State = {
  username: '',
  email: '',
  showCard: false,
};

// Función reductora que actualiza el estado según la acción recibida
function reducer(state: State, action: { type: string; payload?: string }): State {
  switch (action.type) {
    case 'SET_USERNAME': // Actualiza el nombre de usuario
      return { ...state, username: action.payload || '' };
    case 'SET_EMAIL': // Actualiza el correo electrónico
      return { ...state, email: action.payload || '' };
    case 'SHOW_CARD': // Muestra la tarjeta con los datos
      return { ...state, showCard: true };
    default:
      return state; // Si no reconoce la acción, devuelve el mismo estado
  }
}

// Función para validar el formato del correo electrónico
const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const EjemploPage: React.FC = () => {
  // useReducer para manejar el estado del formulario
  const [state, dispatch] = useReducer(reducer, initialState);

  // Manejador del botón "Mostrar Datos"
  const handleClick = () => {
    // Verifica que ambos campos estén llenos
    if (!state.username.trim() || !state.email.trim()) {
      alert('Por favor completa todos los campos.');
      return;
    }
    // Verifica que el correo sea válido
    if (!isValidEmail(state.email)) {
      alert('Por favor ingresa un correo electrónico válido.');
      return;
    }
    // Muestra la tarjeta con los datos
    dispatch({ type: 'SHOW_CARD' });
  };

  return (
    <div className="container">
      <h1>Demo: Solicitud de Viaje</h1>

      {/* Campo de entrada para nombre de usuario */}
      <input
        type="text"
        placeholder="Ej. usuario123"
        value={state.username}
        onChange={(e) =>
          dispatch({ type: 'SET_USERNAME', payload: e.target.value })
        }
        className="input"
      />

      {/* Campo de entrada para correo electrónico */}
      <input
        type="email"
        placeholder="Ej. correo@ejemplo.com"
        value={state.email}
        onChange={(e) =>
          dispatch({ type: 'SET_EMAIL', payload: e.target.value })
        }
        className="input"
      />

      {/* Botón que muestra la tarjeta con los datos */}
      <button onClick={handleClick}>Mostrar Datos</button>

      {/* Si showCard es true, se muestra la tarjeta */}
      {state.showCard && (
        <div
          className="dashboard"
          onClick={() => console.log('Card clicked')}
        >
          <h2>Solicitud de viaje</h2>
          <p>
            <strong>Usuario:</strong> {state.username}
          </p>
          <p>
            <strong>Correo:</strong> {state.email}
          </p>
          <p>
            <strong>Fecha:</strong> {new Date().toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default EjemploPage;
