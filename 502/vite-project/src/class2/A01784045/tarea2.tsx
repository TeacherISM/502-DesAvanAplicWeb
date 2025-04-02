// src/components/ES6Features.tsx

import { useState } from 'react'

// Módulo simulado: mathUtils (Modules + Arrow Functions)
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

// Problema del `this` con Arrow Functions (Resuelto)
const objFixed = {
  name: "Isaac",
  greet: function() {
    setTimeout(() => {
      console.log(`Hello, ${this.name}!`) // `this` refers to `objFixed`
    }, 1000);
  }
}
objFixed.greet();

// Ejemplo ES6+: Template Literals
const Greeting = ({ name }: { name: string }) => {
  console.log(`Renderizando Greeting para: ${name}`)
  const message = `Hola ${name}`
  return <h1>{message}</h1>
}

// Ejemplo ES6+: Destructuring en props
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

// Ejemplo ES6+: Nested Destructuring
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

// Ejemplo ES6+: Arrow Function en componente
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

// Ejemplo ES6+: Uso de un módulo (mathUtils) en un componente
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

const Tarea2 = () => {
  return (
   <h1>Tarea 2</h1>
  )
}

export default Tarea2
