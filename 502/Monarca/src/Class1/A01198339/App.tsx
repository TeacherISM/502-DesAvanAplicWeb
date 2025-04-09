import React, { useEffect, useState } from 'react';
import "../../App.css";

// 1. Arrow Functions: Usadas en funciones y componentes
const greet = ({ name, age }: { name: string, age: number }) => `¡Hola, ${name}! Tienes ${age} años.`;

// 2. Destructuring
const user = { name: "Emily", age: 21, ubicacion: { city: "Ciudad de Mexico", country: "Mexico" } };
const { name, age, ubicacion: { city, country } } = user;

// 3. Template Literals
const message = `
  ${name},
  Tienes ${age} años y vives en ${city}, ${country}.
`;

console.log(message);

// 4. Funciones matemáticas
const add = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;

const MathExample = () => {
  const resultAdd = add(5, 3);
  const resultSubtract = subtract(10, 4);

  return (
    <div>
      <p>Suma: {resultAdd}</p>
      <p>Resta: {resultSubtract}</p>
    </div>
  );
};

// 5. Timer usando arrow function para mantener el `this`
class Timer extends React.Component {
  state = { time: 0 };

  componentDidMount() {
    setInterval(() => {
      this.setState((prevState: { time: number }) => ({ time: prevState.time + 1 }));
    }, 1000);
  }

  render() {
    return <div>Tiempo: {this.state.time}s</div>;
  }
}

// ✅ Componente principal con `fetch` correctamente integrado
function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState<any[]>([]);

  const handleClick = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      console.log(`El contador es ahora: ${newCount}`);
      return newCount;
    });
  };

  // ✅ Fetch integrado correctamente dentro del hook
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Error fetching users:", err));
  }, []);

  return (
    <>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
      </div>
      <div>
        <h2>{greet({ name, age })}</h2>
        <p>Ubicación: {city}, {country}</p>
        <MathExample />
        <Timer />
        <h3>Usuarios obtenidos desde la API:</h3>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name} ({user.email})</li>
          ))}
        </ul>
      </div>
      <a href="/src/menu/A01198339/index.html">Menu</a>
    </>
  );
}

export default App;
