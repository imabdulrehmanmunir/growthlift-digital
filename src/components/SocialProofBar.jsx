// Social proof bar with scrolling marquee of client types
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function SocialProofBar() {
  const items = [
    'Dental Clinics',
    'Medical Practices',
    'Specialist Doctors',
    'Healthcare Brands',
    'Local Businesses',
    'International Clients',
  ];

  // Create a duplicated array for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <section className="relative py-16 px-4 overflow-hidden border-y border-border bg-gradient-to-r from-primary via-surface-2 to-primary">
      {/* Scrolling Marquee */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: [0, -1920] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {duplicatedItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 text-nowrap">
              <p className="font-syne font-bold text-text-primary text-lg">
                {item}
              </p>
              <Star size={16} className="text-accent fill-accent" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
