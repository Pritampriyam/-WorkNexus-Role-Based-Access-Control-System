import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Eye,
  Download,
  Search,
  Tag,
  Edit,
  Trash2,
  Plus,
  Check,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";

const initialProjectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full-Stack",
    tech: ["React", "Node.js", "MongoDB"],
    price: 2499,
    image: "🛒",
    features: ["User auth", "Cart system", "Payment gateway", "Admin panel"],
    rating: 4.8,
    sales: 124,
  },
  {
    id: 2,
    title: "AI Chatbot System",
    category: "AI/ML",
    tech: ["Python", "TensorFlow", "Flask"],
    price: 3999,
    image: "🤖",
    features: ["NLP processing", "Train custom data", "REST API", "Web UI"],
    rating: 4.9,
    sales: 87,
  },
  {
    id: 3,
    title: "Hospital Management",
    category: "Major",
    tech: ["Java", "Spring Boot", "MySQL"],
    price: 4499,
    image: "🏥",
    features: ["Patient records", "Appointments", "Billing", "Reports"],
    rating: 4.7,
    sales: 63,
  },
  {
    id: 4,
    title: "Food Delivery App",
    category: "Full-Stack",
    tech: ["React Native", "Firebase"],
    price: 3499,
    image: "🍕",
    features: ["Real-time tracking", "Payment", "Ratings", "Push notifs"],
    rating: 4.6,
    sales: 91,
  },
  {
    id: 5,
    title: "Inventory System",
    category: "Minor",
    tech: ["PHP", "Laravel", "MySQL"],
    price: 1499,
    image: "📦",
    features: ["Stock tracking", "Barcode scan", "Reports", "Multi-user"],
    rating: 4.5,
    sales: 156,
  },
  {
    id: 6,
    title: "Image Classification",
    category: "AI/ML",
    tech: ["Python", "PyTorch", "OpenCV"],
    price: 2999,
    image: "🖼️",
    features: ["CNN model", "Data augment", "Web interface", "API"],
    rating: 4.8,
    sales: 72,
  },
  {
    id: 7,
    title: "Social Media Clone",
    category: "Full-Stack",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    price: 3999,
    image: "💬",
    features: [
      "Posts & stories",
      "Real-time chat",
      "Notifications",
      "Profiles",
    ],
    rating: 4.7,
    sales: 108,
  },
  {
    id: 8,
    title: "Attendance System",
    category: "Minor",
    tech: ["Python", "Django", "SQLite"],
    price: 999,
    image: "📋",
    features: ["Face recognition", "Reports", "Export CSV", "Dashboard"],
    rating: 4.4,
    sales: 203,
  },
];

const categories = ["All", "Full-Stack", "AI/ML", "Major", "Minor"];

const Projects = () => {
  const { isAdmin } = useAuth();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState<number[]>([]);
  const [projects, setProjects] = useState(initialProjectsData);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<any>(null);

  // Load projects from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("hirenixa_projects");
    if (saved) {
      setProjects(JSON.parse(saved));
    }
  }, []);

  // Save projects to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("hirenixa_projects", JSON.stringify(projects));
  }, [projects]);

  const filtered = projects.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "All" || p.category === category;
    return matchSearch && matchCat;
  });

  const addToCart = (id: number) => {
    setCart((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );
  };

  const handleDeleteProject = (id: number) => {
    if (confirm("Are you sure you want to delete this project?")) {
      setProjects((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const handleEditProject = (project: any) => {
    setEditingId(project.id);
    setEditForm({ ...project });
  };

  const handleSaveEdit = () => {
    if (editForm) {
      setProjects((prev) =>
        prev.map((p) => (p.id === editForm.id ? editForm : p)),
      );
      setEditingId(null);
      setEditForm(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm(null);
  };

  const handleAddProject = () => {
    const newId = Math.max(...projects.map((p) => p.id), 0) + 1;
    const newProject = {
      id: newId,
      title: "New Project",
      category: "Full-Stack",
      tech: ["React"],
      price: 1999,
      image: "📦",
      features: ["Feature 1", "Feature 2"],
      rating: 4.5,
      sales: 0,
    };
    setProjects((prev) => [newProject, ...prev]);
    setEditingId(newId);
    setEditForm(newProject);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-3">
                  College{" "}
                  <span className="text-gradient-primary">Projects</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                  Ready-made projects with full source code & documentation.
                </p>
              </div>
              {isAdmin && (
                <button
                  onClick={handleAddProject}
                  className="flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Plus className="h-4 w-4" />
                  Add Project
                </button>
              )}
            </div>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="relative flex-1 min-w-[250px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    category === cat
                      ? "bg-gradient-primary text-primary-foreground"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {cart.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-between"
            >
              <span className="text-sm font-medium flex items-center gap-2">
                <ShoppingCart className="h-4 w-4 text-primary" />
                {cart.length} item(s) in cart — Total: ₹
                {cart.reduce(
                  (sum, id) =>
                    sum + (projects.find((p) => p.id === id)?.price || 0),
                  0,
                )}
              </span>
              <button className="bg-gradient-primary text-primary-foreground text-sm font-semibold px-5 py-2 rounded-lg">
                Checkout
              </button>
            </motion.div>
          )}

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                className="rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all shadow-card group"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="h-36 bg-secondary flex items-center justify-center text-5xl relative">
                  {project.image}
                  <span className="absolute top-3 right-3 text-xs px-2 py-1 rounded-md bg-card/80 text-muted-foreground border border-border">
                    {project.category}
                  </span>
                  {isAdmin && (
                    <div className="absolute top-3 left-3 flex gap-1">
                      <button
                        onClick={() => handleEditProject(project)}
                        className="p-1.5 rounded-md bg-blue-500/90 text-white hover:bg-blue-600 transition-colors"
                        title="Edit Project"
                      >
                        <Edit className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => handleDeleteProject(project.id)}
                        className="p-1.5 rounded-md bg-red-500/90 text-white hover:bg-red-600 transition-colors"
                        title="Delete Project"
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  {editingId === project.id && editForm ? (
                    // Edit Mode
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={editForm.title}
                        onChange={(e) =>
                          setEditForm({ ...editForm, title: e.target.value })
                        }
                        className="w-full px-2 py-1 text-sm border border-border rounded bg-secondary"
                        placeholder="Title"
                      />
                      <input
                        type="number"
                        value={editForm.price}
                        onChange={(e) =>
                          setEditForm({
                            ...editForm,
                            price: parseInt(e.target.value),
                          })
                        }
                        className="w-full px-2 py-1 text-sm border border-border rounded bg-secondary"
                        placeholder="Price"
                      />
                      <select
                        value={editForm.category}
                        onChange={(e) =>
                          setEditForm({ ...editForm, category: e.target.value })
                        }
                        className="w-full px-2 py-1 text-sm border border-border rounded bg-secondary"
                      >
                        <option>Full-Stack</option>
                        <option>AI/ML</option>
                        <option>Major</option>
                        <option>Minor</option>
                      </select>
                      <div className="flex gap-2">
                        <button
                          onClick={handleSaveEdit}
                          className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-green-500 text-white rounded text-sm font-medium"
                        >
                          <Check className="h-3 w-3" /> Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-red-500 text-white rounded text-sm font-medium"
                        >
                          <X className="h-3 w-3" /> Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    // View Mode
                    <>
                      <h3 className="font-display font-semibold text-base mb-1">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-yellow-400 text-sm">
                          ★ {project.rating}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          ({project.sales} sold)
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2 py-0.5 rounded bg-secondary text-secondary-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <ul className="text-xs text-muted-foreground space-y-1 mb-4">
                        {project.features.slice(0, 3).map((f) => (
                          <li key={f} className="flex items-center gap-1">
                            <span className="text-primary">✓</span> {f}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between">
                        <span className="font-display font-bold text-lg text-gradient-primary">
                          ₹{project.price}
                        </span>
                        <button
                          onClick={() => addToCart(project.id)}
                          className={`text-xs px-3 py-2 rounded-lg font-medium transition-colors ${
                            cart.includes(project.id)
                              ? "bg-primary/20 text-primary border border-primary/30"
                              : "bg-gradient-primary text-primary-foreground"
                          }`}
                        >
                          {cart.includes(project.id)
                            ? "In Cart ✓"
                            : "Add to Cart"}
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
