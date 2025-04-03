import React, { useReducer } from "react";

// Reusable InputField Component
const InputField = ({
  type,
  placeholder,
  value,
  onChange,
}: {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const inputStyle = {
    width: "100%",
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "1rem",
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={inputStyle}
    />
  );
};

// Reusable Button Component
const Button = ({ label, onClick }: { label: string; onClick: () => void }) => {
  const buttonStyle = {
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#3b82f6",
    color: "#fff",
    cursor: "pointer",
    marginTop: "1rem",
  };

  return (
    <button onClick={onClick} style={buttonStyle}>
      {label}
    </button>
  );
};

// Initial state for the form
const initialState = {
  email: "",
  password: "",
  error: "",
};

// Reducer function to manage form state
const reducer = (
  state: typeof initialState,
  action: { type: string; field?: string; value?: string }
) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field!]: action.value, error: "" };
    case "SET_ERROR":
      return { ...state, error: action.value! };
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

  // Login form submit handler
  const handleSubmit = () => {
    const { email, password } = state;

    // Validation logic
    if (!email || !password) {
      dispatch({ type: "SET_ERROR", value: "Both fields are required." });
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);

    // Reset form after successful submission
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <h1 style={headingStyle}>React Implementation</h1>
      <h2 style={headingStyle}>Login Page</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {state.error && <p style={{ color: "red" }}>{state.error}</p>}
        <div style={formGroupStyle}>
          <label>Email:</label>
          <InputField
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
          />
        </div>
        <div style={formGroupStyle}>
          <label>Password:</label>
          <InputField
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
          />
        </div>
        <Button label="Sign In" onClick={handleSubmit} />
      </form>
      <hr style={hrStyle} />
      {onBack && (
        <button style={buttonStyle} onClick={onBack}>
          Back to Menu
        </button>
      )}
    </div>
  );
};

export default Fundamentals;
