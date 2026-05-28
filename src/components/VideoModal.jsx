// Modal for displaying full video content
import { motion } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

export default function VideoModal({ video, onClose }) {
  const isYouTube = video.fullLink?.includes('youtu');
  const isVimeo   = video.fullLink?.includes('vimeo');
  const isShorts  = video.fullLink?.includes('/shorts/');

  const youtubeId = isYouTube ? extractYouTubeId(video.fullLink) : null;
  const vimeoId   = isVimeo   ? extractVimeoId(video.fullLink)   : null;

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
        // Narrow the modal for Shorts so the 9:16 frame isn't stretched
        className={`glass rounded-2xl overflow-hidden w-full max-h-[90vh] flex flex-col ${
          isShorts ? 'max-w-sm' : 'max-w-4xl'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
          <div className="flex-1 min-w-0 pr-3">
            <h3 className="font-syne font-bold text-base sm:text-xl text-text-primary truncate">
              {video.title}
            </h3>
            <p className="text-text-muted text-xs sm:text-sm mt-1">
              {video.category} • {video.duration}
              {isShorts && (
                <span className="ml-2 inline-block text-[10px] font-semibold text-accent bg-accent/20 px-2 py-0.5 rounded-full">
                  #Shorts
                </span>
              )}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-text-muted hover:text-text-primary transition-colors p-2 hover:bg-surface rounded-lg flex-shrink-0"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Video Container */}
        <div className="flex-1 flex items-center justify-center overflow-hidden bg-black/50 p-4 sm:p-6">
          <div className={`w-full ${isShorts ? 'max-w-[280px] sm:max-w-xs' : 'max-w-3xl'}`}>

            {/* ── YouTube (regular + Shorts) ── */}
            {isYouTube && youtubeId ? (
              <div
                className="relative w-full rounded-lg overflow-hidden"
                style={{ paddingBottom: isShorts ? '177.78%' : '56.25%' }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1${
                    isShorts ? '&loop=1&playlist=' + youtubeId : ''
                  }`}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
              </div>

            ) : isVimeo && vimeoId ? (
              /* ── Vimeo ── */
              <div
                className="relative w-full rounded-lg overflow-hidden"
                style={{ paddingBottom: '56.25%' }}
              >
                <iframe
                  src={`https://player.vimeo.com/video/${vimeoId}`}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  frameBorder="0"
                />
              </div>

            ) : (
              /* ── Fallback: external link ── */
              <div className="space-y-6 text-center py-10 sm:py-12">
                <div className="space-y-2">
                  <p className="text-text-muted text-base sm:text-lg">
                    Ready to watch the full video?
                  </p>
                  <p className="text-text-muted text-xs sm:text-sm">
                    Click below to open in a new window
                  </p>
                </div>
                <a
                  href={video.fullLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary pulse-glow text-base sm:text-lg px-8 py-4 inline-flex items-center justify-center gap-3 mx-auto"
                >
                  <ExternalLink size={20} />
                  Watch Full Video
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border p-4 sm:p-6 space-y-3 sm:space-y-4">
          <p className="text-text-muted text-sm sm:text-base line-clamp-3">
            {video.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            {video.fullLink && (
              <a
                href={video.fullLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-5 py-2.5 sm:py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-all text-center inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <ExternalLink size={16} />
                Open Full Project
              </a>
            )}
            <button
              onClick={onClose}
              className="flex-1 px-5 py-2.5 sm:py-3 bg-surface hover:bg-surface/80 text-text-primary font-semibold rounded-lg transition-all border border-border text-sm sm:text-base"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Extracts the video ID from any YouTube URL format:
 *   https://youtu.be/VIDEO_ID
 *   https://www.youtube.com/watch?v=VIDEO_ID
 *   https://youtube.com/shorts/VIDEO_ID          ← Shorts support
 *   https://www.youtube.com/shorts/VIDEO_ID      ← Shorts support
 */
function extractYouTubeId(url) {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : '';
}

function extractVimeoId(url) {
  const match = url.match(/vimeo\.com\/(\d+)/);
  return match ? match[1] : '';
}