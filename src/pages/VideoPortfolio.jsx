// Video Editing Portfolio - Top 1% Video Editor Showcase
// Mobile-optimized version — logic unchanged

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
      description:
        'Epic side-by-side comparison of GTA VI and Red Dead Redemption 2 graphics. Automated analysis showcasing lighting, textures, and visual details that make each game unique.',
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
      description:
        'Beautifully edited documentary exploring the fascinating history and cultural heritage of the Bontoc tribe. Edited in Adobe Premiere Pro with rich color grading.',
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
      description:
        'Snappy educational vertical video perfect for Instagram Reels, TikTok, and YouTube Shorts. Packed with useful information and engaging transitions.',
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
      description:
        'Fast-paced vertical video comparing GTA V and GTA VI. Perfect for YouTube Shorts with dynamic cuts and trending audio.',
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
        <title>
          Professional Video Editing | {config.founder.name} | GrowthLift Digital
        </title>
        <meta
          name="description"
          content={`Top 1% professional video editing services by ${config.founder.name}. Cinematic cuts, color grading, motion graphics, and storytelling for marketing, reels, and brand content.`}
        />
        <meta
          name="keywords"
          content="professional video editing, video production, cinematic editing, color grading, motion graphics, social media videos, reel editing, YouTube editing"
        />
        <link rel="canonical" href="https://growthliftdigital.com/video-editing" />
      </Helmet>

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen pt-20 sm:pt-32 pb-12 sm:pb-20"
      >
        {/* ── Hero Section ── */}
        <section className="relative px-4 sm:px-6 md:px-8 mb-12 sm:mb-24">
          <div className="max-w-6xl mx-auto">
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute top-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-1/3 w-56 h-56 sm:w-80 sm:h-80 bg-accent-2/5 rounded-full blur-3xl" />
            </div>

            {/* Stack vertically on mobile, side-by-side on md+ */}
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 sm:gap-12 items-center">

              {/* Profile Image — shown FIRST on mobile for visual hook */}
              <motion.div
                variants={heroVariants}
                initial="hidden"
                animate="visible"
                className="flex justify-center order-first md:order-last w-full"
              >
                <div className="relative w-full max-w-[260px] sm:max-w-xs">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-2/20 rounded-2xl blur-xl" />
                  <div className="relative rounded-2xl overflow-hidden border-2 border-accent/30 p-1 bg-gradient-to-br from-accent/10 to-accent-2/10">
                    <img
                      src="/abdulrehman-munir-growthlift-digital.png"
                      alt={config.founder.name}
                      className="w-full rounded-xl object-cover aspect-square"
                    />
                    <div className="absolute bottom-3 left-3 right-3 bg-black/50 backdrop-blur-md rounded-lg px-3 py-2 border border-accent/30">
                      <p className="text-accent font-semibold text-xs sm:text-sm">
                        🎬 Professional Video Editor
                      </p>
                      <p className="text-white text-[11px] sm:text-xs opacity-80">
                        {config.founder.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Hero Text */}
              <motion.div
                variants={heroVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4 sm:space-y-6 order-last md:order-first w-full"
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
                  Cinematic storytelling meets technical excellence. I transform raw footage into
                  captivating narratives that engage, inspire, and convert. From brand
                  documentaries to viral social media content, every frame tells your story.
                </p>

                {/* Feature list — tighter on mobile */}
                <ul className="space-y-2 text-text-muted text-sm sm:text-base">
                  {[
                    'Cinematic color grading & color correction',
                    'Motion graphics & animated transitions',
                    'Sound design & audio mixing',
                    'Social media optimization (Reels, TikTok, YouTube)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 sm:gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA buttons — full-width on mobile */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-6">
                  <a
                    href={`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(
                      `Hi! I'm interested in your video editing services.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary pulse-glow text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 inline-flex items-center justify-center gap-3 w-full sm:w-auto"
                  >
                    <MessageCircle size={18} />
                    Get a Quote
                  </a>
                  <button className="px-6 sm:px-8 py-3.5 sm:py-4 bg-accent/10 hover:bg-accent/20 text-accent font-semibold rounded-lg transition-all duration-300 border border-accent/30 w-full sm:w-auto">
                    View Reel
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Video Gallery Section ── */}
        <section className="px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-16"
            >
              <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-3 sm:mb-4">
                Featured Portfolio
              </h2>
              {/* Hide the hover hint on mobile — not relevant for touch */}
              <p className="text-text-muted text-sm sm:text-lg max-w-2xl mx-auto hidden sm:block">
                Hover to preview • Click "Watch Full" for the complete experience
              </p>
              <p className="text-text-muted text-sm max-w-2xl mx-auto sm:hidden">
                Tap "Watch" for the full video experience
              </p>
            </motion.div>

            {/* Video Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8"
            >
              {portfolioVideos.map((video) => {
                const isVertical = video.format === 'vertical';

                return (
                  <motion.div
                    key={video.id}
                    variants={itemVariants}
                    className={`group relative rounded-2xl overflow-hidden glass hover:border-accent/50 transition-all duration-300 ${
                      isVertical ? 'md:col-span-1 flex justify-center items-center' : 'md:col-span-1'
                    }`}
                  >
                    {/* Video Container */}
                    <div
                      className={`relative bg-gradient-to-br from-accent/20 to-accent-2/10 overflow-hidden flex items-center justify-center w-full ${
                        isVertical
                          ? 'aspect-video md:max-w-sm md:aspect-auto md:h-[600px]'
                          : 'aspect-video'
                      }`}
                    >
                      {/* Autoplay video preview — logic unchanged */}
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className={`transition-transform duration-500 group-hover:scale-[1.02] ${
                          isVertical ? 'h-full w-full object-contain' : 'w-full h-full object-cover'
                        }`}
                        src={video.previewVideo}
                        poster={video.thumbnail}
                      />

                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-5 md:p-6 bg-gradient-to-t from-black/95 via-black/60 to-transparent z-10">
                        <div className="space-y-2 sm:space-y-3">
                          {/* Category Tag */}
                          <span className="inline-block text-[10px] sm:text-xs font-semibold text-accent bg-accent/30 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full">
                            {video.category}
                          </span>

                          {/* Title */}
                          <h3 className="font-syne font-bold text-base sm:text-lg md:text-xl text-white leading-tight">
                            {video.title}
                          </h3>

                          {/* Description — hidden on mobile to save space */}
                          <p className="text-white/80 text-xs sm:text-sm leading-relaxed hidden sm:block line-clamp-2">
                            {video.description}
                          </p>

                          {/* Duration & Watch button */}
                          <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-white/20">
                            <span className="text-accent text-xs sm:text-sm font-semibold">
                              ⏱ {video.duration}
                            </span>

                            <button
                              onClick={() => setActiveModal(video)}
                              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all duration-300 text-xs sm:text-sm inline-flex items-center gap-1.5 sm:gap-2 shadow-lg hover:shadow-accent/30 active:scale-95"
                            >
                              <ExternalLink size={13} className="sm:hidden" />
                              <ExternalLink size={15} className="hidden sm:block" />
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

        {/* ── Skills & Process Section ── */}
        <section className="px-4 sm:px-8 mt-16 sm:mt-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 sm:p-10 md:p-12"
            >
              <h2 className="font-syne text-2xl sm:text-3xl font-bold text-text-primary mb-8 sm:mb-12 text-center">
                My Editing Toolkit & Expertise
              </h2>

              {/* 2-col grid on md+, single col on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {[
                  {
                    icon: '✂️',
                    title: 'Editing & Effects',
                    items: [
                      'Fast-paced cinematic cuts & transitions',
                      'Professional color grading',
                      'Motion graphics & animations',
                      'VFX & visual effects',
                      'Dynamic text & typography',
                      'Speed ramping & slow-motion',
                    ],
                  },
                  {
                    icon: '🎵',
                    title: 'Audio & Music',
                    items: [
                      'Sound design & Foley',
                      'Audio mixing & mastering',
                      'Royalty-free music selection',
                      'Voice-over integration',
                      'Dialogue editing',
                      'Noise reduction & cleanup',
                    ],
                  },
                  {
                    icon: '📱',
                    title: 'Social Media Optimization',
                    items: [
                      'Instagram Reels (9:16)',
                      'TikTok & YouTube Shorts',
                      'Facebook video ads',
                      'LinkedIn native videos',
                      'Aspect ratio optimization',
                      'Trending audio integration',
                    ],
                  },
                  {
                    icon: '🎬',
                    title: 'Project Types',
                    items: [
                      'Brand & corporate videos',
                      'Product demonstrations',
                      'Testimonials & case studies',
                      'Event coverage & highlights',
                      'Tutorial & educational content',
                      'Music videos & creative projects',
                    ],
                  },
                ].map(({ icon, title, items }) => (
                  <div key={title}>
                    <h3 className="font-syne font-bold text-lg sm:text-xl text-accent mb-3 sm:mb-4">
                      {icon} {title}
                    </h3>
                    <ul className="space-y-1.5 sm:space-y-2 text-text-muted text-sm sm:text-base">
                      {items.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section className="px-4 sm:px-8 mt-16 sm:mt-24 mb-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 sm:p-10 md:p-12 text-center"
            >
              <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3 sm:mb-4">
                Ready to Elevate Your Content?
              </h2>
              <p className="text-text-muted text-sm sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create something exceptional together. Get a free
                consultation on WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${config.whatsapp}?text=${encodeURIComponent(
                    `Hi! I'd like to discuss a video editing project with you.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary pulse-glow text-base sm:text-lg px-8 sm:px-10 py-3.5 sm:py-4 inline-flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  <MessageCircle size={20} />
                  Start Your Project
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.main>

      {/* Video Modal — logic unchanged */}
      <AnimatePresence>
        {activeModal && (
          <VideoModal video={activeModal} onClose={() => setActiveModal(null)} />
        )}
      </AnimatePresence>
    </>
  );
}