import React, { useState } from 'react';
import { useUser } from './UserContext';
import { useNavigate } from 'react-router-dom'

const UserDashboard: React.FC = () => {
  const { userRole, loggedIn, loginAs, logout } = useUser();
  const [selectedRole, setSelectedRole] = useState<UserRole>('guest');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  // Mock data
  const employeeData = {
    travelRequests: [
      { id: 1, status: 'submitted', destination: 'Paris', amount: '$1000' },
      { id: 2, status: 'submitted', destination: 'Tokyo', amount: '$1200' },
    ],
    expenses: [
      { id: 1, type: 'Hotel', amount: '$200' },
      { id: 2, type: 'Flight', amount: '$500' },
    ],
  };

  const managerData = {
    pendingRequests: [
      { id: 1, employee: 'John', destination: 'Berlin', amount: '$1500' },
      { id: 2, employee: 'Jane', destination: 'New York', amount: '$1300' },
    ],
    pendingExpenses: [
      { id: 1, employee: 'John', type: 'Hotel', amount: '$300' },
      { id: 2, employee: 'Jane', type: 'Flight', amount: '$600' },
    ],
  };

  const adminData = {
    users: [
      { id: 1, name: 'John Doe', role: 'employee' },
      { id: 2, name: 'Jane Smith', role: 'manager' },
    ],
    systemSettings: {
      theme: 'light',
      notifications: true,
    },
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(e.target.value as UserRole);
  };

  const handleLogin = () => {
    if (username && password) {
      // Simulate login (you can add real authentication here)
      loginAs(selectedRole);
    } else {
      setError('Please enter a valid username and password');
    }
  };

  const handleLogout = () => {
    navigate('/Clase6'); // Redirect to the /Clase6 route
    logout();
  };

  return (
    <div>
      {!loggedIn ? (
        <div>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br/>
        
          <select value={selectedRole} onChange={handleRoleChange}>
            <option value="guest">Guest</option>
            <option value="employee">Employee</option>
            <option value="manager">Manager</option>
            <option value="admin">Admin</option>
          </select>
          <br/>
          <br/>
        
          <button onClick={handleLogin}>Login</button>
          {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
      ) : (
        <div>
          <h1>Welcome to the Dashboard</h1>
          <h2>Current Role: {userRole}</h2>
          <button onClick={handleLogout}>Logout</button>

          {userRole === 'employee' && (
            <div>
              <h3>Your Submitted Travel Requests:</h3>
              <ul>
                {employeeData.travelRequests.map((request) => (
                  <li key={request.id}>
                    {request.destination} - {request.status} - {request.amount}
                  </li>
                ))}
              </ul>
              <h3>Your Expenses:</h3>
              <ul>
                {employeeData.expenses.map((expense) => (
                  <li key={expense.id}>
                    {expense.type} - {expense.amount}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {userRole === 'manager' && (
            <div>
              <h3>Pending Travel Requests:</h3>
              <ul>
                {managerData.pendingRequests.map((request) => (
                  <li key={request.id}>
                    {request.employee} - {request.destination} - {request.amount}
                  </li>
                ))}
              </ul>
              <h3>Pending Expenses:</h3>
              <ul>
                {managerData.pendingExpenses.map((expense) => (
                  <li key={expense.id}>
                    {expense.employee} - {expense.type} - {expense.amount}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {userRole === 'admin' && (
            <div>
              <h3>User Management:</h3>
              <ul>
                {adminData.users.map((user) => (
                  <li key={user.id}>
                    {user.name} - {user.role}
                  </li>
                ))}
              </ul>
              <h3>System Settings:</h3>
              <p>Theme: {adminData.systemSettings.theme}</p>
              <p>Notifications: {adminData.systemSettings.notifications ? 'Enabled' : 'Disabled'}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
