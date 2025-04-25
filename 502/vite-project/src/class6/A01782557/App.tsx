import React, { createContext, useContext, useState, useEffect, FormEvent, ReactNode } from 'react';

// Estilos
const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '30px',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  },
  loginContainer: {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '500',
    color: '#374151',
  },
  input: {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '14px',
    transition: 'border-color 0.15s ease-in-out',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '12px',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontWeight: '500',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background-color 0.15s ease-in-out',
  },
  error: {
    color: '#ef4444',
    marginTop: '8px',
    fontSize: '14px',
  },
  note: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#f3f4f6',
    borderRadius: '6px',
    fontSize: '14px',
    color: '#4b5563',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '10px 0',
    borderBottom: '1px solid #e5e7eb',
  },
  title: {
    margin: 0,
    fontSize: '24px',
    fontWeight: '600',
    color: '#111827',
  },
  nav: {
    display: 'flex',
    gap: '10px',
  },
  navButton: {
    padding: '8px 12px',
    backgroundColor: '#f3f4f6',
    border: 'none',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#4b5563',
    cursor: 'pointer',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  },
  stat: {
    borderLeft: '4px solid #3b82f6',
    paddingLeft: '15px',
  },
  statNumber: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '5px',
  },
  statLabel: {
    fontSize: '14px',
    color: '#6b7280',
  }
};

// Tipos
interface User {
  email: string;
  password: string;
  role: 'employee' | 'manager' | 'admin';
  name: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Contexto
const UserContext = createContext<AuthContextType | undefined>(undefined);

const mockUsers: User[] = [
  { email: 'test@test.com', password: 'test', role: 'admin', name: 'Admin User' },
  { email: 'manager@test.com', password: 'test', role: 'manager', name: 'Manager User' },
  { email: 'employee@test.com', password: 'test', role: 'employee', name: 'Employee User' },
];

function loginApi(email: string, password: string): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUsers.find(u => u.email === email && u.password === password);
      user ? resolve(user) : reject(new Error('Invalid email or password'));
    }, 800);
  });
}

function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const user = await loginApi(email, password);
      setUser(user);
      setError(null);
    } catch {
      setError('Invalid email or password');
    }
  };

  const logout = () => {
    setUser(null);
    setError(null);
  };

  return (
    <UserContext.Provider value={{ user, isAuthenticated: !!user, error, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

// Componentes
function LoginForm({ onLogin }: { onLogin: (email: string, password: string) => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div style={styles.loginContainer}>
      <h2 style={{ textAlign: 'center', marginBottom: '24px', color: '#1f2937' }}>Login con React Context API</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={styles.button}>
          Log In
        </button>
      </form>
      <div style={styles.note}>
        <strong>Demo credentials:</strong><br />
        <strong>Admin:</strong> test@test.com / test<br />
        <strong>Manager:</strong> manager@test.com / test<br />
        <strong>Employee:</strong> employee@test.com / test
      </div>
    </div>
  );
}

function AdminDashboard({ user }: { user: User }) {
  return (
    <div>
      <div style={styles.header}>
        <h2 style={styles.title}>Admin Dashboard</h2>
        <div style={styles.nav}>
          <button style={styles.navButton}>Users</button>
          <button style={styles.navButton}>Settings</button>
          <button style={styles.navButton}>Reports</button>
        </div>
      </div>
      <div style={styles.grid}>
        <div style={styles.card}><div style={styles.stat}><div style={styles.statNumber}>25</div><div style={styles.statLabel}>Total Users</div></div></div>
        <div style={styles.card}><div style={styles.stat}><div style={styles.statNumber}>156</div><div style={styles.statLabel}>Active Projects</div></div></div>
        <div style={styles.card}><div style={styles.stat}><div style={styles.statNumber}>95%</div><div style={styles.statLabel}>System Uptime</div></div></div>
      </div>
      <div style={styles.card}>
        <h3>System Administration</h3>
        <p>Welcome {user.name}. You have full system access.</p>
      </div>
    </div>
  );
}

function ManagerDashboard({ user }: { user: User }) {
  return (
    <div>
      <div style={styles.header}>
        <h2 style={styles.title}>Manager Dashboard</h2>
        <div style={styles.nav}>
          <button style={styles.navButton}>Team</button>
          <button style={styles.navButton}>Projects</button>
        </div>
      </div>
      <div style={styles.grid}>
        <div style={styles.card}><div style={styles.stat}><div style={styles.statNumber}>8</div><div style={styles.statLabel}>Team Members</div></div></div>
        <div style={styles.card}><div style={styles.stat}><div style={styles.statNumber}>12</div><div style={styles.statLabel}>Active Projects</div></div></div>
      </div>
      <div style={styles.card}>
        <h3>Team Management</h3>
        <p>Welcome {user.name}. You can manage your team and projects here.</p>
      </div>
    </div>
  );
}

function EmployeeDashboard({ user }: { user: User }) {
  return (
    <div>
      <div style={styles.header}>
        <h2 style={styles.title}>Employee Dashboard</h2>
        <div style={styles.nav}>
          <button style={styles.navButton}>Tasks</button>
          <button style={styles.navButton}>Profile</button>
        </div>
      </div>
      <div style={styles.grid}>
        <div style={styles.card}><div style={styles.stat}><div style={styles.statNumber}>5</div><div style={styles.statLabel}>Pending Tasks</div></div></div>
        <div style={styles.card}><div style={styles.stat}><div style={styles.statNumber}>3</div><div style={styles.statLabel}>Completed Today</div></div></div>
      </div>
      <div style={styles.card}>
        <h3>Your Tasks</h3>
        <p>Welcome {user.name}. Here are your assigned tasks.</p>
      </div>
    </div>
  );
}

function Dashboard({ user, onLogout }: { user: User; onLogout: () => void }) {
  let dashboardContent;
  switch (user.role) {
    case 'admin':
      dashboardContent = <AdminDashboard user={user} />;
      break;
    case 'manager':
      dashboardContent = <ManagerDashboard user={user} />;
      break;
    default:
      dashboardContent = <EmployeeDashboard user={user} />;
  }

  return (
    <div style={styles.container}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ margin: 0 }}>Company Portal</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div>Welcome, {user.name} ({user.role})</div>
          <button onClick={onLogout} style={{
            padding: '8px 12px',
            backgroundColor: '#f3f4f6',
            border: '1px solid #d1d5db',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>Log Out</button>
        </div>
      </div>
      {dashboardContent}
    </div>
  );
}

// App principal
function MainApp() {
  const { user, isAuthenticated, login, logout, error } = useUser();

  return (
    <div>
      {isAuthenticated && user ? (
        <Dashboard user={user} onLogout={logout} />
      ) : (
        <div style={styles.container}>
          <LoginForm onLogin={login} />
          {error && (
            <div style={{ ...styles.loginContainer, ...styles.error, marginTop: '20px' }}>
              {error}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Implementation() {
  return (
    <UserProvider>
      <MainApp />
    </UserProvider>
  );
}
