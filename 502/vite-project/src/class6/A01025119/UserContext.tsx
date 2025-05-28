import React, { createContext, useState, ReactNode } from "react";

export type Role = "admin" | "manager" | "employee";

interface User {
  role: Role;
}

interface UserContextValue {
  user: User;
  login: (role: Role) => void;
}

export const UserContext = createContext<UserContextValue>({
  user: { role: "employee" },
  login: () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({ role: "employee" });

  const login = (role: Role) => {
    setUser({ role });
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};
