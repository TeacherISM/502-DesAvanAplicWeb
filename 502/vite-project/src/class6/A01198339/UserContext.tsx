import React, { createContext, useState, ReactNode } from 'react';

type User = {
  role: string;
};

type UserContextType = {
  user: User;
  handleLogin: (username: string, password: string) => void;
};

export const UserContext = createContext<UserContextType | null>(null);

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {

  const [user, setUser] = useState<User>({role:''});

  const handleLogin = (username:string, password:string) => {

    localStorage.setItem('isAuthenticated', 'true');

    if (username === 'admin' && password==='admin') setUser({role:'admin'});
    else if (username === 'manager' && password==='manager') setUser({role:'manager'});
    else if (password==='employee')setUser({role:'employee'})
      else {
        localStorage.removeItem('isAuthenticated');
        alert('Invalid credentials');
      }

  };

  return (
    <UserContext.Provider value={{ user, handleLogin }}>
      {children}
    </UserContext.Provider>
  );
};
