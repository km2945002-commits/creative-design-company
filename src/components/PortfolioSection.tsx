import React, { useState, useRef } from 'react';
import {
  Sparkles,
  Upload,
  X,
  Check,
  ArrowUpRight,
  Maximize2,
  SlidersVertical,
  CheckCircle2,
} from 'lucide-react';
import { PortfolioItem } from '../types';
import { initialPortfolioItems } from '../data/studioData';

interface PortfolioSectionProps {
  onOpenBrief: (serviceName?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenBrief }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [customItems, setCustomItems] = useState<PortfolioItem[]>([]);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  // Upload Form State
  const [uploadTitle, setUploadTitle] = useState('');
  const [uploadCategory, setUploadCategory] = useState('logo');
  const [uploadTagline, setUploadTagline] = useState('');
  const [uploadImageSrc, setUploadImageSrc] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const allItems = [...customItems, ...initialPortfolioItems];
  const filteredItems =
    activeCategory === 'all'
      ? allItems
      : allItems.filter((item) => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-app', label: 'Web & App Design' },
    { id: 'logo', label: 'Logos' },
    { id: 'business-card', label: 'Business Cards' },
    { id: 'product', label: 'Products & Packaging' },
    { id: 'banner', label: 'Flex & Banners' },
    { id: 'brand-identity', label: 'Brand Identity' },
  ];

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setUploadImageSrc(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddCustomProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadTitle || !uploadImageSrc) return;

    const categoryNames: Record<string, string> = {
      logo: 'Logo Design',
      'business-card': 'Business Card Design',
      product: 'Product & Packaging Design',
      banner: 'Flex & Banner Design',
      'brand-identity': 'Brand Identity',
      'web-app': 'Website & App UI Design',
    };

    const newProject: PortfolioItem = {
      id: `custom-${Date.now()}`,
      title: uploadTitle,
      client: 'Studio Client Design',
      category: uploadCategory,
      categoryLabel: categoryNames[uploadCategory] || 'Custom Project',
      tagline: uploadTagline || 'Custom graphic design project uploaded to studio portfolio.',
      imageSrc: uploadImageSrc,
      toolsUsed: 'CorelDRAW · Adobe Illustrator · Creative Design Studio',
      deliverables: [
        'Print-ready high-resolution master file',
        'Transparent PNG and high-quality JPG',
        'Vector and source files as agreed',
      ],
      specifications: {
        format: 'Custom Project Specification',
        finishOrStack: 'Client Uploaded Artwork',
        timeline: 'Completed',
      },
    };

    setCustomItems([newProject, ...customItems]);
    setIsUploadModalOpen(false);
    setUploadTitle('');
    setUploadTagline('');
    setUploadImageSrc('');
  };

  return (
    <section id="portfolio" className="py-24 bg-neutral-900/40 border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header & Upload Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-pink-500/10 border border-pink-500/30 text-pink-300 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>Engineered Work Samples</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Featured Portfolio
            </h2>
            <p className="text-neutral-400 mt-4 text-sm sm:text-base leading-relaxed">
              Explore our recent work across responsive web platforms, vector logos, high-finish business stationery, luxury product packaging, and outdoor highway flex banners.
            </p>
          </div>

          <button
            onClick={() => setIsUploadModalOpen(true)}
            className="px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 border border-neutral-700/80 hover:bg-neutral-800 hover:border-amber-400/80 transition-all inline-flex items-center gap-2 cursor-pointer shrink-0 shadow-md self-start md:self-auto"
          >
            <Upload className="w-4 h-4 text-amber-400" />
            <span>Test Your Artwork</span>
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-amber-400 text-neutral-950 font-bold shadow-md'
                  : 'bg-neutral-900/80 text-neutral-400 border border-neutral-800 hover:text-white hover:border-neutral-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group rounded-2xl border border-neutral-800 bg-neutral-950 overflow-hidden hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between shadow-lg cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-neutral-950/85 backdrop-blur-md border border-neutral-700 text-[10px] font-mono uppercase tracking-wider text-amber-300 font-semibold">
                    {item.categoryLabel}
                  </span>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-lg bg-neutral-950/90 border border-neutral-700 flex items-center justify-center text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-[11px] font-mono text-neutral-400 mb-1">
                    Client: {item.client}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-2 line-clamp-2 leading-relaxed">
                    {item.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400 font-mono">
                  <span className="truncate max-w-[200px]">{item.specifications.finishOrStack}</span>
                  <span className="text-amber-400 font-bold group-hover:translate-x-1 transition-transform">
                    View Specs →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Specification Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 relative shadow-2xl">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900">
              <img
                src={selectedItem.imageSrc}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded bg-neutral-950/90 border border-neutral-700 text-[10px] font-mono text-amber-400 uppercase">
                  {selectedItem.categoryLabel}
                </span>
              </div>
            </div>

            <div>
              <div className="text-xs font-mono text-neutral-400">
                Client: {selectedItem.client}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {selectedItem.title}
              </h3>
              <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
                {selectedItem.tagline}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-1.5 text-xs font-mono">
              <span className="text-[10px] text-neutral-400 uppercase block">Tools & Engines</span>
              <strong className="text-white block font-medium">
                {selectedItem.toolsUsed}
              </strong>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-neutral-400 block font-semibold">
                Agreed Master Deliverables:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedItem.deliverables.map((deliv, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-neutral-900/40 border border-neutral-800 flex items-start gap-2 text-xs text-neutral-200"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs font-mono">
              <div>
                <span className="text-[10px] text-neutral-400 uppercase block">Format</span>
                <strong className="text-white block mt-0.5 text-[11px] truncate">
                  {selectedItem.specifications.format}
                </strong>
              </div>
              <div>
                <span className="text-[10px] text-neutral-400 uppercase block">Finish / Stack</span>
                <strong className="text-amber-400 block mt-0.5 text-[11px] truncate">
                  {selectedItem.specifications.finishOrStack}
                </strong>
              </div>
              <div>
                <span className="text-[10px] text-neutral-400 uppercase block">Timeline</span>
                <strong className="text-white block mt-0.5 text-[11px]">
                  {selectedItem.specifications.timeline}
                </strong>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between gap-4 border-t border-neutral-800">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2.5 rounded-lg text-xs font-medium text-neutral-400 hover:text-white transition-colors"
              >
                Close
              </button>

              <button
                onClick={() => {
                  setSelectedItem(null);
                  onOpenBrief(selectedItem.categoryLabel);
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 hover:opacity-95 transition-opacity inline-flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Inquire For This Service</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upload & Test Artwork Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-neutral-950 border border-neutral-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 relative shadow-2xl">
            <button
              onClick={() => setIsUploadModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="text-xl font-bold text-white">Test Your Artwork</h3>
              <p className="text-xs text-neutral-400 mt-1">
                Upload your graphic or logo to preview it inside the studio portfolio gallery.
              </p>
            </div>

            <form onSubmit={handleAddCustomProject} className="space-y-4">
              <div>
                <label className="text-xs font-mono text-neutral-400 block mb-1">
                  Upload Image File:
                </label>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handleImageFileChange}
                  className="w-full text-xs text-neutral-300 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-amber-400 file:text-neutral-950 hover:file:opacity-90 cursor-pointer"
                />
                {uploadImageSrc && (
                  <div className="mt-3 aspect-video rounded-lg overflow-hidden border border-neutral-800 max-h-36">
                    <img
                      src={uploadImageSrc}
                      alt="Upload preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="text-xs font-mono text-neutral-400 block mb-1">
                  Project Title:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Zenith Tech Monogram"
                  value={uploadTitle}
                  onChange={(e) => setUploadTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-neutral-400 block mb-1">
                  Project Category:
                </label>
                <select
                  value={uploadCategory}
                  onChange={(e) => setUploadCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="logo">Logo Design</option>
                  <option value="business-card">Business Card Design</option>
                  <option value="product">Product & Packaging Design</option>
                  <option value="banner">Flex & Banner Design</option>
                  <option value="brand-identity">Brand Identity</option>
                  <option value="web-app">Website & App UI Design</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono text-neutral-400 block mb-1">
                  Description / Tagline:
                </label>
                <input
                  type="text"
                  placeholder="e.g. Vector mark created with gold foil callouts"
                  value={uploadTagline}
                  onChange={(e) => setUploadTagline(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsUploadModalOpen(false)}
                  className="px-4 py-2 text-xs text-neutral-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!uploadTitle || !uploadImageSrc}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 hover:opacity-95 transition-opacity disabled:opacity-50 cursor-pointer"
                >
                  Add to Gallery Preview
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
