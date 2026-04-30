// Reusable demo card component for portfolio showcase
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { config } from '../config';

export default function DemoCard({ demo, index }) {
  const handleWhatsApp = (e) => {
    e.preventDefault();
    const message = `Hi, I'm interested in learning more about the ${demo.name} project.`;
    window.open(`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <Link to={`/demo/${demo.id}`}>
        <div className="glass rounded-xl overflow-hidden h-full cursor-pointer hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 hover:scale-[1.02]">
          
          {/* Case Study Header */}
          <div className="relative h-40 bg-gradient-to-br from-accent/20 to-accent-2/20 flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <h4 className="font-syne text-sm font-bold text-accent/60 uppercase tracking-widest mb-2">
                Case Study
              </h4>
              <p className="text-text-muted text-sm">Learn how we built this</p>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6">
            {/* Tag */}
            <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mb-3">
              {demo.tag}
            </span>

            {/* Title */}
            <h3 className="font-syne font-bold text-xl mb-2 text-text-primary group-hover:text-accent transition-colors">
              {demo.name}
            </h3>

            {/* Description */}
            <p className="text-text-muted text-sm mb-4 leading-relaxed">
              {demo.description}
            </p>

            {/* CTA */}
            <div className="flex items-center justify-between pt-4 border-t border-border group-hover:border-accent/30 transition-colors">
              <span className="text-accent font-medium text-sm">
                View Case Study
              </span>

              <motion.div
                className="text-accent"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                <ArrowRight size={18} />
              </motion.div>
            </div>
          </div>

        </div>
      </Link>
    </motion.div>
  );
}