import Login from "./Login";
import { useState } from "react";
import Dashboard from "./Dashboard";

function App() {
  const [role, setRole] = useState<string | null>(null);

    const handleLogin = (username: string, password: string) => {
      if (password !== '1234') {
        alert('Incorrect password')
        return
      }
      if (username === 'user') setRole('user');
      else if (username === 'admin') setRole('admin');
      else setRole('employee');
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
          <a href="/src/menu/A01198339/index.html">Menu</a>
      </>
  )
}

export default App
