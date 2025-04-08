// src/class3/L03535511/Implementation.tsx
import { useReducer, useState, useEffect } from "react";
import { Link } from "react-router-dom";

// --- useState Hook Example ---
const HookStateExample = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="hook-example">
      <h3>useState Example</h3>
      <p>A simple counter that demonstrates the useState hook</p>
      <p>You clicked {count} times</p>
      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

// --- useEffect Hook Example ---
interface UserData {
  name: string;
  email: string;
  lastLogin: string;
}

const HookEffectExample = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API call
    const fetchData = async () => {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock data that would come from an API
      const mockUserData: UserData = {
        name: "John Doe",
        email: "john.doe@example.com",
        lastLogin: new Date().toLocaleString(),
      };

      setUserData(mockUserData);
      setLoading(false);
    };

    fetchData();

    // Cleanup function (runs on component unmount)
    return () => {
      console.log(
        "User data component unmounted - cleaning up any subscriptions",
      );
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="hook-example">
      <h3>useEffect Example</h3>
      <p>Data fetching with useEffect (simulated API call)</p>

      {loading ? (
        <div className="loading">Loading user data...</div>
      ) : (
        userData && (
          <div className="user-data">
            <h4>User Profile</h4>
            <p>
              <strong>Name:</strong> {userData.name}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Last Login:</strong> {userData.lastLogin}
            </p>
          </div>
        )
      )}
    </div>
  );
};

// --- useReducer Hook Example ---
// Define our reducer and state
interface UserState {
  name: string;
  email: string;
  isSubscribed: boolean;
}

type UserAction =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "TOGGLE_SUBSCRIPTION" }
  | { type: "RESET" };

const initialUserState: UserState = {
  name: "",
  email: "",
  isSubscribed: false,
};

function userReducer(state: UserState, action: UserAction): UserState {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "TOGGLE_SUBSCRIPTION":
      return { ...state, isSubscribed: !state.isSubscribed };
    case "RESET":
      return initialUserState;
    default:
      return state;
  }
}

const HookReducerExample = () => {
  const [userState, dispatch] = useReducer(userReducer, initialUserState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Form submitted with data:\n${JSON.stringify(userState, null, 2)}`);
  };

  return (
    <div className="hook-example">
      <h3>useReducer Example</h3>
      <p>Complex form state management with useReducer</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={userState.name}
            onChange={(e) =>
              dispatch({ type: "SET_NAME", payload: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={userState.email}
            onChange={(e) =>
              dispatch({ type: "SET_EMAIL", payload: e.target.value })
            }
          />
        </div>

        <div className="form-check">
          <input
            id="subscribe"
            type="checkbox"
            checked={userState.isSubscribed}
            onChange={() => dispatch({ type: "TOGGLE_SUBSCRIPTION" })}
          />
          <label htmlFor="subscribe">Subscribe to newsletter</label>
        </div>

        <div className="button-group">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => dispatch({ type: "RESET" })}>
            Reset
          </button>
        </div>
      </form>

      <div className="state-display">
        <h4>Current State:</h4>
        <pre>{JSON.stringify(userState, null, 2)}</pre>
      </div>
    </div>
  );
};

// Main component that brings it all together
const Implementation = () => {
  return (
    <div className="hooks-container">
      <div className="hooks-header">
        <h1>React Hooks Demo</h1>
        <p>
          This page demonstrates the three main React Hooks discussed in the
          documentation.
        </p>
        <nav className="navigation">
          <Link to="/" className="nav-link">
            Back to Home
          </Link>
          <Link to="/login" className="nav-link">
            Login Page
          </Link>
        </nav>
      </div>

      <div className="hooks-content">
        <HookStateExample />
        <HookEffectExample />
        <HookReducerExample />
      </div>

      {/* Fix for the style JSX issue - use a standard style tag instead */}
      <style>
        {`
.hooks-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: rgba(255, 255, 255, 0.87);
}

.hooks-header {
  margin-bottom: 40px;
  text-align: center;
}

.hooks-header h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.navigation {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 25px;
}

.nav-link {
  padding: 10px 24px;
  background-color: #646cff;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #535bf2;
}

.hooks-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.hook-example {
  border-radius: 12px;
  padding: 30px;
  background-color: #ffffff;
  color: #213547;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.hook-example h3 {
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 15px;
  color: #1a1a1a;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus {
  outline: none;
  border-color: #646cff;
  box-shadow: 0 0 0 2px rgba(100, 108, 255, 0.2);
}

.form-check {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.form-check input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.button-group {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}

.button-group button {
  padding: 10px 20px;
  background-color: #646cff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button-group button:hover {
  background-color: #535bf2;
}

.state-display {
  margin-top: 25px;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 6px;
}

.state-display h4 {
  margin-top: 0;
  margin-bottom: 10px;
}

pre {
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 6px;
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
}

.loading {
  padding: 30px;
  text-align: center;
  background-color: #f5f5f5;
  border-radius: 6px;
  font-style: italic;
  color: #666;
}

.user-data {
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 6px;
}

.user-data h4 {
  margin-top: 0;
  margin-bottom: 15px;
  color: #1a1a1a;
}

.user-data p {
  margin: 8px 0;
}

.user-data strong {
  font-weight: 600;
  margin-right: 5px;
}
        `}
      </style>
    </div>
  );
};

export default Implementation;
