import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Clase1 from './Clase1';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/clase1" element={<Clase1 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
