import { motion } from "framer-motion";
import { UserPlus, Search, CreditCard, Rocket } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Create Account", desc: "Sign up as a freelancer, client, or student in seconds." },
  { icon: Search, title: "Find Services", desc: "Browse freelancers, projects, and digital services." },
  { icon: CreditCard, title: "Secure Payment", desc: "Pay securely with integrated payment gateway." },
  { icon: Rocket, title: "Get Results", desc: "Receive deliverables and grow your business." },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-card/50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            How It <span className="text-gradient-accent">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Four simple steps to get started on the platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-border" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="text-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="relative mx-auto w-24 h-24 rounded-2xl bg-secondary flex items-center justify-center mb-6 border border-border">
                <step.icon className="h-10 w-10 text-primary" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground max-w-[200px] mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
