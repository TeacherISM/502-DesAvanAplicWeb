import { useState } from "react";
import Counter from "./Counter";
import Login from "./Login";
import TravelRequestForm from "./TravelRequestForm";

const App = () => {
  const [view, setView] = useState<"menu" | "counter" | "login" | "travel">(
    "menu"
  );

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
        <Login />
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
  }
};

export default App;
