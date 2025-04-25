import React, { createContext, useState } from "react";

interface UserContextType {
  user: any | null;
  isLoggedIn: boolean;
  login: (userData: any) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (userData: any) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
