import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-24 md:py-36 px-4 sm:px-6 max-w-6xl mx-auto z-10 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card-dark rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-14 lg:p-16 relative overflow-hidden shadow-2xl border border-cyan-100/20"
      >
        {/* Ambient Glow Orbs inside About Card */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full">
          
          {/* Top Right Counter Indicator */}
          <div className="flex justify-end mb-4 md:mb-6">
            <span className="font-mono text-xs md:text-sm tracking-widest text-cyan-300/80 font-semibold">
              02 / n _
            </span>
          </div>

          {/* GIANT GLOWING DARK-GLASS /ABOUT HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 md:mb-12 overflow-hidden"
          >
            <h1 className="text-[20vw] sm:text-[18vw] md:text-[13rem] lg:text-[16rem] font-black uppercase tracking-tighter leading-none text-white/15 font-sans select-none whitespace-nowrap -ml-2 sm:-ml-4 drop-shadow-[0_0_35px_rgba(103,232,249,0.12)]">
              /ABOUT
            </h1>
          </motion.div>

          {/* LOWER SECTION: Bio Quote Text & Status & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 max-w-4xl"
          >
            {/* Quote Bio Paragraph */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-slate-200 leading-relaxed font-sans tracking-wide">
              &ldquo;Thejus M is a talented Freelance Designer &amp; Developer, known for his creative prowess and technical expertise. With a passion for crafting visually stunning and functional digital experiences, Thejus combines design aesthetics with coding finesse to bring his clients&rsquo; visions to life. Whether it&rsquo;s building websites, designing user interfaces, or optimizing user experiences, Thejus&rsquo;s dedication to excellence and innovation shines through in every project he undertakes.&rdquo;
            </p>

            {/* Currently Working Status Badge */}
            <div className="pt-2">
              <span className="eyebrow block">
                CURRENTLY WORKING ON GENERATIVE AI &amp; CLOUD SYSTEMS
              </span>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div>
                <span className="block text-2xl md:text-3xl font-mono font-bold text-cyan-300">12+</span>
                <span className="text-xs font-mono tracking-wider text-slate-400 uppercase mt-1 block">Clients Managed</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-mono font-bold text-violet-400">GenAI</span>
                <span className="text-xs font-mono tracking-wider text-slate-400 uppercase mt-1 block">Stacks &amp; LLM Systems</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-mono font-bold text-cyan-400">AWS / IaC</span>
                <span className="text-xs font-mono tracking-wider text-slate-400 uppercase mt-1 block">Terraform &amp; Pipelines</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a 
                href="#contact" 
                className="button-primary text-xs md:text-sm py-3 px-6 shadow-[0_0_25px_rgba(103,232,249,0.3)]"
              >
                Get In Touch
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};
