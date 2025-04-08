import { useState } from "react";

const Clase1 = () => {
  // Versión "antes"
  function greetBefore(user: { name: string; age: number }) {
    return "Hello, " + user.name + "! You are " + user.age + " years old.";
  }

  // Versión "después" usando template literals, destructuring y arrow function
  const greetAfter = ({ name, age }: { name: string; age: number }) =>
    `Hello, ${name}! You are ${age} years old.`;

  const [name, setName] = useState<string>("John");
  const [age, setAge] = useState<number>(25);

  const user = { name, age };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        textAlign: "center",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Actividad Práctica: Refactorizar código usando ES6+</h1>

      <div style={{ marginBottom: "20px" }}>
        <label>
          Nombre:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Edad:{" "}
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </label>
      </div>

      <h2>Antes</h2>
      <pre>
        {`function greet(user) {
  return "Hello, " + user.name + "! You are " + user.age + " years old.";
}`}
      </pre>
      <p>
        <strong>Resultado:</strong> {greetBefore(user)}
      </p>

      <h2>
        Después (using template literals + destructuring + arrow functions)
      </h2>
      <pre>
        {`const greet = ({ name, age }) => \`Hello, \${name}! You are \${age} years old.\`;`}
      </pre>
      <p>
        <strong>Resultado:</strong> {greetAfter(user)}
      </p>

      <button
        onClick={() => {
          window.location.href = "/src/class2/A01782146/index.html";
        }}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "4px",
          backgroundColor: "#3b82f6",
          color: "#fff",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Regresar al menú
      </button>
    </div>
  );
};

export default Clase1;
