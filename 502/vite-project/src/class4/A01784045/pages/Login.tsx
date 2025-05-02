import React, { useState, FC, ChangeEvent } from 'react'
import InputField from '../components/InputField'
import Button from '../components/Button'

interface LoginProps {
  onLogin: () => void
}

const Login: FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement>) =>
      setter(e.target.value)

  const handleSubmit = () => {
    setLoading(true)
    setError('')

    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        localStorage.setItem('auth', 'true') // guarda login
        onLogin() // activa el estado
      } else {
        setError('Invalid username or password')
      }
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <InputField
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleChange(setUsername)}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={handleChange(setPassword)}
      />
      <Button label={loading ? 'Loading...' : 'Submit'} onClick={handleSubmit} />
    </div>
  )
}

export default Login
