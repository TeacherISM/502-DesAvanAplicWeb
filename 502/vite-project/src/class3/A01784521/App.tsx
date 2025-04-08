import { useState, useEffect, useReducer } from 'react';

// Counter component using useState
function CounterWithState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>useState Example: Simple Counter</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// Define User type
interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  website?: string;
}

// UserData component using useEffect
function UserData() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This effect runs after every render
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }
    
    fetchData();
    
    // Optional cleanup function
    return () => {
      // Cleanup code would go here
      console.log('Component unmounted');
    };
  }, []); // Empty array means this effect runs once after initial render

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>No user data available</div>;
  
  return (
    <div>
      <h2>useEffect Example: Data Fetching</h2>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
    </div>
  );
}

// Define Counter state and action types
interface CounterState {
  count: number;
}

type CounterAction = 
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' };

// Counter reducer function
function counterReducer(state: CounterState, action: CounterAction): CounterState {
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

// Counter component using useReducer
function CounterWithReducer() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <h2>useReducer Example: Counter</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}

// Define User Profile state and action types
interface UserState {
  name: string;
  email: string;
  isSubscribed: boolean;
}

type UserAction = 
  | { type: 'SET_NAME'; payload: string }
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'TOGGLE_SUBSCRIPTION' }
  | { type: 'RESET' };

// User profile reducer function
function userReducer(state: UserState, action: UserAction): UserState {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'TOGGLE_SUBSCRIPTION':
      return { ...state, isSubscribed: !state.isSubscribed };
    case 'RESET':
      return initialUserState;
    default:
      return state;
  }
}

// Initial user state
const initialUserState: UserState = {
  name: '',
  email: '',
  isSubscribed: false
};

// UserProfile component using useReducer
function UserProfile() {
  const [user, dispatch] = useReducer(userReducer, initialUserState);

  return (
    <div>
      <h2>useReducer Example: Complex Form</h2>
      <form>
        <div>
          <label>
            Name:
            <input 
              value={user.name}
              onChange={(e) => dispatch({
                type: 'SET_NAME',
                payload: e.target.value
              })}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input 
              value={user.email}
              onChange={(e) => dispatch({
                type: 'SET_EMAIL',
                payload: e.target.value
              })}
            />
          </label>
        </div>
        <div>
          <label>
            <input 
              type="checkbox"
              checked={user.isSubscribed}
              onChange={() => dispatch({ type: 'TOGGLE_SUBSCRIPTION' })}
            />
            Subscribe to newsletter
          </label>
        </div>
        <div>
          <button type="button" onClick={() => dispatch({ type: 'RESET' })}>
            Reset Form
          </button>
        </div>
      </form>
      <div>
        <h3>Form Data:</h3>
        <pre>
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
}

// Main App component
function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>React Hooks Examples</h1>
      
      <hr />
      <CounterWithState />
      
      <hr />
      <UserData />
      
      <hr />
      <CounterWithReducer />
      
      <hr />
      <UserProfile />
    </div>
  );
}

export default App;