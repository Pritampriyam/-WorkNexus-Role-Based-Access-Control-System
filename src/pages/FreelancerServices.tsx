import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Edit,
  Trash2,
  Check,
  X,
  DollarSign,
  Tag,
  FileText,
  Package,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

interface Service {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  deliveryTime: string;
  status: "active" | "pending" | "paused";
  sales: number;
}

const initialServices: Service[] = [];

const FreelancerServices = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [services, setServices] = useState<Service[]>(initialServices);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Service | null>(null);

  // Redirect if not freelancer
  useEffect(() => {
    if (user && user.role !== "freelancer") {
      navigate("/");
    }
  }, [user, navigate]);

  // Load services from localStorage
  useEffect(() => {
    if (user) {
      const saved = localStorage.getItem(`freelancer_${user.id}_services`);
      if (saved) {
        try {
          setServices(JSON.parse(saved));
        } catch (e) {
          console.error("Failed to load services:", e);
        }
      }
    }
  }, [user]);

  // Save services to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem(
        `freelancer_${user.id}_services`,
        JSON.stringify(services),
      );
    }
  }, [services, user]);

  const handleAddService = () => {
    const newService: Service = {
      id: Math.max(...services.map((s) => s.id), 0) + 1,
      title: "New Service",
      description: "Describe your service here...",
      price: 0,
      category: "General",
      deliveryTime: "3 days",
      status: "pending",
      sales: 0,
    };
    setServices((prev) => [newService, ...prev]);
    setEditingId(newService.id);
    setEditForm({ ...newService });
  };

  const handleEdit = (service: Service) => {
    setEditingId(service.id);
    setEditForm({ ...service });
  };

  const handleSave = () => {
    if (editForm && editingId) {
      setServices((prev) =>
        prev.map((s) => (s.id === editingId ? editForm : s)),
      );
      setEditingId(null);
      setEditForm(null);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditForm(null);
  };

  const handleDelete = (id: number) => {
    const service = services.find((s) => s.id === id);
    if (confirm(`Delete "${service?.title}"?`)) {
      setServices((prev) => prev.filter((s) => s.id !== id));
    }
  };

  const handleStatusChange = (
    id: number,
    status: "active" | "pending" | "paused",
  ) => {
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status } : s)),
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/20 text-green-600 dark:text-green-400";
      case "pending":
        return "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400";
      case "paused":
        return "bg-gray-500/20 text-gray-600 dark:text-gray-400";
      default:
        return "";
    }
  };

  const totalEarnings = services.reduce((sum, s) => sum + s.sales * s.price, 0);
  const activeServices = services.filter((s) => s.status === "active").length;
  const totalSales = services.reduce((sum, s) => sum + s.sales, 0);

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
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-3">
                  My <span className="text-gradient-primary">Services</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                  Manage your service offerings and track performance
                </p>
              </div>
              <button
                onClick={handleAddService}
                className="flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-5 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Plus className="h-5 w-5" />
                Add Service
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Total Earnings
                    </p>
                    <p className="text-2xl font-bold text-gradient-primary">
                      ₹{totalEarnings}
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Package className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Active Services
                    </p>
                    <p className="text-2xl font-bold">{activeServices}</p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Tag className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Sales</p>
                    <p className="text-2xl font-bold">{totalSales}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services Grid */}
          {services.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Package className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No Services Yet</h3>
              <p className="text-muted-foreground mb-6">
                Create your first service to start earning!
              </p>
              <button
                onClick={handleAddService}
                className="bg-gradient-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Create Your First Service
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) =>
                editingId === service.id && editForm ? (
                  // Edit Mode
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-xl border-2 border-primary bg-card p-6"
                  >
                    <h3 className="text-sm font-semibold mb-4 text-primary flex items-center gap-2">
                      <Edit className="h-4 w-4" />
                      Edit Service
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-xs font-medium text-muted-foreground">
                          Service Title
                        </label>
                        <input
                          type="text"
                          value={editForm.title}
                          onChange={(e) =>
                            setEditForm({ ...editForm, title: e.target.value })
                          }
                          className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-muted-foreground">
                          Description
                        </label>
                        <textarea
                          value={editForm.description}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              description: e.target.value,
                            })
                          }
                          rows={3}
                          className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-xs font-medium text-muted-foreground">
                            Price (₹)
                          </label>
                          <input
                            type="number"
                            value={editForm.price}
                            onChange={(e) =>
                              setEditForm({
                                ...editForm,
                                price: parseInt(e.target.value) || 0,
                              })
                            }
                            className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-medium text-muted-foreground">
                            Delivery
                          </label>
                          <input
                            type="text"
                            value={editForm.deliveryTime}
                            onChange={(e) =>
                              setEditForm({
                                ...editForm,
                                deliveryTime: e.target.value,
                              })
                            }
                            placeholder="e.g. 3 days"
                            className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-muted-foreground">
                          Category
                        </label>
                        <select
                          value={editForm.category}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              category: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option>General</option>
                          <option>Web Development</option>
                          <option>Mobile Development</option>
                          <option>AI/ML</option>
                          <option>Design</option>
                          <option>Content Writing</option>
                          <option>Consulting</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-muted-foreground">
                          Status
                        </label>
                        <select
                          value={editForm.status}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              status: e.target.value as any,
                            })
                          }
                          className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="active">Active</option>
                          <option value="pending">Pending Review</option>
                          <option value="paused">Paused</option>
                        </select>
                      </div>
                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={handleSave}
                          className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                        >
                          <Check className="h-4 w-4" />
                          Save
                        </button>
                        <button
                          onClick={handleCancel}
                          className="flex-1 flex items-center justify-center gap-2 bg-gray-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                        >
                          <X className="h-4 w-4" />
                          Cancel
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  // View Mode
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-all group relative"
                  >
                    <div className="absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => handleEdit(service)}
                        className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                        title="Edit Service"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(service.id)}
                        className="p-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors"
                        title="Delete Service"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1 pr-16">
                        <h3 className="font-display font-semibold text-lg mb-1">
                          {service.title}
                        </h3>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Tag className="h-3 w-3" />
                          {service.category}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between mb-3 pb-3 border-b border-border">
                      <div>
                        <p className="text-xs text-muted-foreground">Price</p>
                        <p className="text-xl font-bold text-gradient-primary">
                          ₹{service.price}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">
                          Delivery
                        </p>
                        <p className="text-sm font-semibold">
                          {service.deliveryTime}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(service.status)}`}
                      >
                        {service.status.charAt(0).toUpperCase() +
                          service.status.slice(1)}
                      </span>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Sales</p>
                        <p className="text-sm font-semibold">{service.sales}</p>
                      </div>
                    </div>
                  </motion.div>
                ),
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FreelancerServices;
