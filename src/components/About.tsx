import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import FluidText from './originkit/ui/fluidtext';

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
          {/* Portrait */}
          <div className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-2xl border border-cyan-200/25 bg-slate-950/40 aspect-[4/5] min-h-[260px]">
              <img
                src="/profile/thejus.png"
                alt="Thejus"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          {/* Editorial Text Block */}
          <div className="lg:col-span-9 space-y-6">
            <div className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              <span>Hello, I'm </span>
              <span className="inline-flex align-middle w-[190px] h-[58px] md:w-[270px] md:h-[82px]">
                <FluidText
                  text="Thejus."
                  color="#dbeafe"
                  paletteColors={['#8b5cf6', '#22d3ee', '#3b82f6']}
                  splatRadius={5}
                  splatForce={7}
                  curl={24}
                  densityDissipation={8}
                  font={{ fontFamily: 'Inter, sans-serif', fontWeight: 800, fontSize: '64px', textAlign: 'left', lineHeight: '1em' }}
                />
              </span>
            </div>
            <p className="text-lg md:text-xl font-normal text-zinc-300 leading-relaxed max-w-3xl">
              {portfolioData.about.body}
            </p>

          </div>
        </div>
      </motion.div>
    </section>
  );
};
