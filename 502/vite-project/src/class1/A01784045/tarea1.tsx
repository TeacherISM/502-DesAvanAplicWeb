

import { useState } from 'react'

const mathUtils = {
  add: (a: number, b: number) => {
    console.log(`Se realizó una suma: ${a} + ${b}`)
    return a + b
  },
  subtract: (a: number, b: number) => {
    console.log(`Se realizó una resta: ${a} - ${b}`)
    return a - b
  },
}

const objFixed = {
  name: "Isaac",
  greet: function() {
    setTimeout(() => {
      console.log(`Hello, ${this.name}!`) 
    }, 1000);
  }
}
objFixed.greet();

const Greeting = ({ name }: { name: string }) => {
  console.log(`Renderizando Greeting para: ${name}`)
  const message = `Hola ${name} - Tarea 1`
  return <h1>{message}</h1>
}

const UserProfile = ({ name, age, email }: { name: string, age: number, email: string }) => {
  console.log(`Renderizando UserProfile para: ${name}, Edad: ${age}, Email: ${email}`)
  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <p>Nombre: {name}</p>
      <p>Edad: {age}</p>
      <p>Email: {email}</p>
    </div>
  )
}

const NestedDestructuring = ({ team }: { team: { lead: { name: string, email: string }, size: number } }) => {
  const { lead: { name: leadName }, size } = team;
  console.log(`El nombre del líder es: ${leadName} y el tamaño del equipo es: ${size}`);
  return (
    <div>
      <h2>Equipo</h2>
      <p>Líder: {leadName}</p>
      <p>Tamaño del equipo: {size}</p>
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
    <div>
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
    <div>
      <h2>Calculadora</h2>
      <p>10 + 5 = {sum}</p>
      <p>10 - 5 = {difference}</p>
    </div>
  )
}

const Tarea1 = () => {
  return (
    <>
      <Greeting name="Isaac" />
      <UserProfile name="Isaac" age={22} email="a01784045@tec.com" />
      <CounterExample />
      <Calculator />
      <NestedDestructuring team={{ lead: { name: "Alice", email: "alice@example.com" }, size: 5 }} />
    </>
  )
}

export default Tarea1