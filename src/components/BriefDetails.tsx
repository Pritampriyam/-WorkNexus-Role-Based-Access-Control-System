import { motion } from "framer-motion";
import { Briefcase, Users, Zap, Shield } from "lucide-react";

// Whatsapp API Endpoint
const WHATSAPP_API_ENDPOINT =
  "https://api.whatsapp.com/send/?phone=919006248209&text&type=phone_number&app_absent=0";

const BriefDetails = () => {
  const details = [
    {
      icon: Briefcase,
      title: "Diverse Services",
      description:
        "From academic projects to AI/ML solutions, find everything you need to excel.",
    },
    {
      icon: Users,
      title: "Verified Professionals",
      description:
        "Connect with top-tier freelancers and service providers verified by our team.",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description:
        "Get your projects done quickly with our efficient workflow and expert network.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description:
        "100% authentic, secure transactions with complete transparency and support.",
    },
  ];

  return (
    <section className="py-20 bg-background border-y border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Why Choose <span className="text-gradient-primary">workNexus</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering your tech journey with reliable services and verified
            professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((detail, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-all shadow-card group"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <detail.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">
                {detail.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {detail.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BriefDetails;
