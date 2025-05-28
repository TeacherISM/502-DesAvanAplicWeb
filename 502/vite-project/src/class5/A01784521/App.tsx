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
    textAlign: 'center', // Added for error message container
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
  password: string; // Note: Storing passwords in a real app is insecure. This is for mock purposes only.
  role: 'employee' | 'manager' | 'admin';
  name: string;
}

// Added possible view states
type AppView = 'login' | 'dashboard' | 'adminOnly' | 'noAccess';

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
    setError(null); // Clear previous errors
    try {
      const user = await loginApi(email, password);
      setUser(user);
    } catch (e: any) { // Catch any error during login
      setError(e.message || 'Login failed');
      setUser(null); // Ensure user is null on failed login
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
      <h2 style={{ textAlign: 'center', marginBottom: '24px', color: '#1f2937' }}>Form Handling and Validation</h2>
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

// New component for Admin-only page
function AdminOnlyPage({ user, onBack }: { user: User; onBack: () => void }) {
  return (
    <div style={styles.container}>
       <div style={styles.header}>
        <h2 style={styles.title}>Admin Exclusive Page</h2>
         <button onClick={onBack} style={{...styles.navButton, backgroundColor: '#fca5a5'}}>Back to Dashboard</button>
       </div>
      <div style={styles.card}>
        <h3>Confidential Admin Information</h3>
        <p>Welcome {user.name}. This content is only accessible if your role is 'admin'.</p>
        <ul>
            <li>Sensitive System Logs</li>
            <li>Critical Configuration Settings</li>
            <li>User Access Control</li>
        </ul>
        <p>If you are seeing this, your role is indeed '{user.role}'.</p>
      </div>
       <div style={{textAlign: 'center', marginTop: '20px'}}>
        <button onClick={onBack} style={{...styles.button, width: 'auto'}}>Back to Dashboard</button>
       </div>
    </div>
  );
}

// New component for No Access page
function NoAccessPage({ user, onBack }: { user: User | null; onBack: () => void }) {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={{...styles.title, color: styles.error.color}}>Access Denied</h2>
        <button onClick={onBack} style={{...styles.navButton, backgroundColor: '#fca5a5'}}>Go Back</button>
      </div>
      <div style={styles.card}>
        <p>Hello {user ? user.name : 'Guest'}, you do not have the required role to view this page.</p>
        {user && <p>Your current role is '{user.role}'. This page requires the 'admin' role.</p>}
      </div>
      <div style={{textAlign: 'center', marginTop: '20px'}}>
         <button onClick={onBack} style={{...styles.button, width: 'auto'}}>Go Back</button>
      </div>
    </div>
  );
}


// Modified Dashboard component to include the button
function Dashboard({ user, onLogout, onNavigateToAdminPage }: { user: User; onLogout: () => void; onNavigateToAdminPage: () => void }) {
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
          {/* Button visible to all, but logic protects access */}
          <button
            onClick={onNavigateToAdminPage}
            style={{...styles.navButton, backgroundColor: '#d1fae5', color: '#065f46'}}
          >
             Admin Area (Admins Only)
          </button>
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

// App principal - Modified to handle different views
function MainApp() {
  const { user, isAuthenticated, login, logout, error } = useUser();
  const [currentView, setCurrentView] = useState<AppView>('login');

  // Effect to manage view state based on authentication status
  useEffect(() => {
    if (isAuthenticated) {
      // If logged in, go to dashboard view
      setCurrentView('dashboard');
    } else {
      // If logged out, go to login view
      setCurrentView('login');
    }
  }, [isAuthenticated]); // Re-run effect when authentication status changes

  // Handler for attempting to navigate to the admin page
  const handleNavigateToAdmin = () => {
    if (user?.role === 'admin') {
      setCurrentView('adminOnly');
    } else {
      setCurrentView('noAccess');
    }
  };

  // Handler to return to the dashboard view
  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
  };

  // --- Render logic based on currentView state ---
  switch (currentView) {
    case 'login':
      return (
        <div style={styles.container}>
          <LoginForm onLogin={login} />
          {error && (
             // Using loginContainer style for error message placement consistency
            <div style={{ ...styles.loginContainer, ...styles.error, marginTop: '20px', padding: '10px 30px' }}>
              {error}
            </div>
          )}
        </div>
      );

    case 'dashboard':
      // Ensure user exists before rendering Dashboard (isAuthenticated check above helps, but good practice)
      if (!user) return null; // Should not happen if isAuthenticated is true
      return <Dashboard user={user} onLogout={logout} onNavigateToAdminPage={handleNavigateToAdmin} />;

    case 'adminOnly':
       // Ensure user exists before rendering AdminOnlyPage
       if (!user) {
           // If somehow user is null here, redirect back to login or no access page
           setCurrentView('noAccess'); // Or 'login'
           return null;
       }
      return <AdminOnlyPage user={user} onBack={handleBackToDashboard} />;

    case 'noAccess':
      // User might still exist on the no access page if they were logged in with wrong role
      return <NoAccessPage user={user} onBack={handleBackToDashboard} />;

    default:
       // Fallback - perhaps show login or dashboard
       return <div style={styles.container}>Unknown view</div>; // Simple fallback
  }
}

export default function Implementation() {
  return (
    <UserProvider>
      <MainApp />
    </UserProvider>
  );
}