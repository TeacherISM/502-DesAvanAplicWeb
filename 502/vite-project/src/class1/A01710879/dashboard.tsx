// src/classes/class1/dashboard.tsx
import React, { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

const Dashboard: React.FC = () => {
  const [posts, setProducts] = useState<Post[]>([]);

  useEffect(() => {
    const url = 'https://fakestoreapi.com';
    // Se obtiene la lista de productos
    fetch(`${url}/products`)
      .then(response => response.json())
      .then((data: any) => {
        // Aquí se podría almacenar la data en un estado, por ejemplo:
        setProducts(data);
      })
      .catch(err => console.error('Error al obtener productos:', err));
  }, []);
  

  return (
    <div className="dashboard-container">
      <h2>Welcome to the Dashboard</h2>
      <p>Data fetched from mock API:</p>
      <ul>
        {posts.slice(0, 5).map(post => (
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
