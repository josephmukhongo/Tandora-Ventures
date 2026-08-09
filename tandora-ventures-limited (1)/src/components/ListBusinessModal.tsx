import React, { useState } from 'react';
import { X, Building2, ShieldCheck, CheckCircle2, Award, Upload } from 'lucide-react';
import { CATEGORIES_LIST } from '../data/mockData';

interface ListBusinessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ListBusinessModal: React.FC<ListBusinessModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    registrationNumber: '',
    kraPin: '',
    category: CATEGORIES_LIST[0],
    city: 'Nairobi',
    country: 'Kenya',
    phone: '',
    email: '',
    contactPerson: '',
    hasKebs: true,
    hasAgpo: false,
    description: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl text-white shadow-2xl my-8 overflow-hidden">
        
        {/* Header */}
        <div className="bg-slate-850 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/40 flex items-center justify-center font-bold">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white">List Your Business & Gain Verified Status</h3>
              <p className="text-xs text-slate-400">Join East Africa's leading procurement & supply chain network</p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-white">Supplier Profile Submitted!</h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you for onboarding <strong className="text-amber-400">"{formData.companyName}"</strong>. Our Tandora Verification Desk is processing your registration details.
              </p>
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="text-amber-400 font-bold uppercase tracking-wider">Verification Badge Standard</div>
                <div className="text-emerald-400 font-medium">✓ KRA PIN Verified (Simulated Check)</div>
                <div className="text-emerald-400 font-medium">✓ KEBS & AGPO Alignment Initialized</div>
                <div className="text-slate-300">You will receive RFQ alerts matching <strong>{formData.category}</strong>.</div>
              </div>
              <button
                onClick={handleReset}
                className="bg-blue-600 text-white font-bold px-6 py-2.5 rounded-lg hover:bg-blue-500 transition"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Company Registered Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Industrial Supplies Ltd"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Primary Sector / Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
                  >
                    {CATEGORIES_LIST.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Business Registration / CR12 No.</label>
                  <input
                    type="text"
                    placeholder="e.g. CPR/2021/88921"
                    value={formData.registrationNumber}
                    onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">KRA PIN Number *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. P051283921Z"
                    value={formData.kraPin}
                    onChange={(e) => setFormData({ ...formData, kraPin: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">City / Town *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Country *</label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
                  >
                    <option value="Kenya">Kenya</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="China">China (Export Desk)</option>
                    <option value="UAE">UAE (Dubai Export)</option>
                    <option value="India">India</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+254 7XX XXX XXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Business Summary & Core Offerings *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe your products, manufacturing capacity, key past clients, and delivery capabilities..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                <label className="flex items-center gap-2 bg-slate-800 p-3 rounded-lg border border-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.hasKebs}
                    onChange={(e) => setFormData({ ...formData, hasKebs: e.target.checked })}
                    className="w-4 h-4 text-blue-500 rounded bg-slate-900 border-slate-700"
                  />
                  <span className="text-xs text-slate-200">
                    <strong className="text-white">KEBS Standard Compliant</strong> (Have Quality Mark)
                  </span>
                </label>

                <label className="flex items-center gap-2 bg-slate-800 p-3 rounded-lg border border-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.hasAgpo}
                    onChange={(e) => setFormData({ ...formData, hasAgpo: e.target.checked })}
                    className="w-4 h-4 text-blue-500 rounded bg-slate-900 border-slate-700"
                  />
                  <span className="text-xs text-slate-200">
                    <strong className="text-white">AGPO Certified Enterprise</strong> (Youth / Women / PWD)
                  </span>
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-slate-800 text-slate-300 font-semibold px-4 py-2 rounded-lg text-xs hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-2 rounded-lg text-xs transition"
                >
                  Submit Business Profile
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
