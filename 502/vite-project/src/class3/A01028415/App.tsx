import { useState } from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
      {isLoggedIn ? <Dashboard /> : <Login onLogin={() => setIsLoggedIn(true)} />}
    </div>
  )
}

export default App
