import React, { useState, useEffect } from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const auth = localStorage.getItem('auth') === 'true'
    setIsLoggedIn(auth)
  }, [])

  const handleLogin = () => {
    localStorage.setItem('auth', 'true')
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('auth')
    setIsLoggedIn(false)
  }

  return (
    <div>
      {isLoggedIn ? <Dashboard onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}
    </div>
  )
}

export default App
