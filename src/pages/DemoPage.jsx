import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { demos } from '../data/demos';
import { config } from '../config';

export default function DemoPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  // Added radix 10 and a fallback for safety
  const demo = demos.find((d) => d.id === parseInt(id || '0', 10));

  if (!demo) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <p className="text-text-muted">Demo not found</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{demo.name} - Case Study | GrowthLift Digital</title>
        <meta name="description" content={`${demo.caseStudy?.problem || demo.description} Built with ${demo.tag}.`} />
        <meta name="keywords" content={`${demo.name}, ${demo.tag}, case study, web development, mobile app`} />
        <link rel="canonical" href={`https://growthliftdigital.com/demo/${demo.id}`} />
      </Helmet>
      
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen pt-32 px-4 sm:px-8 pb-20"
      >
        <div className="max-w-6xl mx-auto">

          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-accent hover:text-accent/80 mb-12 transition-colors"
          >
            <ArrowLeft size={20} />
            Back
          </button>

          {/* Header */}
          <div className="mb-16 text-center">
            <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
              {demo.tag}
            </span>
            <h1 className="font-syne text-5xl font-bold mb-4 text-text-primary">
              {demo.name}
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              {demo.description}
            </p>
          </div>

          {/* Mockups */}
          <div className="mb-20">
            <div className="glass rounded-xl p-12 text-center">
              <div className="max-w-2xl mx-auto">
                <h2 className="font-syne text-3xl font-bold mb-4 text-text-primary">
                  View Full Project Details
                </h2>
                <p className="text-text-muted text-lg mb-8 leading-relaxed">
                  Want to see the complete mockups, live demo, or discuss similar solutions for your project? Get in touch with us on WhatsApp for a personalized walkthrough.
                </p>
                {/* Fixed: Removed button from inside anchor tag */}
                <a
                  href={`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(`Hi, I'd like to see the full mockup and details of the ${demo.name} project.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary pulse-glow text-lg px-10 py-4 inline-flex items-center justify-center gap-3 mx-auto"
                >
                  <MessageCircle size={24} />
                  Get Full Demo on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Case Study Content */}
          <div className="glass rounded-xl p-12 mb-16">
            <h2 className="font-syne text-3xl font-bold mb-8 text-text-primary">
              The Challenge
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              {demo.caseStudy?.problem || demo.description}
            </p>

            <h2 className="font-syne text-3xl font-bold mb-8 text-text-primary">
              Our Solution
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">
              {demo.caseStudy?.solution || 'A comprehensive, results-driven approach to delivering exceptional digital solutions.'}
            </p>
          </div>

          {/* Technology Stack */}
          <div className="glass rounded-xl p-12 mb-16">
            <h2 className="font-syne text-2xl font-bold mb-8 text-text-primary">
              Technology & Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Responsive Design',
                'High Performance',
                'Security Best Practices',
                'SEO Optimized',
                'Scalable Architecture',
                'Real-time Data Sync',
                'Analytics Integration',
                'User-Centric UX',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <p className="text-text-primary">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="glass rounded-xl p-12 text-center">
            <h2 className="font-syne text-3xl font-bold mb-4 text-text-primary">
              Let's Build Your Next Project
            </h2>

            <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
              Ready to turn your idea into a high-performing web or mobile application? Let's discuss how we can help your business scale.
            </p>

            {/* Fixed: Removed button from inside anchor tag */}
            <a
              href={`https://wa.me/${config.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary pulse-glow text-lg px-10 py-4 inline-flex items-center justify-center gap-3 mx-auto"
            >
              <MessageCircle size={24} />
              Start Your Project →
            </a>
          </div>

        </div>
      </motion.main>
    </>
  );
}