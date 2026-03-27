import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
  allowedRoles?: string[];
}

const ProtectedRoute = ({
  children,
  requireAdmin = false,
  allowedRoles,
}: ProtectedRouteProps) => {
  const { user, isAdmin } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requireAdmin && !isAdmin) {
    return <Navigate to="/" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Redirect to appropriate dashboard based on role
    if (user.role === "admin") {
      return <Navigate to="/admin" replace />;
    } else if (user.role === "freelancer") {
      return <Navigate to="/freelancer/dashboard" replace />;
    } else {
      return <Navigate to="/user/dashboard" replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
