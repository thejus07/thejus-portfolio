import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { projectsData } from '../data/projects';
import { ProjectVisuals } from './ProjectVisuals';

export const Hero: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  // Bind 350vh vertical scroll distance for 5-phase transformation
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // Phase 2: Word Separation Motion (Phase 0.18 -> 0.45)
  const topWordY = useTransform(scrollYProgress, [0.18, 0.45], [0, -70]);
  const midWordY = useTransform(scrollYProgress, [0.18, 0.45], [0, 0]);
  const botWordY = useTransform(scrollYProgress, [0.18, 0.45], [0, 70]);
  const wordSpacing = useTransform(scrollYProgress, [0.18, 0.45], [0, 24]);

  // Phase 3: Blue Gradient & Glow Transition (Phase 0.6 -> 0.72)
  const textBlur = useTransform(
    scrollYProgress,
    [0.6, 0.72],
    ['blur(0px)', 'blur(12px)']
  );
  const headingOpacity = useTransform(
    scrollYProgress,
    [0.6, 0.72],
    [1, 0]
  );

  // Phase 4: Text Compression into "SOFTWARE" (Phase 0.68 -> 0.86)
  const SOFTWAREOpacity = useTransform(
    scrollYProgress,
    [0.68, 0.78, 0.86],
    [0, 1, 0]
  );
  const SOFTWAREScale = useTransform(
    scrollYProgress,
    [0.68, 0.78, 0.86],
    [0.7, 1.15, 1.4]
  );
  const SOFTWAREBlur = useTransform(
    scrollYProgress,
    [0.68, 0.78, 0.86],
    ['blur(10px)', 'blur(0px)', 'blur(16px)']
  );

  // Phase 5: Morph into First Project "GYMORA" (Phase 0.84 -> 1.0)
  const projectMorphOpacity = useTransform(
    scrollYProgress,
    [0.84, 0.96],
    [0, 1]
  );
  const projectMorphScale = useTransform(
    scrollYProgress,
    [0.84, 0.96],
    [0.85, 1]
  );
  const projectMorphY = useTransform(
    scrollYProgress,
    [0.84, 0.96],
    [60, 0]
  );

  const firstProject = projectsData[0]; // GYMORA

  return (
    <section ref={targetRef} className="relative h-[350vh] z-10">
      {/* Pinned Viewport Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-6">
        <div className="max-w-5xl w-full mx-auto relative flex flex-col items-center justify-center text-center">

          {/* Top Eyebrow Label */}
          <motion.div
            style={{ opacity: headingOpacity }}
            className="mb-8 inline-block"
          >
            <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-semibold bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              {portfolioData.identity.heroEyebrow}
            </span>
          </motion.div>

          {/* Main Heading Matching Gradient & Typography with SOFTWARE */}
          <motion.div
            style={{ opacity: headingOpacity, filter: textBlur }}
            className="space-y-3 max-w-4xl"
          >
            {/* Word Line 1 */}
            <motion.div
              style={{ y: topWordY, letterSpacing: wordSpacing }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-extrabold tracking-tightest leading-[1.04] text-white"
            >
              I build reliable
            </motion.div>

            {/* Word Line 2 (Matching Cyan/Blue Gradient) */}
            <motion.div
              style={{ y: midWordY }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-extrabold tracking-tightest leading-[1.04] bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(59,130,246,0.5)]"
            >
              cloud & software
            </motion.div>

            {/* Word Line 3 (Matching Cyan/Blue Gradient) */}
            <motion.div
              style={{ y: botWordY }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-extrabold tracking-tightest leading-[1.04] bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(59,130,246,0.5)]"
            >
              that scale simply.
            </motion.div>
          </motion.div>

          {/* Supporting Paragraph & CTA */}
          <motion.div
            style={{ opacity: headingOpacity }}
            className="mt-8 space-y-6 max-w-xl mx-auto"
          >
            <p className="text-base md:text-xl text-zinc-400 font-normal leading-relaxed">
              {portfolioData.identity.supportingText}
            </p>
            <div className="flex items-center justify-center gap-4 pt-2">
              <a
                href="#work"
                className="px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                {portfolioData.identity.primaryCta}
              </a>
              <a
                href={portfolioData.identity.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-zinc-900 text-white text-xs font-semibold uppercase tracking-wider border border-zinc-800 hover:border-zinc-700 transition-all duration-200 flex items-center gap-1"
              >
                {portfolioData.identity.secondaryCta}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* SOFTWARE & CLOUD (Matching Gradient & Style) */}
          <motion.div
            style={{
              opacity: SOFTWAREOpacity,
              scale: SOFTWAREScale,
              filter: SOFTWAREBlur,
            }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[90px] font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 drop-shadow-[0_0_50px_rgba(59,130,246,0.8)] uppercase">
              CLOUD & SOFTWARE
            </h2>
          </motion.div>

          {/* Phase 5: Morphs into First Project "GYMORA" */}
          <motion.div
            style={{
              opacity: projectMorphOpacity,
              scale: projectMorphScale,
              y: projectMorphY,
            }}
            className="absolute inset-0 flex items-center justify-center p-4 pointer-events-auto"
          >
            <div className="w-full max-w-3xl glass-card-dark rounded-3xl p-6 md:p-8 border border-cyan-500/40 shadow-2xl space-y-6 text-left">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
                  FEATURED PROJECT 01
                </span>
                <span className="text-xs font-mono text-zinc-400 uppercase">
                  {firstProject.category}
                </span>
              </div>

              <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden relative border border-zinc-800">
                <ProjectVisuals type={firstProject.visualType} title={firstProject.name} />
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                    {firstProject.name}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-300 mt-1">
                    {firstProject.description}
                  </p>
                </div>
                <a
                  href="#work"
                  className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 shrink-0"
                >
                  Explore All Work <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
