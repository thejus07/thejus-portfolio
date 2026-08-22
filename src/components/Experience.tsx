import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, GraduationCap, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-28 md:py-36 px-6 max-w-6xl mx-auto z-10 relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 md:mb-20"
      >
        <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-semibold bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/30 inline-block mb-3 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
          EXPERIENCE & EDUCATION
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          Where I've been.
        </h2>
      </motion.div>

      {/* Dark Timeline */}
      <div className="space-y-12 max-w-4xl relative before:absolute before:left-0 before:top-3 before:bottom-3 before:w-px before:bg-zinc-800 pl-8">
        {portfolioData.experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative space-y-4 glass-card-dark p-6 md:p-8 rounded-3xl border border-zinc-800/80 hover:border-blue-500/40 transition-colors"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[45px] top-8 w-4 h-4 rounded-full bg-zinc-950 border-2 border-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />

            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                {exp.period}
              </div>
              {exp.location && (
                <div className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-zinc-500" />
                  {exp.location}
                </div>
              )}
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight flex flex-wrap items-center gap-2">
              <span>{exp.title}</span>
              {exp.company && (
                exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-cyan-300 font-medium text-lg inline-flex items-center gap-1 transition-colors"
                  >
                    @ {exp.company} <ArrowUpRight className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="text-zinc-400 font-normal text-lg">
                    @ {exp.company}
                  </span>
                )
              )}
            </h3>

            {/* Bullets */}
            {exp.bullets && exp.bullets.length > 0 && (
              <ul className="space-y-2 pt-1 text-xs md:text-sm text-zinc-300">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Focus Tags */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/60">
              {exp.focus.map((item, fIdx) => (
                <span
                  key={fIdx}
                  className="px-3 py-1 bg-zinc-900/90 text-zinc-300 rounded-full text-xs font-medium border border-zinc-800"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Education Item */}
        {portfolioData.education && portfolioData.education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative space-y-3 glass-card-dark p-6 md:p-8 rounded-3xl border border-zinc-800/80 hover:border-purple-500/40 transition-colors"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[45px] top-8 w-4 h-4 rounded-full bg-zinc-950 border-2 border-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />

            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-purple-400" />
                EDUCATION • {edu.year}
              </span>
              <span className="text-xs font-mono text-zinc-500">
                {edu.location}
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              {edu.degree}
            </h3>

            <p className="text-sm text-zinc-300 font-medium">
              {edu.institution}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
