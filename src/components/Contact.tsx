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
        className="max-w-4xl mx-auto space-y-8 glass-card-dark p-10 md:p-16 rounded-[40px] relative overflow-hidden"
      >
        {/* Soft background light orb inside card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-slate-300/5 rounded-full blur-3xl pointer-events-none" />

        <span className="text-xs font-mono tracking-widest text-slate-300 uppercase font-semibold bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-slate-300" />
          LET'S CONNECT
        </span>

        {/* Huge CTA Heading */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-semibold tracking-[-0.06em] text-white leading-[1.04]">
          Have an idea? <br />
          <span className="text-slate-400">
            Let's build it.
          </span>
        </h2>

        {/* Supporting text */}
        <p className="text-lg md:text-2xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
          I'm always interested in interesting products, engineering challenges, and opportunities to build something useful.
        </p>

        {/* Action Buttons */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4 relative z-10">
          <button
            onClick={handleEmailClick}
            className="px-8 py-4 rounded-full bg-slate-100 text-slate-900 font-semibold text-sm hover:bg-white transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Email Copied! Opening Mail...</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 text-slate-600" />
                <span>Email Me</span>
              </>
            )}
          </button>

          <a
            href={portfolioData.identity.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-white/5 text-slate-100 font-semibold text-sm border border-white/10 hover:border-white/25 hover:bg-white/10 transition-all duration-300 flex items-center gap-1.5 hover:scale-[1.02]"
          >
            LinkedIn <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </a>

          <a
            href={portfolioData.identity.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-white/5 text-slate-100 font-semibold text-sm border border-white/10 hover:border-white/25 hover:bg-white/10 transition-all duration-300 flex items-center gap-1.5 hover:scale-[1.02]"
          >
            GitHub <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
