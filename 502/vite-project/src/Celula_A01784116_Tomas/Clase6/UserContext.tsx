import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define UserRole type
type UserRole = 'guest' | 'employee' | 'manager' | 'admin';

// Define the shape of the context
interface UserContextType {
  userRole: UserRole;
  loggedIn: boolean;
  loginAs: (role: UserRole) => void;
  logout: () => void;
}

// Create the context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Custom hook to use the context
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// UserProvider component
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userRole, setUserRole] = useState<UserRole>('guest');
  const [loggedIn, setLoggedIn] = useState(false);

  const loginAs = (role: UserRole) => {
    setUserRole(role);
    setLoggedIn(true);
  };

  const logout = () => {
      setUserRole('guest');
      setLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ userRole, loggedIn, loginAs, logout }}>
      {children}
    </UserContext.Provider>
  );
};
