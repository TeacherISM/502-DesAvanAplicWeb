/*
 * ProtectedRoute component that handles route protection based on authentication and roles.
 * This component ensures that only authenticated users with the appropriate roles can access certain routes.
 *
 * Last edit: April 25, 2025
 * Authors: José Manuel García Zumaya
 */

import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";

/*
 * Interface: ProtectedRouteProps
 * Defines the structure of the props for the ProtectedRoute component.
 * - children: The content to render if the user has access.
 * - allowedRoles: An optional array of roles that are allowed to access the route.
 */
interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

/*
 * Component: ProtectedRoute
 * Handles route protection based on authentication and roles.
 * - If the user is not authenticated, redirects to the login page.
 * - If the user is authenticated but does not have the required role, redirects to the access denied page.
 * - If the user is authenticated and has the required role, renders the protected content.
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  allowedRoles = [],
}) => {
  /*
   * Context: UserContext
   * Access the user's authentication state and role from the UserContext.
   */
  const { isLoggedIn, user } = useContext(UserContext);

  /*
   * Redirect: If the user is not authenticated, redirect to the login page.
   */
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  /*
   * Redirect: If the user is authenticated but does not have an allowed role,
   * redirect to the access denied page.
   */
  if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/access-denied" />;
  }

  /*
   * Render: If the user is authenticated and has the required role,
   * render the protected content.
   */
  return <>{children}</>;
};

export default ProtectedRoute;
