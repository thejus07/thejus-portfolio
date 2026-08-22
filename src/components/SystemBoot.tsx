import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldCheck, Zap } from 'lucide-react';

interface SystemBootProps {
  onComplete: () => void;
}

export const SystemBoot: React.FC<SystemBootProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isOnline, setIsOnline] = useState(false);
  const [bootDismissed, setBootDismissed] = useState(false);

  const steps = [
    '01  LOADING IDENTITY',
    '02  LOADING EXPERIENCE',
    '03  LOADING SYSTEMS',
    '04  LOADING PROJECTS',
  ];

  useEffect(() => {
    // Progress counter animation from 0% to 100%
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 28);

    // Step sequence triggers
    const step1 = setTimeout(() => setCurrentStep(1), 500);
    const step2 = setTimeout(() => setCurrentStep(2), 1000);
    const step3 = setTimeout(() => setCurrentStep(3), 1500);

    const onlineTimer = setTimeout(() => {
      setIsOnline(true);
    }, 1800);

    const completeTimer = setTimeout(() => {
      setBootDismissed(true);
      onComplete();
    }, 2600);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(step3);
      clearTimeout(onlineTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (bootDismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05, filter: 'blur(20px)' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 bg-[#08080A] flex flex-col justify-between p-8 md:p-16 font-mono selection:bg-blue-600 text-zinc-300 pointer-events-auto overflow-hidden"
      >
        {/* Subtle scanning grid background */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-400/40 shadow-[0_0_20px_rgba(34,211,238,0.8)] animate-pulse" />

        {/* Top Header */}
        <div className="flex justify-between items-center z-10 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyan-400 animate-spin" />
            <span className="text-cyan-400 font-semibold tracking-wider">SYSTEM INITIALIZING...</span>
          </div>
          <button
            onClick={() => {
              setBootDismissed(true);
              onComplete();
            }}
            className="text-[11px] text-zinc-500 hover:text-white transition-colors border border-zinc-800 px-3 py-1 rounded-full"
          >
            [ Skip Boot ]
          </button>
        </div>

        {/* Center Sequence Area */}
        <div className="max-w-xl mx-auto w-full my-auto space-y-8 z-10">
          {/* Steps Status List */}
          <div className="space-y-3 text-xs md:text-sm">
            {steps.map((stepText, idx) => {
              const isLoaded = currentStep >= idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: isLoaded ? 1 : 0.3, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-between items-center"
                >
                  <span className={isLoaded ? 'text-zinc-200 font-medium' : 'text-zinc-600'}>
                    {stepText}
                  </span>
                  {isLoaded ? (
                    <span className="text-emerald-400 text-xs flex items-center gap-1 font-bold">
                      <ShieldCheck className="w-3.5 h-3.5" /> [ READY ]
                    </span>
                  ) : (
                    <span className="text-zinc-600 text-xs">[ QUEUED ]</span>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Progress Bar & Counter */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-zinc-400">
              <span>CORE ARCHITECTURE</span>
              <span className="font-bold text-cyan-400">{progress}%</span>
            </div>
            <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden border border-zinc-800">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* System Online Status Announcement */}
          {isOnline && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="text-center py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 font-bold tracking-widest text-sm flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(16,185,129,0.3)]"
            >
              <Zap className="w-4 h-4 text-emerald-400 animate-pulse" />
              SYSTEM ONLINE // ENTERING ENVIRONMENT
            </motion.div>
          )}
        </div>

        {/* Bottom Footer Details */}
        <div className="flex justify-between items-center text-[10px] text-zinc-600 z-10">
          <span>THEJUS M // SOFTWARE ENGINEER</span>
          <span>v2.4.0 // ALL SYSTEMS OPERATIONAL</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
