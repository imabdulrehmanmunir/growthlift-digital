// Testimonials section with 3 client testimonials
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Dr. Ayesha Khan',
      role: 'Dental Clinic Owner',
      content:
        'GrowthLift Digital transformed how patients find us online. Within 2 months, we saw a 40% increase in appointment bookings through the website.',
      rating: 5,
    },
    {
      name: 'Dr. Hassan Malik',
      role: 'Medical Clinic Director',
      content:
        'The WhatsApp integration is a game-changer. Patients love the instant response feature, and our response time has improved dramatically.',
      rating: 5,
    },
    {
      name: 'Dr. Farah Ahmed',
      role: 'Specialist Doctor',
      content:
        'Professional, quick delivery, and the SEO work they did got us ranking on the first page for local searches. Highly recommended!',
      rating: 5,
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
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent-2/5 rounded-full blur-3xl" />
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
            What Our Clients Say
          </h2>
          <p className="text-text-muted text-lg">
            Real feedback from real healthcare businesses
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group"
            >
              <div className="glass p-8 rounded-xl h-full relative overflow-hidden">
                {/* Stars */}
                <div className="flex gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-text-primary text-sm leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-syne font-bold text-text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-text-muted text-xs">
                    {testimonial.role}
                  </p>
                </div>

                {/* Gradient Border on Hover */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-accent-2 w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
