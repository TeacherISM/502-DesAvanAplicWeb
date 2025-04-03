# React Fundamentals Workshop

## 2. React Basics (0:10 - 0:30)

### Core Concepts

#### Components
```javascript
// Functional Component
function Greeting() {
  return <h1>Hello, React!</h1>;
}

// Class Component
class GreetingClass extends React.Component {
  render() {
    return <h1>Hello from Class!</h1>;
  }
}
```

#### Props
```javascript
// Parent Component
function App() {
  return <Greeting name="Alice" />;
}

// Child Component
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

#### State
```javascript
// Using useState hook
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

---

## 4. Component Composition (0:50 - 1:10)

### Building a Login Form
```javascript
// LoginForm.jsx
import Button from './Button';
import InputField from './InputField';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <InputField
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button 
        label="Sign In" 
        type="submit"
        variant="primary"
      />
    </form>
  );
}
```

---

## 6. JSX and CSS-in-JS (1:30 - 1:50)

### JSX Fundamentals
```javascript
// JSX combines HTML and JavaScript
const element = <h1 className="title">Hello, {user.name}!</h1>;

// Equivalent to:
const element = React.createElement(
  'h1',
  { className: 'title' },
  'Hello, ',
  user.name,
  '!'
);
```

### Styled Components Example
```javascript
// Install styled-components first:
// npm install styled-components

import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background: ${props => props.primary ? '#3b82f6' : '#e5e7eb'};
  color: ${props => props.primary ? 'white' : '#1f2937'};
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.primary ? '#2563eb' : '#d1d5db'};
  }
`;

// Usage
<StyledButton primary>Primary Button</StyledButton>
<StyledButton>Secondary Button</StyledButton>
```

### Emotion CSS-in-JS Example
```javascript
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const errorStyle = css`
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

function ErrorMessage({ children }) {
  return <div css={errorStyle}>{children}</div>;
}
```

---

## Key Takeaways

| Concept | Description | Example |
|---------|-------------|---------|
| **Components** | Reusable UI building blocks | `function Button() { return ... }` |
| **Props** | Data passed from parent to child | `<Greeting name="Alice" />` |
| **State** | Component-specific dynamic data | `const [count, setCount] = useState(0)` |
| **Composition** | Combining components to build UIs | Form = Input + Button + Label |
| **CSS-in-JS** | Scoped component styling | `styled.button` or `css` prop |

---

## Best Practices

1. **Component Design**
    - Single Responsibility Principle
    - Keep components small and focused
    - Prefer functional components with hooks

2. **Props Management**
    - Use prop-types or TypeScript
    - Destructure props for cleaner code
    - Avoid prop drilling (use Context if needed)

3. **Styling**
    - Consistent design system
    - Theme variables for colors/spacing
    - Responsive design considerations
