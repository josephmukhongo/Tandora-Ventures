import React, { useState } from 'react';
import { X, ShieldCheck, Calendar, MapPin, ExternalLink, FileText, CheckCircle2, Download, Building, Send } from 'lucide-react';
import { Tender } from '../types';

interface TenderDetailModalProps {
  tender: Tender | null;
  onClose: () => void;
}

export const TenderDetailModal: React.FC<TenderDetailModalProps> = ({
  tender,
  onClose,
}) => {
  const [bidding, setBidding] = useState(false);
  const [bidSubmitted, setBidSubmitted] = useState(false);
  const [quotationAmount, setQuotationAmount] = useState('');
  const [vendorName, setCompany] = useState('');

  if (!tender) return null;

  const handleBidSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBidSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-3xl text-white shadow-2xl my-8 overflow-hidden">
        
        {/* Top Header */}
        <div className="bg-slate-850 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase border ${
              tender.verificationType === 'Verified Original Source'
                ? 'bg-emerald-950 text-emerald-400 border-emerald-800'
                : 'bg-amber-950 text-amber-400 border-amber-800'
            }`}>
              <ShieldCheck className="w-3 h-3 inline mr-1" />
              {tender.verificationType}
            </span>
            <span className="text-xs font-mono text-slate-400">Ref: {tender.referenceNumber}</span>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Title & Organization */}
          <div>
            <h2 className="text-xl font-extrabold text-white leading-tight">{tender.title}</h2>
            <div className="flex items-center gap-4 mt-2 text-xs text-slate-300 flex-wrap">
              <span className="flex items-center gap-1 font-semibold text-amber-400">
                <Building className="w-3.5 h-3.5" /> {tender.organization}
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-blue-400" /> {tender.location}
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <Calendar className="w-3.5 h-3.5 text-amber-400" /> Closing: <strong className="text-white">{tender.deadline}</strong>
              </span>
            </div>
          </div>

          {/* Verification Source Box */}
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between flex-wrap gap-3">
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Original Source Verified</div>
              <div className="text-sm font-semibold text-white">{tender.sourceName || 'Kenya PPIP Portal'}</div>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Authenticity checked by Tandora Verification Engine. Verified against official tender notices.
              </p>
            </div>
            {tender.sourceUrl && (
              <a
                href={tender.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-bold px-3.5 py-2 rounded-lg border border-slate-700 flex items-center gap-1.5 transition shrink-0"
              >
                <span>View Original Source</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Description & Value */}
          <div className="space-y-2">
            <h4 className="text-xs font-extrabold uppercase text-amber-400 tracking-wider">Tender Scope & Specifications</h4>
            <p className="text-xs text-slate-300 leading-relaxed bg-slate-800/50 p-3.5 rounded-lg border border-slate-750">
              {tender.description}
            </p>
            {tender.estimatedValue && (
              <div className="text-xs text-slate-300 pt-1">
                Estimated Value / Budget Allocation: <strong className="text-amber-400 font-mono text-sm">{tender.estimatedValue}</strong>
              </div>
            )}
          </div>

          {/* Requirements Checklist */}
          <div>
            <h4 className="text-xs font-extrabold uppercase text-amber-400 tracking-wider mb-2">Mandatory Bidding Requirements</h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {tender.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-slate-800/40 p-2 rounded border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Quotation Submission Drawer */}
          {bidding ? (
            <div className="p-4 bg-slate-850 rounded-xl border border-amber-500/30 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">Submit Supplier Quotation for this Tender</h4>
                <button
                  onClick={() => setBidding(false)}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
              </div>

              {bidSubmitted ? (
                <div className="text-center py-4 space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <div className="text-sm font-bold text-white">Quotation Submitted!</div>
                  <p className="text-xs text-slate-300">
                    Your quotation for <strong>{tender.title}</strong> has been logged in Tandora Procurement Vault.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBidSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">Company / Supplier Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your Business Name"
                        value={vendorName}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 mb-1">Quotation Bid Amount (KES) *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 42,000,000"
                        value={quotationAmount}
                        onChange={(e) => setQuotationAmount(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-1">
                    <button
                      type="submit"
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2 rounded text-xs transition flex items-center gap-1"
                    >
                      <Send className="w-3.5 h-3.5" /> Confirm & Send Quotation
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-800">
              <button
                onClick={() => {
                  alert("Simulated PDF Tender Specification Summary Download initialized.");
                }}
                className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-lg border border-slate-700 flex items-center justify-center gap-1.5 transition"
              >
                <Download className="w-4 h-4 text-blue-400" />
                Download Specs PDF
              </button>

              <button
                onClick={() => setBidding(true)}
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold px-6 py-2.5 rounded-lg transition flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/20"
              >
                <Send className="w-4 h-4" />
                Submit Bid / Express Interest
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
