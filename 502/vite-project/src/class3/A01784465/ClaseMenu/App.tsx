import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showIframe, setShowiframe] = useState(false)

  return (
    <>
      <h1>Menu</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <a href="/src/class1/A01784465/index.html" target="_blank" rel="noopener noreferrer">
          <button>Ir a class1/index.html</button>
        </a>
      </div>
      <div className="card">
        <a href="/src/class2/A01784465/index.html" target="_blank" rel="noopener noreferrer">
          <button>Ir a class2/index.html</button>
        </a>
      </div>
      <div className="card">
        <a href="/src/class3/A01784465/index.html" target="_blank" rel="noopener noreferrer">
          <button>Ir a class3/index.html</button>
        </a>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App