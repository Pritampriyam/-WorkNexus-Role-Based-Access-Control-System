import { useState } from "react";
import { motion } from "framer-motion";
import { Star, MapPin, Search, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const freelancersData = [
  { id: 1, name: "Arjun Mehta", avatar: "👨‍💻", title: "Full Stack Developer", skills: ["React", "Node.js", "AWS"], rating: 4.9, reviews: 48, rate: "₹1,500/hr", location: "Bangalore", projects: 67 },
  { id: 2, name: "Priya Sharma", avatar: "👩‍🎨", title: "UI/UX Designer", skills: ["Figma", "Adobe XD", "Prototyping"], rating: 4.8, reviews: 35, rate: "₹1,200/hr", location: "Mumbai", projects: 42 },
  { id: 3, name: "Rahul Verma", avatar: "🧑‍🔬", title: "AI/ML Engineer", skills: ["Python", "TensorFlow", "NLP"], rating: 5.0, reviews: 29, rate: "₹2,000/hr", location: "Remote", projects: 31 },
  { id: 4, name: "Sneha Patel", avatar: "👩‍💻", title: "Mobile Developer", skills: ["Flutter", "React Native", "Firebase"], rating: 4.7, reviews: 52, rate: "₹1,400/hr", location: "Hyderabad", projects: 55 },
  { id: 5, name: "Vikram Singh", avatar: "🧑‍💼", title: "Backend Developer", skills: ["Java", "Spring Boot", "Microservices"], rating: 4.8, reviews: 41, rate: "₹1,800/hr", location: "Pune", projects: 38 },
  { id: 6, name: "Ananya Gupta", avatar: "👩‍🏫", title: "Technical Writer", skills: ["Docs", "API Docs", "Content"], rating: 4.6, reviews: 23, rate: "₹800/hr", location: "Delhi", projects: 89 },
];

const skillFilters = ["All", "React", "Python", "Flutter", "Java", "Figma"];

const Freelancers = () => {
  const [search, setSearch] = useState("");
  const [skillFilter, setSkillFilter] = useState("All");

  const filtered = freelancersData.filter((f) => {
    const matchSearch = f.name.toLowerCase().includes(search.toLowerCase()) || f.title.toLowerCase().includes(search.toLowerCase());
    const matchSkill = skillFilter === "All" || f.skills.some((s) => s === skillFilter);
    return matchSearch && matchSkill;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-3">
              Hire <span className="text-gradient-primary">Freelancers</span>
            </h1>
            <p className="text-muted-foreground text-lg">Browse top-rated freelancers across 50+ skills.</p>
          </motion.div>

          <div className="flex flex-wrap gap-3 mb-8">
            <div className="relative flex-1 min-w-[250px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by name or skill..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {skillFilters.map((skill) => (
                <button
                  key={skill}
                  onClick={() => setSkillFilter(skill)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    skillFilter === skill
                      ? "bg-gradient-primary text-primary-foreground"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((freelancer, i) => (
              <motion.div
                key={freelancer.id}
                className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-all shadow-card"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{freelancer.avatar}</div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">{freelancer.name}</h3>
                    <p className="text-sm text-muted-foreground">{freelancer.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-medium">{freelancer.rating}</span>
                      <span className="text-xs text-muted-foreground">({freelancer.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {freelancer.skills.map((skill) => (
                    <span key={skill} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">{skill}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{freelancer.location}</span>
                  <span>{freelancer.projects} projects done</span>
                </div>

                <div className="flex items-center justify-between border-t border-border pt-4">
                  <span className="font-display font-bold text-gradient-primary">{freelancer.rate}</span>
                  <button className="bg-gradient-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-1">
                    Hire <ExternalLink className="h-3.5 w-3.5" />
                  </button>
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

export default Freelancers;
