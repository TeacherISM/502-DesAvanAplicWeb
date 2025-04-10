// src/App.tsx (SUGGESTION ONLY - don't modify if not allowed)
import { useState } from "react";
import "./App.css";
import LoginFooter from "./LoginFooter.tsx";
import Login from "./../../class2/A01783980/login.tsx";
import Implementation from "./../../class3/A01783980/implementation.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="/react.svg" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Emilio</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      {/* Added component display areas */}
      <div className="component-demo">
        <LoginFooter />
        <Login />
        <Implementation />
      </div>

      <div className="action-buttons">
        <button className="dark-button">Show Login Info</button>
        <button className="blue-button">Go to Login Page</button>
        <button className="blue-button">React Hooks Demo</button>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
