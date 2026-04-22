// Why Choose Us section with split layout and benefits list
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseUsSection() {
  const benefits = [
    'Fast 7-Day Delivery',
    'Mobile-First Design',
    'WhatsApp Integration Included',
    'Free Revisions Until You Love It',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative py-section px-4 sm:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Big Statement */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-syne text-5xl font-bold leading-tight text-text-primary">
              Your Clinic Deserves More Than a Basic Website.
            </h2>
            <p className="text-text-muted mt-6 text-lg leading-relaxed">
              We build websites that work as hard as you do. Every design decision is made with one
              goal: turning your website visitors into booked appointments.
            </p>
          </motion.div>

          {/* Right: Benefits List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit}
                variants={itemVariants}
                className="flex items-center gap-4 group"
              >
                <div className="flex-shrink-0 w-6 h-6">
                  <CheckCircle2 size={24} className="text-accent group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-lg text-text-primary font-medium group-hover:text-accent transition-colors">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
