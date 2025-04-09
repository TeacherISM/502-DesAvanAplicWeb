import React, { useState } from 'react'
import "../../App.css"

// 1. Arrow Functions: Usadas en funciones y componentes
const greet = ({ name, age }: { name: string, age: number }) => `¡Hola, ${name}! Tienes ${age} años.`;

// 2. Destructuring: Extraemos propiedades de objetos y arrays
const user = { name: "Emily", age: 21, ubicacion: { city: "Ciudad de Mexico", country: "Mexico" } };

// Nested destructuring
const { name, age, ubicacion: { city, country } } = user;

// 3. Template Literals: Creando cadenas dinámicas de forma eficiente
const message = `
  ${name},
  Tienes ${age} años y vives en ${city}, ${country}.
`;

console.log(message);

// 4. Definición de las funciones directamente en el archivo
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

// 5. Resolviendo el problema de `this` con Arrow Functions
class Timer extends React.Component {
  state = { time: 0 };

  componentDidMount() {
    setInterval(() => {
      // Con la Arrow Function, `this` se refiere al contexto correcto
      this.setState((prevState: { time: number }) => ({ time: prevState.time + 1 }));
    }, 1000);
  }

  render() {
    return <div>Tiempo: {this.state.time}s</div>;
  }
}

function App() {
  const [count, setCount] = useState(0);

  // Manejo del evento para mostrar el contador en la terminal
  const handleClick = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      console.log(`El contador es ahora: ${newCount}`);
      return newCount;
    });
  }

  return (
    <>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Renderizando componentes adicionales */}
      <div>
        <h2>{greet({ name, age })}</h2>
        <p>Ubicacion: {city}, {country}</p>
        <MathExample />
        <Timer />
      </div>
    </>
  );
}

export default App;
