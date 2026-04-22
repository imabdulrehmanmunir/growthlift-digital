// Floating WhatsApp button visible on all pages
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { config } from '../config';

export default function FloatingWhatsApp() {
  const whatsappLink = `https://wa.me/${config.whatsapp.replace(/\D/g, '')}?text=Hi%20GrowthLift%20Digital%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <MessageCircle size={24} />
    </motion.a>
  );
}
