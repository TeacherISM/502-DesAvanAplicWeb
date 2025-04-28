import { useState } from 'react';
import './index.css';

const userData = {
  name: "Lisette Melo Reyes",
  age: 21,
  contact: {
    email: "lisettemelo@example.com",
    phone: "555-9876"
  },
  skills: ["JavaScript", "React", "Tailwind CSS"]
};

const utils = {
  formatDate: (date: Date) => date.toLocaleDateString(),
  capitalize: (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
};

const Clase1 = () => {
  const [counter, setCounter] = useState(0);
  const { name, age, contact, skills } = userData;
  const { email, phone } = contact;
  const [primarySkill] = skills;

  const traditionalGreet = () => {
    setTimeout(function () {
      console.log("Traditional: Hello!");
    }, 500);
  };

  const arrowGreet = () => {
    setTimeout(() => {
      console.log(`Arrow: Hello, ${name}!`);
    }, 500);
  };

  const greet = ({ name, age }: { name: string, age: number }) =>
    `Hello, ${name}! You are ${age} years old.`;

  return (
    <div className="clase1-container">
      <h1 className="clase1-title"> Features Demo </h1>

      <div className="clase1-section">
        <h2>Template Literals</h2>
        <p className="code">{`Hello, ${name}! Today is ${new Date().toLocaleDateString()}.`}</p>
        <p className="code">{`You have ${skills.length} skills: ${skills.join(", ")}`}</p>
      </div>

      <div className="clase1-section">
        <h2>Destructuring</h2>
        <div className="data-row"><span>Name:</span> {name}</div>
        <div className="data-row"><span>Age:</span> {age}</div>
        <div className="data-row"><span>Email:</span> {email}</div>
        <div className="data-row"><span>Phone:</span> {phone}</div>
        <div className="data-row"><span>Main Skill:</span> {primarySkill}</div>
      </div>

      <div className="clase1-section">
        <h2>Arrow Functions</h2>
        <button
          className="clase1-btn"
          onClick={() => setCounter(counter + 1)}
          onMouseEnter={() => {
            arrowGreet();
            traditionalGreet();
          }}
        >
          Click me ({counter})
        </button>
        <p className="info">Check console for function demos</p>
      </div>

      <div className="clase1-section">
        <h2>Refactored Function</h2>
        <p className="code">{greet(userData)}</p>
      </div>

      <div className="clase1-section">
        <h2>Simulated Module</h2>
        <div className="data-row"><span>Original:</span> {name.toLowerCase()}</div>
        <div className="data-row"><span>Capitalized:</span> {utils.capitalize(name.toLowerCase())}</div>
        <div className="data-row"><span>Date:</span> {utils.formatDate(new Date())}</div>
      </div>
    </div>
  );
};

export default Clase1;
