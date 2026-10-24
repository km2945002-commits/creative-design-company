import React from 'react';
import {
  Monitor,
  Sparkles,
  CreditCard,
  Box,
  Flag,
  Palette,
  Check,
  SlidersVertical,
  ArrowUpRight,
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  services: ServiceItem[];
  onConfigureService: (serviceId: string) => void;
  onOpenBrief: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  onConfigureService,
  onOpenBrief,
}) => {
  const iconMap: Record<string, React.ElementType> = {
    'web-apps': Monitor,
    'logo-design': Sparkles,
    'business-cards': CreditCard,
    'products-packaging': Box,
    'flex-banner': Flag,
    'brand-identity': Palette,
  };

  return (
    <section id="services" className="py-24 bg-neutral-950 border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-400/10 border border-amber-400/30 text-amber-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Core Creative Specializations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Our Professional Services
          </h2>
          <p className="text-neutral-400 mt-4 text-sm sm:text-base leading-relaxed">
            From modern responsive websites to high-precision CorelDRAW vector graphics, print-ready packaging, and grand-scale flex banners. Engineered for market impact, responsive architecture, and transparent PKR pricing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.id] || Sparkles;
            const number = `0${index + 1}`;

            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="p-7 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 hover:bg-neutral-900/80 transition-all duration-300 flex flex-col justify-between group shadow-lg relative overflow-hidden"
              >
                <div>
                  {/* Top Bar: Icon and Index Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 group-hover:text-pink-400 transition-colors" />
                    </div>
                    <span className="text-2xl font-black font-mono text-neutral-700 group-hover:text-neutral-500 transition-colors">
                      {number}
                    </span>
                  </div>

                  {/* Title and Tagline */}
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-amber-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs font-mono text-neutral-400 mb-4">
                    {service.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Pricing and Turnaround Bar */}
                  <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800/90 text-xs mb-5 font-mono">
                    <div>
                      <span className="text-[10px] text-neutral-400 uppercase block">
                        Starting Investment
                      </span>
                      <strong className="text-amber-400 font-bold text-xs mt-0.5 block">
                        {service.startingPrice}
                      </strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-400 uppercase block">
                        Turnaround
                      </span>
                      <strong className="text-white text-xs mt-0.5 block">
                        {service.estimatedTurnaround}
                      </strong>
                    </div>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono uppercase text-neutral-400 block font-semibold">
                      Standard Deliverables:
                    </span>
                    <ul className="space-y-1.5 text-xs text-neutral-300">
                      {service.deliverables.slice(0, 4).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                      {service.deliverables.length > 4 && (
                        <li className="text-[11px] text-neutral-400 font-mono pl-5">
                          + {service.deliverables.length - 4} additional master deliverables
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Row */}
                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onConfigureService(service.id)}
                    className="text-xs font-semibold text-neutral-300 hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer py-1.5"
                  >
                    <SlidersVertical className="w-3.5 h-3.5 text-amber-400" />
                    <span>Estimate Scope</span>
                  </button>

                  <button
                    onClick={() => onOpenBrief(service.name)}
                    className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 hover:opacity-95 transition-opacity inline-flex items-center gap-1.5 cursor-pointer shadow-md active:scale-95"
                  >
                    <span>Get a Quote</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
