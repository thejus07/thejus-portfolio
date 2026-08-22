import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
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
        <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/30 inline-block mb-3 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          RECOGNITION & CERTIFICATIONS
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          Verified Credentials.
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="glass-card-dark p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between group hover:border-blue-500/40"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <Award className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                  {cert.issuer} • {cert.year}
                </span>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white leading-snug">
                  {cert.name}
                </h3>
              </div>
            </div>

            <div className="pt-8">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-400 group-hover:text-white transition-colors">
                Credential Verification
                <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
