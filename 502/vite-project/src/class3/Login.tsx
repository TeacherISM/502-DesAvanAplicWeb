import React, { useState } from 'react';
import { useEffect } from 'react';
import InputField from './components/InputField.tsx';
import Button from './components/Button.tsx';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = () => {
    setLoading(true)
    setError('')

    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        console.log('Login successful')
      } else {
        setError('Invalid username or password')
      }
      setLoading(false)
    }, 1000)
  }

  useEffect(() => {
    console.log('Login component mounted')
  }, [])

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <InputField
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button label={loading ? 'Loading...' : 'Submit'} onClick={handleSubmit} />
    </div>
  )
}

export default Login