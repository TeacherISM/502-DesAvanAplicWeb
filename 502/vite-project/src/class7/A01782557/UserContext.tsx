import { createContext, useContext, useState, ReactNode } from 'react';

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

export function UserProvider({ children }: { children: ReactNode }) {
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

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
