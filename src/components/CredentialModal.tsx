import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, FileText, Award, Check, Copy, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface CredentialModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCertId?: string;
}

export const CredentialModal: React.FC<CredentialModalProps> = ({
  isOpen,
  onClose,
  initialCertId,
}) => {
  const certifications = portfolioData.certifications;
  const [selectedId, setSelectedId] = useState<string>(
    initialCertId || certifications[0]?.id || 'aws-csa'
  );
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialCertId) {
      setSelectedId(initialCertId);
    }
  }, [initialCertId]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const currentCert =
    certifications.find((c) => c.id === selectedId) || certifications[0];

  const isAws = currentCert?.id === 'aws-csa';

  const copyValidationNumber = () => {
    if (currentCert?.validationNumber) {
      navigator.clipboard.writeText(currentCert.validationNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-slate-950 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div
              className={`absolute -top-24 -right-24 w-60 h-60 rounded-full blur-3xl opacity-20 pointer-events-none transition-colors duration-500 ${
                isAws ? 'bg-cyan-500' : 'bg-purple-500'
              }`}
            />

            {/* Top Bar: Badge & Close Button */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[11px] font-mono tracking-widest text-emerald-400 uppercase font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Credential
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-white/5"
                title="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Toggle Tabs Between The Two Credentials */}
            <div className="grid grid-cols-2 gap-2 mt-5 p-1 bg-slate-900/80 rounded-xl border border-white/5">
              {certifications.map((cert) => {
                const isActive = cert.id === currentCert.id;
                return (
                  <button
                    key={cert.id}
                    type="button"
                    onClick={() => {
                      setSelectedId(cert.id);
                      setCopied(false);
                    }}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg transition-all text-center truncate cursor-pointer ${
                      isActive
                        ? 'bg-slate-800 text-white shadow-md border border-white/10'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {cert.id === 'aws-csa' ? 'AWS Certified' : 'Google Cloud AI'}
                  </button>
                );
              })}
            </div>

            {/* Credential Content Card */}
            <div className="mt-6 space-y-5">
              {/* Badge / Graphic Preview */}
              {isAws ? (
                <div className="relative rounded-2xl p-6 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-cyan-500/20 text-center shadow-lg">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-cyan-950/70 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.25)] mb-3">
                    <Award className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block mb-1">
                    Amazon Web Services
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {currentCert.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Issued to <span className="text-slate-200 font-medium">Thejus M</span>
                  </p>
                </div>
              ) : (
                <div className="relative rounded-2xl p-5 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-purple-500/20 text-center shadow-lg">
                  {currentCert.badgeUrl && (
                    <div className="max-w-[260px] mx-auto rounded-xl overflow-hidden border border-white/10 shadow-xl mb-3 bg-white p-1">
                      <img
                        src={currentCert.badgeUrl}
                        alt={currentCert.name}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>
                  )}
                  <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 block mb-1">
                    Google Cloud • Verified Skill Badge
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {currentCert.subtitle || currentCert.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Issued by <span className="text-slate-200 font-medium">Google Cloud</span> via Credly
                  </p>
                </div>
              )}

              {/* Validation Details Box */}
              {currentCert.validationNumber && (
                <div className="rounded-xl bg-slate-900/70 border border-white/10 p-3.5 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Validation Number:
                    </span>
                    <button
                      type="button"
                      onClick={copyValidationNumber}
                      className="text-[11px] font-mono text-cyan-300 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                      title="Copy validation number"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="font-mono text-xs text-slate-200 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-white/5 break-all select-all">
                    {currentCert.validationNumber}
                  </p>

                  {(currentCert.issueDate || currentCert.expirationDate) && (
                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-white/5">
                      <span>Valid Period:</span>
                      <span className="text-slate-300 font-mono">
                        {currentCert.issueDate}
                        {currentCert.expirationDate ? ` — ${currentCert.expirationDate}` : ''}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* THE TWO VERIFICATION BUTTONS IN POP-UP */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {isAws ? (
                  <>
                    {/* Button 1: View PDF */}
                    <a
                      href={currentCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 text-xs font-semibold py-3 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all cursor-pointer group/btn"
                    >
                      <FileText className="w-4 h-4" />
                      <span>View PDF Certificate</span>
                      <ExternalLink className="w-3.5 h-3.5 text-cyan-200 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>

                    {/* Button 2: Verify on AWS */}
                    <a
                      href={currentCert.verificationUrl || 'https://aws.amazon.com/verification'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 text-xs font-semibold py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 hover:border-cyan-400/40 transition-all cursor-pointer group/btn"
                    >
                      <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      <span>Verify on AWS</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </>
                ) : (
                  <>
                    {/* Button 1: View on Credly */}
                    <a
                      href={currentCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 text-xs font-semibold py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all cursor-pointer group/btn"
                    >
                      <Award className="w-4 h-4" />
                      <span>View Badge on Credly</span>
                      <ExternalLink className="w-3.5 h-3.5 text-purple-200 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>

                    {/* Button 2: Public Verification Link */}
                    <a
                      href={currentCert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 text-xs font-semibold py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 hover:border-purple-400/40 transition-all cursor-pointer group/btn"
                    >
                      <ShieldCheck className="w-4 h-4 text-purple-400" />
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
