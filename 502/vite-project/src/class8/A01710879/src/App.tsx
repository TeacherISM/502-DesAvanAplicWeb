import React, { useState } from 'react';
import LoginPage from '../../../class6/A01783704/LogInPage'; 
import TravelRequestForm from './TravelRequestForm'

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1 data-testid="welcome">Welcome to the Travel Request System</h1>
      {isLoggedIn ? (
        <TravelRequestForm data-testid="travel-form" />
      ) : (
        <LoginPage onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
};

export default App;
