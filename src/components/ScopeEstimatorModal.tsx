import React, { useState, useEffect } from 'react';
import { X, SlidersVertical, Check, ArrowRight, Calculator } from 'lucide-react';
import { ServiceItem } from '../types';

interface ScopeEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId: string | null;
  services: ServiceItem[];
  onProceedToBrief: (serviceName: string, estimatedPrice: string) => void;
}

export const ScopeEstimatorModal: React.FC<ScopeEstimatorModalProps> = ({
  isOpen,
  onClose,
  serviceId,
  services,
  onProceedToBrief,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    serviceId || 'web-apps'
  );
  const [tier, setTier] = useState<'standard' | 'professional' | 'enterprise'>('professional');
  const [expressDelivery, setExpressDelivery] = useState(false);
  const [hostingSetup, setHostingSetup] = useState(false);
  const [printProofing, setPrintProofing] = useState(false);
  const [sourceArchives, setSourceArchives] = useState(true);

  useEffect(() => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
  }, [serviceId]);

  if (!isOpen) return null;

  const currentService =
    services.find((s) => s.id === selectedServiceId) || services[0];

  // Base numerical pricing
  const basePrices: Record<string, number> = {
    'web-apps': 250000,
    'logo-design': 45000,
    'business-cards': 35000,
    'products-packaging': 85000,
    'flex-banner': 30000,
    'brand-identity': 75000,
  };

  const basePrice = basePrices[selectedServiceId] || 50000;
  const tierMultiplier = tier === 'standard' ? 0.85 : tier === 'professional' ? 1.0 : 1.35;

  let total = Math.round(basePrice * tierMultiplier);
  if (expressDelivery) total += 15000;
  if (hostingSetup) total += 12000;
  if (printProofing) total += 8000;
  if (sourceArchives) total += 10000;

  const formattedTotal = `PKR ${total.toLocaleString()}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-neutral-950 border border-neutral-800 rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Project Scope Estimator</h3>
            <span className="text-xs font-mono text-neutral-400">
              Interactive PKR Price Calculator
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-mono text-neutral-400 block mb-1.5">
              Service Specialization:
            </label>
            <select
              value={selectedServiceId}
              onChange={(e) => setSelectedServiceId(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
            >
              {services.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} ({s.startingPrice})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs font-mono text-neutral-400 block mb-1.5">
              Project Scale & Complexity Tier:
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setTier('standard')}
                className={`p-3 rounded-xl border text-center transition-all ${
                  tier === 'standard'
                    ? 'bg-amber-400 text-neutral-950 font-bold border-amber-400'
                    : 'bg-neutral-900 text-neutral-300 border-neutral-800'
                }`}
              >
                <div className="text-xs font-bold">Standard</div>
                <div className="text-[10px] opacity-80 mt-0.5">Essential Scope</div>
              </button>
              <button
                type="button"
                onClick={() => setTier('professional')}
                className={`p-3 rounded-xl border text-center transition-all ${
                  tier === 'professional'
                    ? 'bg-amber-400 text-neutral-950 font-bold border-amber-400'
                    : 'bg-neutral-900 text-neutral-300 border-neutral-800'
                }`}
              >
                <div className="text-xs font-bold">Professional</div>
                <div className="text-[10px] opacity-80 mt-0.5">Most Popular</div>
              </button>
              <button
                type="button"
                onClick={() => setTier('enterprise')}
                className={`p-3 rounded-xl border text-center transition-all ${
                  tier === 'enterprise'
                    ? 'bg-amber-400 text-neutral-950 font-bold border-amber-400'
                    : 'bg-neutral-900 text-neutral-300 border-neutral-800'
                }`}
              >
                <div className="text-xs font-bold">Enterprise</div>
                <div className="text-[10px] opacity-80 mt-0.5">Full Spectrum</div>
              </button>
            </div>
          </div>

          <div>
            <label className="text-xs font-mono text-neutral-400 block mb-2 font-semibold">
              Project Add-ons & Calibrations:
            </label>
            <div className="space-y-2">
              <label className="flex items-center justify-between p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80 cursor-pointer text-xs">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={expressDelivery}
                    onChange={(e) => setExpressDelivery(e.target.checked)}
                    className="accent-amber-400 rounded"
                  />
                  <div>
                    <span className="text-white font-medium block">Priority Turnaround</span>
                    <span className="text-[11px] text-neutral-400">Accelerated delivery within 48 to 72 hours</span>
                  </div>
                </div>
                <span className="font-mono text-amber-400">+PKR 15,000</span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80 cursor-pointer text-xs">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={hostingSetup}
                    onChange={(e) => setHostingSetup(e.target.checked)}
                    className="accent-amber-400 rounded"
                  />
                  <div>
                    <span className="text-white font-medium block">Hostinger Cloud & Domain Link</span>
                    <span className="text-[11px] text-neutral-400">DNS, SSL certificate & corporate email configuration</span>
                  </div>
                </div>
                <span className="font-mono text-amber-400">+PKR 12,000</span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80 cursor-pointer text-xs">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={printProofing}
                    onChange={(e) => setPrintProofing(e.target.checked)}
                    className="accent-amber-400 rounded"
                  />
                  <div>
                    <span className="text-white font-medium block">Physical Print House Coordination</span>
                    <span className="text-[11px] text-neutral-400">CMYK solvent proofs & press alignment inspection</span>
                  </div>
                </div>
                <span className="font-mono text-amber-400">+PKR 8,000</span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80 cursor-pointer text-xs">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={sourceArchives}
                    onChange={(e) => setSourceArchives(e.target.checked)}
                    className="accent-amber-400 rounded"
                  />
                  <div>
                    <span className="text-white font-medium block">Full Editable Source Master Files</span>
                    <span className="text-[11px] text-neutral-400">CorelDRAW .CDR, Adobe Illustrator .AI, and Git codebase</span>
                  </div>
                </div>
                <span className="font-mono text-amber-400">+PKR 10,000</span>
              </label>
            </div>
          </div>
        </div>

        {/* Calculated Total Bar */}
        <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase text-neutral-400 block">
              Estimated Investment
            </span>
            <div className="text-xl font-extrabold text-amber-400 font-mono">
              {formattedTotal}
            </div>
          </div>
          <button
            onClick={() => {
              onClose();
              onProceedToBrief(currentService.name, formattedTotal);
            }}
            className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 hover:opacity-95 transition-opacity inline-flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Book This Scope</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
