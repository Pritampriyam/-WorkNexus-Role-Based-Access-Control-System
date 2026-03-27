import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "support@hirenixa.com",
      desc: "We respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 1234567890",
      desc: "Available Mon-Fri, 10AM-6PM",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Bangalore, India",
      desc: "Serving clients across India",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Get In <span className="text-gradient-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-card p-8 shadow-card"
            >
              {!submitted ? (
                <>
                  <h2 className="text-2xl font-display font-bold mb-6">
                    Send us a message
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="How can we help?"
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Tell us more about your inquiry..."
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                      />
                    </div>
                    <button
                      onClick={() => setSubmitted(true)}
                      className="w-full bg-gradient-primary text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                      <Send className="h-4 w-4" /> Send Message
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="font-display font-bold text-2xl mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. Our team will get back to you
                    within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-display font-bold mb-8">
                Contact Information
              </h2>
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-lg border border-border bg-card p-6"
                >
                  <div className="flex items-start gap-4">
                    <info.icon className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-display font-semibold mb-1">
                        {info.title}
                      </h3>
                      <p className="text-foreground font-medium mb-1">
                        {info.value}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="pt-8 border-t border-border"
              >
                <h3 className="font-display font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {["Twitter", "LinkedIn", "Instagram", "Facebook"].map(
                    (social) => (
                      <button
                        key={social}
                        className="px-4 py-2 rounded-lg border border-border bg-card text-sm hover:border-primary/30 transition-colors"
                      >
                        {social}
                      </button>
                    ),
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
