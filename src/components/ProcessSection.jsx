// Process section showing how the workflow works with animated timeline
import { motion } from 'framer-motion';
import { Gift, CheckCircle2, Code, Rocket } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: 'Discovery Call',
      description: 'We understand your vision, goals, and technical requirements',
      icon: Gift,
    },
    {
      number: 2,
      title: 'Design & Plan',
      description: 'Present wireframes, architecture, and project timeline',
      icon: CheckCircle2,
    },
    {
      number: 3,
      title: 'Build & Develop',
      description: 'We develop your app with clean code and best practices',
      icon: Code,
    },
    {
      number: 4,
      title: 'Deploy & Support',
      description: 'Launch to production and provide ongoing support & maintenance',
      icon: Rocket,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative py-section px-4 sm:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
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
            How It Works
          </h2>
          <p className="text-text-muted text-lg">
            Four simple steps from concept to launch
          </p>
        </motion.div>

        {/* Steps Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 border-t-2 border-dashed border-border" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Step Number Circle */}
                  <div className="relative z-10 mb-6">
                    <div className="w-20 h-20 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center mx-auto">
                      <IconComponent size={32} className="text-accent" />
                    </div>
                  </div>

                  {/* Step Content */}
                  <h3 className="font-syne font-bold text-xl mb-2 text-text-primary">
                    {step.number}. {step.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
