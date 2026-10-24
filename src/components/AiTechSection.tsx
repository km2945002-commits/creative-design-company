import React from 'react';
import {
  Sparkles,
  Globe,
  Server,
  PenTool,
  Palette,
  CodeXml,
  CheckCircle2,
  Cpu,
  ArrowRight,
} from 'lucide-react';
import { techToolsData } from '../data/studioData';

export const AiTechSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Sparkles,
    Globe,
    Server,
    PenTool,
    Palette,
    CodeXml,
  };

  return (
    <section id="ai-tech" className="py-24 bg-neutral-950 border-b border-neutral-800/80 relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-purple-900/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-blue-900/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 border border-purple-500/30 text-purple-300 mb-4">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>Modern Creative Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            AI-Powered Tools & Modern Design Stack
          </h2>
          <p className="text-neutral-400 mt-4 text-sm sm:text-base leading-relaxed">
            We unite rapid AI layout ideation with professional vector craftsmanship in CorelDRAW and enterprise web deployment on WordPress and Hostinger. Every project receives the exact right balance of intelligence and artisan precision.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techToolsData.map((tool) => {
            const Icon = iconMap[tool.iconName] || Sparkles;

            return (
              <div
                key={tool.name}
                className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 hover:bg-neutral-900/70 transition-all duration-300 flex flex-col justify-between group shadow-md"
              >
                <div>
                  {/* Top Bar: Icon and Category Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-neutral-800/90 border border-neutral-700/60 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-neutral-200 group-hover:text-amber-400 transition-colors" />
                    </div>
                    <span className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border ${tool.badgeColor}`}>
                      {tool.badge}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                    {tool.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-5">
                    {tool.description}
                  </p>
                </div>

                {/* Workflow Uses List */}
                <div className="pt-4 border-t border-neutral-800/80 space-y-2">
                  <span className="text-[10px] font-mono uppercase text-neutral-400 block font-semibold">
                    Studio Implementation:
                  </span>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    {tool.workflowUse.map((use, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Assurance Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Human Creative Direction Guarantee
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              AI accelerates our ideation and layout testing, but every line of code, typography curve, and print dieline is refined and verified by our creative team before handover.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 hover:opacity-95 transition-opacity inline-flex items-center gap-2 shrink-0 cursor-pointer shadow-md"
          >
            <span>Start With Our Stack</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
