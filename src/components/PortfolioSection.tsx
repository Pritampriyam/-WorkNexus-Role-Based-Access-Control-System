import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: "Modern Portfolio Website",
      category: "Web Development",
      description:
        "Responsive student portfolio showcasing projects and skills",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "AI-Based Solutions",
      category: "Artificial Intelligence",
      description: "Machine learning models for real-world applications",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our Work Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Check out some of our recent projects and see the quality we deliver
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="rounded-xl border border-border bg-card overflow-hidden shadow-card hover:shadow-xl transition-all group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <span className="text-white text-xs font-semibold px-3 py-1 rounded-full bg-primary">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  View Live <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            View Complete Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
