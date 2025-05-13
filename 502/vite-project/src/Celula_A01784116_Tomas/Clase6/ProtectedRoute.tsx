import React from 'react';
import { Navigate, useLocation, Route, RouteProps } from 'react-router-dom'; // import RouteProps
import { useUser } from './UserContext'; // Access user context

interface ProtectedRouteProps  {
  allowedRoles: string[];
  redirectTo: string;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  allowedRoles,
  redirectTo,
  children,
  ...rest
}) => {
  const { userRole, loggedIn } = useUser(); // Get user role and login status
  const location = useLocation(); // Get current location to redirect back to the correct page
    console.log(userRole)
  // If the user is not logged in or does not have the required role, redirect them
  if (!loggedIn || !allowedRoles.includes(userRole)) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  // If the user has the correct role, render the protected route
  return children;
};

export default ProtectedRoute;
