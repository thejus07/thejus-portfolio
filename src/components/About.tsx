import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 md:py-36 px-6 max-w-6xl mx-auto z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card-dark rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-2xl"
      >
        {/* Glow ambient background inside card */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
          {/* Label */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-semibold bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/30 inline-block shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              {portfolioData.about.label}
            </span>
          </div>

          {/* Editorial Text Block */}
          <div className="lg:col-span-9 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              {portfolioData.about.heading}
            </h2>
            <p className="text-xl md:text-2xl font-normal text-zinc-300 leading-relaxed max-w-3xl">
              {portfolioData.about.body}
            </p>

            {/* Key Pillars */}
            <div className="pt-6 flex flex-wrap gap-3">
              {[
                { name: 'Cloud Infrastructure', color: 'bg-blue-500/10 text-blue-300 border-blue-500/30' },
                { name: 'Software Engineering', color: 'bg-purple-500/10 text-purple-300 border-purple-500/30' },
                { name: 'DevOps & Automation', color: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' },
                { name: 'AI Systems', color: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30' },
              ].map((pillar, idx) => (
                <span
                  key={idx}
                  className={`px-4 py-2 rounded-full text-xs font-semibold border ${pillar.color} shadow-xs hover:scale-105 transition-transform`}
                >
                  {pillar.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
