// components/RequireRole.tsx
import { ReactNode } from "react";
import { useUser } from "./UserContext";
import type { Role } from "./UserContext";

interface RequireRoleProps {
  allowed: Role[]; // Roles allowed to view
  children: ReactNode;
}

const RequireRole: React.FC<RequireRoleProps> = ({ allowed, children }) => {
  const { role } = useUser();

  if (!role || !allowed.includes(role)) {
    return null; // or return <p>Access denied</p>
  }

  return <>{children}</>;
};

export default RequireRole;
