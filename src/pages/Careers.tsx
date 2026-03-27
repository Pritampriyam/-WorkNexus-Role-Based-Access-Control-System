import { motion } from "framer-motion";
import { Briefcase, MapPin, Users, Award, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Careers = () => {
  const openings = [
    {
      title: "Senior Product Manager",
      dept: "Product",
      location: "Bangalore",
      type: "Full-time",
      exp: "5+ years",
    },
    {
      title: "Full Stack Engineer",
      dept: "Engineering",
      location: "Remote",
      type: "Full-time",
      exp: "3+ years",
    },
    {
      title: "ML Engineer",
      dept: "AI/ML",
      location: "Bangalore",
      type: "Full-time",
      exp: "4+ years",
    },
    {
      title: "UX/UI Designer",
      dept: "Design",
      location: "Delhi",
      type: "Full-time",
      exp: "2+ years",
    },
    {
      title: "Marketing Manager",
      dept: "Marketing",
      location: "Mumbai",
      type: "Full-time",
      exp: "3+ years",
    },
    {
      title: "DevOps Engineer",
      dept: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      exp: "3+ years",
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: "Competitive Salary",
      desc: "Market-competitive compensation packages",
    },
    {
      icon: Users,
      title: "Team Culture",
      desc: "Work with passionate and talented individuals",
    },
    {
      icon: Briefcase,
      title: "Growth Opportunities",
      desc: "Clear career progression paths",
    },
    {
      icon: MapPin,
      title: "Flexible Work",
      desc: "Remote and flexible working options",
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
              Join Our <span className="text-gradient-primary">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Be part of a mission to revolutionize how people find jobs and
              collaborate. We're looking for talented individuals who are
              passionate about making a difference.
            </p>
          </motion.div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <benefit.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-8">
              Open Positions
            </h2>
            <div className="space-y-4">
              {openings.map((job, i) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-lg border border-border bg-card p-6 hover:border-primary/30 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" /> {job.dept}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" /> {job.location}
                        </span>
                        <span>{job.type}</span>
                        <span>{job.exp} experience</span>
                      </div>
                    </div>
                    <button className="bg-gradient-primary text-primary-foreground font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 whitespace-nowrap">
                      Apply <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-card border border-border rounded-xl p-12"
          >
            <h2 className="text-3xl font-display font-bold mb-4">
              Don't see your role?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume
              and let us know what you're passionate about.
            </p>
            <button className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Send Your Resume
            </button>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
