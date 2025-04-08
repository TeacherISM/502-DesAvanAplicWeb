import React, { useState, useEffect } from "react";
import InputField from "../../class2/A01749746/components/InputField";
import Button from "../../class2/A01749746/components/Button";
import "./Login.css";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      if (username === "admin" && password === "password") {
        console.log("Login successful");
      } else {
        setError("Login unsuccessful");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <InputField
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        label={loading ? "Loading..." : "Submit"}
        onClick={handleSubmit}
      />
    </div>
  );
};

export default Login;