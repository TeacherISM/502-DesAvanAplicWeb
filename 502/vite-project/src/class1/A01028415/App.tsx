import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showIframe, setShowIframe] = useState(false)

  return (
    <>

      <h1>Emiliano</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
        <a href="./class1/A01028415/index.html" target="_blank" rel="noopener noreferrer">
          Ir a index.html en class1
        </a>
      </p>
    </>
    
  )
}

export default App
