import { useState } from 'react';

// User data for demonstration
const userData = {
  name: "Facundo",
  age: 22,
  contact: {
    email: "facundo@example.com",
    phone: "555-1234"
  },
  skills: ["JavaScript", "React", "Node.js"]
};

// Example module usage (simulated)
const utils = {
  formatDate: (date: Date) => {
    return date.toLocaleDateString();
  },
  capitalize: (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};

function App() {
  // Using state with destructuring
  const [counter, setCounter] = useState(0);
  
  // Destructuring examples
  const { name, age, contact, skills } = userData;
  const { email, phone } = contact;
  const [primarySkill, secondarySkill] = skills;
  
  // Traditional function with this binding issue
  function traditionalGreet() {
    setTimeout(function() {
      // In a real scenario, 'this' would be undefined or window
      console.log("Traditional: Hello!");
    }, 500);
  }
  
  // Arrow function fixing this binding (demonstration)
  const arrowGreet = () => {
    setTimeout(() => {
      // 'this' would correctly refer to the current component
      console.log("Arrow: Hello, " + name + "!");
    }, 500);
  };
  
  // ES6+ refactored greet function using template literals and destructuring
  const greet = ({ name, age }: { name: string, age: number }) => 
    `Hello, ${name}! You are ${age} years old.`;

  return (
    <div className="es6-demo">
      <h1>ES6+ Features Demo</h1>
      
      <section>
        <h2>Template Literals</h2>
        <p>{`Hello, ${name}! Today is ${new Date().toLocaleDateString()}.`}</p>
        <p>{`You have ${skills.length} skills: ${skills.join(", ")}`}</p>
      </section>
      
      <section>
        <h2>Destructuring</h2>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
        <p>Primary skill: {primarySkill}</p>
      </section>
      
      <section>
        <h2>Arrow Functions</h2>
        <p>
          <button 
            onClick={() => setCounter(counter + 1)}
            onMouseEnter={() => { arrowGreet(); traditionalGreet(); }}
          >
            Click me ({counter})
          </button>
        </p>
        <p>Check console for arrow function demo logs</p>
      </section>
      
      <section>
        <h2>Refactored Function (Template Literals + Destructuring)</h2>
        <p>{greet(userData)}</p>
      </section>
      
      <section>
        <h2>Module Usage (Simulated)</h2>
        <p>Capitalized: {utils.capitalize(name.toLowerCase())}</p>
        <p>Today's date: {utils.formatDate(new Date())}</p>
      </section>
    </div>
  );
}

export default App;
