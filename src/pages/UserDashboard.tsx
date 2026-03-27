import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ShoppingBag,
  Download,
  BookOpen,
  FileText,
  Clock,
  CheckCircle,
  Heart,
  LogOut,
  Package,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Order {
  id: string;
  title: string;
  type: string;
  price: string;
  status: "completed" | "processing" | "pending";
  date: string;
  downloadLink?: string;
}

const UserDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [savedJobs, setSavedJobs] = useState<number[]>([]);
  const [stats, setStats] = useState({
    totalOrders: 0,
    completedOrders: 0,
    savedJobs: 0,
    totalSpent: 0,
  });

  useEffect(() => {
    // Load user data from localStorage
    const savedOrders = JSON.parse(
      localStorage.getItem(`user_${user?.id}_orders`) || "[]",
    );
    const savedJobsList = JSON.parse(
      localStorage.getItem(`user_${user?.id}_saved_jobs`) || "[]",
    );

    setOrders(savedOrders);
    setSavedJobs(savedJobsList);

    // Calculate stats
    const completed = savedOrders.filter(
      (o: Order) => o.status === "completed",
    ).length;
    const spent = savedOrders.reduce(
      (sum: number, o: Order) => sum + parseInt(o.price.replace(/[^0-9]/g, "")),
      0,
    );

    setStats({
      totalOrders: savedOrders.length,
      completedOrders: completed,
      savedJobs: savedJobsList.length,
      totalSpent: spent,
    });
  }, [user?.id]);

  if (user?.role !== "user" && user?.role !== "customer") {
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
                My Dashboard
              </h1>
              <p className="text-muted-foreground">
                Welcome back, {user?.name}! 🎓
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
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <ShoppingBag className="h-6 w-6 text-blue-500" />
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
              transition={{ delay: 0.1 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.completedOrders}</p>
                  <p className="text-sm text-muted-foreground">Completed</p>
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
                  <Heart className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.savedJobs}</p>
                  <p className="text-sm text-muted-foreground">Saved Jobs</p>
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
                  <Package className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    ₹{stats.totalSpent.toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground">Total Spent</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Access */}
          <div className="mb-8">
            <h2 className="text-2xl font-display font-bold mb-6">
              Quick Access
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <button
                onClick={() => navigate("/projects")}
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-all text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Browse Projects</h3>
                  <p className="text-sm text-muted-foreground">
                    Academic projects
                  </p>
                </div>
              </button>

              <button
                onClick={() => navigate("/jobs")}
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-all text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Apply Jobs</h3>
                  <p className="text-sm text-muted-foreground">Find jobs</p>
                </div>
              </button>

              <button
                onClick={() => navigate("/placement")}
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-all text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Placement Help</h3>
                  <p className="text-sm text-muted-foreground">Get materials</p>
                </div>
              </button>

              <button
                onClick={() => navigate("/services")}
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-all text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <ShoppingBag className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Our Services</h3>
                  <p className="text-sm text-muted-foreground">Explore more</p>
                </div>
              </button>
            </div>
          </div>

          {/* Orders List */}
          <div>
            <h2 className="text-2xl font-display font-bold mb-6">
              Recent Orders
            </h2>
            {orders.length === 0 ? (
              <div className="rounded-xl border border-border bg-card p-12 text-center">
                <ShoppingBag className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                <h3 className="font-semibold text-lg mb-2">No orders yet</h3>
                <p className="text-muted-foreground mb-4">
                  Start shopping to see your orders here
                </p>
                <button
                  onClick={() => navigate("/projects")}
                  className="bg-gradient-primary text-primary-foreground font-semibold px-6 py-2 rounded-lg"
                >
                  Browse Projects
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="rounded-xl border border-border bg-card p-6 flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg">{order.title}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            order.status === "completed"
                              ? "bg-green-500/10 text-green-500"
                              : order.status === "processing"
                                ? "bg-blue-500/10 text-blue-500"
                                : "bg-yellow-500/10 text-yellow-500"
                          }`}
                        >
                          {order.status === "completed" && (
                            <CheckCircle className="inline h-3 w-3 mr-1" />
                          )}
                          {order.status === "processing" && (
                            <Clock className="inline h-3 w-3 mr-1" />
                          )}
                          {order.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {order.type} • Ordered on {order.date}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-primary font-semibold">
                          {order.price}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {order.status === "completed" && order.downloadLink && (
                        <button className="flex items-center gap-2 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold">
                          <Download className="h-4 w-4" />
                          Download
                        </button>
                      )}
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

export default UserDashboard;
