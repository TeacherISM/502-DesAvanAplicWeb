import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Clase3 from "./Clase3";

const App = () => {
  const [role, setRole] = useState<string | null>(null);

  const handleLogin = (username: string) => {
    let userRole: string;
    if (username === "admin") userRole = "admin";
    else if (username === "manager") userRole = "manager";
    else userRole = "employee";

    setRole(userRole);
    alert(`Login exitoso! Rol: ${userRole}`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {role ? <Dashboard role={role} /> : <Clase3 onLogin={handleLogin} />}
    </div>
  );
};

export default App;
