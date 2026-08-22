import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  onOpenHireMe?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenHireMe }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('work');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['work', 'about', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3 md:py-4 px-4 md:px-6">
      <div
        className={`max-w-5xl mx-auto rounded-full transition-all duration-500 px-6 py-2.5 flex items-center justify-between ${
          scrolled
            ? 'bg-zinc-950/80 backdrop-blur-2xl border border-zinc-800/80 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
            : 'bg-zinc-900/40 backdrop-blur-md border border-zinc-800/40 shadow-xs'
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 text-xs font-bold tracking-widest text-white uppercase font-mono"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform duration-300" />
          <span>{portfolioData.identity.name}</span>
        </a>

        {/* Desktop Navigation Pills */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/80 p-1 rounded-full border border-zinc-800/80 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePillClean"
                    className="absolute inset-0 bg-blue-600 rounded-full z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Hire Me CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenHireMe}
            className="group text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-300 flex items-center gap-1.5 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)] cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-200" />
            Hire me! <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full bg-zinc-800/80 text-white hover:bg-zinc-700 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-5xl mx-auto mt-2 bg-zinc-950/95 backdrop-blur-2xl rounded-3xl border border-zinc-800 p-6 space-y-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-semibold text-zinc-200 hover:text-blue-400 py-1.5 border-b border-zinc-900"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenHireMe) onOpenHireMe();
                }}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-blue-600 px-4 py-3 rounded-2xl w-full justify-center shadow-lg cursor-pointer"
              >
                Hire me! <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
