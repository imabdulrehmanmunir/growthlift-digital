// Navigation bar with responsive mobile menu and glassmorphism on scroll
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { config } from '../config';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleGetMockup = () => {
    const message = 'Hi, I\'d like to get a free mockup/demo of a project.';
    window.open(`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass'
            : 'bg-transparent'
        } py-4 px-4 sm:px-8`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-3 h-3 rounded-full bg-accent transition-all duration-300 group-hover:w-6 group-hover:shadow-lg group-hover:shadow-accent/50" />
            <span className="font-syne font-bold text-lg sm:text-xl hidden sm:inline text-text-primary">
              GrowthLift
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`transition-colors duration-300 font-medium text-sm ${
                  location.pathname === link.href
                    ? 'text-accent'
                    : 'text-text-primary hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <button
            onClick={handleGetMockup}
            className="hidden md:block btn-primary pulse-glow"
          >
            Get Free Mockup →
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-text-primary hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden pt-20"
          >
            <div className="flex flex-col items-center gap-8 p-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-xl font-syne transition-colors ${
                    location.pathname === link.href
                      ? 'text-accent'
                      : 'text-text-primary hover:text-accent'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={handleGetMockup}
                className="btn-primary mt-4"
              >
                Get Free Mockup →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
