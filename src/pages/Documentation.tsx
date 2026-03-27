import { motion } from "framer-motion";
import { BookOpen, Code, FileText, Video, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Documentation = () => {
  const docs = [
    {
      icon: BookOpen,
      title: "Getting Started",
      desc: "Learn the basics and get up and running with HIRENIXA in minutes.",
      link: "#",
    },
    {
      icon: Code,
      title: "API Reference",
      desc: "Complete API documentation with code examples for developers.",
      link: "#",
    },
    {
      icon: FileText,
      title: "User Guide",
      desc: "Comprehensive guide for freelancers, service providers, and job seekers.",
      link: "#",
    },
    {
      icon: Video,
      title: "Video Tutorials",
      desc: "Step-by-step video guides for all major features.",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <span className="text-gradient-primary">Documentation</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about HIRENIXA. Guides, API docs, and
              tutorials.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {docs.map((doc, i) => (
              <motion.a
                key={doc.title}
                href={doc.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-all shadow-card group cursor-pointer"
              >
                <doc.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display font-semibold text-lg mb-2">
                  {doc.title}
                </h3>
                <p className="text-muted-foreground text-sm">{doc.desc}</p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-8 text-center shadow-card"
          >
            <h2 className="text-2xl font-display font-bold mb-4">Need Help?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Check our FAQ or contact our
              support team.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-gradient-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                View FAQ
              </button>
              <button className="border border-border text-foreground font-semibold px-6 py-3 rounded-lg hover:border-primary/30 transition-colors">
                Contact Support
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Documentation;
