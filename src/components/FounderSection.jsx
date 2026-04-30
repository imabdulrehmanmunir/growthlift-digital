// Founder section showcasing the founder/owner information
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

export default function FounderSection() {
  const founder = {
    name: 'Abdul Rehman',
    email: 'imabdulrehmanmuneer@gmail.com',
    location: 'Lahore, Pakistan',
    title: 'Founder & CEO',
    image: 'public/founder.png',
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Meet The Founder
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col items-center justify-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8 relative"
          >
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-accent to-accent/70 p-1 shadow-lg">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src="public/founder.png"
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center max-w-2xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {founder.name}
            </h3>
            <p className="text-lg text-accent font-semibold mb-4">
              {founder.title}
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-center text-gray-600 gap-2">
                <Mail size={18} className="text-accent" />
                <a
                  href={`mailto:${founder.email}`}
                  className="hover:text-accent transition-colors underline"
                >
                  {founder.email}
                </a>
              </div>

              <div className="flex items-center justify-center text-gray-600 gap-2">
                <MapPin size={18} className="text-accent" />
                <span>{founder.location}</span>
              </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Passionate about empowering startups and businesses through innovative web and mobile solutions. With expertise in MERN Stack, Android development, and Flutter, I help entrepreneurs and companies build scalable, high-performance digital products that drive growth.
            </p>

            <div className="flex justify-center gap-4">
              <motion.a
                href={`mailto:${founder.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
