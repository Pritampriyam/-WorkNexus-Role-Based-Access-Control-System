import { motion } from "framer-motion";
import { ArrowRight, Zap, Edit } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useAuth } from "@/contexts/AuthContext";

const HeroSection = () => {
  const { isAdmin } = useAuth();

  const handleEdit = () => {
    alert("Edit hero section content (modal/form to be implemented)");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {isAdmin && (
          <button
            onClick={handleEdit}
            className="absolute top-4 right-4 p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors z-50"
            title="Edit Hero Section"
          >
            <Edit className="h-4 w-4" />
          </button>
        )}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 mb-8">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              AI-Powered Marketplace Platform
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Where Talent
          <br />
          Meets <span className="text-gradient-primary">Opportunity</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hire freelancers, buy digital services, access academic projects, and
          find jobs — all in one powerful, admin-controlled ecosystem.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <button className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg text-lg flex items-center gap-2 hover:opacity-90 transition-opacity glow-primary">
            Get Started Free
            <ArrowRight className="h-5 w-5" />
          </button>
          <button className="border border-border text-foreground font-medium px-8 py-4 rounded-lg text-lg hover:bg-secondary transition-colors">
            View Services
          </button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
