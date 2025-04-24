// App.tsx
import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Menu from "./class1/A01783704/Menu.tsx"

function App() {
  const [count, setCount] = useState(0);
  const [page, setPage] = useState<"home" | "menu">("home");

  const buttonStyle = {
    margin: "1rem",
    padding: "1rem 2rem",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#3b82f6",
    color: "#fff",
    cursor: "pointer",
    fontSize: "1rem",
  };

  // Renderizamos la página según el estado "page"
  if (page === "menu") {
    return (
      // Se pasa una función para volver a la página Home
      <Menu goBack={() => setPage("home")} />
    );
  }

  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((prev) => prev + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button style={buttonStyle} onClick={() => setPage("menu")}>
        Go to Menu
      </button>
    </div>
  );
}

export default App;
