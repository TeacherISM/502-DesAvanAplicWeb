import { useEffect, useState } from 'react';
import { fetchUsers } from './fetchUsers';

// Destructuring desde props
interface DashboardProps {
  username: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

const Dashboard = ({ username }: DashboardProps) => {
  const [users, setUsers] = useState<User[]>([]);

  // Arrow function + módulo
  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };

    loadUsers();
  }, []);

  // Ejemplo de uso de template literals y destructuring en función
  const greetUser = ({ name }: { name: string }) => `Hola, ${name}! Bienvenido al sistema.`;

  // Función que calcula la longitud total de todos los nombres (arrow + array methods)
  const totalNameLength = () => users.reduce((acc, { name }) => acc + name.length, 0);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{`Bienvenido, ${username}!`}</h2>

      <p><strong>Ejemplo de template literal + destructuring:</strong></p>
      <p>{greetUser({ name: username })}</p>

      <p><strong>Ejemplo de arrow function:</strong></p>
      <p>Total de caracteres en los nombres de usuario: {totalNameLength()}</p>

      <h3>Usuarios obtenidos con fetch (módulo):</h3>
      <ul>
        {users.map(({ id, name, email }) => (
          <li key={id}>
            {name} - {email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;