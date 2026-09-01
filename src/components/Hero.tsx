import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => (
  <section className="relative min-h-screen flex items-center px-6 pt-28 pb-20">
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="hero-glass max-w-6xl w-full mx-auto rounded-[2rem] md:rounded-[2.75rem] px-7 py-12 md:p-16 lg:p-20">
      <div className="max-w-4xl">

        <p className="eyebrow mb-8">{portfolioData.identity.heroEyebrow}</p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.9rem] font-semibold tracking-[-0.065em] leading-[0.98] text-white">I build thoughtful <span className="text-slate-400">cloud &amp; software</span> systems.</h1>

        <div className="mt-10 max-w-3xl"><p className="text-base md:text-lg leading-relaxed text-slate-300 max-w-xl">{portfolioData.identity.supportingText}</p></div>
        <div className="mt-10 flex flex-wrap gap-3"><a href="#work" className="button-primary">{portfolioData.identity.primaryCta}<ArrowDownRight className="w-4 h-4" /></a><a href={portfolioData.identity.githubUrl} target="_blank" rel="noopener noreferrer" className="button-secondary">{portfolioData.identity.secondaryCta}<ArrowUpRight className="w-4 h-4" /></a></div>
      </div>
      <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">{['Cloud native', 'Clean delivery', 'Reliable systems', 'Always learning'].map((item, index) => <div key={item} className="bg-slate-950/35 px-4 py-4 md:px-5"><span className="block text-[10px] font-mono tracking-[.18em] text-slate-500">0{index + 1}</span><span className="mt-1.5 block text-sm text-slate-200">{item}</span></div>)}</div>
    </motion.div>
  </section>
);
