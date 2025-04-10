import React, { useState, useEffect } from "react";
import InputField from "../../class2/A01027626/components/InputField";
import Button from "../../class2/A01027626/components/Button";
import "./Login.css";

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
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
        onLogin("admin", "password");
      } else if (username === "manager" && password === "password") {
        onLogin("manager", "password");
      } else if (username && password === "password") {
        onLogin("employee", "password");
      } else {
        setError("Invalid username or password");
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
      <div className="login-info">
        <p>
          <strong>Test Credentials:</strong>
        </p>
        <p>Admin: username=admin / password=password</p>
        <p>Manager: username=manager / password=password</p>
        <p>Employee: username=any other username / password=password</p>
      </div>
    </div>
  );
};

export default Login;
