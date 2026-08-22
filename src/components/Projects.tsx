import React from 'react';
import { motion } from 'framer-motion';
import { projectsData, Project } from '../data/projects';
import { PremiumProjectCard } from './PremiumProjectCard';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="py-28 md:py-36 px-6 max-w-6xl mx-auto z-10 relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 md:mb-20"
      >
        <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/30 inline-block mb-3 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          SELECTED WORK
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          Things I've built.
        </h2>
      </motion.div>

      {/* Multi-Stage Reveal Projects Showcase */}
      <div className="space-y-12">
        {projectsData.map((project, idx) => (
          <PremiumProjectCard
            key={project.id}
            project={project}
            index={idx}
            onSelectProject={onSelectProject}
          />
        ))}
      </div>
    </section>
  );
};
