// Footer with logo, links, and contact info
import { Link } from 'react-router-dom';
import { Mail, MessageCircle } from 'lucide-react';
import { config } from '../config';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary to-surface-2 border-t border-border py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left: Logo & Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <h3 className="font-syne font-bold text-xl text-text-primary">
                {config.agencyName}
              </h3>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              {config.tagline}
            </p>
          </div>

          {/* Center: Quick Links */}
          <div>
            <h4 className="font-syne font-bold mb-6 text-text-primary">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-text-muted hover:text-accent transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-text-muted hover:text-accent transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-text-muted hover:text-accent transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: Contact Info */}
          <div>
            <h4 className="font-syne font-bold mb-6 text-text-primary">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a
                href={`https://wa.me/${config.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-accent hover:text-accent/80 transition-colors text-sm"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
              <a
                href={`mailto:${config.email}`}
                className="flex items-center gap-3 text-accent hover:text-accent/80 transition-colors text-sm"
              >
                <Mail size={18} />
                {config.email}
              </a>
              {/* Plain text contact info for SEO crawling */}
              <div className="text-text-muted text-sm pt-4 border-t border-border/50">
                <p>Email: <span className="text-accent">{config.email}</span></p>
                <p>Phone: <span className="text-accent">+92 3280055453</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-text-muted text-xs sm:text-sm">
            © 2025 {config.agencyName}. Built to grow your practice.
          </p>
        </div>
      </div>
    </footer>
  );
}
