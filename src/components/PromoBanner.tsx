import { motion } from "framer-motion";
import { MessageCircle, Zap } from "lucide-react";

const PromoBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-green-600 to-green-500 text-white py-12"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Zap className="h-5 w-5" />
          <span className="font-semibold">LIMITED TIME OFFER</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          🔥 Limited Time COMBO Offer @ ₹159 Only
        </h2>
        <p className="text-lg mb-6 opacity-90">
          Get instant access within 30 minutes | 2000+ Active Students | 95%
          Success Rate
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://api.whatsapp.com/send/?phone=918962306037&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="h-5 w-5" />
            Order on WhatsApp
          </a>
          <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PromoBanner;
