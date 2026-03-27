import { motion } from "framer-motion";
import { Code, FileJson, Server, Key } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const API = () => {
  const endpoints = [
    {
      method: "GET",
      endpoint: "/api/jobs",
      description: "Fetch all available jobs",
      color: "bg-blue-500/10 text-blue-700",
    },
    {
      method: "POST",
      endpoint: "/api/freelancers/profile",
      description: "Update freelancer profile",
      color: "bg-green-500/10 text-green-700",
    },
    {
      method: "GET",
      endpoint: "/api/projects/:id",
      description: "Get project details",
      color: "bg-blue-500/10 text-blue-700",
    },
    {
      method: "PUT",
      endpoint: "/api/applications/:id",
      description: "Update job application status",
      color: "bg-yellow-500/10 text-yellow-700",
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
              HIRENIXA <span className="text-gradient-primary">API</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Integrate HIRENIXA into your applications with our comprehensive
              API.
            </p>
          </motion.div>

          {/* Quick Start */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-card border border-border rounded-xl p-8 shadow-card mb-16"
          >
            <h2 className="text-2xl font-display font-bold mb-6">
              Quick Start
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Key className="h-5 w-5 text-primary" />
                  Get Your API Key
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Sign up and go to your dashboard to generate your API key.
                </p>
                <code className="block bg-secondary p-3 rounded text-xs font-mono text-foreground">
                  Authorization: Bearer YOUR_API_KEY
                </code>
              </div>

              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Server className="h-5 w-5 text-primary" />
                  Base URL
                </h3>
                <code className="block bg-secondary p-3 rounded text-xs font-mono text-foreground">
                  https://api.hirenixa.com/v1
                </code>
              </div>

              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <FileJson className="h-5 w-5 text-primary" />
                  Response Format
                </h3>
                <code className="block bg-secondary p-3 rounded text-xs font-mono text-foreground overflow-x-auto">
                  {`{
  "status": "success",
  "data": {...},
  "message": "Request successful"
}`}
                </code>
              </div>
            </div>
          </motion.div>

          {/* Endpoints */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold mb-8">
              API Endpoints
            </h2>
            <div className="space-y-4">
              {endpoints.map((ep, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-lg border border-border bg-card p-6 shadow-card"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${ep.color}`}
                    >
                      {ep.method}
                    </span>
                    <div className="flex-1">
                      <code className="font-mono text-sm text-foreground">
                        {ep.endpoint}
                      </code>
                      <p className="text-sm text-muted-foreground mt-1">
                        {ep.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SDK */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-card border border-border rounded-xl p-8 shadow-card"
          >
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
              <Code className="h-6 w-6 text-primary" />
              SDKs & Libraries
            </h2>
            <p className="text-muted-foreground mb-6">
              We provide official SDKs for popular programming languages:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Python",
                "JavaScript",
                "Go",
                "Java",
                "Ruby",
                "PHP",
                "C#",
                "Node.js",
              ].map((lang) => (
                <button
                  key={lang}
                  className="px-4 py-3 rounded-lg border border-border bg-secondary text-sm font-medium hover:border-primary/30 transition-colors"
                >
                  {lang}
                </button>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm mb-4">
                Find comprehensive documentation, code examples, and tutorials
                at:
              </p>
              <a
                href="#"
                className="text-primary hover:underline font-medium flex items-center gap-1"
              >
                docs.hirenixa.com <span className="text-xl">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default API;
