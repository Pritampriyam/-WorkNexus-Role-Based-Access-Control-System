import { motion } from "framer-motion";
import { Award, Users, TrendingUp, Zap } from "lucide-react";

const SuccessMetrics = () => {
  const metrics = [
    {
      icon: Award,
      number: "500+",
      label: "Students Placed in Top Companies",
      detail: "Capgemini, Infosys, TCS, Deloitte & more",
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Success Rate",
      detail: "Join HIRENIXA Premium Today",
    },
    {
      icon: Users,
      number: "2000+",
      label: "Active Students Preparing Daily",
      detail: "From IIT, NIT & Top Colleges",
    },
    {
      icon: Zap,
      number: "100%",
      label: "Authentic & Updated Materials",
      detail: "Real Interview Questions from Recent Drives",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container mx-auto px-6 py-16"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          🚀 Why Choose <span className="text-gradient-primary">HIRENIXA</span>?
        </h2>
        <p className="text-xl text-muted-foreground">
          Join thousands of successful students and professionals on our
          platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-border bg-card p-6 text-center hover:border-primary/30 transition-all shadow-card"
          >
            <metric.icon className="h-8 w-8 text-primary mx-auto mb-3" />
            <p className="text-4xl font-display font-bold text-gradient-primary mb-2">
              {metric.number}
            </p>
            <h3 className="font-semibold text-sm mb-2">{metric.label}</h3>
            <p className="text-xs text-muted-foreground">{metric.detail}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SuccessMetrics;
