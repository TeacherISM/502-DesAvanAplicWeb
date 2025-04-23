import Login from "./Login"
import { useState } from 'react';
import Dashboard from "./Dashboard";


function App() {

  const [role, setRole] = useState<string | null>(null);

    const handleLogin = (username:string, password:string) => {

      if (username === 'admin' && password==='admin') setRole('admin');
      else if (username === 'manager' && password==='manager') setRole('manager');
      else if (password==='employee')setRole('employee')
        else alert('Invalid credentials');
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
    <a href="/src/menu/A01028038/index.html">Menu</a>
    </>
  )
}
export default App
