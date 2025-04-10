import { useState } from 'react'
import './styles.css'

const mathUtils = {
  add: (a, b) => {
    console.log(`Se realizó una suma: ${a} + ${b}`)
    return a + b
  },
  subtract: (a, b) => {
    console.log(`Se realizó una resta: ${a} - ${b}`)
    return a - b
  },
}

const objFixed = {
  name: "Isaac",
  greet: () => {
    setTimeout(() => {
      console.log(`Hello, ${objFixed.name}!`) 
    }, 1000);
  }
}
objFixed.greet();

const Greeting = ({ name }) => {
  console.log(`Renderizando Greeting para: ${name}`)
  const message = `Hola ${name} - Tarea 1`
  return <h1 className="greeting">{message}</h1>
}

const UserProfile = ({ name, age, email }) => {
  console.log(`Renderizando UserProfile para: ${name}, Edad: ${age}, Email: ${email}`)
  return (
    <div className="card user-profile">
      <h2>Perfil de Usuario</h2>
      <p><strong>Nombre:</strong> {name}</p>
      <p><strong>Edad:</strong> {age}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  )
}

const NestedDestructuring = ({ team }) => {
  const { lead: { name: leadName }, size } = team;
  console.log(`El nombre del líder es: ${leadName} y el tamaño del equipo es: ${size}`);
  return (
    <div className="card team-info">
      <h2>Equipo</h2>
      <p><strong>Líder:</strong> {leadName}</p>
      <p><strong>Tamaño del equipo:</strong> {size}</p>
    </div>
  )
}

const CounterExample = () => {
  const [countExample, setCountExample] = useState(0)

  const incrementExample = () => {
    setCountExample(countExample + 1)
    console.log(`Contador incrementado: ${countExample + 1}`)
  }

  return (
    <div className="card counter">
      <h2>Contador: {countExample}</h2>
      <button onClick={incrementExample}>Incrementar</button>
    </div>
  )
}

const Calculator = () => {
  const sum = mathUtils.add(10, 5)
  const difference = mathUtils.subtract(10, 5)

  console.log(`Resultados de la calculadora: Suma = ${sum}, Resta = ${difference}`)

  return (
    <div className="card calculator">
      <h2>Calculadora</h2>
      <p>10 + 5 = {sum}</p>
      <p>10 - 5 = {difference}</p>
    </div>
  )
}

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: 'Isaac', password: 'Shakalo' });

  const handleChange = ({ target: { name, value } }) => {
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Iniciando sesión con usuario: ${credentials.username} y contraseña: ${credentials.password}`);
  };

  return (
    <div className="card login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

const Tarea1 = () => {
  return (
    <div className="app">
      <LoginPage />
      <Greeting name="Isaac" />
      <UserProfile name="Isaac" age={22} email="a01784045@tec.com" />
      <CounterExample />
      <Calculator />
      <NestedDestructuring team={{ lead: { name: "Alice", email: "alice@example.com" }, size: 5 }} />
    </div>
  )
}

export default Tarea1;
