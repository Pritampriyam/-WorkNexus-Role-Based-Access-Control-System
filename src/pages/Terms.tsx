import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "By accessing and using workNexus, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
    },
    {
      title: "User Accounts",
      content:
        "When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.",
    },
    {
      title: "User Responsibilities",
      content:
        "You agree to use workNexus only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment. You agree to comply with all laws, rules, and regulations applicable to your use of the service.",
    },
    {
      title: "Intellectual Property Rights",
      content:
        "Unless otherwise stated, workNexus and/or its licensors own the intellectual property rights for all material on the website. All intellectual property rights are reserved.",
    },
    {
      title: "Limitation of Liability",
      content:
        "In no event shall workNexus, nor any of its officers, directors and employees, be liable for anything arising out of or in any way connected with your use of this website. This includes, without limitation, liability for lost revenue, lost profits, lost business or anticipated savings.",
    },
    {
      title: "Modifications to Terms",
      content:
        "workNexus may revise these terms of service for the website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.",
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
            className="max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Terms of <span className="text-gradient-primary">Service</span>
            </h1>
            <p className="text-muted-foreground">
              Last updated: February 21, 2026
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-8">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-lg border border-border bg-card p-6 shadow-card"
              >
                <h2 className="text-2xl font-display font-bold mb-4">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-lg border border-border bg-card p-8 shadow-card text-center"
            >
              <h2 className="text-2xl font-display font-bold mb-4">
                Questions?
              </h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about our Terms of Service, please
                contact us at:
              </p>
              <a
                href="mailto:legal@worknexus.com"
                className="text-primary hover:underline font-medium"
              >
                legal@worknexus.com
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
