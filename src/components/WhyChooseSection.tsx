import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { commitmentsData, studioInfo } from '../data/studioData';

interface WhyChooseSectionProps {
  onOpenBrief: () => void;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ onOpenBrief }) => {
  return (
    <section id="why-choose" className="py-24 bg-neutral-950 border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-400/10 border border-amber-400/30 text-amber-300 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Our Commitments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Why Choose {studioInfo.name}?
          </h2>
          <p className="text-neutral-400 mt-4 text-sm sm:text-base leading-relaxed">
            We focus on honest craftsmanship, clear deliverables, and modern technology. Here are the core pillars that guide our work with every client.
          </p>
        </div>

        {/* 6 Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commitmentsData.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 hover:bg-neutral-900/80 transition-all duration-300 flex flex-col justify-between group shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border border-amber-400/30 text-amber-300 bg-amber-500/10 font-semibold">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-neutral-600">0{index + 1}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-neutral-800/80 flex items-center gap-1.5 text-[11px] font-mono text-neutral-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">
              Ready to bring your digital or print idea to life?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              Get in touch for a transparent price quote and project discussion.
            </p>
          </div>

          <button
            onClick={onOpenBrief}
            className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 hover:opacity-95 transition-opacity inline-flex items-center gap-2 cursor-pointer shrink-0 shadow-lg"
          >
            <span>Get a Project Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
