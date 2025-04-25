import { useUser } from './UserContext';
import Dashboard from './Dashboard'

export default function App() {
  const { user, login, logout } = useUser();

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h1>Company Portal</h1>

      <div style={{ marginBottom: '20px' }}>
        <strong>Current Role:</strong> {user.role}
      </div>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button onClick={() => login('employee')}>Login as Employee</button>
        <button onClick={() => login('manager')}>Login as Manager</button>
        <button onClick={() => login('admin')}>Login as Admin</button>
        <button onClick={logout}>Logout</button>
      </div>

      <Dashboard />
    </div>
  );
}
