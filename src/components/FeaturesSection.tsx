import { motion } from "framer-motion";
import { Star, Shield, Users, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Admin-Controlled Ecosystem",
    desc: "Every service, listing, and user is verified and managed through a powerful admin dashboard.",
  },
  {
    icon: Users,
    title: "Multi-Role Platform",
    desc: "Students, freelancers, clients, and admins — each with tailored dashboards and permissions.",
  },
  {
    icon: Star,
    title: "Academic Project Store",
    desc: "Browse and purchase ready-made projects with source code, managed with digital delivery.",
  },
  {
    icon: BarChart3,
    title: "Revenue Analytics",
    desc: "Track earnings, commissions, and platform growth with detailed real-time analytics.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Built for <span className="text-gradient-primary">Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Enterprise-grade features that power a thriving digital marketplace.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="flex gap-5 rounded-xl border border-border bg-card p-8 shadow-card hover:border-primary/20 transition-colors"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
