import Input from "./Input";
import Button from "./Button";
import { useState, useEffect } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);
  };

  useEffect(() => {
    if (!loading) return;

    const timer = setTimeout(() => {
      if (username === "admin" && password === "password") {
        console.log("Login successful");
        setSuccess(true);
      } else {
        setError("Invalid username or password");
      }
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [loading, username, password]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        {success && (
          <p className="text-green-600 text-center mb-4">Login successful!</p>
        )}

        <form onSubmit={handleSubmit}>
          <Input
            label="Username"
            name="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Loading…" : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
