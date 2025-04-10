import React, { useState, ChangeEvent, FC } from 'react'
import InputField from '../components/InputField'
import Button from '../components/Button'

interface LoginProps {
  onLogin: () => void
}

const Login: FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement>) =>
      setter(e.target.value)

  const handleSubmit = () => {
    console.log(`Username: ${username}`)
    console.log(`Password: ${password}`)
    onLogin() 
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
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
      <Button label="Submit" onClick={handleSubmit} />
    </div>
  )
}

export default Login
