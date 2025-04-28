import { useState, useEffect } from 'react';

const UserFetcherEffect = () => {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      await new Promise((res) => setTimeout(res, 1000)); // Simula espera
      setUser({ name: 'Lisette Melo Reyes', email: 'lisettemelo@example.com' });
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading) return <p>Cargando datos del usuario...</p>;

  return (
    <div>
      <h3>Datos del Usuario con useEffect</h3>
      <p>Nombre: {user?.name}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default UserFetcherEffect;
