// Services section with 3 cards showing main offerings
import { motion } from 'framer-motion';
import { Code, Search, MessageSquare } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      number: '01',
      title: 'Custom Website Design',
      description: 'Beautiful, fast, and conversion-focused websites built specifically for healthcare businesses.',
      icon: Code,
    },
    {
      number: '02',
      title: 'SEO & Google Visibility',
      description: 'Get found by patients searching for your services in your area. Local SEO expertise included.',
      icon: Search,
    },
    {
      number: '03',
      title: 'WhatsApp & Appointment Integration',
      description: 'One-click WhatsApp chat and integrated appointment booking that converts visitors into bookings.',
      icon: MessageSquare,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative py-section px-4 sm:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-accent-2/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-syne text-4xl font-bold mb-4 text-text-primary">
            Everything Your Clinic Needs Online
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            We handle design, SEO, integrations, and everything in between
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.number}
                variants={itemVariants}
                className="group relative"
              >
                {/* Card Background Number */}
                <div className="absolute -top-8 -left-4 text-6xl font-syne font-bold text-accent/10 group-hover:text-accent/20 transition-colors pointer-events-none">
                  {service.number}
                </div>

                {/* Card */}
                <div className="glass p-8 rounded-2xl h-full relative overflow-hidden group hover:border-accent/50 glow-on-hover transition-all duration-300">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <IconComponent size={24} className="text-accent" />
                  </div>

                  {/* Title */}
                  <h3 className="font-syne text-xl font-bold mb-3 text-text-primary">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-muted text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Effect Border */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-accent-2 w-0 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
