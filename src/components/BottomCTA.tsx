import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const BottomCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="fixed bottom-6 right-6 z-40"
    >
      <a
        href="https://api.whatsapp.com/send/?phone=918962306037&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </motion.div>
  );
};

export default BottomCTA;
