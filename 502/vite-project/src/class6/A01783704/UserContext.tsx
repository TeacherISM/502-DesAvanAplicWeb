// context/UserContext.tsx

import React, { createContext, useContext, useState } from "react";

export type Role = "employee" | "manager" | "admin" | null;

interface UserContextType {
  role: Role;
  setRole: (role: Role) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<Role>(() => {
    const stored = localStorage.getItem("userRole");
    return stored === "admin" || stored === "manager" || stored === "employee"
      ? stored
      : null;
  });

  return <UserContext.Provider value={{ role, setRole }}>{children}</UserContext.Provider>;
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
