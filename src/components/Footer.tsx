import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-16 px-6 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Brand & Title */}
        <div className="space-y-1">
          <div className="text-sm font-semibold tracking-wider text-white uppercase font-mono">
            {portfolioData.identity.name}
          </div>
          <div className="text-xs text-zinc-500 font-medium">
            {portfolioData.identity.title}
          </div>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center gap-6 text-xs text-zinc-400 font-medium">
          <a href="#work" className="hover:text-blue-400 transition-colors">Work</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
          <a href={portfolioData.identity.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
          <a href={portfolioData.identity.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </nav>

        {/* Back to Top & Copyright */}
        <div className="flex items-center gap-4 text-xs text-zinc-500 font-mono">
          <span>© 2026 {portfolioData.identity.name}</span>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-blue-500/50 transition-colors shadow-sm"
            title="Back to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
