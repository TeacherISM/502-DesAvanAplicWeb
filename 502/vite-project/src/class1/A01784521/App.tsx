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

// CSS styles for the demo
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px 30px',
    backgroundColor: '#f8fafc',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif'
  },
  header: {
    fontSize: '2rem',
    color: '#1e293b',
    textAlign: 'center' as const,
    marginBottom: '2rem',
    borderBottom: '2px solid #3b82f6',
    paddingBottom: '0.5rem'
  },
  section: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  },
  sectionTitle: {
    color: '#334155',
    borderLeft: '4px solid #3b82f6',
    paddingLeft: '10px',
    marginBottom: '15px'
  },
  codeText: {
    backgroundColor: '#f1f5f9',
    padding: '8px 12px',
    borderRadius: '4px',
    fontFamily: 'monospace',
    fontSize: '0.9rem'
  },
  button: {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 16px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontSize: '0.9rem',
    fontWeight: '500' as const
  },
  infoText: {
    color: '#64748b',
    fontSize: '0.9rem',
    marginTop: '10px'
  },
  dataDisplay: {
    display: 'grid',
    gridTemplateColumns: '80px 1fr',
    gap: '8px',
    alignItems: 'center'
  },
  label: {
    fontWeight: 'bold',
    color: '#475569'
  },
  value: {
    color: '#1e293b'
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
    <div style={styles.container}>
      <h1 style={styles.header}>ES6+ Features Demo</h1>
      
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Template Literals</h2>
        <p style={styles.codeText}>{`Hello, ${name}! Today is ${new Date().toLocaleDateString()}.`}</p>
        <p style={styles.codeText}>{`You have ${skills.length} skills: ${skills.join(", ")}`}</p>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Destructuring</h2>
        <div style={styles.dataDisplay}>
          <span style={styles.label}>Name:</span>
          <span style={styles.value}>{name}</span>
          
          <span style={styles.label}>Age:</span>
          <span style={styles.value}>{age}</span>
          
          <span style={styles.label}>Email:</span>
          <span style={styles.value}>{email}</span>
          
          <span style={styles.label}>Skill:</span>
          <span style={styles.value}>{primarySkill}</span>
        </div>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Arrow Functions</h2>
        <p>
          <button 
            style={styles.button}
            onClick={() => setCounter(counter + 1)}
            onMouseEnter={() => { arrowGreet(); traditionalGreet(); }}
          >
            Click me ({counter})
          </button>
        </p>
        <p style={styles.infoText}>Check console for arrow function demo logs</p>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Refactored Function (Template Literals + Destructuring)</h2>
        <p style={styles.codeText}>{greet(userData)}</p>
      </section>
      
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Module Usage (Simulated)</h2>
        <div style={styles.dataDisplay}>
          <span style={styles.label}>Original:</span>
          <span style={styles.value}>{name.toLowerCase()}</span>
          
          <span style={styles.label}>Capitalized:</span>
          <span style={styles.value}>{utils.capitalize(name.toLowerCase())}</span>
          
          <span style={styles.label}>Date:</span>
          <span style={styles.value}>{utils.formatDate(new Date())}</span>
        </div>
      </section>
    </div>
  );
}

export default App;
