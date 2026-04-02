import { motion } from "framer-motion";
import {
  MessageSquare,
  Phone,
  Mail,
  Clock,
  HelpCircle,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Support = () => {
  const faqs = [
    {
      q: "How do I create a freelancer account?",
      a: "Sign up on workNexus, complete your profile with skills and experience, and start bidding on projects.",
    },
    {
      q: "What are the platform fees?",
      a: "We charge a 10% service fee on all completed projects. No hidden charges.",
    },
    {
      q: "How do payments work?",
      a: "Payments are secured in escrow and released to freelancers after project completion and client approval.",
    },
    {
      q: "Can I withdraw my earnings anytime?",
      a: "Yes, you can withdraw your earnings anytime. Minimum withdrawal is ₹500.",
    },
    {
      q: "What if I have a dispute with a client?",
      a: "Our support team reviews disputes and makes decisions based on project terms and evidence provided.",
    },
    {
      q: "How long does account verification take?",
      a: "Account verification usually takes 24-48 hours. Some accounts may be instant.",
    },
  ];

  const supportChannels = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      desc: "Chat with us in real-time",
      availability: "24/7 available",
    },
    {
      icon: Mail,
      title: "Email Support",
      desc: "support@worknexus.com",
      availability: "Response within 24 hours",
    },
    {
      icon: Phone,
      title: "Phone Support",
      desc: "+91 1234567890",
      availability: "Mon-Fri, 10AM-6PM IST",
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
              <span className="text-gradient-primary">Help & Support</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're here to help. Find answers or reach our support team.
            </p>
          </motion.div>

          {/* Support Channels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {supportChannels.map((channel, i) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-6 text-center shadow-card"
              >
                <channel.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold text-lg mb-2">
                  {channel.title}
                </h3>
                <p className="text-foreground font-medium text-sm mb-2">
                  {channel.desc}
                </p>
                <p className="text-xs text-muted-foreground">
                  {channel.availability}
                </p>
              </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <HelpCircle className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-display font-bold">
                  Frequently Asked Questions
                </h2>
              </div>
              <p className="text-muted-foreground">
                Find quick answers to common questions
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.details
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-lg border border-border bg-card p-6 shadow-card group"
                >
                  <summary className="cursor-pointer font-display font-semibold flex items-center justify-between hover:text-primary transition-colors">
                    {faq.q}
                    <Zap className="h-4 w-4 group-open:rotate-90 transition-transform" />
                  </summary>
                  <p className="text-muted-foreground mt-4 pt-4 border-t border-border/50">
                    {faq.a}
                  </p>
                </motion.details>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mt-16 text-center bg-card border border-border rounded-xl p-8 shadow-card"
          >
            <h3 className="text-2xl font-display font-bold mb-4">
              Didn't find your answer?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our support team is ready to help. Reach out to us anytime.
            </p>
            <button className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Contact Support Team
            </button>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;
