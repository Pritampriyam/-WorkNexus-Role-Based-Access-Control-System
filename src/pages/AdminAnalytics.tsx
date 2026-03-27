import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  TrendingUp,
  Shield,
  Briefcase,
  ShoppingBag,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminAnalytics = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Redirect if not admin
  useEffect(() => {
    if (user && user.role !== "admin") {
      navigate("/");
    }
  }, [user, navigate]);

  const stats = [
    {
      title: "Total Users",
      value: "2,847",
      icon: Users,
      color: "blue",
      change: "+12.5%",
    },
    {
      title: "Admin Users",
      value: "5",
      icon: Shield,
      color: "red",
      change: "0%",
    },
    {
      title: "Freelancers",
      value: "423",
      icon: Briefcase,
      color: "purple",
      change: "+8.2%",
    },
    {
      title: "Regular Users",
      value: "2,419",
      icon: ShoppingBag,
      color: "green",
      change: "+15.3%",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-3">
              Platform <span className="text-gradient-primary">Analytics</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Monitor user activity, revenue, and system performance
            </p>
          </motion.div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              const colorMap: Record<string, string> = {
                blue: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
                red: "bg-red-500/20 text-red-600 dark:text-red-400",
                purple: "bg-purple-500/20 text-purple-600 dark:text-purple-400",
                green: "bg-green-500/20 text-green-600 dark:text-green-400",
              };

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorMap[stat.color]}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                      {stat.change}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Role-Based Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-xl border border-border p-8 mb-10"
          >
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              Role-Based Access Control Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Admin Features */}
              <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-5 w-5 text-red-600 dark:text-red-400" />
                  <h3 className="font-display font-bold text-lg">
                    Admin Panel
                  </h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-red-600">✓</span>
                    Manage all jobs, projects, and services
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-red-600">✓</span>
                    User account management & moderation
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-red-600">✓</span>
                    Platform analytics & reporting
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-red-600">✓</span>
                    Content moderation & approval
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-red-600">✓</span>
                    Revenue & transaction tracking
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-red-600">✓</span>
                    System configuration & settings
                  </li>
                </ul>
              </div>

              {/* Freelancer Features */}
              <div className="rounded-lg border border-purple-500/20 bg-purple-500/5 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  <h3 className="font-display font-bold text-lg">Freelancer</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-purple-600">✓</span>
                    Create & manage service offerings
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-purple-600">✓</span>
                    Browse available job postings
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-purple-600">✓</span>
                    Track earnings & sales analytics
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-purple-600">✓</span>
                    Manage service reviews & ratings
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-purple-600">✓</span>
                    View placement opportunities
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-purple-600">✓</span>
                    Profile customization & portfolio
                  </li>
                </ul>
              </div>

              {/* User/Customer Features */}
              <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <ShoppingBag className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <h3 className="font-display font-bold text-lg">Customer</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-green-600">✓</span>
                    Browse and apply for jobs
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-green-600">✓</span>
                    Purchase college projects
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-green-600">✓</span>
                    Access placement preparation
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-green-600">✓</span>
                    Buy professional services
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-green-600">✓</span>
                    Track order history & downloads
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-green-600">✓</span>
                    Rate & review freelancers
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Navigation UI Differences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card rounded-xl border border-border p-8 mb-10"
          >
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-primary" />
              Navigation Bar Customization by Role
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-display font-semibold text-lg mb-3 text-red-600 dark:text-red-400">
                  👨‍💼 Admin Navigation
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Admin users see a management-focused menu:
                </p>
                <div className="bg-secondary rounded-lg p-4 text-sm font-mono overflow-x-auto">
                  <div className="text-primary">
                    Home • Manage Jobs • Manage Projects • Manage Placement
                  </div>
                  <div className="text-primary">
                    Manage Services • Admin Dashboard
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display font-semibold text-lg mb-3 text-purple-600 dark:text-purple-400">
                  💼 Freelancer Navigation
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Freelancers see a service-provider focused menu:
                </p>
                <div className="bg-secondary rounded-lg p-4 text-sm font-mono overflow-x-auto">
                  <div className="text-primary">
                    Home • Find Jobs • My Services • Placement Help
                  </div>
                  <div className="text-primary">
                    Browse Services • Freelancer Dashboard
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display font-semibold text-lg mb-3 text-green-600 dark:text-green-400">
                  🛍️ Customer/User Navigation
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Regular users see a customer-focused menu:
                </p>
                <div className="bg-secondary rounded-lg p-4 text-sm font-mono overflow-x-auto">
                  <div className="text-primary">
                    Home • Apply Jobs • Buy Projects • Placement Help
                  </div>
                  <div className="text-primary">
                    Our Services • User Dashboard
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Protected Pages Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-card rounded-xl border border-border p-8"
          >
            <h2 className="text-2xl font-display font-bold mb-6">
              Protected Routes & Access Control
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-4">
                <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">
                  Admin Only Routes
                </h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• /admin (Dashboard)</li>
                  <li>• Edit/Delete all content</li>
                  <li>• User management</li>
                  <li>• Analytics dashboard</li>
                </ul>
              </div>

              <div className="rounded-lg bg-purple-500/10 border border-purple-500/20 p-4">
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                  Freelancer Routes
                </h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• /freelancer/dashboard</li>
                  <li>• /freelancer/services</li>
                  <li>• View jobs & apply</li>
                  <li>• View placements</li>
                </ul>
              </div>

              <div className="rounded-lg bg-green-500/10 border border-green-500/20 p-4">
                <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">
                  Customer Routes
                </h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• /user/dashboard</li>
                  <li>• Browse all pages</li>
                  <li>• Apply for jobs</li>
                  <li>• Purchase services</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminAnalytics;
