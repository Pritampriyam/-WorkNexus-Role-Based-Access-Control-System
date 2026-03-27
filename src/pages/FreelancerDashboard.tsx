import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Briefcase,
  DollarSign,
  Star,
  TrendingUp,
  Package,
  Clock,
  CheckCircle,
  XCircle,
  Edit,
  Eye,
  LogOut,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Service {
  id: string;
  title: string;
  category: string;
  price: string;
  status: "active" | "pending" | "rejected";
  orders: number;
  earnings: string;
}

const FreelancerDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [services, setServices] = useState<Service[]>([]);
  const [stats, setStats] = useState({
    totalEarnings: 0,
    activeServices: 0,
    totalOrders: 0,
    rating: 4.5,
  });

  useEffect(() => {
    // Load freelancer data from localStorage
    const savedServices = JSON.parse(
      localStorage.getItem(`freelancer_${user?.id}_services`) || "[]",
    );
    setServices(savedServices);

    // Calculate stats
    const earnings = savedServices.reduce(
      (sum: number, s: Service) =>
        sum + parseInt(s.earnings.replace(/[^0-9]/g, "")),
      0,
    );
    const active = savedServices.filter(
      (s: Service) => s.status === "active",
    ).length;
    const orders = savedServices.reduce(
      (sum: number, s: Service) => sum + s.orders,
      0,
    );

    setStats({
      totalEarnings: earnings,
      activeServices: active,
      totalOrders: orders,
      rating: 4.5,
    });
  }, [user?.id]);

  if (user?.role !== "freelancer") {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-display font-bold mb-2">
                Freelancer Dashboard
              </h1>
              <p className="text-muted-foreground">
                Welcome back, {user?.name}! 👋
              </p>
            </div>
            <button
              onClick={() => {
                logout();
                navigate("/");
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-secondary transition-colors"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    ₹{stats.totalEarnings.toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Total Earnings
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.activeServices}</p>
                  <p className="text-sm text-muted-foreground">
                    Active Services
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Package className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.totalOrders}</p>
                  <p className="text-sm text-muted-foreground">Total Orders</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                  <Star className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.rating}</p>
                  <p className="text-sm text-muted-foreground">Rating</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-6">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-all text-left">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Add New Service</h3>
                  <p className="text-sm text-muted-foreground">
                    Create service offering
                  </p>
                </div>
              </button>

              <button className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-all text-left">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Edit className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Edit Profile</h3>
                  <p className="text-sm text-muted-foreground">
                    Update your portfolio
                  </p>
                </div>
              </button>

              <button className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-all text-left">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold">View Analytics</h3>
                  <p className="text-sm text-muted-foreground">
                    Track performance
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* Services List */}
          <div>
            <h2 className="text-2xl font-display font-bold mb-6">
              Your Services
            </h2>
            {services.length === 0 ? (
              <div className="rounded-xl border border-border bg-card p-12 text-center">
                <Briefcase className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                <h3 className="font-semibold text-lg mb-2">No services yet</h3>
                <p className="text-muted-foreground mb-4">
                  Create your first service to start earning
                </p>
                <button className="bg-gradient-primary text-primary-foreground font-semibold px-6 py-2 rounded-lg">
                  Add Service
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="rounded-xl border border-border bg-card p-6 flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg">
                          {service.title}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            service.status === "active"
                              ? "bg-green-500/10 text-green-500"
                              : service.status === "pending"
                                ? "bg-yellow-500/10 text-yellow-500"
                                : "bg-red-500/10 text-red-500"
                          }`}
                        >
                          {service.status === "active" && (
                            <CheckCircle className="inline h-3 w-3 mr-1" />
                          )}
                          {service.status === "pending" && (
                            <Clock className="inline h-3 w-3 mr-1" />
                          )}
                          {service.status === "rejected" && (
                            <XCircle className="inline h-3 w-3 mr-1" />
                          )}
                          {service.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {service.category}
                      </p>
                      <div className="flex items-center gap-6 text-sm">
                        <span className="text-primary font-semibold">
                          {service.price}
                        </span>
                        <span className="text-muted-foreground">
                          {service.orders} orders
                        </span>
                        <span className="text-green-500 font-semibold">
                          {service.earnings} earned
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FreelancerDashboard;
