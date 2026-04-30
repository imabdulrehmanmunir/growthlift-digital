// Home page - landing page with all hero sections
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
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
    <>
      <Helmet>
        <title>GrowthLift Digital | Web & Mobile Development Agency</title>
        <meta name="description" content="GrowthLift Digital is a software agency specializing in MERN stack web development, React.js, custom Android apps, and local SEO for small businesses." />
        <meta name="keywords" content="MERN stack development, React developers, Android app development, custom web design, SEO agency" />
        <meta property="og:title" content="GrowthLift Digital | Web & Mobile Development Agency" />
        <meta property="og:description" content="GrowthLift Digital is a software agency specializing in MERN stack web development, React.js, custom Android apps, and local SEO for small businesses." />
        <link rel="canonical" href="https://growthliftdigital.com/" />
      </Helmet>
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
    </>
  );
}
