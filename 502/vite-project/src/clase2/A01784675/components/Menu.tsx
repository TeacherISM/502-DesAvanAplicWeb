import React from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex gap-4">
      <Link to="/login" className="hover:underline">Login--</Link>
      <Link to="/dashboard" className="hover:underline">Dashboard--</Link>
      <Link to="/travel-request" className="hover:underline">Travel Request</Link>
    </nav>
  );
};

export default Menu;
