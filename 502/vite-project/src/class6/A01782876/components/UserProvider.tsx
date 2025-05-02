import { useState, ReactNode } from "react";
import { User, UserContext } from "./UserContext";

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({ role: "employee" });

  const login = (role: string) => {
    setUser({ role });
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};
