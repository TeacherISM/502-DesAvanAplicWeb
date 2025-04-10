import { useState } from "react";
import Counter from "./Counter";
import Login from "./Login";
import TravelRequestForm from "./TravelRequestForm";
import Dashboard from "./Dashboard";

const App = () => {
  const [view, setView] = useState<
    "menu" | "counter" | "login" | "travel" | "dashboard"
  >("menu");
  const [role, setRole] = useState<null | string>(null);

  const handleLogin = (username: string) => {
    if (username === "admin") {
      setRole("admin");
    } else if (username === "manager") {
      setRole("manager");
    } else {
      setRole("employee");
    }
    setView("dashboard");
  };

  if (view === "menu") {
    return (
      <div className="app-container">
        <h1>Clase 3 - Hands-On</h1>
        <div className="button-container">
          <button onClick={() => setView("counter")} className="nav-button">
            Counter (useState)
          </button>
        </div>
        <div className="button-container">
          <button onClick={() => setView("login")} className="nav-button">
            Login (useReducer)
          </button>
        </div>
        <div className="button-container">
          <button onClick={() => setView("travel")} className="nav-button">
            Travel Request Form (useReducer)
          </button>
        </div>
      </div>
    );
  } else if (view === "counter") {
    return (
      <div className="app-container">
        <Counter />
        <div className="button-container">
          <button onClick={() => setView("menu")} className="nav-button">
            Back to Menu
          </button>
        </div>
      </div>
    );
  } else if (view === "login") {
    return (
      <div className="app-container">
        <Login onLogin={handleLogin} />
        <div className="button-container">
          <button onClick={() => setView("menu")} className="nav-button">
            Back to Menu
          </button>
        </div>
      </div>
    );
  } else if (view === "travel") {
    return (
      <div className="app-container">
        <TravelRequestForm />
        <div className="button-container">
          <button onClick={() => setView("menu")} className="nav-button">
            Back to Menu
          </button>
        </div>
      </div>
    );
  } else if (view === "dashboard") {
    return (
      <div className="app-container">
        {role ? (
          <Dashboard role={role} />
        ) : (
          <p>No role assigned. Please log in again.</p>
        )}
        <div className="button-container">
          <button
            onClick={() => {
              setRole(null);
              setView("menu");
            }}
            className="nav-button"
          >
            Log out
          </button>
        </div>
      </div>
    );
  }
};

export default App;
