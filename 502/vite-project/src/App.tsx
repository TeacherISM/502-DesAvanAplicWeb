import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './clase2/A01784675/routes/AppRoutes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
