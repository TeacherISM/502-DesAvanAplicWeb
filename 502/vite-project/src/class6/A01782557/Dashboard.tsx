import { useUser } from './UserContext';

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div>
      <h2>Dashboard</h2>

      {user.role === 'employee' && (
        <div>
          <h3>Employee View</h3>
          <p>Submitted Travel Requests</p>
        </div>
      )}

      {user.role === 'manager' && (
        <div>
          <h3>Manager View</h3>
          <p>Pending Travel Requests</p>
        </div>
      )}

      {user.role === 'admin' && (
        <div>
          <h3>Admin View</h3>
          <p>User Management</p>
        </div>
      )}
    </div>
  );
}
