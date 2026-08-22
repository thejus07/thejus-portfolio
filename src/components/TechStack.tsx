import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export const TechStack: React.FC = () => {
  const categoryThemes: Record<string, { badge: string; dot: string; hover: string }> = {
    LANGUAGES: { badge: 'bg-purple-500/10 text-purple-300 border-purple-500/30', dot: 'bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]', hover: 'group-hover:text-purple-300' },
    FRONTEND: { badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30', dot: 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]', hover: 'group-hover:text-cyan-300' },
    BACKEND: { badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30', dot: 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]', hover: 'group-hover:text-emerald-300' },
    CLOUD: { badge: 'bg-amber-500/10 text-amber-300 border-amber-500/30', dot: 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]', hover: 'group-hover:text-amber-300' },
    DEVOPS: { badge: 'bg-blue-500/10 text-blue-300 border-blue-500/30', dot: 'bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]', hover: 'group-hover:text-blue-300' },
    AI: { badge: 'bg-rose-500/10 text-rose-300 border-rose-500/30', dot: 'bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.8)]', hover: 'group-hover:text-rose-300' },
  };

  return (
    <section className="py-28 md:py-36 px-6 max-w-6xl mx-auto z-10 relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 md:mb-20"
      >
        <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-semibold bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/30 inline-block mb-3 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
          TOOLBOX
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          Technologies I use to build things.
        </h2>
      </motion.div>

      {/* Grid of Technology Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.toolbox.map((group, idx) => {
          const theme = categoryThemes[group.category] || { badge: 'bg-zinc-800 text-zinc-300 border-zinc-700', dot: 'bg-blue-400', hover: 'group-hover:text-blue-300' };

          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="glass-card-dark p-6 md:p-8 rounded-3xl transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6 border-b border-zinc-800/80 pb-3">
                <h3 className={`text-xs font-mono tracking-widest uppercase font-bold px-3 py-1 rounded-md border ${theme.badge}`}>
                  {group.category}
                </h3>
              </div>

              <ul className="space-y-3.5">
                {group.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${theme.dot} shrink-0`} />
                    <span className={`text-base font-medium text-zinc-300 tracking-tight transition-all duration-200 group-hover:translate-x-1 ${theme.hover}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
