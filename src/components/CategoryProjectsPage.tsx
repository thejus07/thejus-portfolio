import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project, projectsData, ProjectCategoryType } from '../data/projects';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Github, 
  ExternalLink, 
  Globe, 
  Bot, 
  Sparkles, 
  ChevronRight 
} from 'lucide-react';

interface CategoryProjectsPageProps {
  category: ProjectCategoryType;
  onSelectCategory: (category: ProjectCategoryType) => void;
  onBack: () => void;
  onSelectProject: (project: Project) => void;
}

export const CategoryProjectsPage: React.FC<CategoryProjectsPageProps> = ({
  category,
  onSelectCategory,
  onBack,
  onSelectProject,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [category]);

  const filteredProjects = projectsData.filter((p) => p.categoryType === category);
  const isAi = category === 'ai';

  const categoryMeta = {
    web: {
      giantTitle: '/WEB',
      title: 'Web Applications',
      otherCategory: 'ai' as ProjectCategoryType,
      otherTitle: 'AI Models',
    },
    ai: {
      giantTitle: '/AI',
      title: 'AI Models & Intelligent Agents',
      otherCategory: 'web' as ProjectCategoryType,
      otherTitle: 'Web Applications',
    },
  }[category];

  const getProjectImage = (project: Project) => {
    if (project.imageUrl) return project.imageUrl;
    if (project.id === 'aera') return '/project-images/aera.png';
    if (project.id === 'trex') return '/project-images/trex.png';
    if (project.id === 'cortex-ai-chatbot') return '/project-images/cortex-ai-chatbot.png';
    if (project.id === 'fit-flow-web') return '/project-images/fit-flow.png';
    if (project.id === 'assessment-pixelmind-recruiter-ai') return '/project-images/pixelmind-recruiter-ai.png';
    if (project.id === 'embark') return '/project-images/embark.png';
    return null;
  };

  return (
    <div className="min-h-screen text-slate-100 relative z-20 pb-32">
      {/* Floating Dark Glass Taskbar - exact style as Home Page Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 py-3 md:py-4 px-4 md:px-6 transition-all duration-300">
        <div className="max-w-5xl mx-auto rounded-full px-6 py-2.5 flex items-center justify-between bg-slate-950/60 backdrop-blur-xl border border-cyan-100/10 shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_10px_30px_rgba(0,0,0,0.5)]">
          {/* Brand Logo / Back Home */}
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-xs font-bold tracking-widest text-white uppercase font-mono cursor-pointer"
          >
            <span
              className={`w-2 h-2 rounded-full transition-transform duration-300 group-hover:scale-150 ${
                isAi
                  ? 'bg-purple-400 shadow-[0_0_14px_rgba(168,85,247,.9)]'
                  : 'bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,.9)]'
              }`}
            />
            <span>Thejus M</span>
          </button>

          {/* Center Back Pill */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase text-zinc-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-white/10 transition-all duration-300 cursor-pointer shadow-sm group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to Portfolio</span>
          </button>

          {/* Quick Domain Switcher Pills */}
          <div className="flex items-center gap-1 bg-slate-950/80 p-1 rounded-full border border-white/10">
            <button
              onClick={() => onSelectCategory('web')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                category === 'web'
                  ? 'bg-gradient-to-r from-violet-500 to-cyan-500 text-white font-semibold shadow-[0_0_14px_rgba(103,232,249,.3)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Globe className="w-3 h-3" />
              <span className="hidden sm:inline">Web Apps</span>
            </button>
            <button
              onClick={() => onSelectCategory('ai')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                category === 'ai'
                  ? 'bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold shadow-[0_0_14px_rgba(168,85,247,.3)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Bot className="w-3 h-3" />
              <span className="hidden sm:inline">AI Models</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Section matching Home Page #work */}
      <section className="py-24 md:py-36 px-4 sm:px-6 max-w-6xl mx-auto z-10 relative">
        <div className="w-full">
          {/* Top Header Bar */}
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <span className="eyebrow">
              // {category === 'web' ? 'WEB APPLICATIONS' : 'AI MODELS'}
            </span>
            <span
              className={`font-mono text-xs md:text-sm tracking-widest font-semibold ${
                isAi ? 'text-purple-300/80' : 'text-cyan-300/80'
              }`}
            >
              0{filteredProjects.length} / SHIPS _
            </span>
          </div>

          {/* GIANT GLOWING DARK-GLASS HEADING - Identical Home Page Typography */}
          <motion.div
            key={categoryMeta.giantTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 md:mb-12 overflow-hidden"
          >
            <h1
              className={`text-[20vw] sm:text-[18vw] md:text-[13rem] lg:text-[16rem] font-black uppercase tracking-tighter leading-none text-white/15 font-sans select-none whitespace-nowrap -ml-2 sm:-ml-4 ${
                isAi
                  ? 'drop-shadow-[0_0_35px_rgba(168,85,247,0.15)]'
                  : 'drop-shadow-[0_0_35px_rgba(103,232,249,0.12)]'
              }`}
            >
              {categoryMeta.giantTitle}
            </h1>
          </motion.div>

          {/* Section Sub-heading Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-12 md:mb-16 gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              {categoryMeta.title}
            </h2>
            <span
              className={`text-xs font-mono uppercase tracking-wider font-medium ${
                isAi ? 'text-purple-300' : 'text-cyan-300'
              }`}
            >
              SHOWCASING 0{filteredProjects.length} FEATURED SHIPS
            </span>
          </div>

          {/* Dark Glassmorphism Projects Grid - Identical Home Page Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <AnimatePresence>
              {filteredProjects.map((project, index) => {
                const imageSrc = getProjectImage(project);
                const indexStr = `0${index + 1}`;

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="glass-card-dark rounded-[2.25rem] p-6 sm:p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group border border-cyan-100/15 hover:border-cyan-400/40 shadow-2xl flex flex-col justify-between"
                  >
                    {/* Ambient Glow Orb on Hover */}
                    <div
                      className={`absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${
                        isAi ? 'bg-purple-500/20' : 'bg-cyan-500/15'
                      }`}
                    />

                    <div>
                      {/* Top Card Metadata Bar */}
                      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                        <span
                          className={`font-mono text-xs font-bold tracking-widest ${
                            isAi ? 'text-purple-300' : 'text-cyan-300'
                          }`}
                        >
                          PROJECT / {indexStr}
                        </span>
                        <span className="text-[11px] font-mono tracking-wider text-slate-300 uppercase bg-slate-950/50 px-3 py-1 rounded-full border border-cyan-200/15">
                          {project.category}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3
                        className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white transition-colors duration-300 ${
                          isAi ? 'group-hover:text-purple-300' : 'group-hover:text-cyan-300'
                        }`}
                      >
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
                            className={`text-[11px] font-mono tracking-wider bg-slate-950/60 border px-3 py-1 rounded-md ${
                              isAi
                                ? 'text-purple-200 border-purple-300/20'
                                : 'text-cyan-200 border-cyan-200/20'
                            }`}
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
            </AnimatePresence>
          </div>

          {/* Bottom Switcher Card matching home page glass styling */}
          <div className="mt-20 glass-card-dark rounded-[2.25rem] p-8 sm:p-10 border border-cyan-100/15 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="eyebrow">// OTHER DISCIPLINE</span>
              <h4 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Explore {categoryMeta.otherTitle}
              </h4>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onSelectCategory(categoryMeta.otherCategory)}
                className="button-primary text-xs py-3 px-6 cursor-pointer flex items-center gap-2"
              >
                <span>SWITCH TO {categoryMeta.otherCategory === 'web' ? 'WEB APPS' : 'AI MODELS'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={onBack}
                className="button-secondary text-xs py-3 px-5 cursor-pointer"
              >
                BACK TO OVERVIEW
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
