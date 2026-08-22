import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Check, Copy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const GitHubSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [terminalLineIndex, setTerminalLineIndex] = useState(0);

  const terminalLines = [
    'building ideas...',
    'shipping software...',
    'learning continuously...',
    'optimizing performance...',
    'deploying cloud architectures...'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTerminalLineIndex((prev) => (prev + 1) % terminalLines.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [terminalLines.length]);

  const copyCloneCommand = () => {
    navigator.clipboard.writeText('git clone https://github.com/thejus07/portfolio.git');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-zinc-950 text-white py-28 md:py-40 px-6 my-12 rounded-3xl max-w-6xl mx-auto overflow-hidden relative border border-zinc-800 shadow-apple-dark">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Heading & Description */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 space-y-6"
        >
          <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase font-semibold block">
            OPEN SOURCE & CODE
          </span>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Code speaks louder.
          </h2>

          <p className="text-zinc-400 text-lg md:text-xl font-normal leading-relaxed">
            Explore the projects, experiments, and ideas behind my work.
          </p>

          <div className="pt-2">
            <a
              href={portfolioData.identity.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-all duration-200 shadow-sm"
            >
              <Github className="w-4 h-4" />
              GitHub ↗
            </a>
          </div>
        </motion.div>

        {/* Right Column: Animated Interactive Terminal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 bg-zinc-900 rounded-2xl border border-zinc-800 p-5 md:p-6 font-mono shadow-2xl space-y-4"
        >
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs text-zinc-500 ml-2">thejus@macbook-pro ~ %</span>
            </div>
            <button
              onClick={copyCloneCommand}
              className="text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 bg-zinc-800 px-2.5 py-1 rounded"
              title="Copy git clone command"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Terminal Commands Output */}
          <div className="space-y-3 text-sm leading-relaxed">
            <div className="flex items-center gap-2 text-zinc-300">
              <span className="text-emerald-400 font-bold">$</span>
              <span>git status</span>
            </div>

            <div className="pl-4 border-l-2 border-zinc-800 space-y-1 text-zinc-400 text-xs md:text-sm">
              <p className="text-zinc-500">On branch main</p>
              <p className="text-zinc-500">Your branch is up to date with 'origin/main'.</p>

              <div className="pt-2 text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold">{terminalLines[terminalLineIndex]}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-zinc-300 text-xs md:text-sm">
              <span className="text-emerald-400 font-bold">$</span>
              <span className="text-zinc-500">git commit -m "always building SOFTWARE"</span>
              <span className="w-2 h-4 bg-zinc-400 inline-block animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
