import React, { useState } from 'react';
import {
  Monitor,
  Building2,
  UtensilsCrossed,
  ShoppingBag,
  Stethoscope,
  UserCheck,
  Sparkles,
  Layers,
  Check,
  ArrowUpRight,
} from 'lucide-react';
import { solutionsData } from '../data/studioData';

interface SolutionsSectionProps {
  onOpenBrief: (solutionName?: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenBrief }) => {
  const [activeSolutionId, setActiveSolutionId] = useState<string>('corporate');

  const iconMap: Record<string, React.ElementType> = {
    Building2,
    UtensilsCrossed,
    ShoppingBag,
    Stethoscope,
    UserCheck,
    Sparkles,
    Layers,
  };

  const activeSolution =
    solutionsData.find((s) => s.id === activeSolutionId) || solutionsData[0];
  const ActiveIcon = iconMap[activeSolution.iconName] || Monitor;

  return (
    <section id="solutions" className="py-24 bg-neutral-900/40 border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 border border-blue-500/30 text-blue-300 mb-4">
            <Monitor className="w-3.5 h-3.5 text-blue-400" />
            <span>Versatile Digital Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Website Development Solutions
          </h2>
          <p className="text-neutral-400 mt-4 text-sm sm:text-base leading-relaxed">
            Every business has unique operational needs. We engineer websites across multiple tailored formats using{' '}
            <strong className="text-white">WordPress</strong>,{' '}
            <strong className="text-white">AI-assisted website builders</strong>, or{' '}
            <strong className="text-white">custom code</strong> depending entirely on your functional requirements and budget.
          </p>
        </div>

        {/* 3 Architecture Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-950/70 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-xs font-mono">
              01
            </div>
            <h3 className="text-base font-bold text-white">WordPress CMS</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Ideal for clients who want full autonomy to edit pages, publish blog articles, add products, and manage staff without writing a single line of code.
            </p>
            <div className="pt-2 text-[11px] font-mono text-neutral-400">
              Includes theme setup, plugins & admin training.
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-950/70 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-xs font-mono">
              02
            </div>
            <h3 className="text-base font-bold text-white">AI Website Builders</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Rapid, cost-effective solutions for startups and small businesses needing an eye-catching, responsive presence delivered with record turnaround.
            </p>
            <div className="pt-2 text-[11px] font-mono text-neutral-400">
              Rapid prototyping & fast launch timeline.
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-950/70 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs font-mono">
              03
            </div>
            <h3 className="text-base font-bold text-white">Custom Code & Hostinger</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">
              High-performance React/TypeScript digital engineering with sub-second page transitions, tailored APIs, and Hostinger cloud deployment assistance.
            </p>
            <div className="pt-2 text-[11px] font-mono text-neutral-400">
              Cloud server setup, LiteSpeed & SSL routing.
            </div>
          </div>
        </div>

        {/* Interactive Vertical Solutions Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Solution Selector List */}
          <div className="lg:col-span-5 space-y-2">
            <span className="text-xs font-mono uppercase text-neutral-400 block mb-3 font-semibold">
              Select Vertical Solution:
            </span>
            {solutionsData.map((solution) => {
              const Icon = iconMap[solution.iconName] || Monitor;
              const isActive = solution.id === activeSolutionId;

              return (
                <button
                  key={solution.id}
                  onClick={() => setActiveSolutionId(solution.id)}
                  className={`w-full p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-neutral-800/90 border-amber-400/80 shadow-md text-white'
                      : 'bg-neutral-900/40 border-neutral-800/80 hover:bg-neutral-800/50 hover:border-neutral-700 text-neutral-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                        isActive
                          ? 'bg-amber-400 text-neutral-950'
                          : 'bg-neutral-800 text-neutral-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold leading-tight">
                        {solution.title}
                      </div>
                      <div className="text-[11px] font-mono text-neutral-400 mt-0.5">
                        {solution.subtitle}
                      </div>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-mono ${
                      isActive ? 'text-amber-400 font-bold' : 'text-neutral-500'
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Solution Detail Display */}
          <div className="lg:col-span-7 bg-neutral-950 rounded-2xl border border-neutral-800 p-7 sm:p-9 shadow-xl relative overflow-hidden">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-purple-600 p-[1.5px]">
                    <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center">
                      <ActiveIcon className="w-6 h-6 text-amber-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {activeSolution.title}
                    </h3>
                    <span className="text-xs font-mono text-amber-400">
                      {activeSolution.subtitle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-300 leading-relaxed">
                {activeSolution.description}
              </p>

              {/* Key Features */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase text-neutral-400 block font-semibold">
                  Key Engineered Features:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeSolution.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80 flex items-start gap-2.5 text-xs text-neutral-200"
                    >
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Stack & Ideal Target */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-800 text-xs">
                <div className="p-3.5 rounded-xl bg-neutral-900/40 border border-neutral-800/80">
                  <span className="text-[10px] font-mono uppercase text-neutral-400 block mb-1">
                    Recommended Technology
                  </span>
                  <strong className="text-white font-medium block">
                    {activeSolution.recommendedTech}
                  </strong>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-900/40 border border-neutral-800/80">
                  <span className="text-[10px] font-mono uppercase text-neutral-400 block mb-1">
                    Tailored Specifically For
                  </span>
                  <strong className="text-amber-300 font-medium block">
                    {activeSolution.idealFor}
                  </strong>
                </div>
              </div>

              {/* Bottom Quote Button */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => onOpenBrief(activeSolution.title)}
                  className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 hover:opacity-95 transition-opacity inline-flex items-center gap-2 cursor-pointer shadow-lg active:scale-95"
                >
                  <span>Request Solution Proposal</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
