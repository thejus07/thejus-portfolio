import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(portfolioData.identity.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      window.location.href = `mailto:${portfolioData.identity.email}`;
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 md:py-44 px-6 max-w-6xl mx-auto text-center z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto space-y-8 bg-gradient-to-b from-white/90 to-blue-50/30 backdrop-blur-2xl p-10 md:p-16 rounded-[40px] border border-blue-100 shadow-apple-lg relative overflow-hidden"
      >
        {/* Soft background light orb inside card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <span className="text-xs font-mono tracking-widest text-blue-700 uppercase font-semibold bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          LET'S CONNECT
        </span>

        {/* Huge CTA Heading */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-extrabold tracking-tightest text-zinc-900 leading-[1.04]">
          Have an idea? <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Let's build it.
          </span>
        </h2>

        {/* Supporting text */}
        <p className="text-lg md:text-2xl text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto">
          I'm always interested in interesting products, engineering challenges, and opportunities to build something useful.
        </p>

        {/* Action Buttons */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4 relative z-10">
          <button
            onClick={handleEmailClick}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-zinc-900 via-blue-900 to-zinc-900 text-white font-semibold text-sm hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Email Copied! Opening Mail...</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Email Me</span>
              </>
            )}
          </button>

          <a
            href={portfolioData.identity.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-white text-zinc-900 font-semibold text-sm border border-zinc-200 hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-300 flex items-center gap-1.5 shadow-xs hover:shadow-md hover:scale-105"
          >
            LinkedIn <ArrowUpRight className="w-4 h-4 text-blue-600" />
          </a>

          <a
            href={portfolioData.identity.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-white text-zinc-900 font-semibold text-sm border border-zinc-200 hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-300 flex items-center gap-1.5 shadow-xs hover:shadow-md hover:scale-105"
          >
            GitHub <ArrowUpRight className="w-4 h-4 text-blue-600" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
