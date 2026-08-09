import React, { useState } from 'react';
import { X, Plus, CheckCircle2, FileText, Upload, Sparkles, ShieldCheck } from 'lucide-react';
import { CATEGORIES_LIST } from '../data/mockData';

interface PostRFQModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess?: (rfqData: any) => void;
}

export const PostRFQModal: React.FC<PostRFQModalProps> = ({
  isOpen,
  onClose,
  onSubmitSuccess,
}) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    category: CATEGORIES_LIST[0],
    organizationName: '',
    buyerType: 'Corporate',
    budgetRange: 'KES 1,000,000 - KES 5,000,000',
    deadline: '',
    location: 'Nairobi, Kenya',
    contactPerson: '',
    contactEmail: '',
    phone: '',
    description: '',
    specifications: '',
    targetVerifiedSuppliersOnly: true,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSubmitSuccess) {
      onSubmitSuccess(formData);
    }
  };

  const handleReset = () => {
    setStep(1);
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl text-white shadow-2xl my-8 overflow-hidden">
        
        {/* Header */}
        <div className="bg-slate-850 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center font-bold">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white">Post a Request for Quotation (RFQ)</h3>
              <p className="text-xs text-slate-400">Reach verified Kenyan & international suppliers instantly</p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-white">RFQ Posted Successfully!</h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Your Request for Quotation <strong className="text-amber-400">"{formData.title || 'Procurement Request'}"</strong> is now live on Tandora Ventures Limited. Verified suppliers matching <span className="text-amber-400">{formData.category}</span> have been notified.
              </p>
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="text-slate-400 font-semibold uppercase tracking-wider">RFQ Reference Badge</div>
                <div className="text-white font-mono font-bold">RFQ-TV-{Math.floor(100000 + Math.random() * 900000)}</div>
                <div className="text-emerald-400 font-medium">✓ Matching 45+ Verified East African Suppliers</div>
              </div>
              <button
                onClick={handleReset}
                className="bg-amber-500 text-slate-950 font-bold px-6 py-2.5 rounded-lg hover:bg-amber-400 transition"
              >
                Close Window & View Dashboard
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {step === 1 && (
                <div className="space-y-4">
                  <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Step 1: Procurement Details</div>
                  
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Procurement Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Supply of 50 Sets Solar Water Pumps or Heavy Duty Laptops"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Category *</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
                      >
                        {CATEGORIES_LIST.map((cat) => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Organization / Buyer Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Safari Enterprises Ltd / County / NGO"
                        value={formData.organizationName}
                        onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Budget Allocation</label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
                      >
                        <option value="Under KES 500,000">Under KES 500,000</option>
                        <option value="KES 500,000 - KES 2,000,000">KES 500,000 - KES 2,000,000</option>
                        <option value="KES 2,000,000 - KES 10,000,000">KES 2,000,000 - KES 10,000,000</option>
                        <option value="KES 10,000,000+">KES 10,000,000+ (Large Enterprise)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Submission Deadline *</label>
                      <input
                        type="date"
                        required
                        value={formData.deadline}
                        onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2 rounded-lg text-xs transition"
                    >
                      Next: Specifications & Contact →
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Step 2: Specifications & Delivery</div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Detailed Technical Specifications *</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="List key technical parameters, model numbers, standards (e.g. KEBS, ISO), delivery schedule, and quantity needed..."
                      value={formData.specifications}
                      onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Contact Person *</label>
                      <input
                        type="text"
                        required
                        placeholder="Procurement Officer Name"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Official Contact Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="procurement@organization.com"
                        value={formData.contactEmail}
                        onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-amber-950/40 border border-amber-800/60 rounded-xl flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="verifiedOnly"
                      checked={formData.targetVerifiedSuppliersOnly}
                      onChange={(e) => setFormData({ ...formData, targetVerifiedSuppliersOnly: e.target.checked })}
                      className="w-4 h-4 text-amber-500 rounded bg-slate-900 border-slate-700"
                    />
                    <label htmlFor="verifiedOnly" className="text-xs text-amber-200 cursor-pointer">
                      <strong className="text-amber-400">Target Verified Suppliers Only:</strong> Automatically restrict responses to KRA / KEBS / AGPO vetted suppliers.
                    </label>
                  </div>

                  <div className="flex justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="bg-slate-800 text-slate-300 font-semibold px-4 py-2 rounded-lg text-xs hover:bg-slate-700"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-2 rounded-lg text-xs transition"
                    >
                      Submit & Publish RFQ
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
