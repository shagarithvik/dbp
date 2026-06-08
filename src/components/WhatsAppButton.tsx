import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20your%20handcrafted%20products"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 transition-colors"
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30" />

      {/* Tooltip */}
      <span className="absolute right-16 whitespace-nowrap bg-white text-maroon-800 px-4 py-2 rounded-lg shadow-lg font-medium text-sm opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us on WhatsApp
      </span>
    </motion.a>
  );
}
