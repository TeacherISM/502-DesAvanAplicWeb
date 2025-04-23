import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)
  const navigateTo = (path: string) => {
    // You might want to use React Router instead of window.location
    window.location.href = path;
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">

        <button
          onClick={() => window.location.href = "/src/class3/A01782557/dashboard/index.html"}
        >
        Dashboard
        </button>

        <button onClick={() => navigateTo("/src/class3/A01781321/index.html")}>
          Class projects
        </button>
        <button>
        <a href="/src/class1/A01784521/menu/menu.html">Activities index</a>
        <a href="/src/menu/A01028038/index.html">
          Menú
        </a>
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>
          <a href='/src/class1/A01783637/Homework_Index/index.html'> Menu of Homeworks for Imanol Santisteban A01783637 </a>
          <a href="/src/class1/A01025119/webpage/A01025119.html" target="_blank" rel="noopener noreferrer" >
            Pagina de Do Kyu
          </a>
        </p>
      </div>
      <div>
        <a href='/src/class3/A01784008/index.html' target="_blank" rel="noopener noreferrer">
          Leon Blanga Hasbani A01784008
        </a>
        <a href='/src/class1/A01781442/index.html'>
          Rafael Blanga Hanono A01781442
        </a>
        <a href="src/class1/A01784238/menu/index.html">Menú de José Manuel García Zumaya</a>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <a
        href="/src/class1/A01784116/menu/index.html"
      >
        Clases Tomas Molina
      </a> {/* Closing tag added here */}
    </>
  );
}

export default App
