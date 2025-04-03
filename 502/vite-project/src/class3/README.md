# Introduction to React Hooks

## Purpose of React Hooks (0:10 - 0:30)

React Hooks were introduced in React 16.8 to allow functional components to manage state and side effects, which were previously only possible in class components. They provide a more direct API to React concepts like props, state, context, refs, and lifecycle.

**Key benefits:**
- Simplify component logic
- Eliminate the need for class components
- Reuse stateful logic without changing component hierarchy
- Split components into smaller functions based on related pieces

## useState Hook

The `useState` hook lets you add React state to functional components.

### Example: Simple Counter

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initialize state with 0

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

**Explanation:**
1. `useState(0)` initializes the state variable `count` to 0
2. It returns an array with:
   - Current state value (`count`)
   - Function to update it (`setCount`)
3. When the button is clicked, `setCount` updates the state and triggers a re-render

## useEffect Hook

The `useEffect` hook lets you perform side effects in functional components. It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in React classes.

### Example: Data Fetching

```jsx
import React, { useState, useEffect } from 'react';

function UserData() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This effect runs after every render
    async function fetchData() {
      const response = await fetch('https://api.example.com/user');
      const data = await response.json();
      setUser(data);
      setLoading(false);
    }
    
    fetchData();
    
    // Optional cleanup function
    return () => {
      // Cancel any pending requests
    };
  }, []); // Empty array means this effect runs once after initial render

  if (loading) return <div>Loading...</div>;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
```

**Key points about useEffect:**
1. Runs after every render by default (unless dependencies are specified)
2. The dependency array (`[]` in this case) controls when the effect runs:
   - No array: runs after every render
   - Empty array: runs once after initial render
   - With values: runs when those values change
3. Can return a cleanup function to prevent memory leaks

**Common use cases:**
- Data fetching
- Setting up subscriptions
- Manually changing the DOM
- Timers

# Introduction to useReducer (1:10 - 1:30)

## What is useReducer?

`useReducer` is a React Hook that manages complex state logic in functional components. It's an alternative to `useState` that follows the same pattern as Redux reducers.

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

### When to use useReducer:
- When state logic is complex (multiple sub-values)
- When next state depends on the previous one
- When you need to manage state that involves multiple actions
- When you want to centralize state update logic
- When you need to optimize performance for deep updates

## Comparison: useState vs useReducer

| Feature          | useState                          | useReducer                          |
|------------------|-----------------------------------|-------------------------------------|
| **Best for**     | Simple state (primitive values)   | Complex state (objects, arrays)     |
| **State updates**| Direct value updates              | Action-based updates via dispatch   |
| **Logic**        | Logic in component                | Logic in reducer function           |
| **Readability**  | Good for simple cases             | Better for complex state transitions|
| **Testing**      | Requires testing component        | Reducer can be tested independently |

## Example: Counter with useReducer

```jsx
import React, { useReducer } from 'react';

// 1. Define reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      throw new Error('Unknown action type');
  }
}

function Counter() {
  // 2. Initialize useReducer
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}
```

## Example: Complex State Management

```jsx
function userReducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'TOGGLE_SUBSCRIPTION':
      return { ...state, isSubscribed: !state.isSubscribed };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

// Initial state object
const initialState = {
  name: '',
  email: '',
  isSubscribed: false
};

function UserProfile() {
  const [user, dispatch] = useReducer(userReducer, initialState);

  return (
    <form>
      <input 
        value={user.name}
        onChange={(e) => dispatch({
          type: 'SET_NAME',
          payload: e.target.value
        })}
      />
      {/* Other form fields... */}
    </form>
  );
}
```

## Key Benefits of useReducer

1. **Predictable state updates**: All state transitions are centralized in the reducer
2. **Easier to debug**: Actions provide a clear history of state changes
3. **Better separation of concerns**: State logic is separate from components
4. **Easier testing**: Reducers are pure functions that can be tested in isolation
5. **Scalability**: Easier to extend for complex state requirements
