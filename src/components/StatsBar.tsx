import { motion } from "framer-motion";
import { Edit } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "1000+", label: "Happy Clients" },
  { value: "24/7", label: "Support" },
  { value: "100%", label: "Satisfaction" },
];

const StatsBar = () => {
  const { isAdmin } = useAuth();

  const handleEditStat = (stat: any) => {
    alert(`Edit stat: ${stat.label} (edit modal/form to be implemented)`);
  };

  return (
    <section className="py-16 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {isAdmin && (
                <button
                  onClick={() => handleEditStat(stat)}
                  className="absolute top-0 right-0 p-1.5 rounded-md bg-blue-500 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Edit Stat"
                >
                  <Edit className="h-3 w-3" />
                </button>
              )}
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
