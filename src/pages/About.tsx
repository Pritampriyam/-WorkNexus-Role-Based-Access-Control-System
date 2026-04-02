import { motion } from "framer-motion";
import { Users, Target, Zap, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      desc: "Connect talented professionals with opportunities that match their skills and aspirations.",
    },
    {
      icon: Users,
      title: "Our Community",
      desc: "Build a thriving ecosystem where students, professionals, and businesses grow together.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      desc: "Leverage AI and modern technology to create seamless hiring and freelance experiences.",
    },
    {
      icon: Heart,
      title: "Human Centric",
      desc: "Every feature is designed with our users' success and well-being in mind.",
    },
  ];

  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "10K+", label: "Jobs Posted" },
    { number: "500+", label: "Companies" },
    { number: "1K+", label: "Freelancers" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              About <span className="text-gradient-primary">workNexus</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're building the future of work by connecting talent with
              opportunity. workNexus is a comprehensive platform for students,
              professionals, and businesses to collaborate, learn, and grow
              together.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 py-12 border-y border-border"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
                  {stat.number}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-display font-bold mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-all shadow-card"
                >
                  <value.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-display font-semibold text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-card border border-border rounded-xl p-8 shadow-card"
          >
            <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                workNexus was founded with a simple vision: to democratize access
                to opportunities. We noticed a gap in the market where students
                and professionals struggled to find meaningful work, and
                businesses struggled to find the right talent.
              </p>
              <p>
                Starting as a small initiative, we've grown into a comprehensive
                platform that serves thousands of users across India. From job
                postings to freelance work, from college projects to research
                assistance, we're committed to supporting every stage of a
                career.
              </p>
              <p>
                Today, workNexus is more than just a marketplace. It's a
                community where innovation thrives, mentorship flourishes, and
                success stories are born every day. We're just getting started,
                and we invite you to be part of our journey.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
