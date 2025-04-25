/*
 * UserContext file that provides user authentication and role management functionality.
 * This context is used to manage the user's login state and role-based access control.
 *
 * Last edit: April 25, 2025
 * Authors: José Manuel García Zumaya
 */

import React, { createContext, useState } from "react";

/*
 * Interface: UserContextType
 * Defines the structure of the context object.
 * - user: Stores the current user's data or null if no user is logged in.
 * - isLoggedIn: Boolean indicating whether a user is logged in.
 * - login: Function to log in a user and set their data.
 * - logout: Function to log out the current user and clear their data.
 */
interface UserContextType {
  user: any | null;
  isLoggedIn: boolean;
  login: (userData: any) => void;
  logout: () => void;
}

/*
 * Context: UserContext
 * Provides the default values for the user context.
 * These values will be overridden by the UserProvider.
 */
export const UserContext = createContext<UserContextType>({
  user: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

/*
 * Component: UserProvider
 * Wraps the application and provides the user context to all child components.
 * - children: React nodes that will have access to the user context.
 */
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  /*
   * State: user
   * Stores the current user's data or null if no user is logged in.
   */
  const [user, setUser] = useState<any | null>(null);

  /*
   * State: isLoggedIn
   * Boolean indicating whether a user is logged in.
   */
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /*
   * Function: login
   * Logs in a user by setting their data and updating the login state.
   * - userData: The data of the user to log in.
   */
  const login = (userData: any) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  /*
   * Function: logout
   * Logs out the current user by clearing their data and updating the login state.
   */
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  /*
   * Return: UserContext.Provider
   * Provides the user context to all child components.
   */
  return (
    <UserContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
