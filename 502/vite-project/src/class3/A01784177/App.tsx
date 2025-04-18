import { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
    const [role, setRole] = useState<string | null>(null);

    const handleLogin = (username: string, password: string) => {
        if(password === '1234567890'){
          if (username === 'admin') setRole('admin');
          else if (username === 'aprover') setRole('aprover');
          else setRole('requester');
        } else {
          alert('Incorrect password');
        }
    };

    return (
      <>
          <div>
          {role ? (
              <Dashboard role={role} />
            ) : (
              <Login onLogin={handleLogin} />
            )}
          </div>
          <a href="/src/menu/A01784177/index.html">Menu</a>
      </>
  )
}

export default App
