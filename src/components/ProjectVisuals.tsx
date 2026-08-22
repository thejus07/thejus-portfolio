import React from 'react';
import { Activity, Cpu, Database, Server, Terminal, CheckCircle2, Zap } from 'lucide-react';

interface ProjectVisualProps {
  type: 'dashboard' | 'mobile' | 'ai' | 'pipeline' | 'serverless';
  title?: string;
}

export const ProjectVisuals: React.FC<ProjectVisualProps> = ({ type }) => {
  switch (type) {
    case 'dashboard':
      return (
        <div className="w-full h-full bg-gradient-to-br from-zinc-100 to-zinc-200/80 p-6 md:p-8 flex flex-col justify-between overflow-hidden relative group-hover:scale-[1.01] transition-transform duration-500 rounded-t-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
          
          {/* Mockup Header */}
          <div className="flex items-center justify-between bg-white/90 backdrop-blur-md px-4 py-3 rounded-xl border border-black/5 shadow-sm mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400/80" />
              <div className="w-3 h-3 rounded-full bg-amber-400/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
              <span className="text-xs font-mono text-zinc-400 ml-2">gymora-admin.internal</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200/50">SYSTEM ACTIVE</span>
            </div>
          </div>

          {/* Dashboard Main Grid */}
          <div className="grid grid-cols-12 gap-3 flex-1">
            {/* Stat Box 1 */}
            <div className="col-span-7 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-black/5 flex flex-col justify-between shadow-xs">
              <div className="flex justify-between items-start">
                <span className="text-xs text-zinc-500 font-medium">Monthly Active Members</span>
                <span className="text-[10px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded font-mono">+14.2%</span>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900">2,840</div>
                <div className="w-full bg-zinc-100 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-zinc-900 h-full w-[78%] rounded-full" />
                </div>
              </div>
            </div>

            {/* Stat Box 2 */}
            <div className="col-span-5 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-black/5 flex flex-col justify-between shadow-xs">
              <span className="text-xs text-zinc-500 font-medium">Revenue</span>
              <div>
                <div className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900">$48,250</div>
                <span className="text-[11px] text-zinc-400 font-mono">AWS RDS Synced</span>
              </div>
            </div>

            {/* Members List Mockup */}
            <div className="col-span-12 bg-white/90 backdrop-blur-sm p-3.5 rounded-xl border border-black/5 space-y-2">
              <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">Live Check-ins</div>
              <div className="flex items-center justify-between text-xs py-1 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center font-bold text-[10px]">TM</div>
                  <span className="font-medium text-zinc-800">Alex R.</span>
                </div>
                <span className="text-emerald-600 font-mono text-[11px]">Checked in</span>
              </div>
              <div className="flex items-center justify-between text-xs py-1">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center font-bold text-[10px]">SK</div>
                  <span className="font-medium text-zinc-800">Sarah K.</span>
                </div>
                <span className="text-zinc-400 font-mono text-[11px]">Pro Tier</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'mobile':
      return (
        <div className="w-full h-full bg-zinc-900 p-6 md:p-8 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-500 rounded-t-2xl">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-zinc-900 to-zinc-800" />
          
          {/* Mobile frame */}
          <div className="relative w-64 bg-zinc-950 border border-zinc-700/60 rounded-[32px] p-3 shadow-2xl space-y-3">
            {/* Notch */}
            <div className="w-20 h-3 bg-zinc-800 rounded-full mx-auto mb-1" />
            
            {/* App Header */}
            <div className="flex justify-between items-center px-1">
              <div>
                <div className="text-[10px] text-zinc-400 uppercase font-mono tracking-wider">FITFLOW AI</div>
                <div className="text-sm font-semibold text-white">Today's Summary</div>
              </div>
              <Activity className="w-4 h-4 text-emerald-400" />
            </div>

            {/* Circular Progress */}
            <div className="bg-zinc-900/90 p-4 rounded-2xl border border-zinc-800 text-center relative">
              <div className="text-3xl font-extrabold text-white">8,420</div>
              <div className="text-[11px] text-zinc-400 font-medium">Steps / 10,000</div>
              <div className="mt-2 w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full w-[84%] rounded-full" />
              </div>
            </div>

            {/* AI Recommendation Pill */}
            <div className="bg-emerald-950/40 border border-emerald-500/30 p-2.5 rounded-xl flex items-start gap-2">
              <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-[11px] text-emerald-200">
                <span className="font-semibold block text-emerald-400">AI Recovery Insight</span>
                Optimal rest zone reached. Recommend 45m mobility session.
              </div>
            </div>
          </div>
        </div>
      );

    case 'ai':
      return (
        <div className="w-full h-full bg-zinc-950 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-500 rounded-t-2xl">
          {/* Animated neural ambient light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-indigo-400" />
              <span className="text-xs font-mono font-medium text-zinc-300">LEO v2.4 // AI AGENT</span>
            </div>
            <span className="text-[10px] font-mono bg-indigo-500/10 text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-500/20">AUTONOMOUS</span>
          </div>

          {/* Waveform graphic */}
          <div className="my-6 z-10 flex items-center justify-center gap-1.5 h-16">
            {[40, 70, 30, 90, 100, 60, 85, 45, 95, 30, 65, 80, 50].map((height, i) => (
              <div
                key={i}
                className="w-1.5 bg-gradient-to-t from-indigo-500 to-purple-400 rounded-full transition-all duration-300"
                style={{ height: `${height}%`, opacity: 0.6 + (i % 3) * 0.2 }}
              />
            ))}
          </div>

          {/* Prompt Console Box */}
          <div className="bg-zinc-900/90 backdrop-blur-md p-4 rounded-xl border border-zinc-800 z-10 space-y-2">
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <Terminal className="w-3.5 h-3.5 text-indigo-400" />
              <span>&gt; Summarize architecture logs & deploy tasks...</span>
            </div>
            <div className="bg-zinc-950 p-2.5 rounded-lg border border-zinc-800/80 text-[11px] font-mono text-zinc-300 flex justify-between items-center">
              <span>Task executed in 120ms (0 errors)</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </div>
          </div>
        </div>
      );

    case 'pipeline':
      return (
        <div className="w-full h-full bg-zinc-900 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-500 rounded-t-2xl text-white">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-mono text-zinc-300">AWS EKS // TERRAFORM CLUSTER</span>
            </div>
            <span className="text-[10px] font-mono bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">AZ-US-EAST-1</span>
          </div>

          {/* Topology diagram */}
          <div className="my-4 grid grid-cols-3 gap-3">
            <div className="bg-zinc-950/80 p-3 rounded-xl border border-zinc-800 text-center">
              <div className="text-[10px] text-zinc-500 font-mono uppercase mb-1">Terraform</div>
              <div className="text-xs font-semibold text-blue-400">tf.state synced</div>
            </div>
            <div className="bg-zinc-950/80 p-3 rounded-xl border border-zinc-800 text-center">
              <div className="text-[10px] text-zinc-500 font-mono uppercase mb-1">Docker</div>
              <div className="text-xs font-semibold text-emerald-400">12 Pods Active</div>
            </div>
            <div className="bg-zinc-950/80 p-3 rounded-xl border border-zinc-800 text-center">
              <div className="text-[10px] text-zinc-500 font-mono uppercase mb-1">Jenkins</div>
              <div className="text-xs font-semibold text-amber-400">Build #148 PASSED</div>
            </div>
          </div>

          {/* Status bar */}
          <div className="bg-zinc-950/90 p-3 rounded-xl border border-zinc-800 font-mono text-xs text-zinc-400 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Kubernetes Ingress (14ms latency)</span>
            </div>
            <span className="text-zinc-500 text-[10px]">HA 99.99%</span>
          </div>
        </div>
      );

    case 'serverless':
      return (
        <div className="w-full h-full bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-500 rounded-t-2xl text-white">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono text-zinc-300">AWS S3 -&gt; LAMBDA -&gt; REKOGNITION</span>
            </div>
            <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">EVENT-DRIVEN</span>
          </div>

          {/* Serverless pipeline flow */}
          <div className="my-4 flex items-center justify-between bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
            <div className="text-center">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400 text-xs font-mono font-bold">S3</div>
              <span className="text-[10px] text-zinc-400 font-mono mt-1 block">Image Put</span>
            </div>
            <div className="h-0.5 flex-1 bg-gradient-to-r from-amber-500/50 to-purple-500/50 mx-2" />
            <div className="text-center">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mx-auto text-purple-400 text-xs font-mono font-bold">SQS</div>
              <span className="text-[10px] text-zinc-400 font-mono mt-1 block">Queue</span>
            </div>
            <div className="h-0.5 flex-1 bg-gradient-to-r from-purple-500/50 to-emerald-500/50 mx-2" />
            <div className="text-center">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400 text-xs font-mono font-bold">AI</div>
              <span className="text-[10px] text-zinc-400 font-mono mt-1 block">Moderated</span>
            </div>
          </div>

          {/* Execution summary */}
          <div className="bg-zinc-900/80 p-3 rounded-xl border border-zinc-800 font-mono text-xs text-zinc-300 flex justify-between items-center">
            <span className="text-amber-400">&gt; rekognition.detect_moderation_labels()</span>
            <span className="text-emerald-400 text-[11px]">SAFE (100%)</span>
          </div>
        </div>
      );

    default:
      return null;
  }
};
