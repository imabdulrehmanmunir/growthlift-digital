// Services section with 4 cards showing main offerings
import { motion } from 'framer-motion';
import { Code, Smartphone, Wind, TrendingUp } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      number: '01',
      title: 'MERN Stack Development',
      description: 'Full-stack web applications using MongoDB, Express, React, and Node.js. Scalable, performant solutions built for growth.',
      icon: Code,
    },
    {
      number: '02',
      title: 'Custom Android Apps',
      description: 'Native Android applications built with Java and Firebase integration. Real-time databases, secure admin dashboards, and seamless user experiences.',
      icon: Smartphone,
    },
    {
      number: '03',
      title: 'Flutter Development',
      description: 'Cross-platform mobile applications that work flawlessly on iOS and Android. Write once, deploy everywhere with beautiful UI.',
      icon: Wind,
    },
    {
      number: '04',
      title: 'SEO Strategy',
      description: 'Data-driven SEO strategies to boost your online visibility. We handle technical optimization, content strategy, and performance tracking.',
      icon: TrendingUp,
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
            Everything Your Business Needs to Scale
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            We offer end-to-end development services tailored for startups and growing businesses
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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
