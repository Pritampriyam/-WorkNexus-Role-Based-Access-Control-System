import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  BookOpen,
  Video,
  Download,
  Lock,
  Star,
  Users,
  Edit,
  Trash2,
  Plus,
  Check,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";

const initialCompanies = [
  { name: "TCS", logo: "🟦", materials: 12, students: 2340, rating: 4.7 },
  { name: "Infosys", logo: "🟩", materials: 10, students: 1890, rating: 4.6 },
  { name: "Capgemini", logo: "🔵", materials: 8, students: 1560, rating: 4.5 },
  { name: "Deloitte", logo: "⬛", materials: 9, students: 1120, rating: 4.8 },
  { name: "Wipro", logo: "🌻", materials: 7, students: 980, rating: 4.4 },
  { name: "Accenture", logo: "🟣", materials: 11, students: 2100, rating: 4.6 },
];

const initialServices = [
  {
    icon: FileText,
    title: "Aptitude Training",
    desc: "Quantitative, logical, verbal — full preparation modules",
    price: 499,
    premium: false,
  },
  {
    icon: BookOpen,
    title: "Coding Questions",
    desc: "DSA, competitive programming — company-wise collections",
    price: 699,
    premium: false,
  },
  {
    icon: Video,
    title: "Mock Interviews",
    desc: "1-on-1 sessions with industry experts — book your slot",
    price: 999,
    premium: true,
  },
  {
    icon: Star,
    title: "Resume Building",
    desc: "ATS-optimized resume by professionals",
    price: 799,
    premium: true,
  },
];

const Placement = () => {
  const { isAdmin } = useAuth();
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [companies, setCompanies] = useState(initialCompanies);
  const [services, setServices] = useState(initialServices);
  const [editingCompany, setEditingCompany] = useState<string | null>(null);
  const [editCompanyForm, setEditCompanyForm] = useState<any>(null);
  const [editingService, setEditingService] = useState<number | null>(null);
  const [editServiceForm, setEditServiceForm] = useState<any>(null);

  // Load from localStorage
  useEffect(() => {
    const savedCompanies = localStorage.getItem("hirenixa_placement_companies");
    if (savedCompanies) {
      try {
        setCompanies(JSON.parse(savedCompanies));
      } catch (e) {
        console.error("Failed to load companies:", e);
      }
    }

    const savedServices = localStorage.getItem("hirenixa_placement_services");
    if (savedServices) {
      try {
        const parsed = JSON.parse(savedServices);
        // Restore icon components from initialServices
        const restored = parsed.map((s: any, idx: number) => ({
          ...s,
          icon: initialServices[idx]?.icon || FileText,
        }));
        setServices(restored);
      } catch (e) {
        console.error("Failed to load services:", e);
      }
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(
      "hirenixa_placement_companies",
      JSON.stringify(companies),
    );
  }, [companies]);

  useEffect(() => {
    // Save services without icon component
    const toSave = services.map((s) => ({
      ...s,
      icon: s.icon.name || "FileText",
    }));
    localStorage.setItem("hirenixa_placement_services", JSON.stringify(toSave));
  }, [services]);

  const handleAddMaterial = () => {
    const newCompany = {
      name: "New Company",
      logo: "🏢",
      materials: 0,
      students: 0,
      rating: 4.5,
    };
    setCompanies((prev) => [...prev, newCompany]);
    setEditingCompany(newCompany.name);
    setEditCompanyForm({ ...newCompany });
  };

  const handleEditCompany = (company: any) => {
    setEditingCompany(company.name);
    setEditCompanyForm({ ...company });
  };

  const handleSaveCompanyEdit = () => {
    if (editCompanyForm && editingCompany) {
      setCompanies((prev) =>
        prev.map((c) => (c.name === editingCompany ? editCompanyForm : c)),
      );
      setEditingCompany(null);
      setEditCompanyForm(null);
    }
  };

  const handleCancelCompanyEdit = () => {
    setEditingCompany(null);
    setEditCompanyForm(null);
  };

  const handleDeleteCompany = (companyName: string) => {
    if (confirm(`Are you sure you want to delete "${companyName}"?`)) {
      setCompanies((prev) => prev.filter((c) => c.name !== companyName));
      if (selectedCompany === companyName) {
        setSelectedCompany(null);
      }
    }
  };

  const handleEditService = (service: any, index: number) => {
    setEditingService(index);
    setEditServiceForm({ ...service });
  };

  const handleSaveServiceEdit = () => {
    if (editServiceForm !== null && editingService !== null) {
      setServices((prev) =>
        prev.map((s, idx) =>
          idx === editingService ? { ...editServiceForm, icon: s.icon } : s,
        ),
      );
      setEditingService(null);
      setEditServiceForm(null);
    }
  };

  const handleCancelServiceEdit = () => {
    setEditingService(null);
    setEditServiceForm(null);
  };

  const handleDeleteService = (index: number) => {
    const service = services[index];
    if (confirm(`Are you sure you want to delete "${service.title}"?`)) {
      setServices((prev) => prev.filter((_, idx) => idx !== index));
    }
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
                  Placement <span className="text-gradient-primary">Help</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                  Company-wise preparation, mock interviews, resume building &
                  more.
                </p>
              </div>
              {isAdmin && (
                <button
                  onClick={handleAddMaterial}
                  className="flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Plus className="h-4 w-4" />
                  Add Material
                </button>
              )}
            </div>
          </motion.div>

          {/* Company-wise Materials */}
          <div className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6">
              Company-Wise Preparation
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {companies.map((company, i) =>
                editingCompany === company.name && editCompanyForm ? (
                  // Edit Mode for Company
                  <motion.div
                    key={company.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="rounded-xl border-2 border-primary bg-card p-4 col-span-2"
                  >
                    <div className="space-y-3">
                      <div>
                        <label className="text-xs font-medium">Name</label>
                        <input
                          type="text"
                          value={editCompanyForm.name}
                          onChange={(e) =>
                            setEditCompanyForm({
                              ...editCompanyForm,
                              name: e.target.value,
                            })
                          }
                          className="w-full px-2 py-1 text-sm border border-border rounded bg-secondary focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium">
                          Logo (emoji)
                        </label>
                        <input
                          type="text"
                          value={editCompanyForm.logo}
                          onChange={(e) =>
                            setEditCompanyForm({
                              ...editCompanyForm,
                              logo: e.target.value,
                            })
                          }
                          className="w-full px-2 py-1 text-sm border border-border rounded bg-secondary focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium">Materials</label>
                        <input
                          type="number"
                          value={editCompanyForm.materials}
                          onChange={(e) =>
                            setEditCompanyForm({
                              ...editCompanyForm,
                              materials: parseInt(e.target.value) || 0,
                            })
                          }
                          className="w-full px-2 py-1 text-sm border border-border rounded bg-secondary focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium">Students</label>
                        <input
                          type="number"
                          value={editCompanyForm.students}
                          onChange={(e) =>
                            setEditCompanyForm({
                              ...editCompanyForm,
                              students: parseInt(e.target.value) || 0,
                            })
                          }
                          className="w-full px-2 py-1 text-sm border border-border rounded bg-secondary focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium">Rating</label>
                        <input
                          type="number"
                          step="0.1"
                          min="0"
                          max="5"
                          value={editCompanyForm.rating}
                          onChange={(e) =>
                            setEditCompanyForm({
                              ...editCompanyForm,
                              rating: parseFloat(e.target.value) || 0,
                            })
                          }
                          className="w-full px-2 py-1 text-sm border border-border rounded bg-secondary focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={handleSaveCompanyEdit}
                          className="flex-1 flex items-center justify-center gap-1 bg-green-600 text-white px-2 py-1.5 rounded text-xs font-medium hover:bg-green-700"
                        >
                          <Check className="h-3 w-3" />
                          Save
                        </button>
                        <button
                          onClick={handleCancelCompanyEdit}
                          className="flex-1 flex items-center justify-center gap-1 bg-gray-600 text-white px-2 py-1.5 rounded text-xs font-medium hover:bg-gray-700"
                        >
                          <X className="h-3 w-3" />
                          Cancel
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  // View Mode for Company
                  <motion.button
                    key={company.name}
                    onClick={() =>
                      setSelectedCompany(
                        selectedCompany === company.name ? null : company.name,
                      )
                    }
                    className={`rounded-xl border p-5 text-center transition-all relative group ${
                      selectedCompany === company.name
                        ? "border-primary bg-primary/10 glow-primary"
                        : "border-border bg-card hover:border-primary/30 shadow-card"
                    }`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {isAdmin && (
                      <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEditCompany(company);
                          }}
                          className="p-1.5 rounded-md bg-blue-500 text-white"
                          title="Edit Company"
                        >
                          <Edit className="h-3 w-3" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteCompany(company.name);
                          }}
                          className="p-1.5 rounded-md bg-red-500 text-white"
                          title="Delete Company"
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    )}
                    <div className="text-3xl mb-2">{company.logo}</div>
                    <h3 className="font-display font-semibold text-sm">
                      {company.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {company.materials} materials
                    </p>
                  </motion.button>
                ),
              )}
            </div>

            {selectedCompany && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-6 rounded-xl border border-border bg-card p-6 shadow-card"
              >
                <h3 className="font-display font-semibold text-lg mb-4">
                  {selectedCompany} Preparation Package
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    "Aptitude Questions PDF",
                    "Previous Year Papers",
                    "Interview Questions",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-border p-4 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-primary" />
                        <span className="text-sm">{item}</span>
                      </div>
                      <button className="text-xs bg-gradient-primary text-primary-foreground px-3 py-1.5 rounded-md font-medium flex items-center gap-1">
                        <Download className="h-3 w-3" /> Get
                      </button>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {
                      companies.find((c) => c.name === selectedCompany)
                        ?.students
                    }{" "}
                    students prepared
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    {
                      companies.find((c) => c.name === selectedCompany)?.rating
                    }{" "}
                    rating
                  </span>
                </div>
              </motion.div>
            )}
          </div>

          {/* Placement Services */}
          <div>
            <h2 className="text-2xl font-display font-bold mb-6">
              Placement Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, i) =>
                editingService === i && editServiceForm ? (
                  // Edit Mode for Service
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="rounded-xl border-2 border-primary bg-card p-4"
                  >
                    <h4 className="text-sm font-semibold mb-3 text-primary">
                      Editing Service
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <label className="text-xs font-medium">Title</label>
                        <input
                          type="text"
                          value={editServiceForm.title}
                          onChange={(e) =>
                            setEditServiceForm({
                              ...editServiceForm,
                              title: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-secondary focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium">
                          Description
                        </label>
                        <textarea
                          value={editServiceForm.desc}
                          onChange={(e) =>
                            setEditServiceForm({
                              ...editServiceForm,
                              desc: e.target.value,
                            })
                          }
                          rows={2}
                          className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-secondary focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-xs font-medium">
                            Price (₹)
                          </label>
                          <input
                            type="number"
                            value={editServiceForm.price}
                            onChange={(e) =>
                              setEditServiceForm({
                                ...editServiceForm,
                                price: parseInt(e.target.value) || 0,
                              })
                            }
                            className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-secondary focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-medium">Premium</label>
                          <select
                            value={editServiceForm.premium ? "true" : "false"}
                            onChange={(e) =>
                              setEditServiceForm({
                                ...editServiceForm,
                                premium: e.target.value === "true",
                              })
                            }
                            className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-secondary focus:ring-2 focus:ring-primary"
                          >
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={handleSaveServiceEdit}
                          className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-green-700"
                        >
                          <Check className="h-4 w-4" />
                          Save
                        </button>
                        <button
                          onClick={handleCancelServiceEdit}
                          className="flex-1 flex items-center justify-center gap-2 bg-gray-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-gray-700"
                        >
                          <X className="h-4 w-4" />
                          Cancel
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  // View Mode for Service
                  <motion.div
                    key={i}
                    className="rounded-xl border border-border bg-card p-6 flex gap-5 hover:border-primary/20 transition-colors shadow-card relative group"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    {isAdmin && (
                      <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => handleEditService(service, i)}
                          className="p-1.5 rounded-md bg-blue-500 text-white"
                          title="Edit Service"
                        >
                          <Edit className="h-3 w-3" />
                        </button>
                        <button
                          onClick={() => handleDeleteService(i)}
                          className="p-1.5 rounded-md bg-red-500 text-white"
                          title="Delete Service"
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    )}
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display font-semibold">
                          {service.title}
                        </h3>
                        {service.premium && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent flex items-center gap-1">
                            <Lock className="h-3 w-3" /> Premium
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {service.desc}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-display font-bold text-gradient-primary">
                          ₹{service.price}
                        </span>
                        <button className="text-xs bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg font-medium">
                          {service.premium ? "Unlock Access" : "Get Started"}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Placement;
