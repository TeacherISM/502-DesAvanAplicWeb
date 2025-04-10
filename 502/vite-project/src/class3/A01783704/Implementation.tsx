import React, { useState, useEffect } from "react";

// Main Component: Login Page with useState and useEffect
const Implementation = ({ onBack }: { onBack?: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload

    // Validation logic
    if (!email || !password) {
      setError("Both fields are required.");
      setSuccess(false);
      return;
    }

    // Simulate successful login
    if (email === "admin" && password === "password") {
      setSuccess(true);
      setError("");
      setEmail(""); // Reset form after successful login
      setPassword("");
    } else {
      setError("Invalid email or password.");
      setSuccess(false);
    }
  };

  // useEffect to clear error when email or password changes
  useEffect(() => {
    if (error) {
      setError("");
    }
  }, [email, password]);

  return (
    <div>
      <h1 style={headingStyle}>React Implementation</h1>

      {/* Login Form Section */}
      <h2 style={headingStyle}>Login Page</h2>
      <form onSubmit={handleSubmit}>
        {/* Display error or success message */}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>Login successful!</p>}
        <div style={formGroupStyle}>
          <label>Email:</label>
          <input
            type="text" // ✅ Changed from "email" to "text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

export default Implementation;
