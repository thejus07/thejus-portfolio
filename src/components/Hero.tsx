import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight, ArrowDown, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 pb-16 z-10"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="hero-glass max-w-6xl w-full mx-auto rounded-[2.5rem] md:rounded-[3rem] relative overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.6),0_0_80px_rgba(109,40,217,0.2)] border border-cyan-100/20"
      >
        {/* Living Ambient Glow Orbs inside Hero Card */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />

        {/* Hero Canvas Area */}
        <div className="relative h-[520px] sm:h-[580px] md:h-[640px] lg:h-[700px] w-full flex items-end justify-center overflow-hidden">
          
          {/* Subtle Vector Line Overlay */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-25" 
            viewBox="0 0 1000 600" 
            fill="none" 
            preserveAspectRatio="none"
          >
            <path 
              d="M-50,80 C250,80 400,320 450,600" 
              stroke="url(#hero-glass-grad-1)" 
              strokeWidth="2" 
            />
            <path 
              d="M620,600 C700,450 850,520 1050,400" 
              stroke="url(#hero-glass-grad-2)" 
              strokeWidth="2" 
            />
            <defs>
              <linearGradient id="hero-glass-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#67e8f9" />
                <stop offset="100%" stopColor="#c4b5fd" />
              </linearGradient>
              <linearGradient id="hero-glass-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c4b5fd" />
                <stop offset="100%" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
          </svg>

          {/* Top Left Bio/Role Text Overlay */}
          <div className="absolute top-6 left-6 sm:top-10 sm:left-10 md:top-12 md:left-12 z-30 max-w-xs sm:max-w-sm text-left">
            <span className="eyebrow mb-2 block">Cloud &amp; Software Architect</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug">
              Designer &amp; Developer
            </h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <a href="#work" className="button-primary text-xs py-2 px-4 shadow-lg">
                Explore my work <ArrowDownRight className="w-3.5 h-3.5" />
              </a>
              <a 
                href={portfolioData.identity.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="button-secondary text-xs py-2 px-4"
              >
                GitHub <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Bottom Scroll Down Indicator */}
          <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-30 flex flex-col items-center text-slate-300">
            <span className="text-[11px] font-mono tracking-widest uppercase mb-1.5 text-cyan-300">
              Scroll down
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4 text-cyan-400" />
            </motion.div>
          </div>

          {/* GIANT "HI THERE!" TEXT WITH GLOWING GLASS TYPOGRAPHY */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none select-none overflow-hidden">
            <motion.h1 
              style={{ y: textY, scale: textScale }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-[19vw] sm:text-[17vw] md:text-[14.5rem] lg:text-[17rem] font-black uppercase tracking-tighter leading-none text-white/10 text-center font-sans whitespace-nowrap drop-shadow-[0_0_35px_rgba(103,232,249,0.15)]"
            >
              HI THERE!
            </motion.h1>
          </div>

          {/* FOREGROUND TRANSPARENT PHOTO OF THEJUS */}
          <motion.img
            style={{ y: imageY, scale: imageScale }}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            src="/Thejus_image.png"
            alt="Thejus M"
            className="relative z-20 h-[88%] sm:h-[92%] md:h-[96%] lg:h-[98%] max-h-[660px] w-auto object-contain object-bottom pointer-events-auto filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          />
        </div>

        {/* Bottom Feature Badges */}
        <div className="grid grid-cols-2 gap-px overflow-hidden border-t border-white/10 bg-white/5 md:grid-cols-4">
          {['Cloud native', 'Clean delivery', 'Reliable systems', 'Always learning'].map((item, index) => (
            <div key={item} className="bg-slate-950/40 px-5 py-4">
              <span className="block text-[10px] font-mono tracking-[.18em] text-cyan-300">
                0{index + 1}
              </span>
              <span className="mt-1 block text-sm font-medium text-slate-200">
                {item}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
