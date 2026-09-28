import React from 'react';
import { motion } from 'framer-motion';
import { Project, projectsData, ProjectCategoryType } from '../data/projects';
import { Globe, Bot, ArrowRight } from 'lucide-react';
import { ProjectCardDeck } from './ProjectCardDeck';

interface ProjectsProps {
  onOpenCategory: (category: ProjectCategoryType) => void;
  onSelectProject?: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenCategory, onSelectProject }) => {
  const categoryCards = [
    {
      id: 'web' as ProjectCategoryType,
      glowColor: 'bg-cyan-500/15',
      icon: Globe,
      iconBg: 'bg-cyan-950/60 border-cyan-500/30 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.25)]',
      title: 'Web Applications',
      tagline: 'Interactive Product Flows & Cloud-Deployed Web Systems',
      featuredProjects: [
        { id: 'aera', name: 'ÆRA', tag: 'Luxury Hospitality Platform', image: '/project-images/aera.png', link: 'https://aera-teal.vercel.app/' },
        { id: 'trex', name: 'TREX', tag: 'Motion & Mobility App', image: '/project-images/trex.png', link: 'https://trex-weld.vercel.app/' },
        { id: 'fit-flow-web', name: 'Fit Flow Web', tag: 'Live on Vercel', image: '/project-images/fit-flow.png', link: 'https://fit-flow-web-one.vercel.app' },
        { id: 'embark', name: 'Embark', tag: 'Live on Vercel', image: '/project-images/embark.png', link: 'https://embark-nine.vercel.app' },
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'REST APIs', 'Vite'],
      buttonText: 'Show More Web Projects',
    },
    {
      id: 'ai' as ProjectCategoryType,
      glowColor: 'bg-purple-500/20',
      icon: Bot,
      iconBg: 'bg-purple-950/60 border-purple-500/30 text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.25)]',
      title: 'AI Models & Agents',
      tagline: 'Conversational LLMs & Agentic Automation Systems',
      featuredProjects: [
        { id: 'cortex-ai-chatbot', name: 'Cortex AI Chatbot', tag: 'Live Chatbot', image: '/project-images/cortex-ai-chatbot.png', link: 'https://cortex-ai-chatbot.vercel.app' },
        { id: 'assessment-pixelmind-recruiter-ai', name: 'Pixelmind Recruiter AI', tag: 'Recruiter AI System', image: '/project-images/pixelmind-recruiter-ai.png', link: 'https://assessment-pixelmind-recruiter-ai.vercel.app/' },
      ],
      technologies: ['Agentic AI', 'RAG Pipelines', 'LLM Integration', 'TypeScript', 'Python'],
      buttonText: 'Show More AI Projects',
    },
  ];

  return (
    <section
      id="work"
      className="py-24 md:py-36 px-4 sm:px-6 max-w-6xl mx-auto z-10 relative"
    >
      <div className="w-full">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <span className="eyebrow">// SELECTED DISCIPLINES</span>
          <span className="font-mono text-xs md:text-sm tracking-widest text-cyan-300/80 font-semibold">
            02 / DOMAINS _
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
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-12 md:mb-16 gap-4">
          <p className="text-lg sm:text-xl md:text-2xl font-normal text-slate-200 max-w-2xl leading-relaxed">
            Architecting modern digital solutions across two specialized pillars: production Web Applications and intelligent AI Models.
          </p>
          <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider font-medium">
            SELECT A DOMAIN TO VIEW PROJECTS
          </span>
        </div>

        {/* EXACTLY 2 CATEGORY CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {categoryCards.map((card, index) => {
            const Icon = card.icon;
            const isAi = card.id === 'ai';

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card-dark rounded-[2.25rem] p-6 sm:p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group border border-cyan-100/15 hover:border-cyan-400/40 shadow-2xl flex flex-col justify-between"
              >
                {/* Ambient Glow Orb on Hover */}
                <div
                  className={`absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${card.glowColor}`}
                />

                <div>
                  {/* Header Title with Icon */}
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 ${card.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3
                        className={`text-2xl sm:text-3xl font-bold tracking-tight text-white transition-colors duration-300 ${
                          isAi ? 'group-hover:text-purple-300' : 'group-hover:text-cyan-300'
                        }`}
                      >
                        {card.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-400 mt-1">
                        {card.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Dynamic 3D Card Deck Preview */}
                  <ProjectCardDeck
                    items={card.featuredProjects}
                    categoryType={card.id}
                    onOpenCategory={onOpenCategory}
                    onSelectProject={(projectId) => {
                      const proj = projectsData.find((p) => p.id === projectId);
                      if (proj && onSelectProject) {
                        onSelectProject(proj);
                      } else {
                        onOpenCategory(card.id);
                      }
                    }}
                  />

                  {/* Core Tech Stack Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {card.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono tracking-wider text-cyan-200 bg-slate-950/60 border border-cyan-200/20 px-3 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Show More Button */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-end">
                  <button
                    onClick={() => onOpenCategory(card.id)}
                    className="button-primary text-xs py-3 px-6 shadow-[0_0_20px_rgba(103,232,249,0.25)] cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2 group/btn"
                  >
                    <span>{card.buttonText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
