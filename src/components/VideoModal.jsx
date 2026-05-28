// Modal for displaying full video content
import { motion } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

export default function VideoModal({ video, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="glass rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex-1">
            <h3 className="font-syne font-bold text-xl text-text-primary">
              {video.title}
            </h3>
            <p className="text-text-muted text-sm mt-1">
              {video.category} • {video.duration}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-text-muted hover:text-text-primary transition-colors p-2 hover:bg-surface rounded-lg"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Video Container - Responsive */}
        <div className="flex-1 flex items-center justify-center overflow-hidden bg-black/50 p-6">
          <div className="w-full max-w-3xl">
            {/* If fullLink is YouTube/Vimeo, embed iframe */}
            {video.fullLink?.includes('youtu') ? (
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${extractYouTubeId(video.fullLink)}`}
                  title={video.title}
                  className="absolute inset-0 w-full h-full rounded-lg"
                  allowFullScreen
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            ) : video.fullLink?.includes('vimeo') ? (
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={`https://player.vimeo.com/video/${extractVimeoId(video.fullLink)}`}
                  title={video.title}
                  className="absolute inset-0 w-full h-full rounded-lg"
                  allowFullScreen
                  frameBorder="0"
                />
              </div>
            ) : (
              // Fallback: Display message + button to open external link
              <div className="space-y-6 text-center py-12">
                <div className="space-y-2">
                  <p className="text-text-muted text-lg">
                    Ready to watch the full video?
                  </p>
                  <p className="text-text-muted text-sm">
                    Click below to open in a new window
                  </p>
                </div>
                <a
                  href={video.fullLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary pulse-glow text-lg px-8 py-4 inline-flex items-center justify-center gap-3 mx-auto"
                >
                  <ExternalLink size={20} />
                  Watch Full Video
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Footer with Description & CTA */}
        <div className="border-t border-border p-6 space-y-4">
          <p className="text-text-muted">
            {video.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            {video.fullLink && (
              <a
                href={video.fullLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all text-center inline-flex items-center justify-center gap-2"
              >
                <ExternalLink size={18} />
                Open Full Project
              </a>
            )}
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-surface hover:bg-surface/80 text-text-primary font-semibold rounded-lg transition-all border border-border"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Helper functions to extract video IDs
function extractYouTubeId(url) {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  return match ? match[1] : '';
}

function extractVimeoId(url) {
  const match = url.match(/vimeo\.com\/(\d+)/);
  return match ? match[1] : '';
}
