import { useEffect, useState } from 'react';

type Usuario = {
  name: string;
  email: string;
};

export default function UserData() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await res.json();
      setUsuario(data);
      setCargando(false);
    }
    fetchData();
  }, []);

  if (cargando) return <p>Cargando datos del usuario...</p>;

  return (
    <div>
      <h2>Usuario obtenido con useEffect:</h2>
      <p><strong>Nombre:</strong> {usuario?.name}</p>
      <p><strong>Email:</strong> {usuario?.email}</p>
    </div>
  );
}
