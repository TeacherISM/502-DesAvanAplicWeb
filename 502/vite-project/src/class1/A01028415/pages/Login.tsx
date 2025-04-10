import { useState, ChangeEvent, FC } from 'react'

interface LoginProps {
  onLogin: () => void
}

const Login: FC<LoginProps> = ({ onLogin }) => {
  const [formData, setFormData] = useState({ username: '', password: '' })

  const handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    const { username, password } = formData
    console.log(`Logging in with username: ${username}, password: ${password}`)
    // Aquí puedes agregar validaciones o auth real
    onLogin()
  }

  const { username, password } = formData

  return (
    <div className="login-box">
      <h2>Login</h2>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
        placeholder="Username"
        className="input"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="Password"
        className="input"
      />
      <button className="button" onClick={handleSubmit}>
        Login
      </button>
    </div>
  )
}

export default Login
