import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  id: string;
  email: string;
  name: string;
  role: "admin" | "user" | "freelancer" | "customer";
}

interface AuthContextType {
  user: User | null;
  login: (
    email: string,
    password: string,
  ) => Promise<{ success: boolean; user: User | null }>;
  signup: (
    email: string,
    password: string,
    name: string,
    role: "user" | "freelancer" | "customer",
  ) => Promise<boolean>;
  logout: () => void;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Admin credentials (in production, this should be in a secure database)
const ADMIN_EMAIL = "admin@worknexus.com";
const ADMIN_PASSWORD = "admin@123";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (
    email: string,
    password: string,
  ): Promise<{ success: boolean; user: User | null }> => {
    // Check if admin
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const adminUser: User = {
        id: "admin-001",
        email: ADMIN_EMAIL,
        name: "Admin",
        role: "admin",
      };
      setUser(adminUser);
      localStorage.setItem("currentUser", JSON.stringify(adminUser));
      return { success: true, user: adminUser };
    }

    // Check regular users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find(
      (u: any) => u.email === email && u.password === password,
    );

    if (foundUser) {
      const loggedInUser: User = {
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
        role: foundUser.role,
      };
      setUser(loggedInUser);
      localStorage.setItem("currentUser", JSON.stringify(loggedInUser));
      return { success: true, user: loggedInUser };
    }

    return { success: false, user: null };
  };

  const signup = async (
    email: string,
    password: string,
    name: string,
    role: "user" | "freelancer" | "customer",
  ): Promise<boolean> => {
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = users.find((u: any) => u.email === email);

    if (userExists) {
      return false;
    }

    // Create new user
    const newUser = {
      id: `user-${Date.now()}`,
      email,
      password,
      name,
      role,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Auto login after signup
    const loggedInUser: User = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      role: newUser.role,
    };
    setUser(loggedInUser);
    localStorage.setItem("currentUser", JSON.stringify(loggedInUser));

    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  const isAdmin = user?.role === "admin";

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
