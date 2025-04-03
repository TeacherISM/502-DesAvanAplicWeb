import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { JsConceptsApp } from './Tarea_1/JSconcepts';
import TravelRequestsPage from '../../class2/A01025119/travel_page';
import Login from '../../class3/A01025119/Login_class3';
import TravelRequestForm from '../../class3/A01025119/Travel_request';
import './main_design.css';

const Student1App = () => (
  <BrowserRouter basename="/A01025119">
    <Routes>
      <Route
        path="/"
        element={
          <div className="main-container">
            <h1 className="main-title">Pagina principal de Do Kyu (A01025119)</h1>
            <Link to="/class1" className="class-button">
              Class 1 Homework
            </Link>
            <br />
            <Link to="/class2" className="class-button">
              Class 2 Homework
            </Link>
            <br />
            <Link to="/class3" className="class-button">
              Class 3 Homework
            </Link>
          </div>
        }
      />
      <Route path="/class1" element={<JsConceptsApp />} />
      <Route path="/class2" element={<TravelRequestsPage />} />
      <Route path="/class3" element={<Login />} />
      <Route path="/travel-request" element={<TravelRequestForm />} />
    </Routes>
  </BrowserRouter>
);

if (window.location.pathname.startsWith('/A01025119')) {
  document.body.innerHTML = '';

  const studentRoot = document.createElement('div');
  studentRoot.id = 'A01025119-root';

  studentRoot.style.position = 'fixed';
  studentRoot.style.top = '0';
  studentRoot.style.left = '0';
  studentRoot.style.width = '100vw';
  studentRoot.style.height = '100vh';
  studentRoot.style.zIndex = '9999';

  document.body.appendChild(studentRoot);

  ReactDOM.createRoot(studentRoot).render(
    <React.StrictMode>
      <Student1App />
    </React.StrictMode>
  );
}
