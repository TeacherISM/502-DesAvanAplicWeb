import React, { useState, useEffect, useContext } from "react";
import InputField from "../../class2/A01025119/Input";
import Button from "../../class2/A01025119/Button";
import "./Login.css";
import { UserContext, Role } from "./UserContext";
import LoginFailed from "../../class4/A01025119/loginFail.tsx";

const ContextLogin: React.FC = () => {
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [loginState, setLoginState] = useState<"idle" | "fail">("idle");

  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => setError(""), 3000);
    return () => clearTimeout(timer);
  }, [error]);

  const handleSubmit = () => {
    if (loading || !username || !password) return;
    setLoading(true);

    setTimeout(() => {
      let role: Role | null = null;

      if (username === "admin" && password === "password") {
        role = "admin";
      } else if (username === "manager" && password === "password") {
        role = "manager";
      } else if (password === "password") {
        role = "employee";
      }

      if (role) {
        login(role);
        window.location.hash = "class6-dashboard";
      } else {
        setLoginState("fail");
      }

      setLoading(false);
    }, 1000);
  };

  const handleBack = () => {
    setUsername("");
    setPassword("");
    setError("");
    setLoginState("idle"); // ✅ Reset state to login page
  };

  if (loginState === "fail") {
    return <LoginFailed onBack={handleBack} />;
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      {error && (
        <p className="error" role="alert">
          {error}
        </p>
      )}
  

      <InputField
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        type="password"
        name="password"
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

export default ContextLogin;
