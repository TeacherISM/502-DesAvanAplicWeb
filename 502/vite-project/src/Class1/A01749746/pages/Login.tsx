import React, { useEffect, useState } from 'react';
import '../style.css';
import Dashboard from '../components/Dashboard.tsx';

const SumaRapida = () => {
  const sumar = (a: number, b: number) => a + b;
  const resultado = sumar(4, 6);

  return (
    <div className="card">
      <h2>Suma con Arrow Function</h2>
      <p>4 + 6 = {resultado}</p>
    </div>
  );
};

const DatosUsuario = () => {
  const usuario = { nombre: "Beto", edad: 22 };
  const { nombre, edad } = usuario;

  const colores = ["azul", "verde", "rojo"];
  const [color1, color2] = colores;

  return (
    <div className="card">
      <h2>Destructuring</h2>
      <p>{nombre} tiene {edad} años</p>
      <p>Colores favoritos: {color1} y {color2}</p>
    </div>
  );
};

const MensajePersonalizado = () => {
  const user = { nombre: "Beto", puntos: 120 };
  const mensaje = `Hola ${user.nombre}, tienes ${user.puntos} puntos.`;

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
  const [datos, setDatos] = useState({ usuario: '', clave: '' });

  const actualizar = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setDatos(prev => ({ ...prev, [name]: value }));
  };

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Iniciando sesión como: ${datos.usuario}`);
  };

  return (
    <div className="card login">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={enviar}>
        <input
          type="text"
          name="usuario"
          placeholder="Usuario"
          value={datos.usuario}
          onChange={actualizar}
        />
        <input
          type="password"
          name="clave"
          placeholder="Contraseña"
          value={datos.clave}
          onChange={actualizar}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

const ListaPosteos = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const cargarPosteos = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error('Error cargando posts:', err);
      }
    };

    cargarPosteos();
  }, []);

  return (
    <div className="card">
      <h2>Posteos Recientes</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong><br />
            {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <SumaRapida />
      <DatosUsuario />
      <MensajePersonalizado />
      <OperacionesBasicas />
      <LoginForm />
      <Dashboard />
      <ListaPosteos />
    </div>
  );
};

export default App;
