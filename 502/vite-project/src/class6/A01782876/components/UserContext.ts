import { createContext } from "react";

export interface User {
  role: string;
}

interface UserContextType {
  user: User;
  login: (role: string) => void;
}

export const UserContext = createContext<UserContextType>({
  user: { role: "employee" },
  login: () => {},
});
