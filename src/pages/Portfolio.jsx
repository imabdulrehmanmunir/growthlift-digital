// Portfolio page showing all demo projects with filter capability
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { demos } from '../data/demos';
import DemoCard from '../components/DemoCard';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterOptions = ['All', 'Dental', 'Medical', 'Specialist'];

  const filteredDemos =
    activeFilter === 'All'
      ? demos
      : demos.filter((demo) =>
          demo.tag.toLowerCase().includes(activeFilter.toLowerCase())
        );

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-32 px-4 sm:px-8 pb-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="font-syne text-5xl font-bold mb-4 text-text-primary">
            Our Portfolio
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Websites we've built for healthcare businesses that are bringing in more patients
          </p>
        </div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-4 justify-center mb-16 flex-wrap"
        >
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-accent text-primary'
                  : 'bg-surface border border-border text-text-primary hover:border-accent/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredDemos.map((demo, index) => (
              <DemoCard key={demo.id} demo={demo} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.main>
  );
}
