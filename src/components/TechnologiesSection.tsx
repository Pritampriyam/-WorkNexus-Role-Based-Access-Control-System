import { motion } from "framer-motion";

const TechnologiesSection = () => {
  const technologies = [
    { name: "HTML5", color: "#E34F26" },
    { name: "CSS3", color: "#1572B6" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "React", color: "#61DAFB" },
    { name: "Tailwind", color: "#06B6D4" },
    { name: "Bootstrap", color: "#7952B3" },
    { name: "Python", color: "#3776AB" },
    { name: "Node.js", color: "#339933" },
    { name: "Java", color: "#007396" },
    { name: "Django", color: "#092E20" },
    { name: "Firebase", color: "#FFCA28" },
    { name: "PHP", color: "#777BB4" },
    { name: "MongoDB", color: "#47A248" },
    { name: "MySQL", color: "#4479A1" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "Redis", color: "#DC382D" },
    { name: "TensorFlow", color: "#FF6F00" },
    { name: "OpenCV", color: "#5C3EE8" },
    { name: "Git", color: "#F05032" },
    { name: "GitHub", color: "#181717" },
    { name: "Docker", color: "#2496ED" },
    { name: "AWS", color: "#FF9900" },
    { name: "Flutter", color: "#02569B" },
    { name: "Figma", color: "#F24E1E" },
  ];

  const additionalTools = [
    "Angular",
    "Vue.js",
    "Flask",
    "Laravel",
    "Express.js",
    "WordPress",
    "Three.js",
    "Chart.js",
    "Next.js",
    "Vite",
    "NPM",
    "REST API",
    "GraphQL",
    "TypeScript",
    "Machine Learning",
    "Deep Learning",
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Technologies We Master
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We work with the latest and most powerful technologies to deliver
            cutting-edge solutions
          </p>
        </motion.div>

        {/* Main Technologies */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="rounded-lg border border-border bg-card p-4 hover:border-primary/30 transition-all shadow-card hover:shadow-xl group flex flex-col items-center justify-center gap-3"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                style={{ backgroundColor: tech.color }}
              >
                {tech.name.charAt(0)}
              </div>
              <span className="text-sm font-semibold text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Additional Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg font-semibold mb-4">
            And many more frameworks & tools:
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {additionalTools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium hover:border-primary/30 transition-all"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
