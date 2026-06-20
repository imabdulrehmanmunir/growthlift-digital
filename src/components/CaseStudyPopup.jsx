// Case Study Popup - Non-intrusive modal that appears after 5 seconds
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CaseStudyPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Popup */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md glass rounded-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close popup"
            >
              <X size={20} className="text-text-muted" />
            </button>

            {/* Content */}
            <div className="p-8">
              {/* Tag */}
              <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
                Latest Case Study
              </span>

              {/* Title */}
              <h3 className="font-syne font-bold text-2xl mb-3 text-text-primary">
                StoneCore Cap
              </h3>

              {/* Subtitle */}
              <p className="text-accent/70 text-sm font-medium mb-4">
                Corporate / Finance - Custom WordPress
              </p>

              {/* Description */}
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                A highly customized WordPress platform designed with pixel-perfect UI/UX and extensive custom architecture. Delivers bespoke design accuracy while maintaining optimal performance.
              </p>

              {/* CTA */}
              <Link
                to="/demo/2"
                onClick={handleClose}
                className="inline-block w-full text-center py-3 px-4 bg-gradient-to-r from-accent to-accent/80 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
              >
                View Full Case Study
              </Link>

              {/* Divider */}
              <div className="my-4 h-px bg-border" />

              {/* Footer Text */}
              <p className="text-text-muted/60 text-xs text-center">
                Interested in a similar project? Let's talk about your next big idea.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
