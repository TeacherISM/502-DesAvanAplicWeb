import React, { useEffect, useState } from 'react';
import '../style.css';

const SumaArrow = () => {
  const sum = (a: number, b: number) => a + b;
  const res = sum(1, 1);

  return (
    <div className="card">
      <h2>Arrow Function Suma</h2>
      <p>1 + 1 = {res}</p>
    </div>
  );
};

const Destructuring = () => {
  const car = { brand: "Toyota", model: "Corolla", year: 2020 };
  const { brand, model, year } = car;

  const location = ["Ciudad de México", "México"];
  const [city, country] = location;

  return (
    <div className="card">
      <h2>Destructuring</h2>
      <p>{brand} {model}, año {year}</p>
      <p>Ubicación: {city}, {country}</p>
    </div>
  );
};

const MensajePersonalizado = () => {
  const libro = { titulo: "Cien Años de Soledad", disponible: true };
  const mensaje = `El libro "${libro.titulo}" está ${libro.disponible ? "disponible" : "no disponible"} en la biblioteca.`;

  return (
    <div className="card">
      <h2>Template Literals</h2>
      <p>{mensaje}</p>
    </div>
  );
};


const sumar = (a: number, b: number) => a + b;
const restar = (a: number, b: number) => a - b;

const OperacionesBasicas = () => {
  return (
    <div className="card">
      <h2>Funciones Simples</h2>
      <p>8 + 2 = {sumar(8, 2)}</p>
      <p>8 - 2 = {restar(8, 2)}</p>
    </div>
  );
};

const LoginForm = () => {
  const [credenciales, setCredenciales] = useState({ email: '', pin: '' });

  const actualizar = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setCredenciales(prev => ({ ...prev, [name]: value }));
  };

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Accediendo con el correo: ${credenciales.email}`);
  };

  return (
    <div className="card login">
      <h2>Log In</h2>
      <form onSubmit={enviar}>
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={credenciales.email}
          onChange={actualizar}
        />
        <input
          type="password"
          name="pin"
          placeholder="PIN de acceso"
          value={credenciales.pin}
          onChange={actualizar}
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

interface Usuario {
  id: number;
  name: string;
  email: string;
}

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
      .then(res => res.json())
      .then(data => setUsuarios(data))
      .catch(err => console.error('Error cargando usuarios:', err));
  }, []);

  return (
    <div className="card">
      <h2>Usuarios Registrados</h2>
      <ul>
        {usuarios.map(user => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};


const App = () => {
  return (
    <div className="container">
      <SumaArrow />
      <Destructuring />
      <MensajePersonalizado />
      <OperacionesBasicas />
      <LoginForm />
      <ListaUsuarios />
    </div>
  );
};

export default App;
