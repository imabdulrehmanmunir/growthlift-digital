// Portfolio section showcasing 4 demo projects with cards
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { demos } from '../data/demos';
import DemoCard from './DemoCard';

export default function PortfolioSection() {
  return (
    <section className="relative py-section px-4 sm:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-2/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-16 flex-col md:flex-row gap-8"
        >
          <div>
            <h2 className="font-syne text-4xl font-bold mb-4 text-text-primary">
              Real Results for Real Clinics
            </h2>
            <p className="text-text-muted text-lg max-w-xl">
              See examples of websites we've built that are bringing patients through the door
            </p>
          </div>
          <Link to="/portfolio">
            <button className="btn-primary whitespace-nowrap pulse-glow flex items-center gap-2">
              View All Projects <ArrowRight size={18} />
            </button>
          </Link>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {demos.map((demo, index) => (
            <DemoCard key={demo.id} demo={demo} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
