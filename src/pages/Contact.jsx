// Contact page with contact info and form
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Clock } from 'lucide-react';
import { config } from '../config';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    whatsapp: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send to WhatsApp
    const message = `Hi, I'd like to discuss a website for my clinic.\n\nName: ${formData.name}\nBusiness: ${formData.businessName}\nWhatsApp: ${formData.whatsapp}\n\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-32 px-4 sm:px-8 pb-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-syne text-5xl font-bold mb-4 text-text-primary">
            Let's Build Your Website
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Reach out to us and let's discuss how we can help your clinic get more patients online
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="font-syne text-2xl font-bold mb-6 text-text-primary">
                Get in Touch
              </h2>
            </motion.div>

            {/* WhatsApp Button */}
            <motion.a
              variants={itemVariants}
              href={`https://wa.me/${config.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <button className="w-full btn-primary pulse-glow py-4 px-8 flex items-center justify-center gap-3 text-lg">
                <MessageCircle size={24} />
                WhatsApp Us Directly
              </button>
            </motion.a>

            {/* Email */}
            <motion.a
              variants={itemVariants}
              href={`mailto:${config.email}`}
              className="block glass p-6 rounded-lg hover:border-accent/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <Mail size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-syne font-bold text-text-primary mb-1">
                    Email
                  </h3>
                  <p className="text-text-muted break-all">{config.email}</p>
                </div>
              </div>
            </motion.a>

            {/* What Happens Next */}
            <motion.div
              variants={itemVariants}
              className="glass p-6 rounded-lg border border-accent/20 bg-accent/5"
            >
              <div className="flex items-start gap-4">
                <Clock size={24} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-syne font-bold text-text-primary mb-3">
                    What Happens Next
                  </h3>
                  <ul className="space-y-2 text-text-muted text-sm">
                    <li>
                      <span className="text-accent">1.</span> Within 24 hours, we respond with
                      your free website mockup
                    </li>
                    <li>
                      <span className="text-accent">2.</span> You review the design and request
                      changes if needed
                    </li>
                    <li>
                      <span className="text-accent">3.</span> We discuss pricing and timeline
                    </li>
                    <li>
                      <span className="text-accent">4.</span> We build your website and get you
                      online
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Name Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-text-primary font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                placeholder="John Doe"
              />
            </motion.div>

            {/* Business Name Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-text-primary font-medium mb-2">
                Clinic/Business Name
              </label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                required
                className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                placeholder="SmilePro Dental Clinic"
              />
            </motion.div>

            {/* WhatsApp Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-text-primary font-medium mb-2">
                WhatsApp Number
              </label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                placeholder="+92 3XX XXXXXXX"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-text-primary font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                placeholder="Tell us a bit about your clinic and what you're looking for..."
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              variants={itemVariants}
              type="submit"
              className="w-full btn-primary pulse-glow py-4 px-8 text-lg font-bold"
            >
              Send via WhatsApp →
            </motion.button>

            <motion.p
              variants={itemVariants}
              className="text-text-muted text-xs text-center"
            >
              We'll respond within 24 hours with your free mockup
            </motion.p>
          </motion.form>
        </div>
      </div>
    </motion.main>
  );
}
