import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// Types
interface User {
  name: string;
  age: number;
}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Utility functions
const greet = (user: User): string => {
  return `Hello, ${user.name}! Welcome to your dashboard.`;
};

const fetchMockData = async (): Promise<Todo> => {
  // Simulate API call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "Sample task from API",
        completed: false,
      });
    }, 500);
  });
};

// ------------------------
// Componente: LoginPage
// Página de login simple con campos para username y password.
interface LoginPageProps {
  onLogin: (username: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Hardcoded credentials check
    if (username === "admin" && password === "password") {
      setLoggedIn(true);
      onLogin(username);
    } else {
      setError("Invalid username or password");
    }
  };

  // ------------------------
  // Componente: Dashboard
  // Muestra un mensaje de bienvenida y un botón para obtener datos desde la API simulada.
  interface DashboardProps {
    username: string;
  }

  const Dashboard: React.FC<DashboardProps> = ({ username }) => {
    const [data, setData] = useState<Todo | null>(null);

    const handleFetchData = async () => {
      try {
        const fetchedData = await fetchMockData();
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Se utiliza la función greet para demostrar su uso (con datos de ejemplo)
    const sampleUser: User = { name: username, age: 25 };

    return (
      <div style={{ textAlign: "center" }}>
        <h1 data-testid="cypress-dashboard-text">
          Welcome to the Dashboard, {username}!
        </h1>
        <p>{greet(sampleUser)}</p>
        <button onClick={handleFetchData}>Fetch Data</button>
        {data && (
          <div style={{ marginTop: "1rem" }}>
            <h3>Data from Mock API:</h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      {!loggedIn ? (
        <div style={{ textAlign: "center" }}>
          <h2>Login</h2>
          <p>Please enter your username and password to log in.</p>
          <p>User: admin</p>
          <p>Password: password</p>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && (
              <div className="error" style={{ color: "red", margin: "8px 0" }}>
                {error}
              </div>
            )}
            <button type="submit">Log In</button>
          </form>
        </div>
      ) : (
        <Dashboard username={username} />
      )}
    </div>
  );
};

export default LoginPage;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LoginPage
      onLogin={(username) => console.log(`Logged in as: ${username}`)}
    />
  </React.StrictMode>
);
