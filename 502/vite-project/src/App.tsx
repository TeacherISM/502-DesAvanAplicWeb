import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
        <button>
        <a href="/src/class1/A01784521/menu/menu.html">Activities index</a>
        </button>
      </div>
      <div>
        <a href='/src/class2/A01784008/index.html' target="_blank" rel="noopener noreferrer">
          Leon Blanga Hasbani A01784008
        </a>
        <a href='/src/class1/A01781442/index.html'>
          Rafael Blanga Hanono A01781442
        </a>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
