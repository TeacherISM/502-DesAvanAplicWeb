import { useState, FormEvent, ChangeEvent } from 'react';

// Styles for components
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '30px',
    backgroundColor: '#f8fafc',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    color: '#334155'
  },
  header: {
    fontSize: '1.75rem',
    color: '#0f172a',
    fontWeight: 'bold',
    borderBottom: '3px solid #3b82f6',
    paddingBottom: '0.5rem',
    marginBottom: '1.5rem'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '1.5rem',
    marginBottom: '1.5rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#1e293b'
  },
  formGroup: {
    marginBottom: '1rem'
  },
  formLabel: {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#475569'
  },
  counterValue: {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.75rem',
    color: '#1e40af'
  },
  hr: {
    margin: '1.5rem 0',
    border: 'none',
    borderTop: '1px solid #e2e8f0'
  },
  formTitle: {
    textAlign: 'center' as const,
    marginBottom: '1.5rem'
  }
};

// InputField Component with Props
interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

function InputField({ type, placeholder, value, onChange, label }: InputFieldProps) {
  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '0.375rem',
    border: '1px solid #cbd5e1',
    fontSize: '0.875rem',
    backgroundColor: '#fff',
    transition: 'border-color 0.15s ease-in-out',
    outline: 'none',
  };
  
  return (
    <div style={styles.formGroup}>
      {label && <label style={styles.formLabel}>{label}</label>}
      <input 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={inputStyle}
      />
    </div>
  );
}

// Button Component with Props
interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  variant: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

function Button({ label, type = "button", variant, onClick, fullWidth = false }: ButtonProps) {
  const buttonStyle = {
    padding: '0.75rem 1.25rem',
    borderRadius: '0.375rem',
    backgroundColor: variant === 'primary' ? '#3b82f6' : '#e5e7eb',
    color: variant === 'primary' ? 'white' : '#1f2937',
    border: 'none',
    fontWeight: '500' as const,
    fontSize: '0.875rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
    width: fullWidth ? '100%' : 'auto',
    boxShadow: variant === 'primary' ? '0 2px 4px rgba(59, 130, 246, 0.3)' : 'none',
  };

  return (
    <button 
      type={type} 
      style={buttonStyle}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

// Counter Component with State
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>State Example with Counter</h3>
      <div style={styles.counterValue}>Count: {count}</div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Button 
          label="Decrement" 
          variant="default" 
          onClick={() => setCount(count - 1)}
        />
        <Button 
          label="Increment" 
          variant="primary" 
          onClick={() => setCount(count + 1)}
        />
      </div>
    </div>
  );
}

// LoginForm Component with State and Composition
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password });
    alert(`Login attempted with email: ${email}`);
  };

  return (
    <div style={styles.card}>
      <h3 style={{...styles.cardTitle, ...styles.formTitle}}>Component Composition Example</h3>
      <form onSubmit={handleSubmit}>
        <InputField
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          label="Email Address"
        />
        <InputField
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          label="Password"
        />
        <div style={{ marginTop: '1.5rem' }}>
          <Button 
            label="Sign In" 
            type="submit"
            variant="primary"
            fullWidth={true}
          />
        </div>
      </form>
    </div>
  );
}

// Greeting Component with Props
interface GreetingProps {
  name: string;
}

function Greeting({ name }: GreetingProps) {
  return <h1 style={styles.header}>React Components Workshop: Props & Composition</h1>;
}

// Main App Component
function App() {
  return (
    <div style={styles.container}>
      <Greeting name="Student" />
      <Counter />
      <hr style={styles.hr} />
      <LoginForm />
    </div>
  );
}

export default App;