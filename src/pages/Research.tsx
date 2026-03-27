import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, BookOpen, CheckCircle, Clock, Send, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const formats = ["IEEE", "APA", "MLA", "Chicago", "Harvard"];

const features = [
  { icon: FileText, title: "Topic Suggestion", desc: "Get AI-assisted research topic ideas based on your field." },
  { icon: BookOpen, title: "Formatting Support", desc: "IEEE, APA, MLA — proper structure and referencing." },
  { icon: CheckCircle, title: "Citation Generator", desc: "Auto-generate accurate citations from URLs or DOIs." },
  { icon: AlertCircle, title: "Plagiarism Check", desc: "Integrated plagiarism detection before submission." },
];

const Research = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-3">
              Research <span className="text-gradient-accent">Assistance</span>
            </h1>
            <p className="text-muted-foreground text-lg">Get expert help with research papers, formatting, citations & more.</p>
          </motion.div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="rounded-xl border border-border bg-card p-6 shadow-card"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-3">
                  <feature.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-sm mb-1">{feature.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Request Form */}
          <motion.div
            className="max-w-2xl mx-auto rounded-xl border border-border bg-card p-8 shadow-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {!submitted ? (
              <>
                <h2 className="text-2xl font-display font-bold mb-6">Submit Research Request</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Research Topic</label>
                    <input className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Enter your research topic" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Field of Study</label>
                    <input className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="e.g., Computer Science, Mechanical Engineering" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Formatting Style</label>
                    <div className="flex flex-wrap gap-2">
                      {formats.map((f) => (
                        <button key={f} className="px-4 py-2 rounded-lg text-sm border border-border bg-secondary text-secondary-foreground hover:border-primary/30 transition-colors">
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Additional Details</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none" placeholder="Describe what you need help with..." />
                  </div>
                  <button
                    onClick={() => setSubmitted(true)}
                    className="w-full bg-gradient-accent text-accent-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" /> Submit Request
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="font-display font-bold text-2xl mb-2">Request Submitted!</h3>
                <p className="text-muted-foreground mb-6">Our research team will review your request and assign a mentor within 24 hours.</p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Estimated response: 24 hours</span>
                </div>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-primary hover:underline">
                  Submit another request
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Research;
