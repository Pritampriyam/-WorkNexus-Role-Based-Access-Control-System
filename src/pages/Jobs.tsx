import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Plus, Check, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JobCard } from "@/components/JobCard";
import { useAuth } from "@/contexts/AuthContext";

const initialJobsData = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "TechNova",
    logo: "🏢",
    location: "Bangalore",
    salary: "₹8-12 LPA",
    type: "Full-time",
    batch: "2024",
    tech: ["React", "Node.js", "PostgreSQL"],
    deadline: "2026-03-15",
    saved: false,
    difficulty: "Intermediate" as const,
    applicants: 87,
    visitors: 455,
    applyUrl: "https://technova.careers/apply/fullstack",
  },
  {
    id: 2,
    title: "AI/ML Intern",
    company: "DataMinds",
    logo: "🧠",
    location: "Remote",
    salary: "₹25K/month",
    type: "Internship",
    batch: "2025",
    tech: ["Python", "TensorFlow", "PyTorch"],
    deadline: "2026-03-10",
    saved: false,
    difficulty: "Expert" as const,
    applicants: 142,
    visitors: 455,
    applyUrl: "https://dataminds.careers/apply/aiml",
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "PixelCraft",
    logo: "🎨",
    location: "Hyderabad",
    salary: "₹6-9 LPA",
    type: "Full-time",
    batch: "2024",
    tech: ["React", "TypeScript", "Tailwind"],
    deadline: "2026-04-01",
    saved: false,
    difficulty: "Intermediate" as const,
    applicants: 93,
    visitors: 455,
    applyUrl: "https://pixelcraft.careers/apply/frontend",
  },
  {
    id: 4,
    title: "Backend Developer",
    company: "CloudScale",
    logo: "☁️",
    location: "Pune",
    salary: "₹10-15 LPA",
    type: "Full-time",
    batch: "2023",
    tech: ["Java", "Spring Boot", "AWS"],
    deadline: "2026-03-20",
    saved: false,
    difficulty: "Intermediate" as const,
    applicants: 56,
    visitors: 455,
    applyUrl: "https://cloudscale.careers/apply/backend",
  },
  {
    id: 5,
    title: "Mobile App Developer",
    company: "AppForge",
    logo: "📱",
    location: "Mumbai",
    salary: "₹30K/month",
    type: "Internship",
    batch: "2025",
    tech: ["Flutter", "Dart", "Firebase"],
    deadline: "2026-03-25",
    saved: false,
    difficulty: "Fresher" as const,
    applicants: 128,
    visitors: 455,
    applyUrl: "https://appforge.careers/apply/mobile",
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "InfraLabs",
    logo: "⚙️",
    location: "Delhi",
    salary: "₹12-18 LPA",
    type: "Full-time",
    batch: "2023",
    tech: ["Docker", "Kubernetes", "CI/CD"],
    deadline: "2026-04-05",
    saved: false,
    difficulty: "Expert" as const,
    applicants: 44,
    visitors: 455,
    applyUrl: "https://infralabs.careers/apply/devops",
  },
];

const locations = [
  "All",
  "Bangalore",
  "Remote",
  "Hyderabad",
  "Pune",
  "Mumbai",
  "Delhi",
];
const types = ["All", "Full-time", "Internship", "Freelance"];

const Jobs = () => {
  const { isAdmin } = useAuth();
  const [search, setSearch] = useState("");
  const [locFilter, setLocFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [savedJobs, setSavedJobs] = useState<number[]>([]);
  const [jobs, setJobs] = useState(initialJobsData);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<any>(null);

  // Load jobs from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("hirenixa_jobs");
    if (saved) {
      try {
        setJobs(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load jobs:", e);
      }
    }
  }, []);

  // Save jobs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("hirenixa_jobs", JSON.stringify(jobs));
  }, [jobs]);

  const handleAddJob = () => {
    const newJob = {
      id: Math.max(...jobs.map((j) => j.id), 0) + 1,
      title: "New Job Title",
      company: "Company Name",
      logo: "🏢",
      location: "Bangalore",
      salary: "₹0-0 LPA",
      type: "Full-time",
      batch: "2024",
      tech: ["React"],
      deadline: "2026-12-31",
      saved: false,
      difficulty: "Intermediate" as const,
      applicants: 0,
      visitors: 455,
      applyUrl: "https://apply.hirenixa.com/",
    };
    setJobs((prev) => [newJob, ...prev]);
    setEditingId(newJob.id);
    setEditForm({ ...newJob });
  };

  const handleEditJob = (id: number) => {
    const job = jobs.find((j) => j.id === id);
    if (job) {
      setEditingId(id);
      setEditForm({ ...job, tech: job.tech.join(", ") });
    }
  };

  const handleSaveEdit = () => {
    if (editForm && editingId) {
      setJobs((prev) =>
        prev.map((j) =>
          j.id === editingId
            ? {
                ...editForm,
                tech:
                  typeof editForm.tech === "string"
                    ? editForm.tech.split(", ").map((t: string) => t.trim())
                    : editForm.tech,
              }
            : j,
        ),
      );
      setEditingId(null);
      setEditForm(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm(null);
  };

  const handleDeleteJob = (id: number) => {
    const job = jobs.find((j) => j.id === id);
    if (confirm(`Are you sure you want to delete "${job?.title}"?`)) {
      setJobs((prev) => prev.filter((j) => j.id !== id));
    }
  };

  const filtered = jobs.filter((job) => {
    const matchSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());
    const matchLoc = locFilter === "All" || job.location === locFilter;
    const matchType = typeFilter === "All" || job.type === typeFilter;
    return matchSearch && matchLoc && matchType;
  });

  const toggleSave = (id: number) => {
    setSavedJobs((prev) =>
      prev.includes(id) ? prev.filter((j) => j !== id) : [...prev, id],
    );
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
                  Apply for <span className="text-gradient-primary">Jobs</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                  Find internships, full-time roles, and freelance
                  opportunities.
                </p>
              </div>
              {isAdmin && (
                <button
                  onClick={handleAddJob}
                  className="flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Plus className="h-4 w-4" />
                  Add Job
                </button>
              )}
            </div>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="flex flex-wrap gap-3 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="relative flex-1 min-w-[250px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search jobs or companies..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <select
              value={locFilter}
              onChange={(e) => setLocFilter(e.target.value)}
              className="px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            >
              {locations.map((l) => (
                <option key={l} value={l}>
                  {l === "All" ? "📍 All Locations" : l}
                </option>
              ))}
            </select>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            >
              {types.map((t) => (
                <option key={t} value={t}>
                  {t === "All" ? "💼 All Types" : t}
                </option>
              ))}
            </select>
          </motion.div>

          {/* Job Cards Grid - 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max">
            {filtered.map((job) =>
              editingId === job.id && editForm ? (
                // Edit Mode
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="rounded-lg border-2 border-primary bg-card p-4 shadow-lg"
                >
                  <h3 className="text-sm font-semibold mb-3 text-primary">
                    Editing Job
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground">
                        Job Title
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
                        Company
                      </label>
                      <input
                        type="text"
                        value={editForm.company}
                        onChange={(e) =>
                          setEditForm({ ...editForm, company: e.target.value })
                        }
                        className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground">
                        Apply URL (e.g., https://careers.company.com)
                      </label>
                      <input
                        type="url"
                        value={editForm.applyUrl || ""}
                        onChange={(e) =>
                          setEditForm({ ...editForm, applyUrl: e.target.value })
                        }
                        placeholder="https://..."
                        className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground">
                        Logo (emoji)
                      </label>
                      <input
                        type="text"
                        value={editForm.logo}
                        onChange={(e) =>
                          setEditForm({ ...editForm, logo: e.target.value })
                        }
                        className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-xs font-medium text-muted-foreground">
                          Location
                        </label>
                        <input
                          type="text"
                          value={editForm.location}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              location: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-muted-foreground">
                          Salary
                        </label>
                        <input
                          type="text"
                          value={editForm.salary}
                          onChange={(e) =>
                            setEditForm({ ...editForm, salary: e.target.value })
                          }
                          className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-xs font-medium text-muted-foreground">
                          Type
                        </label>
                        <select
                          value={editForm.type}
                          onChange={(e) =>
                            setEditForm({ ...editForm, type: e.target.value })
                          }
                          className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option>Full-time</option>
                          <option>Internship</option>
                          <option>Freelance</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-muted-foreground">
                          Batch
                        </label>
                        <input
                          type="text"
                          value={editForm.batch}
                          onChange={(e) =>
                            setEditForm({ ...editForm, batch: e.target.value })
                          }
                          className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground">
                        Tech Stack (comma-separated)
                      </label>
                      <input
                        type="text"
                        value={editForm.tech}
                        onChange={(e) =>
                          setEditForm({ ...editForm, tech: e.target.value })
                        }
                        className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-xs font-medium text-muted-foreground">
                          Deadline
                        </label>
                        <input
                          type="date"
                          value={editForm.deadline}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              deadline: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-muted-foreground">
                          Difficulty
                        </label>
                        <select
                          value={editForm.difficulty}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              difficulty: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option>Fresher</option>
                          <option>Intermediate</option>
                          <option>Expert</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={handleSaveEdit}
                        className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <Check className="h-4 w-4" />
                        Save
                      </button>
                      <button
                        onClick={handleCancelEdit}
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
                <JobCard
                  key={job.id}
                  {...job}
                  onToggleSave={toggleSave}
                  onEdit={isAdmin ? handleEditJob : undefined}
                  onDelete={isAdmin ? handleDeleteJob : undefined}
                />
              ),
            )}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <Filter className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No jobs match your filters. Try adjusting your search.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
