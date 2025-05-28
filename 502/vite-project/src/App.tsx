import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function App() {


  const navigateTo = (path: string) => {
    // You might want to use React Router instead of window.location
    window.location.href = path;
};



  return (
    <div>
      <h1>Vite + React</h1>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="card">
        <button>
            <a href="/src/class1/A01784521/menu/menu.html">A01784521 Activities index Facundo</a>
        </button>
      </div>
    </div>
  )
}

export default App
