import { motion } from "framer-motion";
import {
  CheckCircle,
  Clock,
  TrendingUp,
  Users,
  Award,
  BookOpen,
  Zap,
  Shield,
  Edit,
  Trash2,
  Plus,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const PlacementBanner = () => {
  const { isAdmin } = useAuth();

  const handleEditBanner = () => {
    alert("Edit placement banner (modal/form to be implemented)");
  };

  const handleEditHighlight = (highlight: string) => {
    alert(`Edit highlight: "${highlight}" (modal/form to be implemented)`);
  };

  const handleDeleteHighlight = (highlight: string) => {
    if (confirm(`Delete highlight: "${highlight}"?`)) {
      alert(`Highlight would be deleted (feature needs backend)`);
    }
  };

  const highlights = [
    "500+ Students Placed in Top Companies",
    "Real Interview Questions from Recent Drives",
    "95% Success Rate - Join TechKalaA Premium",
    "Instant Access Within 30 Minutes",
    "Limited Time COMBO Offer @ ₹159 Only",
    "Capgemini & Infosys Materials Available Now",
    "2000+ Active Students Preparing Daily",
    "100% Authentic & Updated Materials",
    "Top Quality Materials - Your Success Partner",
    "Boost Your Placement Chances by 10X",
    "Used by Students from IIT, NIT & Top Colleges",
    "Highly Recommended by Placed Students",
    "24/7 Support Available",
    "Daily Updated with Latest Questions",
    "Premium Quality at Affordable Price",
    "Join 2000+ Happy Students Today",
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-600 via-green-500 to-emerald-600 text-white overflow-hidden relative">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {isAdmin && (
          <button
            onClick={handleEditBanner}
            className="absolute top-4 right-4 p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors z-50"
            title="Edit Banner"
          >
            <Edit className="h-4 w-4" />
          </button>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Premium Placement Materials @ ₹159
          </h2>
          <p className="text-xl md:text-2xl font-semibold mb-2">
            🎯 Get Placed in Top Companies - TCS, Infosys, Capgemini, Cognizant
          </p>
        </motion.div>

        {/* Scrolling Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-5xl mx-auto">
          {highlights.map((highlight, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex items-start gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all relative group"
            >
              <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <span className="text-sm font-medium flex-1">{highlight}</span>
              {isAdmin && (
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => handleEditHighlight(highlight)}
                    className="p-1 rounded bg-blue-500 hover:bg-blue-600"
                    title="Edit"
                  >
                    <Edit className="h-3 w-3" />
                  </button>
                  <button
                    onClick={() => handleDeleteHighlight(highlight)}
                    className="p-1 rounded bg-red-500 hover:bg-red-600"
                    title="Delete"
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="https://api.whatsapp.com/send/?phone=918962306037&text=I want placement materials&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-green-600 font-bold px-10 py-5 rounded-full text-lg hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 transform"
          >
            <Zap className="h-6 w-6" />
            Get Instant Access @ ₹159 Only
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacementBanner;
