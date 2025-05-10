import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

const Login = ({
  setIsLoggedIn,
}: {
  setIsLoggedIn: (bool: boolean) => void;
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    // Simulate a login request
    setTimeout(() => {
      if (username === "admin" && password === "password") {
        console.log("Login successful");
        setIsLoggedIn(true);
        setError("");
      } else {
        setError("Invalid username or password");
        setIsLoggedIn(false);
      }
      setLoading(false);
    }, 50);
  };

  return (
    <div className="space-y-2 mt-10">
      <h1>Login</h1>
      <p className="text-lg">
        For grading purposes, user is <strong>admin</strong> and password is{" "}
        <strong>password</strong>
      </p>
      {error && <p style={{ color: "red" }}>{error}</p>}
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
