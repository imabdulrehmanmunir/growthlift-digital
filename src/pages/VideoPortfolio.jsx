// Video Editing Portfolio - Top 1% Video Editor Showcase
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { MessageCircle, ExternalLink } from 'lucide-react';
import { config } from '../config';
import VideoModal from '../components/VideoModal';

export default function VideoPortfolio() {
  const [activeModal, setActiveModal] = useState(null);

  const portfolioVideos = [
    {
      id: 1,
      title: 'GTA VI vs RDR2: Graphics Showdown',
      category: 'Gaming Comparison',
      previewVideo: '/demo-video-1.mp4',
      fullLink: 'https://youtu.be/vs9XlxauXlY',
      thumbnail: '/video-thumb-1.jpg',
      duration: '9:00',
      format: 'landscape',
      description: 'Epic side-by-side comparison of GTA VI and Red Dead Redemption 2 graphics. Automated analysis showcasing lighting, textures, and visual details that make each game unique.',
    },
    {
      id: 2,
      title: 'Bontoc Tribe: Rich History & Culture',
      category: 'Documentary',
      previewVideo: '/demo-video-2.mp4',
      fullLink: 'https://youtu.be/dIAQBXW4rIM',
      thumbnail: '/video-thumb-2.jpg',
      duration: '1:45',
      format: 'landscape',
      description: 'Beautifully edited documentary exploring the fascinating history and cultural heritage of the Bontoc tribe. Edited in Adobe Premiere Pro with rich color grading.',
    },
    {
      id: 3,
      title: 'Quick Tips: Educational Series',
      category: 'Educational',
      previewVideo: '/demo-video-3.mp4',
      fullLink: 'https://youtube.com/shorts/Y8Jv60NvP3Q',
      thumbnail: '/video-thumb-3.jpg',
      duration: '0:45',
      format: 'vertical',
      description: 'Snappy educational vertical video perfect for Instagram Reels, TikTok, and YouTube Shorts. Packed with useful information and engaging transitions.',
    },
    {
      id: 4,
      title: 'GTA V vs GTA VI: Which Reigns?',
      category: 'Gaming',
      previewVideo: '/demo-video-4.mp4',
      fullLink: 'https://youtube.com/shorts/wsfCRSaPbg0',
      thumbnail: '/video-thumb-4.jpg',
      duration: '1:30',
      format: 'vertical',
      description: 'Fast-paced vertical video comparing GTA V and GTA VI. Perfect for YouTube Shorts with dynamic cuts and trending audio.',
    },
  ];

  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Helmet>
        <title>Professional Video Editing | {config.founder.name} | GrowthLift Digital</title>
        <meta name="description" content={`Top 1% professional video editing services by ${config.founder.name}. Cinematic cuts, color grading, motion graphics, and storytelling for marketing, reels, and brand content.`} />
        <meta name="keywords" content="professional video editing, video production, cinematic editing, color grading, motion graphics, social media videos, reel editing, YouTube editing" />
        <link rel="canonical" href="https://growthliftdigital.com/video-editing" />
      </Helmet>

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen pt-24 sm:pt-32 pb-12 sm:pb-20"
      >
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 md:px-8 mb-16 sm:mb-24">
          <div className="max-w-6xl mx-auto">
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-accent-2/5 rounded-full blur-3xl" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Hero Text */}
              <motion.div
                variants={heroVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4 sm:space-y-6"
              >
                <div>
                  <h1 className="font-syne text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-2 sm:mb-4 leading-tight">
                    Top 1% Video Editing
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-accent font-semibold">
                    by {config.founder.name}
                  </p>
                </div>

                <p className="text-text-muted text-sm sm:text-base md:text-lg leading-relaxed">
                  Cinematic storytelling meets technical excellence. I transform raw footage into captivating narratives that engage, inspire, and convert. From brand documentaries to viral social media content, every frame tells your story.
                </p>

                <ul className="space-y-2 sm:space-y-3 text-text-muted text-sm sm:text-base">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-1 sm:mt-2 flex-shrink-0" />
                    <span>Cinematic color grading & color correction</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-1 sm:mt-2 flex-shrink-0" />
                    <span>Motion graphics & animated transitions</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-1 sm:mt-2 flex-shrink-0" />
                    <span>Sound design & audio mixing</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-1 sm:mt-2 flex-shrink-0" />
                    <span>Social media optimization (Reels, TikTok, YouTube)</span>
                  </li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
                  <a
                    href={`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(`Hi! I'm interested in your video editing services.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary pulse-glow text-lg px-8 py-4 inline-flex items-center justify-center gap-3"
                  >
                    <MessageCircle size={20} />
                    Get a Quote
                  </a>
                  <button
                    className="px-8 py-4 bg-accent/10 hover:bg-accent/20 text-accent font-semibold rounded-lg transition-all duration-300 border border-accent/30"
                  >
                    View Reel
                  </button>
                </div>
              </motion.div>

              {/* Hero Profile Picture */}
              <motion.div
                variants={heroVariants}
                initial="hidden"
                animate="visible"
                className="flex justify-center"
              >
                <div className="relative">
                  {/* Decorative Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-2/20 rounded-2xl blur-xl" />

                  {/* Profile Image */}
                  <div className="relative rounded-2xl overflow-hidden border-2 border-accent/30 p-1 bg-gradient-to-br from-accent/10 to-accent-2/10 w-full max-w-sm">
                    <img
                      src="/abdulrehman-munir-growthlift-digital.png"
                      alt={config.founder.name}
                      className="w-full rounded-xl object-cover aspect-square"
                    />
                    {/* Overlay Badge */}
                    <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md rounded-lg px-4 py-2 border border-accent/30">
                      <p className="text-accent font-semibold text-sm">🎬 Professional Video Editor</p>
                      <p className="text-white text-xs opacity-80">{config.founder.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Video Gallery Section */}
        <section className="px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-syne text-4xl sm:text-5xl font-bold text-text-primary mb-4">
                Featured Portfolio
              </h2>
              <p className="text-text-muted text-lg max-w-2xl mx-auto">
                Hover to preview • Click "Watch Full" for the complete experience
              </p>
            </motion.div>

            {/* Video Grid - Responsive Layout */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {portfolioVideos.map((video, index) => {
                const isVertical = video.format === 'vertical';

                return (
                  <motion.div
                    key={video.id}
                    variants={itemVariants}
                    className={`group relative rounded-2xl overflow-hidden glass hover:border-accent/50 transition-all duration-300 ${
                      isVertical ? 'md:col-span-1 flex justify-center items-center' : 'md:col-span-1'
                    }`}
                  >
                    {/* Video Container - Adaptive sizing */}
                    <div
                      className={`relative bg-gradient-to-br from-accent/20 to-accent-2/10 overflow-hidden group flex items-center justify-center w-full ${
                        isVertical
                          ? 'aspect-video md:max-w-sm md:aspect-auto md:h-[600px]'
                          : 'aspect-video'
                      }`}
                    >
                      {/* Video Preview - AutoPlay */}
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className={`transition-transform duration-500 group-hover:scale-[1.02] ${
                          isVertical
                            ? 'h-full w-full object-contain'
                            : 'w-full h-full object-cover'
                        }`}
                        src={video.previewVideo}
                        poster={video.thumbnail}
                      />

                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                      {/* Content Overlay - Bottom Section */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 bg-gradient-to-t from-black/95 via-black/60 to-transparent z-10">
                        <div className="space-y-3">
                          {/* Category Tag */}
                          <div>
                            <span className="inline-block text-xs font-semibold text-accent bg-accent/30 px-3 py-1 rounded-full mb-2">
                              {video.category}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="font-syne font-bold text-lg sm:text-xl text-white leading-tight">
                            {video.title}
                          </h3>

                          {/* Description - Only on desktop, hidden on mobile to save space */}
                          <p className="text-white/80 text-xs sm:text-sm leading-relaxed hidden sm:block line-clamp-2">
                            {video.description}
                          </p>

                          {/* Duration & Button */}
                          <div className="flex items-center justify-between pt-3 border-t border-white/20">
                            <span className="text-accent text-xs sm:text-sm font-semibold">
                              ⏱ {video.duration}
                            </span>

                            {/* Watch Full Button */}
                            <button
                              onClick={() => setActiveModal(video)}
                              className="px-3 sm:px-4 py-2 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-300 text-xs sm:text-sm inline-flex items-center gap-2 shadow-lg hover:shadow-accent/30"
                            >
                              <ExternalLink size={14} className="sm:hidden" />
                              <ExternalLink size={16} className="hidden sm:block" />
                              <span className="hidden sm:inline">Watch Full</span>
                              <span className="sm:hidden">Watch</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Skills & Process Section */}
        <section className="px-4 sm:px-8 mt-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-12"
            >
              <h2 className="font-syne text-3xl font-bold text-text-primary mb-12 text-center">
                My Editing Toolkit & Expertise
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-syne font-bold text-xl text-accent mb-4">
                    ✂️ Editing & Effects
                  </h3>
                  <ul className="space-y-2 text-text-muted">
                    <li>• Fast-paced cinematic cuts & transitions</li>
                    <li>• Professional color grading</li>
                    <li>• Motion graphics & animations</li>
                    <li>• VFX & visual effects</li>
                    <li>• Dynamic text & typography</li>
                    <li>• Speed ramping & slow-motion</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-syne font-bold text-xl text-accent mb-4">
                    🎵 Audio & Music
                  </h3>
                  <ul className="space-y-2 text-text-muted">
                    <li>• Sound design & Foley</li>
                    <li>• Audio mixing & mastering</li>
                    <li>• Royalty-free music selection</li>
                    <li>• Voice-over integration</li>
                    <li>• Dialogue editing</li>
                    <li>• Noise reduction & cleanup</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="font-syne font-bold text-xl text-accent mb-4">
                    📱 Social Media Optimization
                  </h3>
                  <ul className="space-y-2 text-text-muted">
                    <li>• Instagram Reels (9:16)</li>
                    <li>• TikTok & YouTube Shorts</li>
                    <li>• Facebook video ads</li>
                    <li>• LinkedIn native videos</li>
                    <li>• Aspect ratio optimization</li>
                    <li>• Trending audio integration</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-syne font-bold text-xl text-accent mb-4">
                    🎬 Project Types
                  </h3>
                  <ul className="space-y-2 text-text-muted">
                    <li>• Brand & corporate videos</li>
                    <li>• Product demonstrations</li>
                    <li>• Testimonials & case studies</li>
                    <li>• Event coverage & highlights</li>
                    <li>• Tutorial & educational content</li>
                    <li>• Music videos & creative projects</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-8 mt-24 mb-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-12 text-center"
            >
              <h2 className="font-syne text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                Ready to Elevate Your Content?
              </h2>
              <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create something exceptional together. Get a free consultation on WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(`Hi! I'd like to discuss a video editing project with you.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary pulse-glow text-lg px-10 py-4 inline-flex items-center justify-center gap-3"
                >
                  <MessageCircle size={24} />
                  Start Your Project
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.main>

      {/* Video Modal */}
      <AnimatePresence>
        {activeModal && (
          <VideoModal
            video={activeModal}
            onClose={() => setActiveModal(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
