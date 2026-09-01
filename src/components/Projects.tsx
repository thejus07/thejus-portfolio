import React from 'react';
import { motion } from 'framer-motion';
import { projectsData, Project } from '../data/projects';
import RoundCarousel from './originkit/ui/roundcarousel';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const projectCards = projectsData.map((project, index) => {
    const tones = [
      ['#25145d', '#22d3ee'],
      ['#123b58', '#a78bfa'],
      ['#172554', '#60a5fa'],
    ][index % 3];
    const [base, accent] = tones;
    const titleSize = project.name.length > 18 ? 46 : 58;
    const generatedArtwork = 'data:image/svg+xml,' + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="760" height="980" viewBox="0 0 760 980">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${base}"/><stop offset="1" stop-color="#080a1d"/></linearGradient>
            <filter id="blur"><feGaussianBlur stdDeviation="36"/></filter>
          </defs>
          <rect width="760" height="980" rx="42" fill="url(#g)"/>
          <circle cx="650" cy="145" r="180" fill="${accent}" opacity=".38" filter="url(#blur)"/>
          <rect x="35" y="35" width="690" height="910" rx="28" fill="none" stroke="white" stroke-opacity=".24"/>
          <text x="68" y="96" fill="white" fill-opacity=".7" font-family="monospace" font-size="18" letter-spacing="4">PROJECT / 0${index + 1}</text>
          <path d="M68 140H692" stroke="white" stroke-opacity=".18"/>
          <text x="68" y="385" fill="white" font-family="Arial, sans-serif" font-weight="700" font-size="${titleSize}" letter-spacing="-2">${project.name}</text>
          <text x="68" y="438" fill="${accent}" font-family="monospace" font-size="17" letter-spacing="2">${project.category.toUpperCase().slice(0, 42)}</text>
          <rect x="68" y="670" width="624" height="1" fill="white" fill-opacity=".2"/>
          <text x="68" y="735" fill="white" fill-opacity=".72" font-family="monospace" font-size="17">${project.technologies.slice(0, 3).join('  /  ')}</text>
          <circle cx="76" cy="870" r="8" fill="${accent}"/><text x="98" y="876" fill="white" fill-opacity=".75" font-family="monospace" font-size="17" letter-spacing="3">VIEW PROJECT</text>
        </svg>`);

    return {
      onClick: () => {
        if (project.link) {
          window.open(project.link, '_blank', 'noopener,noreferrer');
          return;
        }
        onSelectProject(project);
      },
      src: project.id === 'fit-flow-web'
        ? '/project-images/fit-flow.png'
        : project.id === 'assessment-pixelmind-recruiter-ai'
          ? '/project-images/pixelmind-recruiter-ai.png'
          : project.id === 'embark'
            ? '/project-images/embark.png'
          : generatedArtwork,
    };
  });

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

      <div className="glass-card-dark rounded-[2rem] md:rounded-[2.75rem] overflow-hidden grid lg:grid-cols-[.8fr_1.2fr] min-h-[560px]">
        <div className="p-8 md:p-12">
          <div>
            <p className="eyebrow mb-7">Project orbit</p>
            <h3 className="text-3xl md:text-5xl font-semibold tracking-[-0.055em] leading-[1.04] text-white">A closer look at what I ship.</h3>
            <p className="mt-6 max-w-sm text-slate-300 leading-relaxed">Drag through the work, then select a card to explore its architecture, decisions, and outcomes.</p>
          </div>
        </div>
        <div className="min-h-[430px] lg:min-h-0 border-t lg:border-t-0 lg:border-l border-white/10 bg-slate-950/20">
          <RoundCarousel
            images={projectCards}
            imageWidth={230}
            imageHeight={310}
            spacing={2.1}
            speed={2.2}
            tilt={-5}
            perspective={1450}
            cornerRadius={24}
            innerDim={9}
            background="transparent"
            style={{ minHeight: 430 }}
          />
        </div>
      </div>
    </section>
  );
};
