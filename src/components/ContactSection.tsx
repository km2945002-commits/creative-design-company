import React, { useState } from 'react';
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  Clock,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { studioInfo } from '../data/studioData';

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Websites & Apps Design');
  const [budget, setBudget] = useState('PKR 150,000 - 300,000');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(studioInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(studioInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      // Construct WhatsApp message URL for direct continuation
      const text = `Hello Creative Design Studio! My name is ${fullName}. I am inquiring about ${service}. Budget: ${budget}. Details: ${message || 'Looking for project quote.'}`;
      const waLink = `https://wa.me/923199774681?text=${encodeURIComponent(text)}`;
      // Open in new tab after brief delay
      window.open(waLink, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950 border-b border-neutral-800 relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[350px] bg-purple-900/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-amber-900/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 border border-purple-500/30 text-purple-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Contact & Get a Quote
          </h2>
          <p className="text-neutral-400 mt-4 text-sm sm:text-base leading-relaxed">
            Ready to initiate a website, logo, packaging, business card, or flex banner project? Complete the form below for an itemized proposal, or reach out instantly via WhatsApp or direct email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Studio Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl border border-neutral-800 bg-neutral-900/60 space-y-6 shadow-xl">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Studio Communications
                </h3>
                <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                  We respond to all project inquiries within 24 hours. For immediate assistance or instant voice/chat discussions, connect directly on WhatsApp.
                </p>
              </div>

              {/* Instant WhatsApp Button */}
              <a
                href={studioInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
              </a>

              {/* Contact Information List */}
              <div className="space-y-4 pt-3 border-t border-neutral-800 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neutral-400 block">
                      Studio Address
                    </span>
                    <strong className="text-white block mt-0.5">
                      {studioInfo.address}
                    </strong>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-pink-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-neutral-400 block">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${studioInfo.email}`}
                        className="text-white hover:text-amber-400 transition-colors block mt-0.5 font-medium"
                      >
                        {studioInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-emerald-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-neutral-400 block">
                        WhatsApp / Phone
                      </span>
                      <a
                        href={studioInfo.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-emerald-400 transition-colors block mt-0.5 font-medium font-mono"
                      >
                        {studioInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-blue-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neutral-400 block">
                      Operating Schedule
                    </span>
                    <strong className="text-white block mt-0.5">
                      Monday to Saturday · 9:00 AM - 8:00 PM (PKT)
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7 bg-neutral-900/60 rounded-2xl border border-neutral-800 p-7 sm:p-9 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{fullName}</strong>. We have registered your request for <strong className="text-amber-400">{service}</strong> and will connect via WhatsApp/Email within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-semibold text-neutral-300 bg-neutral-800 hover:bg-neutral-700 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-neutral-400 block mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Asad Mehmood"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-neutral-400 block mb-1">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +92 300 1234567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-neutral-400 block mb-1">
                      Service Required *
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
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
                </div>

                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">
                    Estimated Budget Tier (PKR):
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Under PKR 50,000">Under PKR 50,000</option>
                    <option value="PKR 50,000 - 150,000">PKR 50,000 - PKR 150,000</option>
                    <option value="PKR 150,000 - 300,000">PKR 150,000 - PKR 300,000</option>
                    <option value="PKR 300,000+">PKR 300,000+</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-neutral-400 block mb-1">
                    Project Brief & Scope Details:
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your brand, requirements, desired timeline, or reference links..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:border-amber-400 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 hover:opacity-95 transition-opacity inline-flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95 disabled:opacity-50"
                  >
                    <span>{submitting ? 'Submitting Inquiry...' : 'Submit Project Inquiry'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
