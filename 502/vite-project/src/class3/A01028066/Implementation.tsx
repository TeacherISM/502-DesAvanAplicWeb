import React, { useEffect, useState } from 'react';
import { fetchData } from '../../class1/A01028066/utils/api'; 

// Definimos el tipo para los datos que vamos a recibir
interface Post {
  id: number;
  title: string;
}

// Componente que obtiene y muestra datos desde una API externa
const DataFetcher: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);     // Estado para almacenar los posts
  const [loading, setLoading] = useState(true);     // Estado de carga
  const [error, setError] = useState('');           // Estado de error

  // useEffect se ejecuta una sola vez al montar el componente
  useEffect(() => {
    fetchData<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=5') // Llamada a API simulada
      .then((res) => {
        setData(res);        // Guardamos los datos obtenidos
        setLoading(false);   // Terminó la carga
      })
      .catch((err: unknown) => {
        // Manejamos cualquier posible error de forma segura
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Error al cargar los datos');
        }
        setLoading(false);   // Terminamos la carga aunque haya error
      });
  }, []); // Dependencias vacías: solo se ejecuta al inicio

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] bg-white border rounded shadow p-6 mt-10">
      <h2 className="text-xl font-bold mb-4">Datos simulados desde API</h2>

      {/* Muestra estado de carga */}
      {loading && <p className="text-gray-500 animate-pulse">Cargando datos...</p>}

      {/* Muestra error si ocurre */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Muestra los datos si todo está bien */}
      {!loading && !error && (
        <ul className="list-disc text-left space-y-2">
          {data.map((item) => (
            <li key={item.id} className="text-gray-700 font-medium">
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetcher;
