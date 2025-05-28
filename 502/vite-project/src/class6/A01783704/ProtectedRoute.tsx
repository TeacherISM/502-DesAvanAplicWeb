import React from "react";
import { useUser } from "./UserContext";
import type { Role } from "./UserContext";

const ProtectedRoute: React.FC<{
  children: React.ReactNode;
  allowedRoles?: Role[];
}> = ({ children, allowedRoles }) => {
  const { role } = useUser();
  const isAuth = localStorage.getItem("isAuthenticated") === "true";

  if (!isAuth || !role) return <p className="text-red-600">Please log in.</p>;

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <p className="text-red-600">Access denied.</p>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
