// Hero section with big headline, animated underline, CTA buttons, and floating mockup
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const cycleTexts = [
    'MERN Stack Development',
    'Custom Android Apps',
    'Flutter Mobile Solutions',
  ];

  // Typewriter effect
  useEffect(() => {
    const currentText = cycleTexts[textIndex];
    const typingTimer = setTimeout(() => {
      if (charIndex < currentText.length) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        // Pause before moving to next text
        setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % cycleTexts.length);
          setCharIndex(0);
          setDisplayText('');
        }, 2000);
      }
    }, 50);

    return () => clearTimeout(typingTimer);
  }, [charIndex, textIndex]);

  // Floating particles animation
  const Particle = ({ delay, duration }) => (
    <motion.div
      className="absolute w-1 h-1 bg-accent rounded-full opacity-40"
      initial={{ x: 0, y: 0, opacity: 0 }}
      animate={{ x: Math.random() * 300 - 150, y: Math.random() * 300 - 150, opacity: [0, 0.6, 0] }}
      transition={{ duration, delay, repeat: Infinity }}
    />
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 sm:px-8">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-2/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <Particle key={i} delay={i * 0.3} duration={4 + i * 0.5} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Tagline */}
          <motion.p
            variants={childVariants}
            className="text-accent text-sm font-medium uppercase tracking-widest"
          >
            Welcome to GrowthLift Digital
          </motion.p>

          {/* Main Headline */}
          <motion.h1 variants={childVariants} className="font-syne text-5xl font-bold leading-tight">
            Building Web & Mobile Solutions That Drive{' '}
            <span className="animated-underline text-accent">Growth</span>.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={childVariants}
            className="text-lg text-text-muted max-w-lg leading-relaxed"
          >
            GrowthLift Digital specializes in building high-performance web and mobile applications for startups and small businesses. From React to Flutter, we deliver results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={childVariants} className="flex gap-4 pt-4 flex-wrap">
            <Link to="/portfolio">
              <button className="btn-primary pulse-glow flex items-center gap-2">
                See Our Work <ArrowRight size={18} />
              </button>
            </Link>
            <button className="btn-secondary">Get a Free Mockup</button>
          </motion.div>
        </motion.div>

        {/* Right: Mockup Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          {/* Outer Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-2/20 rounded-2xl blur-2xl -z-10" />

          {/* Browser Frame */}
          <div className="glass p-2 rounded-xl shadow-2xl max-w-sm w-full aspect-video flex flex-col">
            {/* Browser Header */}
            <div className="flex items-center gap-2 bg-surface-2 rounded-t-lg p-3 border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <p className="text-xs text-text-muted ml-2">yourwebsite.com</p>
            </div>

            {/* Content Area */}
            <div className="flex-1 bg-gradient-to-br from-surface via-surface-2 to-surface rounded-b-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-20 h-20 bg-accent/30 rounded-full blur-xl" />
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent-2/20 rounded-full blur-2xl" />
              </div>

              <motion.p
                key={textIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative z-10 font-syne text-xl font-bold text-accent text-center px-6 min-h-12"
              >
                {displayText}
                <span className="animate-pulse">_</span>
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
