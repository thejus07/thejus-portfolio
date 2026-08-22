import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Cpu, Layers } from 'lucide-react';
import { Project } from '../data/projects';
import { ProjectVisuals } from './ProjectVisuals';

interface PremiumProjectCardProps {
  project: Project;
  index: number;
  onSelectProject: (project: Project) => void;
}

export const PremiumProjectCard: React.FC<PremiumProjectCardProps> = ({
  project,
  index,
  onSelectProject,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  // Smooth clean blur to sharp image reveal (no noisy color distortions)
  const filterEffect = useTransform(
    scrollYProgress,
    [0, 0.25],
    ['blur(8px) opacity(0.7)', 'blur(0px) opacity(1)']
  );

  const imageY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const imageScale = useTransform(scrollYProgress, [0, 0.35, 0.8], [1.06, 1.02, 1.0]);

  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.1, 0.3], [25, 0]);

  const formattedNumber = String(index + 1).padStart(2, '0');

  return (
    <div ref={cardRef} className="relative my-12 md:my-20">
      <motion.article
        onClick={() => onSelectProject(project)}
        whileHover={{ y: -4 }}
        className="group cursor-pointer glass-card-dark rounded-[32px] p-5 md:p-8 transition-all duration-300 overflow-hidden relative border border-zinc-800/80 hover:border-blue-500/40 shadow-xl"
      >
        {/* Top Header */}
        <div className="flex justify-between items-center mb-6 relative z-10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              PROJECT {formattedNumber}
            </span>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest hidden sm:inline">
              // {project.category}
            </span>
          </div>

          <span className="text-xs font-mono text-zinc-500">
            {project.technologies.slice(0, 3).join(' • ')}
          </span>
        </div>

        {/* Clean Parallax Visual Frame */}
        <div className="w-full h-80 md:h-[400px] mb-8 rounded-2xl overflow-hidden relative shadow-xl bg-zinc-950 border border-zinc-800/80">
          <motion.div
            style={{
              filter: filterEffect,
              y: imageY,
              scale: imageScale,
            }}
            className="w-full h-full relative"
          >
            <ProjectVisuals type={project.visualType} title={project.name} />
          </motion.div>
        </div>

        {/* Clean Typography Container */}
        <motion.div
          style={{
            opacity: textOpacity,
            y: textY,
          }}
          className="p-2 md:p-4 space-y-6 relative z-10"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-base md:text-lg text-zinc-300 leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {/* View Project Action */}
            <div className="shrink-0">
              <span className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md">
                Explore Project
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </div>

          {/* Architecture Stream */}
          {project.architecture && project.architecture.length > 0 && (
            <div className="pt-4 border-t border-zinc-800/80">
              <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                Architecture Stream
              </div>
              <div className="flex flex-wrap gap-2">
                {project.architecture.map((arch, aIdx) => (
                  <span
                    key={aIdx}
                    className="text-xs font-mono bg-zinc-950/90 text-zinc-300 px-3 py-1.5 rounded-lg border border-zinc-800 flex items-center gap-1.5"
                  >
                    <Cpu className="w-3 h-3 text-blue-400 shrink-0" />
                    <span>{arch}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </motion.article>
    </div>
  );
};
