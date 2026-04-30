// Large CTA section to drive conversions
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { config } from '../config';

export default function CTASection() {
  return (
    <section className="relative py-section px-4 sm:px-8 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(0, 229, 160, 0.05), rgba(26, 107, 255, 0.05))',
          }}
          animate={{
            background: [
              'linear-gradient(to right, rgba(0, 229, 160, 0.05), rgba(26, 107, 255, 0.05))',
              'linear-gradient(to right, rgba(26, 107, 255, 0.05), rgba(0, 229, 160, 0.05))',
              'linear-gradient(to right, rgba(0, 229, 160, 0.05), rgba(26, 107, 255, 0.05))',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="font-syne text-5xl font-bold mb-6 text-text-primary">
          Ready to Scale Your Business?
        </h2>

        <p className="text-text-muted text-xl mb-10 leading-relaxed">
          Get a free consultation on your web or mobile app project — no payment, no commitment. Let's discuss your vision.
        </p>

        <a
          href={`https://wa.me/${config.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-primary pulse-glow text-lg px-10 py-4 flex items-center gap-3 mx-auto">
            <MessageCircle size={24} />
            WhatsApp Us Now →
          </button>
        </a>
      </motion.div>
    </section>
  );
}
