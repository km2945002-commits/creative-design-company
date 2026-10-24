import React, { useState } from 'react';
import {
  Monitor,
  Sparkles,
  CreditCard,
  Box,
  Flag,
  Palette,
  ArrowUpRight,
  ChevronRight,
  MessageCircle,
  Laptop,
  Smartphone,
  Printer,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import { ServiceItem } from '../types';
import { studioInfo } from '../data/studioData';

interface HeroProps {
  services: ServiceItem[];
  onSelectService: (serviceId: string) => void;
  onOpenBrief: (serviceName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  services,
  onSelectService,
  onOpenBrief,
}) => {
  const [activeDevice, setActiveDevice] = useState<'laptop' | 'mobile' | 'print'>('laptop');

  const heroCategories = [
    { id: 'web-apps', name: 'Web & App Design', icon: Monitor },
    { id: 'logo-design', name: 'Logo Design', icon: Sparkles },
    { id: 'business-cards', name: 'Business Card Design', icon: CreditCard },
    { id: 'products-packaging', name: 'Products & Packaging', icon: Box },
    { id: 'flex-banner', name: 'Flex & Banner Design', icon: Flag },
    { id: 'brand-identity', name: 'Brand Identity', icon: Palette },
  ];

  return (
    <section className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden border-b border-neutral-800 bg-[#08090e]">
      {/* Background glow effects */}
      <div className="absolute top-10 left-1/3 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-amber-500/15 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[300px] bg-gradient-to-b from-blue-600/15 to-indigo-600/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Subtitle / status badge */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs tracking-wider uppercase font-semibold text-neutral-400 mb-5">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 font-bold">
            {studioInfo.name}
          </span>
          <span aria-hidden="true" className="text-neutral-700">·</span>
          <span>{studioInfo.address}</span>
          <span aria-hidden="true" className="text-neutral-700">·</span>
          <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Taking New Commissions
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading and Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400">
                Creative Design Company
              </span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
              We transform your ideas into professional websites, apps, logos, and brand identities using modern AI tools, WordPress, Hostinger, CorelDRAW, and Adobe Illustrator. We help businesses build a powerful digital presence with creative design and smart technology.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBrief()}
                className="px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 hover:opacity-95 transition-opacity rounded-xl shadow-lg shadow-pink-500/10 active:scale-95 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-neutral-200 bg-neutral-900 border border-neutral-700/80 rounded-xl hover:bg-neutral-800 hover:text-white transition-all inline-flex items-center gap-2"
              >
                <span>Explore Our Services</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </a>

              <a
                href={studioInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-xl hover:bg-emerald-500/20 transition-all inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Quick Service Selection Pills */}
            <div className="pt-4 border-t border-neutral-800/80">
              <span className="text-xs font-mono uppercase text-neutral-400 block mb-3 font-semibold">
                Quick Service Directory:
              </span>
              <div className="flex flex-wrap gap-2">
                {heroCategories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => onSelectService(cat.id)}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-900/90 text-neutral-300 border border-neutral-800 hover:border-neutral-700 hover:text-white transition-all cursor-pointer hover:bg-neutral-800"
                    >
                      <Icon className="w-3.5 h-3.5 text-amber-400" />
                      <span className="whitespace-nowrap">{cat.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Studio Spec Card */}
          <div className="lg:col-span-5">
            <div className="bg-neutral-900/70 border border-neutral-800/90 rounded-2xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-sm">
              {/* Device switcher bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] font-mono text-neutral-400">
                    spec://creative-studio.v1
                  </span>
                </div>
                <div className="flex items-center bg-neutral-950 p-1 rounded-lg border border-neutral-800">
                  <button
                    onClick={() => setActiveDevice('laptop')}
                    className={`p-1.5 rounded ${activeDevice === 'laptop' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'}`}
                    title="Desktop Preview"
                  >
                    <Laptop className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setActiveDevice('mobile')}
                    className={`p-1.5 rounded ${activeDevice === 'mobile' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'}`}
                    title="Mobile Responsive Preview"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setActiveDevice('print')}
                    className={`p-1.5 rounded ${activeDevice === 'print' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'}`}
                    title="Print Dieline & Vector Preview"
                  >
                    <Printer className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Dynamic Mockup Viewport */}
              <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 min-h-[260px] flex flex-col justify-between p-5">
                {activeDevice === 'laptop' && (
                  <div className="space-y-4">
                    <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-neutral-800 group">
                      <img
                        src="/assets/aistudio/Creative_Design_Lab_35e325dd.jpg"
                        alt="Creative Design Studio Website"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white">
                        <span className="bg-neutral-950/80 px-2 py-0.5 rounded border border-neutral-700">
                          WordPress + Hostinger
                        </span>
                        <span className="text-emerald-400">99.8% Core Web Vitals</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-neutral-300">
                      <span className="font-semibold text-white">Digital Web & App Build</span>
                      <span className="text-amber-400 font-mono font-bold">From PKR 250,000</span>
                    </div>
                  </div>
                )}

                {activeDevice === 'mobile' && (
                  <div className="py-2 flex flex-col items-center">
                    <div className="w-48 aspect-[9/16] bg-neutral-900 rounded-2xl border-2 border-neutral-700 p-2.5 shadow-xl flex flex-col justify-between">
                      <div className="w-16 h-1 rounded-full bg-neutral-700 mx-auto mb-2" />
                      <div className="space-y-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-purple-500 mx-auto" />
                        <div className="text-[10px] text-center font-bold text-white leading-tight">
                          Mobile-First UI & Checkout
                        </div>
                        <div className="w-full h-12 rounded bg-neutral-800/80 border border-neutral-700 flex items-center justify-center text-[9px] text-neutral-400 font-mono">
                          Instant Touch Response
                        </div>
                      </div>
                      <div className="text-[9px] text-center font-mono text-emerald-400 pt-2 border-t border-neutral-800">
                        Smooth iOS & Android
                      </div>
                    </div>
                    <div className="mt-3 text-xs text-neutral-300 text-center font-medium">
                      Fluid smartphone responsiveness across all device sizes
                    </div>
                  </div>
                )}

                {activeDevice === 'print' && (
                  <div className="space-y-4">
                    <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-neutral-800 bg-[#121217] p-4 flex flex-col justify-between">
                      <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                        <span className="text-[10px] font-mono text-amber-400 uppercase">
                          CorelDRAW Dieline Spec
                        </span>
                        <span className="text-[10px] font-mono text-neutral-400">
                          CMYK · 300 DPI · 3mm Bleed
                        </span>
                      </div>
                      <div className="border border-dashed border-red-500/50 rounded p-4 text-center my-auto">
                        <span className="text-xs font-bold text-white block">
                          Production Vector Curves (.CDR / .AI)
                        </span>
                        <span className="text-[11px] text-neutral-400 block mt-1">
                          Zero pixelation · Scalable to any billboard or packaging dimension
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 pt-2 border-t border-neutral-800">
                        <span>Foil & UV Mask Channels</span>
                        <span className="text-emerald-400">Press Ready</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-neutral-300">
                      <span className="font-semibold text-white">Packaging & Flex Banners</span>
                      <span className="text-amber-400 font-mono font-bold">From PKR 30,000</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Verified badges footer */}
              <div className="mt-4 pt-4 border-t border-neutral-800 grid grid-cols-2 gap-3 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Hostinger & SSL Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Full Source File Handover</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
