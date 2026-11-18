import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, ExternalLink, Sparkles, Award, Briefcase, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResume: () => void;
  pdfUrl?: string;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({
  onOpenResume,
  pdfUrl = '/Thejus.pdf',
}) => {
  return (
    <section
      id="resume"
      className="py-24 md:py-36 px-4 sm:px-6 max-w-6xl mx-auto z-10 relative"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 md:mb-16"
      >
        <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/30 inline-block mb-3 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          CURRICULUM VITAE
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          Resume &amp; Credentials.
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
          Explore my complete background across Cloud Architecture, Generative AI systems,
          DevOps pipelines, and software engineering. Available for quick pop-up viewing or direct PDF download.
        </p>
      </motion.div>

      {/* Main Glass Resume Showcase Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card-dark rounded-[2.5rem] p-6 sm:p-10 md:p-12 relative overflow-hidden shadow-2xl border border-cyan-100/15"
      >
        {/* Glow Effects */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Summary & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="font-mono text-xs text-cyan-300 uppercase tracking-widest font-semibold">
                Verified Document • Updated 2026
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {portfolioData.identity.name}
              </h3>
              <p className="text-violet-300 font-mono text-xs sm:text-sm mt-1">
                {portfolioData.identity.title}
              </p>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-3 max-w-xl">
                Specialized in GenAI stacks, AWS infrastructure, Terraform IaC, agentic workflows,
                and production-grade microservices with end-to-end CI/CD automation.
              </p>
            </div>

            {/* Resume Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-cyan-300 text-xs font-semibold">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Experience</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  AI Assisted Engineer at Pixelmind Co. &amp; Cloud DevOps
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-violet-300 text-xs font-semibold">
                  <Award className="w-3.5 h-3.5" />
                  <span>Certified</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  AWS Solutions Architect &amp; Google Cloud AI
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-cyan-300 text-xs font-semibold">
                  <Code className="w-3.5 h-3.5" />
                  <span>Stack</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  AWS, Docker, K8s, Terraform, Python, React, RAG
                </p>
              </div>
            </div>

            {/* CTAs: Open Popup & Download Option */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              {/* Button to open popup modal */}
              <button
                type="button"
                onClick={onOpenResume}
                className="group flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 hover:from-cyan-200 hover:to-violet-200 px-6 py-3.5 rounded-2xl shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4 text-slate-950 transition-transform group-hover:scale-110" />
                <span>Open Resume Pop-up</span>
              </button>

              {/* Direct Download Option */}
              <a
                href={pdfUrl}
                download="Thejus_Resume.pdf"
                className="group flex items-center gap-2 text-xs sm:text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800 px-5 py-3.5 rounded-2xl border border-white/10 hover:border-cyan-400/40 shadow-lg transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400 transition-transform group-hover:-translate-y-0.5" />
                <span>Download PDF</span>
              </a>

              {/* View in new tab */}
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white px-3 py-2 transition-colors"
              >
                <span>New Tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Document Preview Teaser */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              onClick={onOpenResume}
              className="group relative w-full max-w-sm rounded-2xl p-5 bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-cyan-500/20 hover:border-cyan-400/50 shadow-xl cursor-pointer transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Document Header Mock */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white block">Thejus.pdf</span>
                    <span className="text-[10px] text-slate-400 font-mono">150 KB • PDF Document</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  Ready
                </span>
              </div>

              {/* Document Silhouette Skeleton */}
              <div className="space-y-2.5 opacity-70 group-hover:opacity-90 transition-opacity">
                <div className="h-3 w-1/2 bg-cyan-400/30 rounded" />
                <div className="h-2 w-3/4 bg-slate-700/60 rounded" />
                <div className="h-2 w-full bg-slate-800/80 rounded" />
                <div className="h-2 w-5/6 bg-slate-800/80 rounded" />
                <div className="pt-2 space-y-1.5">
                  <div className="h-2 w-1/3 bg-violet-400/30 rounded" />
                  <div className="h-2 w-full bg-slate-800/60 rounded" />
                  <div className="h-2 w-4/5 bg-slate-800/60 rounded" />
                </div>
              </div>

              {/* Hover overlay hint */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-cyan-300">
                <span className="flex items-center gap-1 font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  Click to open full preview
                </span>
                <Eye className="w-3.5 h-3.5 text-cyan-300 transition-transform group-hover:scale-125" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
