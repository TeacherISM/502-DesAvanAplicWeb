// src/class2/A01028066/components/ejemplo.tsx
import React, { useState } from 'react';

const EjemploPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [showCard, setShowCard] = useState(false);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleClick = () => {
    if (!username.trim() || !email.trim()) {
      alert('Por favor completa todos los campos.');
      return;
    }
    if (!isValidEmail(email)) {
      alert('Por favor ingresa un correo electrónico válido.');
      return;
    }
    setShowCard(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#eaf0ed] text-gray-800 px-4">
      <h1 className="text-3xl font-bold mb-6">Reusable Components Demo</h1>

      <div className="w-full max-w-sm space-y-4">
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Nombre de usuario</label>
          <input
            type="text"
            placeholder="Ej. lisette123"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Correo electrónico</label>
          <input
            type="email"
            placeholder="Ej. correo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <button
          onClick={handleClick}
          className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded w-full"
        >
          Mostrar Datos
        </button>

        {showCard && (
          <div
            className="bg-white rounded-lg shadow-md p-4 border border-gray-200 transition hover:shadow-lg cursor-pointer"
            onClick={() => console.log('Card clicked')}
          >
            <h2 className="text-xl font-bold text-green-900">Viaje de {username}</h2>
            <p className="text-gray-600">Email: {email}</p>
            <p className="text-sm text-gray-500">Fecha: {new Date().toLocaleDateString()}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EjemploPage;
