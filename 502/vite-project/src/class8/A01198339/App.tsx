import Login from "./Login";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import Dashboard from "./Dashboard";
import "./styles.css";

function App() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be used within a UserProvider");
  }

  const { user, handleLogin } = context;

  return (
    <>
      <div className="App">
        {user.role ? (
          <Dashboard role={user.role} />
        ) : (
          <Login onLogin={handleLogin} />
        )}
        <a href="/src/menu/A01028038/index.html" className="menu">
          Menu
        </a>
      </div>
    </>
  );
}
export default App;
