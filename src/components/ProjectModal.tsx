import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu } from 'lucide-react';
import { Project } from '../data/projects';
import { ProjectVisuals } from './ProjectVisuals';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl bg-white dark:bg-zinc-900 rounded-3xl shadow-apple-lg overflow-hidden border border-black/10 dark:border-white/10 z-10 my-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-md flex items-center justify-center text-zinc-700 dark:text-zinc-200 hover:bg-black/20 dark:hover:bg-white/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Visual Area */}
            <div className="w-full h-64 md:h-80">
              <ProjectVisuals type={project.visualType} title={project.name} />
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Header */}
              <div>
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1">
                  {project.category}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                  {project.name}
                </h3>
              </div>

              {/* Full Description */}
              <p className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed">
                {project.fullDescription}
              </p>

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Key Capabilities & Features
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-zinc-50 dark:bg-zinc-800/50 p-2.5 rounded-xl border border-zinc-100 dark:border-zinc-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-white shrink-0 mt-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Architecture Highlights */}
              {project.architecture && project.architecture.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-blue-500" />
                    Architecture & Stack
                  </h4>
                  <div className="space-y-2">
                    {project.architecture.map((arch, idx) => (
                      <div key={idx} className="text-xs font-mono bg-zinc-900 text-zinc-200 p-2.5 rounded-lg border border-zinc-800 flex items-center gap-2">
                        <Cpu className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{arch}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Badges */}
              <div className="pt-2">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Technologies Used</div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-full text-xs font-medium border border-zinc-200 dark:border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-zinc-100 dark:border-zinc-800">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View Repository
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
