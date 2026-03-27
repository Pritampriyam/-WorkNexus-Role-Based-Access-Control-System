import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Ready to Build Your
            <br />
            <span className="text-gradient-primary">Digital Empire?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Join thousands of freelancers, students, and businesses already thriving on our platform.
          </p>
          <button className="bg-gradient-primary text-primary-foreground font-semibold px-10 py-4 rounded-lg text-lg inline-flex items-center gap-2 hover:opacity-90 transition-opacity glow-primary">
            Start Now — It's Free
            <ArrowRight className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
