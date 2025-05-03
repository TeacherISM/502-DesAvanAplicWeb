import React, { useState } from 'react';
import LogInComp from '../../../class2/A01783637/LogInComp'; // Ajusta la ruta a tu archivo LogInComp
import TravelRequestForm from '../../../class3/A01783637/TravelRequestForm'; // Ajusta la ruta a tu archivo TravelRequestForm

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Estado para simular el login
  
  // Función para cambiar el estado de login (puedes cambiar la lógica según el comportamiento real de tu aplicación)
  const handleLogin = () => {
    setIsLoggedIn(true);  // Cambia el estado a "loggeado"
  };

  return (
    <div className="App">
      <h1 data-testid>Welcome to the Travel Request System</h1>

      {/* Si el usuario está logueado, muestra el formulario de solicitud de viaje */}
      {isLoggedIn ? (
        <TravelRequestForm />  // Muestra el formulario de solicitud de viaje
      ) : (
        // Si no está logueado, muestra el formulario de login
        <LogInComp onLogin={handleLogin} />  // Pasa la función de login al componente de login
      )}
    </div>
  );
};

export default App;
