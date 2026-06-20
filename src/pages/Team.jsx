// Team page showcasing the GrowthLift team
import { motion } from 'framer-motion';
import { Mail, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Abdul Rehman Munir',
      title: 'Founder & Lead Engineer',
      image: '/abdulrehmanmunir-founder-growthliftdigital.png',
      description: 'Abdul bridges the gap between high-end design and scalable technical architecture. With deep expertise spanning the MERN stack, custom WordPress development, and raw front-end engineering, he specializes in building digital assets optimized for speed, local SEO, and conversion. He strips away bloated code and generic templates to engineer bespoke, high-performance web solutions that directly impact the client\'s bottom line.',
      linkedin: 'https://www.linkedin.com/in/abdul-rehman-munir',
      email: 'imabdulrehmanmuneer@gmail.com',
    },
    {
      id: 2,
      name: 'Asad Riaz',
      title: 'Chief Technology Officer (CTO)',
      image: '/growthliftdigital-post-cto-asadriaz.png',
      description: 'Asad drives the artificial intelligence and automation division at GrowthLift Digital. Specializing in Generative AI, Agentic workflows, and Machine Learning, he builds intelligent systems that scale client operations and eliminate bottlenecks. From deploying autonomous AI agents using LangChain and RAG to engineering custom, zero-friction workflow automations with n8n, Asad ensures our clients aren\'t just adapting to the AI revolution—they are actively using it to dominate their markets.',
      linkedin: 'https://www.linkedin.com/in/asad-riaz-808ba3290/',
      email: 'malikasadriaz525@gmail.com',
    },
  ];

  return (
    <main className="min-h-screen pt-20 pb-16 sm:pt-24 sm:pb-20 overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-accent-2/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h1 className="font-syne text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-text-primary">
            Meet Our Team
          </h1>
          <p className="text-text-muted text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2">
            Visionary leaders and technical experts dedicated to transforming your digital presence and scaling your business through innovation and excellence.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass rounded-xl sm:rounded-2xl overflow-hidden h-full flex flex-col">
                {/* Image */}
                <div className="relative w-full h-56 sm:h-80 md:h-96 bg-gradient-to-br from-accent/10 to-accent/5 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 md:p-8 flex-grow flex flex-col">
                  {/* Title */}
                  <h2 className="font-syne font-bold text-lg sm:text-xl md:text-2xl mb-1 text-text-primary">
                    {member.name}
                  </h2>

                  {/* Role */}
                  <p className="text-accent font-semibold text-xs sm:text-sm mb-4 sm:mb-6">
                    {member.title}
                  </p>

                  {/* Description */}
                  <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 flex-grow">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 sm:pt-6 border-t border-border">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-white transition-all duration-300 flex-1"
                    >
                      <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm font-medium">LinkedIn</span>
                    </a>

                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-white transition-all duration-300 flex-1"
                    >
                      <Mail size={14} className="sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm font-medium">Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center"
        >
          <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-text-primary">
            Ready to Work With Us?
          </h2>
          <p className="text-text-muted text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Our team is ready to transform your vision into reality. Whether you need custom web development, AI automation, or strategic digital solutions, we're here to help.
          </p>
          <Link to="/contact">
            <button className="btn-primary pulse-glow inline-flex items-center gap-2 text-sm sm:text-base">
              Get Started Today <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
