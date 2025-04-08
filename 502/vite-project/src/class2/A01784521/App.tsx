import { useState, FormEvent, ChangeEvent } from 'react';

// InputField Component with Props
interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function InputField({ type, placeholder, value, onChange }: InputFieldProps) {
  return (
    <input 
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border rounded px-3 py-2 w-full"
    />
  );
}

// Button Component with Props
interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  variant: string;
  onClick?: () => void;
}

function Button({ label, type = "button", variant, onClick }: ButtonProps) {
  const buttonStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    background: variant === 'primary' ? '#3b82f6' : '#e5e7eb',
    color: variant === 'primary' ? 'white' : '#1f2937',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
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
    <div className="mb-6 p-4 border rounded shadow-sm">
      <p className="text-lg">Count: {count}</p>
      <Button 
        label="Increment" 
        variant="primary" 
        onClick={() => setCount(count + 1)}
      />
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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-bold mb-2">Login Form</h2>
      <div className="mb-3">
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
      </div>
      <Button 
        label="Sign In" 
        type="submit"
        variant="primary"
      />
    </form>
  );
}

// Greeting Component with Props
interface GreetingProps {
  name: string;
}

function Greeting({ name }: GreetingProps) {
  return <h1 className="text-2xl font-bold mb-4">Hello, {name}!</h1>;
}

// Main App Component
function App() {
  return (
    <div className="App p-6 max-w-2xl mx-auto">
      <Greeting name="Facundo" />
      <div className="grid gap-6">
        <Counter />
        <LoginForm />
      </div>
    </div>
  );
}

export default App;