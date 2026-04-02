import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Zap,
  Menu,
  X,
  LogOut,
  Settings,
  Briefcase,
  ShoppingBag,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";

// Role-based navigation items
const getNavItems = (userRole: string | undefined) => {
  const commonItems = [{ label: "Home", path: "/", roles: ["all"] }];

  if (userRole === "admin") {
    return [
      ...commonItems,
      { label: "Manage Jobs", path: "/jobs", roles: ["admin"] },
      { label: "Manage Projects", path: "/projects", roles: ["admin"] },
      { label: "Manage Placement", path: "/placement", roles: ["admin"] },
      { label: "Manage Services", path: "/services", roles: ["admin"] },
      { label: "All Users", path: "/admin", roles: ["admin"] },
    ];
  } else if (userRole === "freelancer") {
    return [
      ...commonItems,
      { label: "Find Jobs", path: "/jobs", roles: ["freelancer"] },
      {
        label: "My Services",
        path: "/freelancer/services",
        roles: ["freelancer"],
      },
      { label: "Placement Help", path: "/placement", roles: ["freelancer"] },
      { label: "Browse Services", path: "/services", roles: ["freelancer"] },
    ];
  } else if (userRole === "user" || userRole === "customer") {
    return [
      ...commonItems,
      { label: "Apply Jobs", path: "/jobs", roles: ["user", "customer"] },
      { label: "Buy Projects", path: "/projects", roles: ["user", "customer"] },
      {
        label: "Placement Help",
        path: "/placement",
        roles: ["user", "customer"],
      },
      { label: "Our Services", path: "/services", roles: ["user", "customer"] },
    ];
  } else {
    // Guest users
    return [
      ...commonItems,
      { label: "Apply Jobs", path: "/jobs", roles: ["all"] },
      { label: "College Projects", path: "/projects", roles: ["all"] },
      { label: "Placement Help", path: "/placement", roles: ["all"] },
      { label: "Our Services", path: "/services", roles: ["all"] },
      { label: "Contact Us", path: "/contact", roles: ["all"] },
      { label: "About Us", path: "/about", roles: ["all"] },
    ];
  }
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, isAdmin } = useAuth();

  const navItems = getNavItems(user?.role);

  const getDashboardPath = () => {
    if (!user) return "/";
    if (user.role === "admin") return "/admin";
    if (user.role === "freelancer") return "/freelancer/dashboard";
    return "/user/dashboard";
  };

  const getRoleBadge = () => {
    if (!user) return null;
    const roleColors: Record<string, string> = {
      admin: "bg-red-500/20 text-red-600 dark:text-red-400",
      freelancer: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
      user: "bg-green-500/20 text-green-600 dark:text-green-400",
      customer: "bg-green-500/20 text-green-600 dark:text-green-400",
    };
    return (
      <span
        className={`text-xs px-2 py-1 rounded-full font-medium ${roleColors[user.role] || ""}`}
      >
        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
      </span>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => navigate(getDashboardPath())}
          className="flex items-center gap-2"
        >
          <Zap className="h-5 w-5 text-primary" />
          <span className="font-display font-bold text-lg">workNexus</span>
        </button>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm transition-colors ${
                location.pathname === item.path
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {user.name}
                </span>
                {getRoleBadge()}
              </div>
              <button
                onClick={() => navigate(getDashboardPath())}
                className="text-sm text-primary hover:text-primary/80 transition-colors px-3 py-2 flex items-center gap-2"
              >
                <Settings className="h-4 w-4" />
                Dashboard
              </button>
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2 flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
              >
                Log In
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="bg-gradient-primary text-primary-foreground text-sm font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Sign Up
              </button>
            </>
          )}
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden glass border-t border-border"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`text-sm py-2 ${
                    location.pathname === item.path
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              {user ? (
                <>
                  <div className="text-sm py-2 border-t border-border pt-3 flex items-center justify-between">
                    <span className="text-muted-foreground">
                      Welcome, {user.name}
                    </span>
                    {getRoleBadge()}
                  </div>
                  <button
                    onClick={() => {
                      navigate(getDashboardPath());
                      setOpen(false);
                    }}
                    className="text-sm text-primary py-2 text-left flex items-center gap-2"
                  >
                    <Settings className="h-4 w-4" />
                    Dashboard
                  </button>
                  <button
                    onClick={() => {
                      logout();
                      navigate("/");
                      setOpen(false);
                    }}
                    className="text-sm text-muted-foreground py-2 text-left flex items-center gap-2"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      navigate("/login");
                      setOpen(false);
                    }}
                    className="text-sm text-muted-foreground py-2 text-left"
                  >
                    Log In
                  </button>
                  <button
                    onClick={() => {
                      navigate("/signup");
                      setOpen(false);
                    }}
                    className="bg-gradient-primary text-primary-foreground text-sm font-semibold px-5 py-2 rounded-lg mt-2"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
