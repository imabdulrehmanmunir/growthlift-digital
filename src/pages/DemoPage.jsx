import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { demos } from '../data/demos';
import { config } from '../config';

export default function DemoPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const demo = demos.find((d) => d.id === parseInt(id));

  if (!demo) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <p className="text-text-muted">Demo not found</p>
      </div>
    );
  }

  return (
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
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Desktop */}
          <div className="group relative">
            <div className="glass rounded-xl overflow-hidden p-2">
              <div className="bg-black rounded-lg overflow-hidden border border-border">

                {/* Browser Top */}
                <div className="flex items-center gap-2 bg-surface-2 px-4 py-3 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <p className="text-xs text-text-muted ml-2">
                    {demo.name.toLowerCase().replace(/\s+/g, '')}.com
                  </p>
                </div>

                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={demo.imageHorizontal}
                    alt="Desktop View"
                    className="w-full h-full object-fit transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/30"></div>
                </div>

              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="group flex items-center justify-center">
            <div className="glass rounded-3xl overflow-hidden p-3 max-w-sm w-full">
              <div className="bg-black rounded-2xl overflow-hidden border border-border">

                {/* Status Bar */}
                <div className="bg-surface-2 px-4 py-2 border-b border-border text-center text-xs text-text-muted">
                  9:41
                </div>

                {/* Image */}
                <div className="relative aspect-[9/19] overflow-hidden">
                  <img
                    src={demo.imageVertical}
                    alt="Mobile View"
                    className="w-full h-full object-fit transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/30"></div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Features */}
        <div className="glass rounded-xl p-12 mb-16">
          <h2 className="font-syne text-2xl font-bold mb-8 text-text-primary">
            What's Included
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Fully Responsive Design',
              'Mobile Optimized',
              'Fast Loading Times',
              'SEO Optimized',
              'WhatsApp Integration',
              'Appointment Booking',
              'Google Analytics Setup',
              'Contact Forms',
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
            This Could Be YOUR Website
          </h2>

          <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
            Get a free mockup of your clinic's website designed specifically for your needs
          </p>

          <a
            href={`https://wa.me/${config.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn-primary pulse-glow text-lg px-10 py-4 flex items-center gap-3 mx-auto">
              <MessageCircle size={24} />
              Get Your Free Mockup →
            </button>
          </a>
        </div>

      </div>
    </motion.main>
  );
}