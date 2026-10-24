import React, { useState, useEffect } from 'react';
import { X, Send, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';
import { studioInfo } from '../data/studioData';

interface InitialData {
  serviceName?: string;
  estimatedPrice?: string;
}

interface ProjectBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: InitialData | null;
}

export const ProjectBriefModal: React.FC<ProjectBriefModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const [service, setService] = useState('Websites & Apps Design');
  const [projectName, setProjectName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('PKR 150,000 - 300,000');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ticketId, setTicketId] = useState('');

  useEffect(() => {
    if (initialData?.serviceName) {
      setService(initialData.serviceName);
    }
    if (initialData?.estimatedPrice) {
      setNotes((prev) => (prev ? `${prev}\nEstimated Price: ${initialData.estimatedPrice}` : `Estimated Scope: ${initialData.estimatedPrice}`));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const newId = `CDS-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(newId);

    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 700);
  };

  const handleWhatsAppContinue = () => {
    const text = `Hi Creative Design Studio! My inquiry #${ticketId} for ${projectName || 'New Project'}. Service: ${service}. Client: ${fullName}. Phone: ${phone}. Email: ${email}. Notes: ${notes || 'Ready to start'}`;
    const url = `https://wa.me/923199774681?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-neutral-950 border border-neutral-800 rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                Quote Reference #{ticketId}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Project Brief Registered!
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{fullName}</strong>. We have logged your request for{' '}
              <strong className="text-amber-400">{service}</strong>. Our senior designer will inspect the scope and reach out on WhatsApp/Email.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleWhatsAppContinue}
                className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-950 bg-emerald-400 hover:bg-emerald-300 transition-colors inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp Now</span>
              </button>

              <button
                onClick={() => {
                  setSuccess(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-medium text-neutral-400 hover:text-white transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 via-pink-400 to-purple-400 flex items-center justify-center text-neutral-950 font-bold">
                <Sparkles className="w-5 h-5 text-neutral-950" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Initiate Project Brief</h3>
                <span className="text-xs font-mono text-neutral-400">
                  Itemized Quotation & Turnaround Schedule
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">
                    Select Service *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Websites & Apps Design">Websites & Apps Design</option>
                    <option value="Logo Design">Logo Design</option>
                    <option value="Business Card Design">Business Card Design</option>
                    <option value="Products & Packaging Design">Products & Packaging Design</option>
                    <option value="Flex & Banner Design">Flex & Banner Design</option>
                    <option value="Brand Identity Design">Brand Identity Design</option>
                    <option value="Other Custom Project">Other Custom Project</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">
                    Project / Brand Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lumina Skincare"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Zeeshan Tariq"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +92 319 9774681"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. name@brand.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">
                    Allocated Budget Range (PKR)
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Under PKR 50,000">Under PKR 50,000</option>
                    <option value="PKR 50,000 - 150,000">PKR 50,000 - PKR 150,000</option>
                    <option value="PKR 150,000 - 300,000">PKR 150,000 - PKR 300,000</option>
                    <option value="PKR 300,000+">PKR 300,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-neutral-400 block mb-1">
                  Scope Requirements / Reference Links:
                </label>
                <textarea
                  rows={3}
                  placeholder="Detail your requirements, desired delivery date, colors, or competitor websites..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-xl hover:opacity-95 transition-opacity inline-flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95 disabled:opacity-50"
                >
                  <span>{submitting ? 'Registering Brief...' : 'Submit Quote Request'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
