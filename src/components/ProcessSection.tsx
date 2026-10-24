import React from 'react';
import { Compass, Palette, CodeXml, PackageCheck, Check } from 'lucide-react';
import { processStepsData } from '../data/studioData';

export const ProcessSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Compass,
    Palette,
    CodeXml,
    PackageCheck,
  };

  return (
    <section id="process" className="py-24 bg-neutral-950 border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 border border-blue-500/30 text-blue-300 mb-4">
            <Compass className="w-3.5 h-3.5 text-blue-400" />
            <span>Structured Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Our Working Process
          </h2>
          <p className="text-neutral-400 mt-4 text-sm sm:text-base leading-relaxed">
            A reliable 4-step framework engineered for complete transparency, creative rigor, and on-time project execution.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processStepsData.map((step) => {
            const Icon = iconMap[step.iconName] || Compass;

            return (
              <div
                key={step.number}
                className="p-7 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 hover:bg-neutral-900/80 transition-all duration-300 flex flex-col justify-between group shadow-lg relative overflow-hidden"
              >
                {/* Background Number */}
                <div className="absolute top-2 right-4 text-6xl font-black font-mono text-neutral-800/40 select-none pointer-events-none group-hover:text-neutral-800/60 transition-colors">
                  {step.number}
                </div>

                <div>
                  <div className="w-12 h-12 rounded-xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 group-hover:text-pink-400 transition-colors" />
                  </div>

                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block mb-1">
                    Step {step.number} · {step.tagline}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80">
                  <span className="text-[11px] font-mono uppercase text-neutral-400 block mb-2 font-medium">
                    Key Milestones:
                  </span>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    {step.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
