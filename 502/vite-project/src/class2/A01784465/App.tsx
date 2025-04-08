import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showIframe, setShowIframe] = useState(false)

  return (
    <>

      <h1>Login</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <div className="card">
        <a href="./src/App.tsx" target="_blank" rel="noopener noreferrer">
          <button>Ir a class2/index.html</button>
        </a>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
