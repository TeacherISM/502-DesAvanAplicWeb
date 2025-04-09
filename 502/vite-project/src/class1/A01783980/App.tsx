import { useState } from "react";
import "./../../App.css";
import LoginFooter from "./LoginFooter.tsx"; // We'll create this component
import reactLogo from "./../../assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);
  const [showLoginInfo, setShowLoginInfo] = useState(false);

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
      <h1>Vite + React + Emilio</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      {/* Login button */}
      <div className="card">
        <button onClick={() => setShowLoginInfo(!showLoginInfo)}>
          {showLoginInfo ? "Hide Login Info" : "Show Login Info"}
        </button>
        <a href="/src/class2/A1783980/index.html" className="login-link">
          Go to Login Page
        </a>
        <a href="/hooks" className="login-link">
          {" "}
          React Hooks Demo
        </a>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Footer with ES6+ examples */}
      {showLoginInfo && <LoginFooter />}
    </>
  );
}

export default App;
