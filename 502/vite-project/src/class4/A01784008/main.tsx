import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Navbar from "../../class2/A01784008/components/NavbarLB.tsx";
import './App.css';
import "../../class2/A01784008/App.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>
);
