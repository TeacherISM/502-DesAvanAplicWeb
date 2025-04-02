import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  // Ejemplo de arrow function
  const logMessage = (message: string) => {
    console.log(`[INFO]: ${message}`);
  };
  
  // Ejemplo de destructuring
  const config = { environment: 'development', debug: true };
  const { environment, debug } = config;
  
  // Ejemplo de template literals
  const welcomeMessage = `
    Application starting in ${environment} mode.
    Debug mode is ${debug ? 'enabled' : 'disabled'}.
  `;
  
  // Uso de los ejemplos
  useEffect(() => {
    // Usando la arrow function y template literals
    logMessage(welcomeMessage);
    
    // Otro ejemplo de template literals con la variable count
    logMessage(`Current count is ${count}`);
  }, [count]);
  
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      
      {/* Sección que muestra los ejemplos de ES6+ */}
      <div className="card">
        <h2>ES6+ Examples</h2>
        <p>Environment: {environment}</p>
        <p>Debug Mode: {debug ? 'On' : 'Off'}</p>
        <pre className="code-block">{welcomeMessage}</pre>
      </div>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
