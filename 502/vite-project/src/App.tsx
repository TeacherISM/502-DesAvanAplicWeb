import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './clase2/A01784675/routes/AppRoutes';
import Menu from './clase2/A01784675/components/Menu';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Menu /> 
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
