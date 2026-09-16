import React from 'react';
import { motion } from 'framer-motion';
import { projectsData, Project } from '../data/projects';
import { ArrowUpRight, Github, ExternalLink, Sparkles } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const getProjectImage = (project: Project) => {
    if (project.id === 'fit-flow-web') return '/project-images/fit-flow.png';
    if (project.id === 'assessment-pixelmind-recruiter-ai') return '/project-images/pixelmind-recruiter-ai.png';
    if (project.id === 'embark') return '/project-images/embark.png';
    return null;
  };

  return (
    <section 
      id="work" 
      className="py-24 md:py-36 px-4 sm:px-6 max-w-6xl mx-auto z-10 relative"
    >
      <div className="w-full">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <span className="eyebrow">
            // SELECTED WORK
          </span>
          <span className="font-mono text-xs md:text-sm tracking-widest text-cyan-300/80 font-semibold">
            03 / n _
          </span>
        </div>

        {/* GIANT GLOWING DARK-GLASS /WORK HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 md:mb-12 overflow-hidden"
        >
          <h1 className="text-[20vw] sm:text-[18vw] md:text-[13rem] lg:text-[16rem] font-black uppercase tracking-tighter leading-none text-white/15 font-sans select-none whitespace-nowrap -ml-2 sm:-ml-4 drop-shadow-[0_0_35px_rgba(103,232,249,0.12)]">
            /WORK
          </h1>
        </motion.div>

        {/* Section Sub-heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-12 md:mb-16">
          <p className="text-lg sm:text-xl md:text-2xl font-normal text-slate-200 max-w-2xl leading-relaxed">
            A curated selection of production web applications, AI agent workflows, and cloud systems built for scale and performance.
          </p>
          <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider mt-4 md:mt-0 font-medium">
            SHOWCASING 0{projectsData.length} FEATURED SHIPS
          </span>
        </div>

        {/* Dark Glassmorphism Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {projectsData.map((project, index) => {
            const imageSrc = getProjectImage(project);
            const indexStr = `0${index + 1}`;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card-dark rounded-[2.25rem] p-6 sm:p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group border border-cyan-100/15 hover:border-cyan-400/40 shadow-2xl flex flex-col justify-between"
              >
                {/* Ambient Glow Orb on Hover */}
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div>
                  {/* Top Card Metadata Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                    <span className="font-mono text-xs font-bold tracking-widest text-cyan-300">
                      PROJECT / {indexStr}
                    </span>
                    <span className="text-[11px] font-mono tracking-wider text-slate-300 uppercase bg-slate-950/50 px-3 py-1 rounded-full border border-cyan-200/15">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm md:text-base text-slate-300 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="text-[11px] font-mono tracking-wider text-cyan-200 bg-slate-950/60 border border-cyan-200/20 px-3 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Visual Preview Container */}
                  <div className="relative mt-8 overflow-hidden rounded-2xl border border-cyan-200/15 bg-slate-950/60 aspect-[16/10] flex items-center justify-center group-hover:border-cyan-400/30 transition-colors shadow-inner">
                    {imageSrc ? (
                      <img
                        src={imageSrc}
                        alt={project.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-purple-950/40 via-slate-950 to-cyan-950/40 p-8 flex flex-col justify-between">
                        <div className="flex items-center gap-2 text-cyan-300">
                          <Sparkles className="w-5 h-5" />
                          <span className="font-mono text-xs font-bold tracking-widest uppercase">
                            SOURCE ARCHITECTURE
                          </span>
                        </div>
                        <h4 className="text-2xl font-bold text-white tracking-tight">
                          {project.name}
                        </h4>
                        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                          <span>// PRODUCTION READY CODEBASE</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Action CTA Bar */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-primary text-xs py-2.5 px-5 shadow-[0_0_20px_rgba(103,232,249,0.25)]"
                    >
                      LIVE PREVIEW <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      onClick={() => onSelectProject(project)}
                      className="button-primary text-xs py-2.5 px-5 shadow-[0_0_20px_rgba(103,232,249,0.25)] cursor-pointer"
                    >
                      EXPLORE DETAILS <ArrowUpRight className="w-4 h-4" />
                    </button>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-secondary text-xs py-2.5 px-4"
                    >
                      <Github className="w-3.5 h-3.5" /> SOURCE <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
