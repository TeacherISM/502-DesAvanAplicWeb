import { useReducer } from "react";
import InputField from "./InputField";
import Button from "./Button";

// Define the shape of our form state
interface State {
  username: string,
  password: string,
  error: string, 
};

type Action =
  | { type: "SET_USERNAME"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "SUBMIT" };

const initialState = {
  username: "",
  password: "",
  error: "", 
};


const reducer = (state: State, action:Action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload, error: "" };
    case "SET_PASSWORD":
      // Optional validation: password must be at least 6 characters
      if (action.payload!.length < 6) {
        return { ...state, password: action.payload, error: "Password must be at least 6 characters." };
      }
      return { ...state, password: action.payload, error: "" };
    case "SUBMIT":
      // Here you can add additional validation logic if required before submitting.
      if (!state.username || !state.password) {
        return { ...state, error: "Both username and password are required." };
      }
      return state;
    default:
      return state;
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { username, password, error } = state;

  const handleSubmit = () => {
    // Dispatch submit action if needed for validation purposes
    dispatch({ type: "SUBMIT" });

    if (!error && username && password) {
      console.log(`Username: ${username}\nPassword: ${password}`);
      // Add further login logic here (e.g., API call)
    }
  };

  return (
    <div>
      <h1>Login using useReducer</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <InputField
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) =>
          dispatch({ type: "SET_USERNAME", payload: e.target.value })
        }
      />
      <br />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          dispatch({ type: "SET_PASSWORD", payload: e.target.value })
        }
      />
      <br />
      <Button label="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default Login;
