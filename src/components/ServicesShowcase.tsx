import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  GraduationCap,
  Layers,
  Zap,
  Brain,
  User,
  FileText,
  Code,
  Award,
  Building,
  MessageCircle,
  Linkedin,
  Github,
  Bell,
  BookOpen,
  Target,
  Edit,
  Trash2,
  Plus,
  Check,
  X,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const initialServices = [
  {
    icon: Globe,
    title: "Complete Websites",
    subtitle: "Web Development 🌐",
    description:
      "Professional, responsive, and fully functional websites designed to attract customers and boost your business earnings.",
    features: [
      "Responsive Design (Mobile & Desktop)",
      "SEO Optimized",
      "Fast Loading Speed",
      "Contact Forms & Integration",
      "Free Hosting Guidance",
    ],
    price: "From ₹1000",
    cta: "Order Now",
  },
  {
    icon: GraduationCap,
    title: "College Major & Minor Projects",
    subtitle: "Academic Projects 🎓",
    description:
      "Submission-ready academic projects with complete documentation, source code, and presentation materials.",
    features: [
      "Complete Source Code",
      "Project Report (20+ Pages)",
      "PPT Presentation",
      "Installation Guide",
      "Video Demo",
    ],
    price: "From ₹2000",
    cta: "Order Now",
  },
  {
    icon: Layers,
    title: "Full-Stack Projects",
    subtitle: "Full-Stack Development",
    description:
      "Interview-ready full-stack applications using latest technologies with complete documentation.",
    features: [
      "React/Node.js/MongoDB/Python",
      "Frontend + Backend + Database",
      "Authentication & Authorization",
      "API Integration",
      "Deployment Support",
    ],
    price: "From ₹2000",
    cta: "Order Now",
  },
  {
    icon: Zap,
    title: "Hackathon Prototypes",
    subtitle: "Rapid Development ⚡",
    description:
      "Fast, functional prototypes designed to impress judges and win hackathons.",
    features: [
      "Working Prototype (2-3 days)",
      "Pitch Deck/Presentation",
      "Demo Video",
      "Source Code & Documentation",
      "Live Deployment Support",
    ],
    price: "From ₹2000",
    cta: "Order Now",
  },
  {
    icon: Brain,
    title: "AI/ML Projects",
    subtitle: "Artificial Intelligence 🤖",
    description:
      "Real-world intelligent systems with practical applications and complete implementation.",
    features: [
      "Machine Learning Models",
      "Deep Learning Applications",
      "Computer Vision Projects",
      "NLP & Text Analysis",
      "Dataset + Training + Testing",
    ],
    price: "From ₹2000",
    cta: "Order Now",
  },
  {
    icon: User,
    title: "Professional Portfolios",
    subtitle: "Personal Branding 💼",
    description:
      "Beautiful, responsive portfolios to showcase your skills and projects to employers.",
    features: [
      "Modern & Attractive Design",
      "Projects Showcase Section",
      "Skills & Experience Display",
      "Contact Form Integration",
      "Free Hosting & Domain Guide",
    ],
    price: "From ₹500",
    cta: "Order Now",
  },
  {
    icon: FileText,
    title: "ATS Resume Building",
    subtitle: "Career Services 📝",
    description:
      "ATS-friendly, professionally crafted resumes optimized for your target roles.",
    features: [
      "ATS-Optimized Format",
      "Keyword Optimization",
      "Professional Layout",
      "Multiple Format Options",
      "Unlimited Revisions",
    ],
    price: "From ₹500",
    cta: "Order Now",
  },
  {
    icon: Code,
    title: "Coding Solutions Help",
    subtitle: "Coding Help 💡",
    description:
      "Expert solutions for competitive programming and coding challenges.",
    features: [
      "LeetCode/HackerRank/CodeForces",
      "Algorithm Explanations",
      "Optimized Solutions",
      "Multiple Language Support",
      "24/7 Support",
    ],
    price: "From ₹100",
    cta: "Contact Us",
  },
  {
    icon: Award,
    title: "Placement Materials",
    subtitle: "Premium Materials 🎯",
    description:
      "Complete preparation materials for top companies - TCS, Infosys, Capgemini, Cognizant.",
    features: [
      "1500+ Real Interview Questions",
      "25+ PDF Resources",
      "Aptitude & Technical Prep",
      "Actual 2025 Questions",
      "Instant Drive Access",
    ],
    price: "From ₹99",
    cta: "View Materials",
    highlighted: true,
  },
  {
    icon: Building,
    title: "TCS Placement Package",
    subtitle: "Company Prep 🏢",
    description:
      "Complete TCS preparation materials including previous year questions, aptitude, and interview materials.",
    features: [
      "Previous Year OA Questions",
      "Aptitude Study Materials",
      "Technical Interview Guide",
      "HR Interview Tips",
      "Coding Practice Problems",
    ],
    price: "₹99",
    cta: "Get Package",
  },
  {
    icon: Building,
    title: "Infosys Placement Package",
    subtitle: "Company Prep 🏢",
    description:
      "Comprehensive Infosys preparation with coding challenges, aptitude materials, and interview guides.",
    features: [
      "InfyTQ Practice Materials",
      "Coding Round Questions",
      "System Engineer Interview Prep",
      "Communication Test Tips",
      "Real Interview Experiences",
    ],
    price: "₹99",
    cta: "Get Package",
  },
  {
    icon: Building,
    title: "Capgemini Placement Package",
    subtitle: "Company Prep 🏢",
    description:
      "Complete Capgemini preparation materials with pseudo code, logical reasoning, and interview tips.",
    features: [
      "Pseudo Code Practice",
      "Logical Reasoning Questions",
      "Technical MCQs",
      "Game-Based Assessment Tips",
      "Interview Success Stories",
    ],
    price: "₹99",
    cta: "Get Package",
  },
  {
    icon: MessageCircle,
    title: "Mock Interview Sessions",
    subtitle: "Interview Prep 🎤",
    description:
      "Real interview simulations with industry experts, detailed feedback, and performance improvement tips.",
    features: [
      "1-on-1 Mock Interviews",
      "Technical + HR Rounds",
      "Detailed Feedback Report",
      "Communication Tips",
      "Confidence Building",
    ],
    price: "₹299/session",
    cta: "Book Session",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Profile Optimization",
    subtitle: "Profile Building 📊",
    description:
      "Professional LinkedIn profile creation and optimization to attract recruiters and job opportunities.",
    features: [
      "Professional Headline",
      "Compelling Summary",
      "Experience Section",
      "Skills & Endorsements",
      "Recommendations Strategy",
    ],
    price: "₹399",
    cta: "Optimize Profile",
  },
  {
    icon: Github,
    title: "GitHub Profile Setup",
    subtitle: "Developer Profile 💻",
    description:
      "Complete GitHub profile creation with readme, project showcases, and contribution optimization.",
    features: [
      "Custom Profile README",
      "Repository Organization",
      "Project Documentation",
      "Contribution Graph Optimization",
      "Tech Stack Badges",
    ],
    price: "₹299",
    cta: "Setup GitHub",
  },
  {
    icon: BookOpen,
    title: "Aptitude Training Program",
    subtitle: "Skill Building 📚",
    description:
      "Complete aptitude training covering quantitative, logical, and verbal reasoning for placements.",
    features: [
      "Quantitative Aptitude",
      "Logical Reasoning",
      "Verbal Ability",
      "Practice Tests & Solutions",
      "Shortcuts & Time Management",
    ],
    price: "₹499",
    cta: "Start Training",
  },
  {
    icon: Target,
    title: "Technical Interview Preparation",
    subtitle: "Interview Mastery 🎯",
    description:
      "Master technical interviews with DSA, system design, and company-specific question practice.",
    features: [
      "DSA Problem Solving",
      "System Design Basics",
      "OOP Concepts Deep Dive",
      "DBMS & SQL Queries",
      "Company-Specific Questions",
    ],
    price: "₹599",
    cta: "Start Preparation",
  },
];

const ServicesShowcase = () => {
  const { isAdmin } = useAuth();
  const [services, setServices] = useState(initialServices);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<any>(null);

  // Load Services from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("hirenixa_services");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Restore icon functions
        const restored = parsed.map((s: any, idx: number) => ({
          ...s,
          icon: initialServices[idx]?.icon || Globe,
        }));
        setServices(restored);
      } catch (e) {
        console.error("Failed to load services", e);
      }
    }
  }, []);

  // Save services to localStorage
  useEffect(() => {
    const toSave = services.map((s) => ({
      ...s,
      icon: s.icon.name || "Globe", // Save icon name
    }));
    localStorage.setItem("hirenixa_services", JSON.stringify(toSave));
  }, [services]);

  const handleEditService = (service: any, index: number) => {
    setEditingIndex(index);
    setEditForm({ ...service });
  };

  const handleSaveEdit = () => {
    if (editForm !== null && editingIndex !== null) {
      setServices((prev) =>
        prev.map((s, idx) =>
          idx === editingIndex ? { ...editForm, icon: s.icon } : s,
        ),
      );
      setEditingIndex(null);
      setEditForm(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditForm(null);
  };

  const handleDeleteService = (index: number) => {
    const service = services[index];
    if (confirm(`Are you sure you want to delete "${service.title}"?`)) {
      setServices((prev) => prev.filter((_, idx) => idx !== index));
    }
  };

  const handleAddService = () => {
    const newService = {
      icon: Globe,
      title: "New Service",
      subtitle: "New Category 🆕",
      description: "Service description here",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      price: "₹999",
      cta: "Order Now",
    };
    setServices((prev) => [newService, ...prev]);
    setEditingIndex(0);
    setEditForm(newService);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex-1 text-center">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Your Complete Tech Solution Partner
              </h2>
            </div>
            {isAdmin && (
              <button
                onClick={handleAddService}
                className="flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Plus className="h-4 w-4" />
                Add Service
              </button>
            )}
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our Works & Services 🚀
          </p>
          <p className="text-lg text-muted-foreground mt-2">
            From Academic Projects to Professional Portfolios, AI/ML Solutions
            to Placement Preparation - We've Got You Covered!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`rounded-xl border bg-card p-6 hover:shadow-xl transition-all group ${
                service.highlighted
                  ? "border-primary shadow-lg"
                  : "border-border hover:border-primary/30"
              }`}
            >
              {editingIndex === i && editForm ? (
                // Edit Mode
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">
                      Title
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
                      Subtitle
                    </label>
                    <input
                      type="text"
                      value={editForm.subtitle}
                      onChange={(e) =>
                        setEditForm({ ...editForm, subtitle: e.target.value })
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
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">
                      Features (comma-separated)
                    </label>
                    <textarea
                      value={editForm.features.join(", ")}
                      onChange={(e) =>
                        setEditForm({
                          ...editForm,
                          features: e.target.value
                            .split(", ")
                            .map((f: string) => f.trim()),
                        })
                      }
                      rows={3}
                      className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">
                      Price
                    </label>
                    <input
                      type="text"
                      value={editForm.price}
                      onChange={(e) =>
                        setEditForm({ ...editForm, price: e.target.value })
                      }
                      className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground">
                      CTA Text
                    </label>
                    <input
                      type="text"
                      value={editForm.cta}
                      onChange={(e) =>
                        setEditForm({ ...editForm, cta: e.target.value })
                      }
                      className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                    />
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
              ) : (
                // View Mode
                <>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground mb-1">
                        {service.subtitle}
                      </p>
                      <h3 className="font-display font-semibold text-lg">
                        {service.title}
                      </h3>
                    </div>
                    {isAdmin && (
                      <div className="flex gap-1">
                        <button
                          onClick={() => handleEditService(service, i)}
                          className="p-1.5 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                          title="Edit Service"
                        >
                          <Edit className="h-3 w-3" />
                        </button>
                        <button
                          onClick={() => handleDeleteService(i)}
                          className="p-1.5 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors"
                          title="Delete Service"
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-lg font-display font-bold text-gradient-primary">
                      {service.price}
                    </span>
                    <a
                      href="https://api.whatsapp.com/send/?phone=918962306037&text&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                    >
                      {service.cta} →
                    </a>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
