import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type User = {
  role: 'employee' | 'manager' | 'admin';
};

type UserContextType = {
  user: User;
  login: (role: User['role']) => void;
  logout: () => void;
};

const defaultUser: User = { role: 'employee' };

export const UserContext = createContext<UserContextType>({
  user: defaultUser,
  login: () => {},
  logout: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(defaultUser);

  useEffect(() => {
    const savedRole = localStorage.getItem('userRole');
    if (savedRole === 'employee' || savedRole === 'manager' || savedRole === 'admin') {
      setUser({ role: savedRole });
    }
  }, []);

  const login = (role: User['role']) => {
    setUser({ role });
    localStorage.setItem('userRole', role);
  };

  const logout = () => {
    setUser(defaultUser);
    localStorage.removeItem('userRole');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
