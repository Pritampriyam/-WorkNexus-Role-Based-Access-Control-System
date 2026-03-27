import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Users,
  Briefcase,
  FileText,
  Settings,
  LogOut,
  Edit,
  Trash2,
  Plus,
  Eye,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Project {
  id: string;
  title: string;
  description: string;
  price: string;
  status: string;
  createdAt: string;
}

const AdminDashboard = () => {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    if (!isAdmin) {
      navigate("/");
      return;
    }

    // Load data from localStorage
    const savedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    const savedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const visitors = parseInt(localStorage.getItem("visitorCount") || "0");

    setProjects(savedProjects);
    setUsers(savedUsers);
    setVisitorCount(visitors);
  }, [isAdmin, navigate]);

  const handleDeleteProject = (id: string) => {
    const updatedProjects = projects.filter((p) => p.id !== id);
    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
  };

  const handleDeleteUser = (id: string) => {
    const updatedUsers = users.filter((u) => u.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const newProject: Project = {
      id: `project-${Date.now()}`,
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      price: formData.get("price") as string,
      status: formData.get("status") as string,
      createdAt: new Date().toISOString(),
    };

    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
    setShowProjectForm(false);
    form.reset();
  };

  const handleUpdateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const updatedProject: Project = {
      ...editingProject,
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      price: formData.get("price") as string,
      status: formData.get("status") as string,
    };

    const updatedProjects = projects.map((p) =>
      p.id === updatedProject.id ? updatedProject : p,
    );
    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
    setEditingProject(null);
  };

  if (!isAdmin) {
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
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground">
                Welcome back, {user?.name}
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
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{visitorCount}</p>
                  <p className="text-sm text-muted-foreground">
                    Total Visitors
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
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{users.length}</p>
                  <p className="text-sm text-muted-foreground">Total Users</p>
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
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{projects.length}</p>
                  <p className="text-sm text-muted-foreground">Projects</p>
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
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold">₹0</p>
                  <p className="text-sm text-muted-foreground">Revenue</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Projects Management */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-display font-bold">Projects</h2>
              <button
                onClick={() => setShowProjectForm(!showProjectForm)}
                className="flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Plus className="h-4 w-4" />
                Add Project
              </button>
            </div>

            {showProjectForm && (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                onSubmit={handleAddProject}
                className="rounded-xl border border-border bg-card p-6 mb-6"
              >
                <h3 className="text-lg font-semibold mb-4">Add New Project</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    name="title"
                    placeholder="Project Title"
                    className="px-4 py-2 rounded-lg bg-secondary border border-border"
                    required
                  />
                  <input
                    name="price"
                    placeholder="Price (e.g., ₹2000)"
                    className="px-4 py-2 rounded-lg bg-secondary border border-border"
                    required
                  />
                  <textarea
                    name="description"
                    placeholder="Description"
                    className="px-4 py-2 rounded-lg bg-secondary border border-border md:col-span-2"
                    rows={3}
                    required
                  />
                  <select
                    name="status"
                    className="px-4 py-2 rounded-lg bg-secondary border border-border"
                    required
                  >
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <div className="flex gap-4 mt-4">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gradient-primary text-primary-foreground rounded-lg font-semibold"
                  >
                    Add Project
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowProjectForm(false)}
                    className="px-6 py-2 border border-border rounded-lg"
                  >
                    Cancel
                  </button>
                </div>
              </motion.form>
            )}

            {editingProject && (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                onSubmit={handleUpdateProject}
                className="rounded-xl border border-border bg-card p-6 mb-6"
              >
                <h3 className="text-lg font-semibold mb-4">Edit Project</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    name="title"
                    defaultValue={editingProject.title}
                    placeholder="Project Title"
                    className="px-4 py-2 rounded-lg bg-secondary border border-border"
                    required
                  />
                  <input
                    name="price"
                    defaultValue={editingProject.price}
                    placeholder="Price"
                    className="px-4 py-2 rounded-lg bg-secondary border border-border"
                    required
                  />
                  <textarea
                    name="description"
                    defaultValue={editingProject.description}
                    placeholder="Description"
                    className="px-4 py-2 rounded-lg bg-secondary border border-border md:col-span-2"
                    rows={3}
                    required
                  />
                  <select
                    name="status"
                    defaultValue={editingProject.status}
                    className="px-4 py-2 rounded-lg bg-secondary border border-border"
                    required
                  >
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <div className="flex gap-4 mt-4">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gradient-primary text-primary-foreground rounded-lg font-semibold"
                  >
                    Update Project
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingProject(null)}
                    className="px-6 py-2 border border-border rounded-lg"
                  >
                    Cancel
                  </button>
                </div>
              </motion.form>
            )}

            <div className="grid grid-cols-1 gap-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-xl border border-border bg-card p-6 flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-primary font-semibold">
                        {project.price}
                      </span>
                      <span className="px-2 py-1 rounded-full bg-secondary text-xs">
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingProject(project)}
                      className="p-2 hover:bg-secondary rounded-lg transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteProject(project.id)}
                      className="p-2 hover:bg-red-500/10 text-red-500 rounded-lg transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Users Management */}
          <div>
            <h2 className="text-2xl font-display font-bold mb-6">Users</h2>
            <div className="grid grid-cols-1 gap-4">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="rounded-xl border border-border bg-card p-6 flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-semibold text-lg">{user.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {user.email}
                    </p>
                    <span className="inline-block mt-2 px-3 py-1 rounded-full bg-secondary text-xs font-semibold">
                      {user.role}
                    </span>
                  </div>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="p-2 hover:bg-red-500/10 text-red-500 rounded-lg transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
