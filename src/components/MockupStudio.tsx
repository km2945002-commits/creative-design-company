import React, { useState } from 'react';
import {
  Monitor,
  CreditCard,
  Sparkles,
  Box,
  Flag,
  Laptop,
  Smartphone,
  Tablet,
  Check,
  Eye,
  Sliders,
  Maximize2,
} from 'lucide-react';

export const MockupStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'web-app' | 'card' | 'logo' | 'product' | 'banner'>('web-app');

  // Web-App state
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [webTitle, setWebTitle] = useState('Apex Innovations Platform');
  const [webTagline, setWebTagline] = useState('High-performance digital systems engineered for the modern enterprise.');
  const [webUrl, setWebUrl] = useState('https://apex.creativedesign.studio');

  // Card state
  const [cardSide, setCardSide] = useState<'front' | 'back'>('front');
  const [companyName, setCompanyName] = useState('Khyber Strategic Capital');
  const [personName, setPersonName] = useState('Zeeshan Tariq, CFA');
  const [jobTitle, setJobTitle] = useState('Managing Partner & Principal');
  const [goldFoil, setGoldFoil] = useState(true);
  const [showBleed, setShowBleed] = useState(true);

  // Logo state
  const [logoName, setLogoName] = useState('CYBERNETIC');
  const [logoTagline, setLogoTagline] = useState('AUTONOMOUS LABS');
  const [showGrid, setShowGrid] = useState(true);
  const [colorPreset, setColorPreset] = useState<'gold' | 'neon' | 'emerald' | 'monochrome'>('gold');
  const [scale, setScale] = useState(100);

  // Product state
  const [productTitle, setProductTitle] = useState('Lumina Radiance Serum');
  const [productSubtitle, setProductSubtitle] = useState('Organic Botanical Elixir');

  // Banner state
  const [bannerFormat, setBannerFormat] = useState<'billboard' | 'rollup' | 'street'>('billboard');
  const [bannerHeadline, setBannerHeadline] = useState('METRO TECH EXPO 2026');
  const [bannerSlogan, setBannerSlogan] = useState('Redefining The Future Skyline · Global Symposium');
  const [showSafeBleed, setShowSafeBleed] = useState(true);
  const [showGrommets, setShowGrommets] = useState(true);

  return (
    <section id="mockup-studio" className="py-20 bg-neutral-900/50 border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
            <span>Live Interactive Spec Studio</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-300">Real-Time Simulation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Build websites, edit layouts visually, and preview changes live.
          </h2>
          <p className="text-neutral-400 mt-3 text-sm sm:text-base leading-relaxed">
            Live website and Apps design, Brand identity, Products Design, Flex/Banner Design and preview.
          </p>
        </div>

        {/* Studio Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 p-1.5 rounded-2xl bg-neutral-950 border border-neutral-800 w-fit">
          <button
            onClick={() => setActiveTab('web-app')}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'web-app'
                ? 'bg-amber-400 text-neutral-950 font-bold shadow'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span>Websites & Apps Develop</span>
          </button>

          <button
            onClick={() => setActiveTab('card')}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'card'
                ? 'bg-amber-400 text-neutral-950 font-bold shadow'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
            }`}
          >
            <CreditCard className="w-4 h-4" />
            <span>Business Card Design</span>
          </button>

          <button
            onClick={() => setActiveTab('logo')}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'logo'
                ? 'bg-amber-400 text-neutral-950 font-bold shadow'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Logos Design</span>
          </button>

          <button
            onClick={() => setActiveTab('product')}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'product'
                ? 'bg-amber-400 text-neutral-950 font-bold shadow'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
            }`}
          >
            <Box className="w-4 h-4" />
            <span>Products & Packaging</span>
          </button>

          <button
            onClick={() => setActiveTab('banner')}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'banner'
                ? 'bg-amber-400 text-neutral-950 font-bold shadow'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
            }`}
          >
            <Flag className="w-4 h-4" />
            <span>Flex & Banner Signage</span>
          </button>
        </div>

        {/* Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Visualizer Stage */}
          <div className="lg:col-span-8 bg-neutral-950 rounded-2xl border border-neutral-800 p-6 min-h-[520px] flex flex-col justify-between relative overflow-hidden shadow-2xl">
            {/* Viewport: WEB & APP */}
            {activeTab === 'web-app' && (
              <div className="flex-1 flex flex-col justify-center items-center py-4">
                <div
                  className={`w-full transition-all duration-300 rounded-xl overflow-hidden border border-neutral-700/80 shadow-2xl ${
                    viewport === 'desktop'
                      ? 'max-w-2xl'
                      : viewport === 'tablet'
                      ? 'max-w-md'
                      : 'max-w-xs'
                  } ${theme === 'dark' ? 'bg-[#0f111a] text-white' : 'bg-white text-neutral-900'}`}
                >
                  {/* Mockup Browser Window Chrome */}
                  <div className="px-4 py-2.5 bg-neutral-900/90 border-b border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="bg-neutral-950/80 px-3 py-1 rounded-md text-[10px] font-mono border border-neutral-800 truncate max-w-[220px]">
                      {webUrl}
                    </div>
                    <div className="w-12" />
                  </div>

                  {/* Browser Content */}
                  <div className="p-6 space-y-5">
                    <div className="flex items-center justify-between border-b border-neutral-800/40 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-gradient-to-br from-amber-400 to-pink-500" />
                        <span className="text-xs font-bold truncate max-w-[140px]">{webTitle}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] opacity-75">
                        <span>Solutions</span>
                        <span>Case Studies</span>
                        <span className="px-2 py-0.5 rounded bg-amber-400 text-neutral-950 font-bold">
                          Contact
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 py-2">
                      <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block">
                        Enterprise Web Architecture
                      </span>
                      <h4 className="text-lg sm:text-xl font-extrabold leading-snug">
                        {webTitle}
                      </h4>
                      <p className="text-xs opacity-75 leading-relaxed">
                        {webTagline}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <div className="p-3 rounded-lg bg-neutral-800/40 border border-neutral-700/50">
                        <div className="text-[10px] font-mono text-emerald-400 font-bold">0.68s Load Time</div>
                        <div className="text-[10px] opacity-70">LiteSpeed Cache on Hostinger</div>
                      </div>
                      <div className="p-3 rounded-lg bg-neutral-800/40 border border-neutral-700/50">
                        <div className="text-[10px] font-mono text-purple-400 font-bold">WordPress CMS</div>
                        <div className="text-[10px] opacity-70">Custom Tailored Dashboard</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Viewport: BUSINESS CARD */}
            {activeTab === 'card' && (
              <div className="flex-1 flex flex-col justify-center items-center py-6">
                <div
                  className={`relative w-full max-w-md aspect-[1.75/1] rounded-2xl p-7 shadow-2xl transition-all duration-300 border ${
                    showBleed ? 'border-dashed border-red-500/70' : 'border-neutral-700'
                  } bg-[#0c0d12] flex flex-col justify-between overflow-hidden`}
                >
                  {/* Bleed indicator */}
                  {showBleed && (
                    <div className="absolute top-1.5 right-2 text-[9px] font-mono text-red-400 bg-neutral-950/80 px-2 py-0.5 rounded border border-red-500/30">
                      3mm Bleed Margin & Cut Line
                    </div>
                  )}

                  {cardSide === 'front' ? (
                    <>
                      <div className="flex items-start justify-between">
                        <div>
                          <span
                            className={`text-base font-extrabold tracking-tight ${
                              goldFoil
                                ? 'text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 font-serif'
                                : 'text-white'
                            }`}
                          >
                            {companyName}
                          </span>
                          <span className="text-[10px] font-mono text-neutral-400 block mt-0.5">
                            Private Equity & Advisory
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-bold text-neutral-950 font-serif text-sm">
                          K
                        </div>
                      </div>

                      <div className="flex items-end justify-between text-xs pt-4 border-t border-neutral-800">
                        <div>
                          <div className="font-bold text-white text-sm">{personName}</div>
                          <div className="text-[11px] text-amber-400 font-mono mt-0.5">{jobTitle}</div>
                        </div>
                        <div className="text-right text-[10px] font-mono text-neutral-400 space-y-0.5">
                          <div>Islamabad, Pakistan</div>
                          <div>+92 319 9774681</div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center font-bold text-neutral-950 font-serif text-xl shadow-lg">
                        K
                      </div>
                      <div
                        className={`text-lg font-bold tracking-wider ${
                          goldFoil
                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 font-serif'
                            : 'text-white'
                        }`}
                      >
                        {companyName}
                      </div>
                      <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                        www.khybercapital.com
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Viewport: LOGO DESIGN */}
            {activeTab === 'logo' && (
              <div className="flex-1 flex flex-col justify-center items-center py-6">
                <div className="relative w-full max-w-md aspect-square rounded-2xl bg-[#0a0a0f] border border-neutral-800 p-8 flex flex-col items-center justify-center overflow-hidden">
                  {/* Vector grid circles overlay */}
                  {showGrid && (
                    <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
                      <div className="w-72 h-72 rounded-full border border-cyan-400" />
                      <div className="absolute w-52 h-52 rounded-full border border-dashed border-amber-400" />
                      <div className="absolute w-36 h-36 rounded-full border border-pink-400" />
                      <div className="absolute w-full h-[1px] bg-neutral-600" />
                      <div className="absolute h-full w-[1px] bg-neutral-600" />
                    </div>
                  )}

                  {/* Scalable Logo Mark */}
                  <div
                    style={{ transform: `scale(${scale / 100})` }}
                    className="flex flex-col items-center text-center transition-transform duration-200"
                  >
                    <div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-4 shadow-xl ${
                        colorPreset === 'gold'
                          ? 'bg-gradient-to-br from-amber-300 via-amber-500 to-yellow-600 text-neutral-950'
                          : colorPreset === 'neon'
                          ? 'bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 text-white'
                          : colorPreset === 'emerald'
                          ? 'bg-gradient-to-br from-emerald-400 to-teal-700 text-neutral-950'
                          : 'bg-white text-neutral-950'
                      }`}
                    >
                      <Sparkles className="w-10 h-10" />
                    </div>
                    <div className="text-2xl font-black tracking-widest text-white uppercase font-sans">
                      {logoName}
                    </div>
                    <div className="text-[11px] font-mono tracking-[0.3em] text-neutral-400 uppercase mt-1">
                      {logoTagline}
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-3 text-[10px] font-mono text-neutral-500">
                    CorelDRAW Bezier Vector Precision · Scalable to ∞
                  </div>
                </div>
              </div>
            )}

            {/* Viewport: PRODUCT & PACKAGING */}
            {activeTab === 'product' && (
              <div className="flex-1 flex flex-col items-center justify-center py-4">
                <div className="w-full max-w-md relative aspect-[1.5/1] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 group shadow-2xl">
                  <img
                    src="/assets/images/product_packaging_mockup.jpg"
                    alt="Product Packaging Design Preview"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent flex flex-col justify-end p-6">
                    <span className="text-xs font-mono text-amber-400 tracking-wider uppercase">
                      3D Structural Packaging Master
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1">
                      {productTitle} · {productSubtitle}
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-neutral-300 mt-2 font-mono">
                      <span>30ml Dropper Dieline</span>
                      <span aria-hidden="true">·</span>
                      <span>FSC Certified Cotton Board</span>
                      <span aria-hidden="true">·</span>
                      <span>Blind Deboss</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center text-xs text-neutral-400">
                  Regulatory Panels, Barcode (UPC/EAN) & Dielines included with all packaging packages.
                </div>
              </div>
            )}

            {/* Viewport: FLEX & BANNER */}
            {activeTab === 'banner' && (
              <div className="flex-1 flex flex-col items-center justify-center py-4">
                <div
                  className={`w-full transition-all duration-300 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 relative shadow-2xl ${
                    bannerFormat === 'billboard'
                      ? 'max-w-2xl aspect-[2.4/1]'
                      : bannerFormat === 'rollup'
                      ? 'max-w-xs aspect-[1/2]'
                      : 'max-w-xl aspect-[16/9]'
                  }`}
                >
                  <img
                    src="/assets/images/banner_flex_signage.jpg"
                    alt="Flex banner display"
                    className="w-full h-full object-cover"
                  />

                  {/* Bleed margin */}
                  {showSafeBleed && (
                    <div className="absolute inset-3 border border-dashed border-red-500/70 pointer-events-none flex items-start justify-end p-1">
                      <span className="text-[9px] font-mono text-red-400 bg-black/70 px-1 rounded">
                        50mm Safe Bleed Margin
                      </span>
                    </div>
                  )}

                  {/* Grommets */}
                  {showGrommets && (
                    <>
                      <div className="absolute top-2 left-2 w-3.5 h-3.5 rounded-full border-2 border-yellow-500 bg-black shadow" />
                      <div className="absolute top-2 right-2 w-3.5 h-3.5 rounded-full border-2 border-yellow-500 bg-black shadow" />
                      <div className="absolute bottom-2 left-2 w-3.5 h-3.5 rounded-full border-2 border-yellow-500 bg-black shadow" />
                      <div className="absolute bottom-2 right-2 w-3.5 h-3.5 rounded-full border-2 border-yellow-500 bg-black shadow" />
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 border-yellow-500 bg-black shadow" />
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 border-yellow-500 bg-black shadow" />
                    </>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent flex flex-col justify-end p-5">
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                      Grand Format Outdoor Flex
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                      {bannerHeadline}
                    </h3>
                    <p className="text-xs text-neutral-300 font-medium">
                      {bannerSlogan}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom status line */}
            <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Spec Engine Active
              </span>
              <span>All assets calibrated in CorelDRAW & Web Engines</span>
            </div>
          </div>

          {/* Interactive Controls Sidebar */}
          <div className="lg:col-span-4 bg-neutral-950 rounded-2xl border border-neutral-800 p-6 space-y-6">
            <div className="flex items-center gap-2 border-b border-neutral-800 pb-3">
              <Sliders className="w-4 h-4 text-amber-400" />
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Specification Controls
              </h3>
            </div>

            {/* CONTROLS: WEB-APP */}
            {activeTab === 'web-app' && (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">
                    Preview Viewport:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setViewport('desktop')}
                      className={`p-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 border ${
                        viewport === 'desktop'
                          ? 'bg-amber-400 text-neutral-950 border-amber-400 font-bold'
                          : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <Laptop className="w-3.5 h-3.5" />
                      <span>Desktop</span>
                    </button>
                    <button
                      onClick={() => setViewport('tablet')}
                      className={`p-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 border ${
                        viewport === 'tablet'
                          ? 'bg-amber-400 text-neutral-950 border-amber-400 font-bold'
                          : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <Tablet className="w-3.5 h-3.5" />
                      <span>Tablet</span>
                    </button>
                    <button
                      onClick={() => setViewport('mobile')}
                      className={`p-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 border ${
                        viewport === 'mobile'
                          ? 'bg-amber-400 text-neutral-950 border-amber-400 font-bold'
                          : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Mobile</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">
                    Theme Mode:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setTheme('dark')}
                      className={`p-2 rounded-lg text-xs font-medium border ${
                        theme === 'dark'
                          ? 'bg-neutral-800 text-white border-neutral-600'
                          : 'bg-neutral-900 text-neutral-400 border-neutral-800'
                      }`}
                    >
                      Dark UI
                    </button>
                    <button
                      onClick={() => setTheme('light')}
                      className={`p-2 rounded-lg text-xs font-medium border ${
                        theme === 'light'
                          ? 'bg-neutral-800 text-white border-neutral-600'
                          : 'bg-neutral-900 text-neutral-400 border-neutral-800'
                      }`}
                    >
                      Light UI
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">
                    Platform / Business Title:
                  </label>
                  <input
                    type="text"
                    value={webTitle}
                    onChange={(e) => setWebTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">
                    Hero Tagline:
                  </label>
                  <input
                    type="text"
                    value={webTagline}
                    onChange={(e) => setWebTagline(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">
                    Custom Hostinger Domain URL:
                  </label>
                  <input
                    type="text"
                    value={webUrl}
                    onChange={(e) => setWebUrl(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            )}

            {/* CONTROLS: CARD */}
            {activeTab === 'card' && (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">
                    Card Side:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setCardSide('front')}
                      className={`p-2 rounded-lg text-xs font-medium border ${
                        cardSide === 'front'
                          ? 'bg-amber-400 text-neutral-950 font-bold border-amber-400'
                          : 'bg-neutral-900 text-neutral-300 border-neutral-800'
                      }`}
                    >
                      Front Layout
                    </button>
                    <button
                      onClick={() => setCardSide('back')}
                      className={`p-2 rounded-lg text-xs font-medium border ${
                        cardSide === 'back'
                          ? 'bg-amber-400 text-neutral-950 font-bold border-amber-400'
                          : 'bg-neutral-900 text-neutral-300 border-neutral-800'
                      }`}
                    >
                      Back Monogram
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">
                    Company / Entity Name:
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">
                    Executive Full Name:
                  </label>
                  <input
                    type="text"
                    value={personName}
                    onChange={(e) => setPersonName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">
                    Designation:
                  </label>
                  <input
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="pt-2 space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-neutral-300">
                    <input
                      type="checkbox"
                      checked={goldFoil}
                      onChange={(e) => setGoldFoil(e.target.checked)}
                      className="rounded accent-amber-400"
                    />
                    <span>Simulate Gold Foil Stamping</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-neutral-300">
                    <input
                      type="checkbox"
                      checked={showBleed}
                      onChange={(e) => setShowBleed(e.target.checked)}
                      className="rounded accent-amber-400"
                    />
                    <span>Show 3mm Bleed Cut Boundaries</span>
                  </label>
                </div>
              </div>
            )}

            {/* CONTROLS: LOGO */}
            {activeTab === 'logo' && (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">
                    Brand Name:
                  </label>
                  <input
                    type="text"
                    value={logoName}
                    onChange={(e) => setLogoName(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">
                    Secondary Descriptor / Slogan:
                  </label>
                  <input
                    type="text"
                    value={logoTagline}
                    onChange={(e) => setLogoTagline(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">
                    Color Palette:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setColorPreset('gold')}
                      className={`p-2 rounded-lg text-xs font-medium border ${
                        colorPreset === 'gold'
                          ? 'border-amber-400 text-amber-300 bg-amber-500/10'
                          : 'border-neutral-800 text-neutral-400 bg-neutral-900'
                      }`}
                    >
                      Gold Luxe
                    </button>
                    <button
                      onClick={() => setColorPreset('neon')}
                      className={`p-2 rounded-lg text-xs font-medium border ${
                        colorPreset === 'neon'
                          ? 'border-pink-400 text-pink-300 bg-pink-500/10'
                          : 'border-neutral-800 text-neutral-400 bg-neutral-900'
                      }`}
                    >
                      Cyber Neon
                    </button>
                    <button
                      onClick={() => setColorPreset('emerald')}
                      className={`p-2 rounded-lg text-xs font-medium border ${
                        colorPreset === 'emerald'
                          ? 'border-emerald-400 text-emerald-300 bg-emerald-500/10'
                          : 'border-neutral-800 text-neutral-400 bg-neutral-900'
                      }`}
                    >
                      Emerald
                    </button>
                    <button
                      onClick={() => setColorPreset('monochrome')}
                      className={`p-2 rounded-lg text-xs font-medium border ${
                        colorPreset === 'monochrome'
                          ? 'border-white text-white bg-white/10'
                          : 'border-neutral-800 text-neutral-400 bg-neutral-900'
                      }`}
                    >
                      Monochrome
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-neutral-400 mb-1">
                    <span>Vector Scale:</span>
                    <span>{scale}%</span>
                  </div>
                  <input
                    type="range"
                    min="60"
                    max="140"
                    value={scale}
                    onChange={(e) => setScale(Number(e.target.value))}
                    className="w-full accent-amber-400"
                  />
                </div>

                <div className="pt-2">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-neutral-300">
                    <input
                      type="checkbox"
                      checked={showGrid}
                      onChange={(e) => setShowGrid(e.target.checked)}
                      className="rounded accent-amber-400"
                    />
                    <span>Show Mathematical Geometric Circles</span>
                  </label>
                </div>
              </div>
            )}

            {/* CONTROLS: PRODUCT */}
            {activeTab === 'product' && (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">
                    Product Title:
                  </label>
                  <input
                    type="text"
                    value={productTitle}
                    onChange={(e) => setProductTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">
                    Packaging Subtitle:
                  </label>
                  <input
                    type="text"
                    value={productSubtitle}
                    onChange={(e) => setProductSubtitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-2 text-xs">
                  <span className="font-mono text-amber-400 block font-semibold">
                    CorelDRAW Print Dielines:
                  </span>
                  <div className="text-neutral-300 space-y-1">
                    <div>• 350 GSM Folding Boxboard</div>
                    <div>• Spot UV & Metallic Foil Masks</div>
                    <div>• Scannable EAN-13 & UPC Barcodes</div>
                    <div>• 100% CMYK Solvent Proofs</div>
                  </div>
                </div>
              </div>
            )}

            {/* CONTROLS: BANNER */}
            {activeTab === 'banner' && (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">
                    Signage Format:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setBannerFormat('billboard')}
                      className={`p-2 rounded-lg text-xs font-medium border ${
                        bannerFormat === 'billboard'
                          ? 'bg-amber-400 text-neutral-950 font-bold border-amber-400'
                          : 'bg-neutral-900 text-neutral-300 border-neutral-800'
                      }`}
                    >
                      Billboard
                    </button>
                    <button
                      onClick={() => setBannerFormat('rollup')}
                      className={`p-2 rounded-lg text-xs font-medium border ${
                        bannerFormat === 'rollup'
                          ? 'bg-amber-400 text-neutral-950 font-bold border-amber-400'
                          : 'bg-neutral-900 text-neutral-300 border-neutral-800'
                      }`}
                    >
                      Roll-up Stand
                    </button>
                    <button
                      onClick={() => setBannerFormat('street')}
                      className={`p-2 rounded-lg text-xs font-medium border ${
                        bannerFormat === 'street'
                          ? 'bg-amber-400 text-neutral-950 font-bold border-amber-400'
                          : 'bg-neutral-900 text-neutral-300 border-neutral-800'
                      }`}
                    >
                      Street Flex
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">
                    Headline Text:
                  </label>
                  <input
                    type="text"
                    value={bannerHeadline}
                    onChange={(e) => setBannerHeadline(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">
                    Event / Promotion Slogan:
                  </label>
                  <input
                    type="text"
                    value={bannerSlogan}
                    onChange={(e) => setBannerSlogan(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="pt-2 space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-neutral-300">
                    <input
                      type="checkbox"
                      checked={showSafeBleed}
                      onChange={(e) => setShowSafeBleed(e.target.checked)}
                      className="rounded accent-amber-400"
                    />
                    <span>Show 50mm Safe Bleed Border</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-neutral-300">
                    <input
                      type="checkbox"
                      checked={showGrommets}
                      onChange={(e) => setShowGrommets(e.target.checked)}
                      className="rounded accent-amber-400"
                    />
                    <span>Show Brass Grommet Eyelets</span>
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
