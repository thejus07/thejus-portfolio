import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, CheckCircle2, Briefcase, Building, Mail, MessageSquare, Loader2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HireMeModal: React.FC<HireMeModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    position: '',
    company: '',
    email: '',
    comments: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSubmitted(false);
      setIsSubmitting(false);
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
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send form data silently in the background directly to thejuskadavath@gmail.com
      await fetch(`https://formsubmit.co/ajax/${portfolioData.identity.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Hiring Inquiry: ${formData.position} @ ${formData.company}`,
          _template: 'table',
          'Position / Role': formData.position,
          'Company Name': formData.company,
          'Sender Email': formData.email,
          'Job Details / Comments': formData.comments || 'No extra comments provided.',
        }),
      });
    } catch (err) {
      console.error('Error delivering email inquiry:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    setFormData({ position: '', company: '', email: '', comments: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg glass-card-dark rounded-3xl p-6 md:p-8 shadow-2xl border border-zinc-800 z-10 my-8 overflow-hidden"
          >
            {/* Ambient Top Glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Inquiry Sent Automatically!</h3>
                  <p className="text-xs md:text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
                    Your details for <span className="text-blue-400 font-semibold">{formData.position || 'the role'}</span> at <span className="text-blue-400 font-semibold">{formData.company || 'your company'}</span> have been sent directly to <span className="text-blue-400 font-semibold">{portfolioData.identity.email}</span>.
                  </p>
                </div>

                <div className="p-4 bg-zinc-900/80 rounded-2xl border border-zinc-800 text-left text-xs space-y-1.5 font-mono text-zinc-400">
                  <div><span className="text-zinc-500">Target Email:</span> <span className="text-white">{portfolioData.identity.email}</span></div>
                  <div><span className="text-zinc-500">Role:</span> <span className="text-cyan-300">{formData.position}</span></div>
                  <div><span className="text-zinc-500">Company:</span> <span className="text-cyan-300">{formData.company}</span></div>
                  <div><span className="text-zinc-500">Sender Email:</span> <span className="text-cyan-300">{formData.email}</span></div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleResetAndClose}
                    className="w-full sm:w-auto px-8 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            ) : (
              <div>
                {/* Header */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-semibold bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/30 inline-flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    WORK OPPORTUNITY
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    Let's Build Together.
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-400">
                    Send opportunity details directly to <span className="text-blue-400 font-semibold">{portfolioData.identity.email}</span>.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Position / Role */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-zinc-300 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                      Position / Role <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Cloud AI Architect / Senior DevOps Engineer"
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-zinc-300 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-cyan-400" />
                      Company Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Corp / Tech Innovators"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-zinc-300 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-emerald-400" />
                      Work Email <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  {/* Comments */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-zinc-300 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
                      Comments / Job Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe the project, scope, or role requirements..."
                      value={formData.comments}
                      onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                      className="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          Sending Email...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Inquiry Automatically
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
