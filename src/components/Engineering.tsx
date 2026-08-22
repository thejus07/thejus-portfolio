import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export const Engineering: React.FC = () => {
  return (
    <section className="py-28 md:py-36 px-6 max-w-6xl mx-auto z-10 relative">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 md:mb-20"
      >
        <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/30 inline-block mb-3 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          ENGINEERING PROCESS
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-none">
          From idea <br />
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            to production.
          </span>
        </h2>
      </motion.div>

      {/* Horizontal Process Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {portfolioData.philosophy.map((step, idx) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="glass-card-dark p-6 rounded-3xl flex flex-col justify-between h-64 hover:border-blue-500/40 transition-colors group"
          >
            <div>
              <span className="text-2xl font-mono font-bold text-zinc-600 group-hover:text-cyan-400 transition-colors block mb-4">
                {step.number}
              </span>
              <h3 className="text-lg font-bold tracking-tight text-white mb-2 group-hover:text-blue-300 transition-colors">
                {step.title}
              </h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
