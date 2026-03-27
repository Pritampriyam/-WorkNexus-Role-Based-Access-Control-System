import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Palette,
  Brain,
  FileText,
  HelpCircle,
  Briefcase,
  Megaphone,
} from "lucide-react";

const services = [
  { icon: Code, title: "Web Development", desc: "Custom websites & web apps", color: "text-primary" },
  { icon: Smartphone, title: "App Development", desc: "iOS & Android solutions", color: "text-primary" },
  { icon: Palette, title: "Website Design", desc: "Stunning UI/UX designs", color: "text-accent" },
  { icon: Brain, title: "AI / ML Projects", desc: "Intelligent solutions", color: "text-accent" },
  { icon: FileText, title: "Resume Building", desc: "ATS-optimized resumes", color: "text-primary" },
  { icon: HelpCircle, title: "Coding Help", desc: "Debug & mentorship", color: "text-primary" },
  { icon: Briefcase, title: "Research Assistance", desc: "Papers & citations", color: "text-accent" },
  { icon: Megaphone, title: "Advertisements", desc: "Promote your business", color: "text-accent" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesGrid = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Explore <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Everything you need to build, grow, and succeed — from one platform.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-all duration-300 cursor-pointer shadow-card hover:glow-primary"
            >
              <service.icon className={`h-8 w-8 ${service.color} mb-4`} />
              <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
