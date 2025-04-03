import React, { useState } from "react";

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

// Main Component: Fundamentals Login Page
const Fundamentals = () => {
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

  // Using useState hook for form state management
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Login form submit handler
  const handleSubmit = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div>
      <h1 style={headingStyle}>React Fundamentals</h1>

      {/* Login Form Section */}
      <h2 style={headingStyle}>Login Page</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div style={formGroupStyle}>
          <label>Email:</label>
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={formGroupStyle}>
          <label>Password:</label>
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button label="Sign In" onClick={handleSubmit} />
      </form>

      <hr style={hrStyle} />
    </div>
  );
};

export default Fundamentals;
