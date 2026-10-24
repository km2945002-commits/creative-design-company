import React from 'react';
import { Sparkles, ArrowUp, MessageCircle, Mail, MapPin } from 'lucide-react';
import { studioInfo } from '../data/studioData';

interface FooterProps {
  onOpenBrief: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrief }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-xs py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-neutral-800">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 via-pink-500 to-purple-600 p-[1.5px]">
                <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                </div>
              </div>
              <span className="font-extrabold text-white text-base tracking-tight">
                {studioInfo.name}
              </span>
            </div>

            <p className="text-neutral-300 leading-relaxed text-xs">
              We combine modern AI tools, WordPress, Hostinger, CorelDRAW, and Adobe Illustrator to engineer high-converting websites, apps, logos, packaging, and flex banners.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={studioInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors inline-flex items-center gap-1.5 font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`mailto:${studioInfo.email}`}
                className="px-3.5 py-2 rounded-lg bg-neutral-900 text-neutral-300 border border-neutral-800 hover:text-white transition-colors inline-flex items-center gap-1.5 font-medium"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Studio</span>
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase text-white font-bold block">
              Navigation
            </span>
            <ul className="space-y-2">
              {['Services', 'AI & Tech', 'Solutions', 'Spec Studio', 'Portfolio', 'Process', 'Why Us', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase text-white font-bold block">
              Specializations
            </span>
            <ul className="space-y-2">
              {[
                'Websites & Apps Design',
                'Logo Design',
                'Business Card Design',
                'Products & Packaging Design',
                'Flex & Banner Design',
                'Brand Identity Design',
              ].map((serv) => (
                <li key={serv}>
                  <button
                    onClick={() => onOpenBrief(serv)}
                    className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                  >
                    {serv}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Address & Handover */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase text-white font-bold block">
              Studio Base
            </span>
            <div className="space-y-2 text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{studioInfo.address}</span>
              </div>
              <div>
                <span className="text-neutral-400 block text-[10px] font-mono uppercase">
                  Direct Phone / WhatsApp
                </span>
                <span className="text-white font-mono">{studioInfo.phone}</span>
              </div>
              <div>
                <span className="text-neutral-400 block text-[10px] font-mono uppercase">
                  Design Inquiries
                </span>
                <span className="text-white">{studioInfo.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-400">
          <div>
            © {new Date().getFullYear()} {studioInfo.name}. All rights reserved. Islamabad, Pakistan.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
