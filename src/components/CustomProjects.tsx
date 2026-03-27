import { motion } from "framer-motion";
import { MessageCircle, Package, Code, Users } from "lucide-react";

const CustomProjects = () => {
  const customServices = [
    {
      icon: Code,
      title: "Custom Project Development",
      desc: "Tailored to your specific requirements",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Package,
      title: "Ready-Made Projects",
      desc: "Professional with full source code",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      desc: "Work with experienced developers",
      color: "from-pink-500 to-pink-600",
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
          💼 Need <span className="text-gradient-primary">Custom Projects</span>
          ?
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We develop custom projects tailored to your specific requirements with
          professional quality and timely delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {customServices.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-all shadow-card"
          >
            <div
              className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}
            >
              <service.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://api.whatsapp.com/send/?phone=918962306037&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-primary text-primary-foreground font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp Us
        </a>
        <button className="border-2 border-primary text-primary font-bold px-8 py-4 rounded-lg hover:bg-primary/10 transition-all">
          Order Customized Project
        </button>
      </div>
    </motion.div>
  );
};

export default CustomProjects;
