// Home page - landing page with all hero sections
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SocialProofBar from '../components/SocialProofBar';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import PortfolioSection from '../components/PortfolioSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FounderSection from '../components/FounderSection';
import CTASection from '../components/CTASection';
import { useRef } from 'react';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <HeroSection />
      <SocialProofBar />
      <ServicesSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <FounderSection />
      <CTASection />
    </motion.main>
  );
}
