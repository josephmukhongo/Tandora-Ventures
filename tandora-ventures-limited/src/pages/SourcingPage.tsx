import React, { useState } from 'react';
import { 
  Globe, ShieldCheck, CheckCircle2, Factory, 
  Search, ArrowRight, Truck, FileCheck, Send, Building2 
} from 'lucide-react';
import { MANAGING_DIRECTOR } from '../data/mockData';

export const SourcingPage: React.FC = () => {
  const [sourcingForm, setSourcingForm] = useState({
    productName: '',
    targetCountry: 'China (Guangzhou / Yiwu)',
    quantity: '',
    targetBudget: '',
    contactName: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Banner */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800/60">
            <Globe className="w-4 h-4" /> Cross-Border & Global Import Trade Desk
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            International Sourcing Hub
          </h1>
          <p className="text-xs md:text-base text-slate-300 max-w-3xl leading-relaxed">
            Connecting Kenyan & East African organizations directly with verified OEMs and manufacturers in China, UAE (Dubai), India, Europe, and South Africa. Pre-shipment quality inspection and KEBS PVoC compliance guaranteed.
          </p>
        </div>

        {/* Trade Hub Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xl">
              🇨🇳
            </div>
            <h3 className="text-lg font-bold text-white">China Manufacturing Desk</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Guangzhou & Yiwu sourcing offices. Direct factory audits, raw material testing, container consolidation, and express sea/air freight to Mombasa & Nairobi.
            </p>
            <div className="text-[11px] text-emerald-400 font-semibold">✓ On-Site Quality Inspector Guarantee</div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xl">
              🇦🇪
            </div>
            <h3 className="text-lg font-bold text-white">Dubai / UAE Re-Export Hub</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Fast-track 3-day air freight and sea container sourcing for automotive spare parts, electronics, specialized heavy machinery, and emergency medical kits.
            </p>
            <div className="text-[11px] text-emerald-400 font-semibold">✓ 72-Hour Express Air Transit</div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xl">
              🇮🇳
            </div>
            <h3 className="text-lg font-bold text-white">India Pharma & Agri Hub</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sourcing certified pharmaceuticals, hospital furniture, agricultural processing machinery, and solar water pumps with full WHO-GMP compliance.
            </p>
            <div className="text-[11px] text-emerald-400 font-semibold">✓ Pharmacy & Poisons Board Aligned</div>
          </div>

        </div>

        {/* Global Request Form */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400">
              <ShieldCheck className="w-4 h-4" /> Customized Global Sourcing Order Desk
            </div>
            <h2 className="text-2xl font-extrabold text-white">Request Global Product or Factory Sourcing</h2>
            <p className="text-xs text-slate-300">
              Tell us what item or equipment you need to import into East Africa. Our Managing Director Joshua Watiti Wekesa and global sourcing agents will handle supplier vetting, price negotiation, and customs clearing.
            </p>

            {submitted ? (
              <div className="bg-slate-950 p-6 rounded-2xl border border-emerald-500/40 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-white text-lg">Sourcing Request Logged!</h4>
                <p className="text-xs text-slate-300">
                  Ref: <span className="font-mono text-amber-400 font-bold">IMP-TV-{Math.floor(1000 + Math.random() * 9000)}</span>. Our global team is evaluating OEM options in {sourcingForm.targetCountry}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Item / Machinery Needed *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 50 Sets Solar Cold Storage Units"
                      value={sourcingForm.productName}
                      onChange={(e) => setSourcingForm({ ...sourcingForm, productName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Target Origin Country *</label>
                    <select
                      value={sourcingForm.targetCountry}
                      onChange={(e) => setSourcingForm({ ...sourcingForm, targetCountry: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                    >
                      <option value="China (Guangzhou / Yiwu)">China (Guangzhou / Yiwu)</option>
                      <option value="UAE (Dubai)">UAE (Dubai)</option>
                      <option value="India (Mumbai / Delhi)">India (Mumbai / Delhi)</option>
                      <option value="Europe (Germany / Turkey)">Europe (Germany / Turkey)</option>
                      <option value="South Africa">South Africa</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Target Quantity *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 1 x 40ft Container or 500 Units"
                      value={sourcingForm.quantity}
                      onChange={(e) => setSourcingForm({ ...sourcingForm, quantity: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Your Name / Organization *</label>
                    <input
                      type="text"
                      required
                      placeholder="Procurement Officer Name"
                      value={sourcingForm.contactName}
                      onChange={(e) => setSourcingForm({ ...sourcingForm, contactName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Contact Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="procurement@company.com"
                      value={sourcingForm.email}
                      onChange={(e) => setSourcingForm({ ...sourcingForm, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+254 7XX XXX XXX"
                      value={sourcingForm.phone}
                      onChange={(e) => setSourcingForm({ ...sourcingForm, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-6 py-2.5 rounded-lg transition flex items-center gap-1.5"
                >
                  <Send className="w-4 h-4" /> Submit Sourcing Order
                </button>
              </form>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};
