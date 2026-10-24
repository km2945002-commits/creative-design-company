import React, { useState } from 'react';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';
import { studioInfo } from '../data/studioData';

interface NavbarProps {
  onOpenBrief: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBrief }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'AI & Tech', href: '#ai-tech' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Spec Studio', href: '#mockup-studio' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'Why Us', href: '#why-choose' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Creative Design Studio Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-pink-500 to-purple-600 p-[1.5px] shadow-lg shadow-amber-500/10 group-hover:shadow-pink-500/20 transition-all">
              <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-white text-base tracking-tight leading-none group-hover:text-amber-300 transition-colors">
                {studioInfo.name}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mt-1">
                WEB . APPS . Business Identity . Products . Flex/Banner
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 text-xs font-semibold text-neutral-300 hover:text-white rounded-lg hover:bg-neutral-900/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenBrief()}
              className="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 hover:opacity-95 transition-opacity inline-flex items-center gap-1.5 cursor-pointer shadow-lg shadow-pink-500/10 active:scale-95"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 z-40 bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800 p-6 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-4 py-3 text-base font-medium text-neutral-200 hover:text-amber-400 hover:bg-neutral-900 rounded-xl transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-neutral-800 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrief();
              }}
              className="w-full py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 text-center flex items-center justify-center gap-2"
            >
              <span>Start Project & Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="text-center text-xs text-neutral-400 font-mono">
              Direct: {studioInfo.phone} · Islamabad
            </div>
          </div>
        </div>
      )}
    </>
  );
};
