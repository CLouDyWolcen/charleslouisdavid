import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { SocialLink } from '../types';

interface FooterProps {
  name: string;
  year: number;
  socialLinks?: SocialLink[];
}

const Footer = ({ name, year, socialLinks }: FooterProps) => {
  const getIconForPlatform = (platform: string) => {
    const iconMap: Record<string, JSX.Element> = {
      github: <FaGithub className="w-5 h-5" />,
      linkedin: <FaLinkedin className="w-5 h-5" />,
      google: <FaEnvelope className="w-5 h-5" />,
    };
    return iconMap[platform.toLowerCase()] || <FaEnvelope className="w-5 h-5" />;
  };

  return (
    <footer className="relative bg-dark-900 border-t border-primary-500/20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <div className="inline-block relative mb-3">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 blur-md opacity-30"></div>
              <div className="relative bg-dark-800 px-4 py-2 rounded-lg border border-primary-500/30">
                <span className="font-display font-bold text-xl bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  CLouD
                </span>
              </div>
            </div>
            <p className="text-dark-400 text-sm">
              Building the web, one project at a time
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-dark-300 flex items-center justify-center gap-2 flex-wrap">
              <span>© {year} {name}</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                Made with <FaHeart className="w-4 h-4 text-red-500 animate-pulse" /> and lots of coffee
              </span>
            </p>
          </div>

          {/* Social links */}
          {socialLinks && socialLinks.length > 0 && (
            <div className="flex items-center justify-center md:justify-end gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-800/50 backdrop-blur-sm rounded-lg border border-primary-500/20 hover:border-primary-500/60 hover:bg-dark-800 flex items-center justify-center text-dark-300 hover:text-primary-400 transition-all group"
                  aria-label={link.platform}
                >
                  <span className="group-hover:scale-110 transition-transform">
                    {getIconForPlatform(link.icon)}
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Bottom text */}
        <div className="mt-8 pt-8 border-t border-primary-500/10 text-center">
          <p className="text-dark-500 text-sm">
            Designed & Built by {name} • Powered by React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
