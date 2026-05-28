// Reusable demo card component for portfolio showcase
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, MessageCircle } from 'lucide-react';
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
      <div className="glass rounded-xl overflow-hidden h-full flex flex-col">
        
        {/* Project Image */}
        {demo.image && (
          <a href={demo.url}>
            <div className="relative w-full bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center p-4">
            <img 
              src={demo.image} 
              
              alt={demo.name}
              className="max-w-full max-h-96 object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          </a>
        )}

        {/* Card Content */}
        <div className="p-6 flex-grow flex flex-col">
          {/* Tag */}
          <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mb-3 w-fit">
            {demo.tag}
          </span>

          {/* Title */}
          <h3 className="font-syne font-bold text-xl mb-2 text-text-primary group-hover:text-accent transition-colors">
            {demo.name}
          </h3>

          {/* Type */}
          <p className="text-accent/70 text-sm font-medium mb-3">
            {demo.type}
          </p>

          {/* Description */}
          <p className="text-text-muted text-sm mb-6 leading-relaxed flex-grow">
            {demo.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-3 pt-4 border-t border-border group-hover:border-accent/30 transition-colors">
            <Link 
              to={`/demo/${demo.id}`}
              className="flex-1 flex items-center justify-between text-accent font-medium text-sm hover:text-accent/80 transition-colors"
            >
              <span>View Case Study</span>
              <motion.div
                className="text-accent"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                <ArrowRight size={16} />
              </motion.div>
            </Link>

            {demo.url && (
              <a 
                href={demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-accent hover:text-accent/80 transition-colors p-2 hover:bg-accent/10 rounded-lg"
                title="Visit live project"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
}