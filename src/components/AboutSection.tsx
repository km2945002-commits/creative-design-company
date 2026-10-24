import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { studioInfo } from '../data/studioData';

interface AboutSectionProps {
  onOpenBrief: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBrief }) => {
  return (
    <section id="about" className="py-24 bg-neutral-900/40 border-b border-neutral-800 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[350px] bg-purple-900/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Mission Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-pink-500/10 border border-pink-500/30 text-pink-300">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>About {studioInfo.name}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Your Ideas. Our Creativity.{' '}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400">
                Smarter Solutions.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {studioInfo.name} combines AI-powered tools, modern web technologies, and professional graphic design software to deliver creative solutions for businesses and brands. From website development and app design to logos, packaging, business cards, and advertising banners, we help turn ideas into professional digital and print experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/60 space-y-2">
                <span className="text-xs font-bold text-amber-400 block font-mono">
                  Dual Creative Mastery
                </span>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Equally proficient in digital software engineering (React, WordPress, Hostinger) and physical print production (CorelDRAW vector, CMYK press).
                </p>
              </div>

              <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950/60 space-y-2">
                <span className="text-xs font-bold text-pink-400 block font-mono">
                  Transparent Partnerships
                </span>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Honest timelines, clear deliverable packages in PKR, direct communication, and handover of all agreed master and source files.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBrief}
                className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 hover:opacity-95 transition-opacity inline-flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Work With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#contact"
                className="px-5 py-3 rounded-xl text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors"
              >
                Get Contact Details
              </a>
            </div>
          </div>

          {/* Right Column: Studio Card & Key Metrics */}
          <div className="lg:col-span-5">
            <div className="p-7 sm:p-8 rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl relative space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-5">
                <div>
                  <h3 className="font-bold text-white text-base">
                    {studioInfo.name}
                  </h3>
                  <span className="text-xs font-mono text-neutral-400">
                    Digital Agency & Print Studio
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-purple-600 flex items-center justify-center text-neutral-950">
                  <ShieldCheck className="w-5 h-5 text-neutral-950" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {studioInfo.stats.map((stat, i) => (
                  <div key={i} className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                    <span className="text-[10px] font-mono uppercase text-neutral-400 block mb-1">
                      {stat.label}
                    </span>
                    <strong className="text-sm font-bold text-white block">
                      {stat.value}
                    </strong>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800 text-xs font-mono space-y-1.5 text-neutral-300">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Studio Base:</span>
                  <span className="text-white font-medium">{studioInfo.address}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">WhatsApp:</span>
                  <span className="text-emerald-400 font-medium">{studioInfo.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Response Window:</span>
                  <span className="text-amber-400 font-medium">Within 24 Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
