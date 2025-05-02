import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import Navbar from '../../class2/A01784008/components/NavbarLB';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>
);
