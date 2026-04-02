import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  const sections = [
    {
      title: "Introduction",
      content:
        "workNexus ('we', 'us', 'our', or 'Company') operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.",
    },
    {
      title: "Information Collection And Use",
      content:
        "We collect several different types of information for various purposes to provide and improve our Service to you. These may include: personal identification information, contact information, technical data about your device and usage patterns, and cookies to enhance your experience.",
    },
    {
      title: "Use Of Data",
      content:
        "workNexus uses the collected data for various purposes: to provide and maintain our Service, to notify you about changes to our Service, to allow you to participate in interactive features when you choose, to provide customer support, to gather analysis or valuable information so that we can improve our Service, and to monitor the usage of our Service.",
    },
    {
      title: "Security Of Data",
      content:
        "The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.",
    },
    {
      title: "Changes To This Privacy Policy",
      content:
        "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'effective date' at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Privacy <span className="text-gradient-primary">Policy</span>
            </h1>
            <p className="text-muted-foreground">
              Last updated: February 21, 2026
            </p>
          </motion.div>

          {/* Content */}
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

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-lg border border-border bg-card p-8 shadow-card text-center"
            >
              <h2 className="text-2xl font-display font-bold mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground mb-6">
                If you have questions about this Privacy Policy, please contact
                us at:
              </p>
              <div className="space-y-2">
                <p className="text-foreground">
                  <strong>Email:</strong> privacy@worknexus.com
                </p>
                <p className="text-foreground">
                  <strong>Address:</strong> Bangalore, India
                </p>
                <p className="text-foreground">
                  <strong>Phone:</strong> +91 1234567890
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
