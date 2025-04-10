import React, { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface DashboardProps {
  userRole: string | null;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ userRole, onLogout }) => {
  const [posts, setProducts] = useState<Post[]>([]);

  useEffect(() => {
    const url = 'https://fakestoreapi.com';
    // Se obtiene la lista de productos
    fetch(`${url}/products`)
      .then((response) => response.json())
      .then((data: any) => {
        setProducts(data);
      })
      .catch((err) => console.error('Error al obtener productos:', err));
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Welcome to the Dashboard</h2>
      <p>Tu rol es: {userRole}</p>
      <button
        onClick={onLogout}
        className="w-full py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 transition duration-200 mb-4"
      >
        Cerrar sesión
      </button>
      <p>Data fetched from mock API:</p>
      <ul>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
