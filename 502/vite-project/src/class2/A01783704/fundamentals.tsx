import React, { useReducer } from "react";

// Initial state for the form
const initialState = {
  email: "",
  password: "",
  error: "",
  success: false, // New state to track successful login
};

// Reducer function to manage form state
const reducer = (
  state: typeof initialState,
  action: { type: string; field?: string; value?: string }
) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field!]: action.value,
        error: "",
        success: false,
      };
    case "SET_ERROR":
      return { ...state, error: action.value!, success: false };
    case "SET_SUCCESS":
      return { ...state, success: true, error: "" };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

// Main Component: Login Page with useReducer
const Fundamentals = ({ onBack }: { onBack?: () => void }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const headingStyle = {
    marginBottom: "1rem",
  };

  const formGroupStyle = {
    marginBottom: "1rem",
    textAlign: "left" as const,
  };

  const hrStyle = {
    margin: "2rem 0",
  };

  const buttonStyle = {
    margin: "1rem",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#3b82f6",
    color: "#fff",
    cursor: "pointer",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "1rem",
  };

  // Login form submit handler
  const handleSubmit = () => {
    const { email, password } = state;

    // Validation logic
    if (!email || !password) {
      dispatch({ type: "SET_ERROR", value: "Both fields are required." });
      return;
    }

    // Simulate successful login
    if (email === "admin" && password === "password") {
      dispatch({ type: "SET_SUCCESS" });
    } else {
      dispatch({ type: "SET_ERROR", value: "Invalid email or password." });
    }
  };

  return (
    <div>
      <h1 style={headingStyle}>React Implementation</h1>

      {/* Login Form Section */}
      <h2 style={headingStyle}>Login Page</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {/* Display error or success message */}
        {state.error && <p style={{ color: "red" }}>{state.error}</p>}
        {state.success && <p style={{ color: "green" }}>Login successful!</p>}
        <div style={formGroupStyle}>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email"
            value={state.email}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "email",
                value: e.target.value,
              })
            }
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={state.password}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "password",
                value: e.target.value,
              })
            }
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Sign In
        </button>
      </form>

      <hr style={hrStyle} />

      {/* Back to Menu Button */}
      {onBack && (
        <button style={buttonStyle} onClick={onBack}>
          Back to Menu
        </button>
      )}
    </div>
  );
};

export default Fundamentals;
