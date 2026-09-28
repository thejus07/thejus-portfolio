import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { CredentialModal } from './CredentialModal';

export const Certifications: React.FC = () => {
  const [selectedCertId, setSelectedCertId] = useState<string | null>(null);

  return (
    <section className="py-28 md:py-36 px-6 max-w-6xl mx-auto z-10 relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 md:mb-20"
      >
        <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/30 inline-block mb-3 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          RECOGNITION & CERTIFICATIONS
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          Verified Credentials.
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.certifications.map((cert, idx) => {
          const isAws = cert.id === 'aws-csa';

          return (
            <motion.div
              key={cert.id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedCertId(cert.id)}
              className="glass-card-dark p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between group hover:border-cyan-400/40 cursor-pointer shadow-xl relative overflow-hidden"
            >
              {/* Subtle Ambient Hover Glow */}
              <div
                className={`absolute -top-24 -right-24 w-60 h-60 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${
                  isAws ? 'bg-cyan-500/15' : 'bg-purple-500/15'
                }`}
              />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-colors shadow-lg ${
                      isAws
                        ? 'bg-cyan-950/70 border-cyan-500/30 text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white'
                        : 'bg-purple-950/70 border-purple-500/30 text-purple-400 group-hover:bg-purple-600 group-hover:text-white'
                    }`}
                  >
                    <Award className="w-6 h-6" />
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                    <ShieldCheck className="w-3 h-3" /> Verified
                  </span>
                </div>

                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                    {cert.issuer} • {cert.year}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white leading-snug">
                    {cert.name}
                  </h3>
                  {cert.subtitle && (
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      {cert.subtitle}
                    </p>
                  )}
                </div>
              </div>

              <div className="pt-6 relative z-10">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCertId(cert.id);
                  }}
                  className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-xl border transition-all duration-300 group/btn cursor-pointer ${
                    isAws
                      ? 'text-cyan-300 hover:text-white bg-cyan-950/60 hover:bg-cyan-900/80 border-cyan-500/30 hover:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                      : 'text-purple-300 hover:text-white bg-purple-950/60 hover:bg-purple-900/80 border-purple-500/30 hover:border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.15)]'
                  }`}
                >
                  <span>Credential Verification</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Pop-up Modal containing the two verification buttons */}
      <CredentialModal
        isOpen={!!selectedCertId}
        onClose={() => setSelectedCertId(null)}
        initialCertId={selectedCertId || undefined}
      />
    </section>
  );
};

