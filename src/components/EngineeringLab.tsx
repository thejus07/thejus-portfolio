import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Terminal, Cpu, Zap, Activity, ArrowRight, GitBranch } from 'lucide-react';

interface Experiment {
  number: string;
  title: string;
  category: string;
  description: string;
  metric: string;
  tags: string[];
  snippet: string;
}

const experiments: Experiment[] = [
  {
    number: 'EXP 01',
    title: 'LLM Token Stream Engine',
    category: 'AI / Real-Time',
    description: 'Zero-latency WebSocket chunking buffer for streaming generative AI responses into React UI components.',
    metric: '< 18ms TTFT',
    tags: ['Python', 'WebSockets', 'React', 'LLM'],
    snippet: 'def stream_tokens(prompt):\n    async for chunk in model.generate(prompt):\n        yield parse_chunk(chunk)',
  },
  {
    number: 'EXP 02',
    title: 'High-Frequency Ingestion Mesh',
    category: 'Distributed Systems',
    description: 'Sub-millisecond event broker handling 100k events/sec with automatic dead-letter queue retries.',
    metric: '100k ev/sec',
    tags: ['Kafka', 'Docker', 'AWS SQS', 'Rust'],
    snippet: 'pub fn ingest(event: Event) -> Result<()> {\n    ring_buffer.push(event)?;\n    producer.send_async()\n}',
  },
  {
    number: 'EXP 03',
    title: 'Vector Semantic Search Index',
    category: 'AI / Search',
    description: 'In-memory HNSW vector index compiled to WebAssembly for instant high-dimensional embedding matching in the browser.',
    metric: '99.4% Recall',
    tags: ['Wasm', 'TypeScript', 'Vector DB', 'C++'],
    snippet: 'const index = new HNSWIndex({ dim: 1536 });\nconst matches = index.search(queryEmbedding, 5);',
  },
  {
    number: 'EXP 04',
    title: 'Zero-Trust Cloud Mesh',
    category: 'Cloud & Security',
    description: 'Automated IAM policy generator and event-driven security audit pipeline built on AWS Lambda & EventBridge.',
    metric: 'Zero-Trust HA',
    tags: ['AWS Lambda', 'Terraform', 'IAM', 'Python'],
    snippet: 'resource "aws_iam_policy" "strict_mesh" {\n  name = "least_privilege_mesh"\n  policy = data.aws_iam_policy_document.json\n}',
  },
];

export const EngineeringLab: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  // Bind vertical scroll inside this 300vh section to horizontal translation
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-72%']);

  return (
    <section ref={targetRef} className="relative h-[300vh] z-10">
      {/* Sticky Full-Viewport Horizontal Track Container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-[#08080A]">
        {/* Section Header Fixed Badge */}
        <div className="absolute top-12 left-8 md:left-16 z-20 flex items-center gap-3">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/30 flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            ENGINEERING LAB
          </span>
          <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
            // Scroll down to traverse experiments horizontally →
          </span>
        </div>

        {/* Horizontal Motion Track */}
        <motion.div style={{ x }} className="flex gap-8 pl-8 md:pl-16 pr-24 items-center">
          {/* Introductory Card */}
          <div className="w-[320px] md:w-[420px] shrink-0 glass-card-dark p-8 rounded-[32px] space-y-6 border border-zinc-800">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <Zap className="w-6 h-6" />
            </div>

            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Technical <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Experiments.
              </span>
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Explore mini engineering prototypes, architecture spikes, and performance benchmarks crafted across cloud, AI, and automation.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 pt-2">
              <span>Scroll down to slide</span>
              <ArrowRight className="w-4 h-4 animate-pulse" />
            </div>
          </div>

          {/* Experiment Cards Loop */}
          {experiments.map((exp) => (
            <div
              key={exp.number}
              className="w-[340px] md:w-[460px] shrink-0 glass-card-dark p-7 rounded-[32px] space-y-5 border border-zinc-800/80 hover:border-cyan-500/40 transition-all duration-300 group shadow-2xl relative overflow-hidden"
            >
              {/* Top Bar */}
              <div className="flex justify-between items-center border-b border-zinc-800/80 pb-3">
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
                  {exp.number}
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/30 flex items-center gap-1.5">
                  <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                  {exp.metric}
                </span>
              </div>

              {/* Title & Category */}
              <div>
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                  {exp.category}
                </span>
                <h4 className="text-2xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  {exp.title}
                </h4>
              </div>

              {/* Description */}
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                {exp.description}
              </p>

              {/* Code Snippet Box */}
              <div className="bg-zinc-950 p-3.5 rounded-xl border border-zinc-800/80 font-mono text-[11px] text-zinc-300 overflow-x-auto leading-relaxed shadow-inner">
                <div className="flex justify-between text-[10px] text-zinc-500 mb-1.5 border-b border-zinc-900 pb-1">
                  <span>code_snippet.py</span>
                  <GitBranch className="w-3 h-3 text-cyan-400" />
                </div>
                <pre className="text-cyan-200">
                  <code>{exp.snippet}</code>
                </pre>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {exp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 bg-zinc-900 text-zinc-300 rounded-md text-[11px] font-mono border border-zinc-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* End Outro Card */}
          <div className="w-[280px] md:w-[360px] shrink-0 glass-card-dark p-8 rounded-[32px] flex flex-col justify-between h-[360px] border border-zinc-800 text-center">
            <div className="space-y-3">
              <Cpu className="w-8 h-8 text-cyan-400 mx-auto" />
              <h4 className="text-xl font-bold text-white">More in the pipeline</h4>
              <p className="text-xs text-zinc-400">
                Constantly prototyping new concepts in AI orchestration and cloud infrastructure.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-blue-600 text-white text-xs font-semibold uppercase tracking-wider hover:bg-blue-500 transition-colors shadow-md"
            >
              Propose an experiment
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
