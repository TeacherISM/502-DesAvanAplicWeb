# Advanced React Patterns

## 2. Introduction to Higher-Order Components (HOCs) (0:10 - 0:30)

### What are HOCs?
A Higher-Order Component is a function that takes a component and returns a new component with enhanced functionality. HOCs are used for:
- Cross-cutting concerns (logging, authentication)
- Code reuse and logic sharing
- Props manipulation
- State abstraction

### HOC Example: WithLogging

```jsx
function withLogging(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log(`Rendering ${WrappedComponent.name} with props:`, props);
    return <WrappedComponent {...props} />;
  };
}

// Usage
const Button = ({ onClick }) => (
  <button onClick={onClick}>Click me</button>
);

const ButtonWithLogging = withLogging(Button);

// In your app
function App() {
  return <ButtonWithLogging onClick={() => alert('Clicked!')} />;
}
```

**Key Characteristics:**
1. HOCs are pure functions (no side effects)
2. They don't modify the input component
3. They compose the original component
4. Convention: Prefix HOC names with "with"

## 4. Introduction to Render Props (0:50 - 1:10)

### What is Render Props?
A pattern where a component's children is a function that receives values and returns JSX. Used for:
- Sharing stateful logic between components
- Creating reusable behavior
- Avoiding "prop drilling"

### Render Props Example: DataFetcher

```jsx
class DataFetcher extends React.Component {
  state = { data: null, loading: true, error: null };

  async componentDidMount() {
    try {
      const response = await fetch(this.props.url);
      const data = await response.json();
      this.setState({ data, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }

  render() {
    return this.props.children(this.state);
  }
}

// Usage
function UserProfile() {
  return (
    <DataFetcher url="https://api.example.com/user/1">
      {({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error.message}</div>;
        return (
          <div>
            <h1>{data.name}</h1>
            <p>Email: {data.email}</p>
          </div>
        );
      }}
    </DataFetcher>
  );
}
```

**Key Benefits:**
1. More flexible than HOCs
2. Explicit data flow
3. No naming collisions
4. Works well with TypeScript

## 6. Introduction to Custom Hooks (1:30 - 1:50)

### What are Custom Hooks?
Functions that use React Hooks internally to encapsulate reusable logic. Benefits include:
- Logic reuse without changing component hierarchy
- Better separation of concerns
- Easier testing
- More readable components

### Custom Hook Example: useFetch

```jsx
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Re-run when URL changes

  return { data, loading, error };
}

// Usage
function UserProfile() {
  const { data, loading, error } = useFetch('https://api.example.com/user/1');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      <h1>{data.name}</h1>
      <p>Email: {data.email}</p>
    </div>
  );
}
```

**Advantages Over HOCs/Render Props:**
1. No wrapper components in DOM
2. Clearer data flow
3. Easier to compose multiple hooks
4. Better TypeScript support
5. More intuitive API

## Pattern Comparison

| Feature          | HOCs               | Render Props       | Custom Hooks       |
|------------------|--------------------|--------------------|--------------------|
| **Reusability**  | High               | High               | Highest            |
| **Readability**  | Moderate           | Good               | Excellent          |
| **DOM Impact**   | Adds components    | Adds components    | No extra components|
| **Type Safety**  | Challenging        | Good               | Excellent          |
| **Learning Curve**| Moderate           | Moderate           | Easy (if you know hooks) |
