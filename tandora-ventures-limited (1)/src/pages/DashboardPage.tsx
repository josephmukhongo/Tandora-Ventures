import React, { useState } from 'react';
import { 
  FileText, Building2, PlusCircle, CheckCircle2, ShieldCheck, 
  Clock, Award, Layers, Sparkles, TrendingUp, Users, Send, Phone, Mail, User, AlertCircle 
} from 'lucide-react';
import { UserRole } from '../types';
import { ACTIVE_RFQS, TENDERS_DATA, SUPPLIERS_DATA, MANAGING_DIRECTOR } from '../data/mockData';

interface DashboardPageProps {
  userRole: UserRole;
  onOpenPostRFQ: () => void;
  onOpenListBusiness: () => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({
  userRole,
  onOpenPostRFQ,
  onOpenListBusiness,
}) => {
  const [activeTab, setActiveTab] = useState<'rfqs' | 'verifications' | 'tenders' | 'inquiries'>('rfqs');
  const [approvedSuppliers, setApprovedSuppliers] = useState<string[]>([]);
  const [newTenderTitle, setNewTenderTitle] = useState('');
  const [newTenderOrg, setNewTenderOrg] = useState('');
  const [tenderPosted, setTenderPosted] = useState(false);

  const handleApproveSupplier = (id: string) => {
    setApprovedSuppliers((prev) => [...prev, id]);
  };

  const handlePostTender = (e: React.FormEvent) => {
    e.preventDefault();
    setTenderPosted(true);
    setTimeout(() => setTenderPosted(false), 4000);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Managing Director Banner for Admin Role */}
        {userRole === 'admin' ? (
          <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-amber-950 border border-amber-500/50 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="flex items-center gap-4">
              <img
                src={MANAGING_DIRECTOR.image}
                alt={MANAGING_DIRECTOR.name}
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover border-2 border-amber-400 shadow-md shrink-0"
              />
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-full">
                  <ShieldCheck className="w-3 h-3" /> Managing Director Portal
                </div>
                <h1 className="text-xl md:text-2xl font-extrabold text-white">
                  Welcome, {MANAGING_DIRECTOR.name}
                </h1>
                <div className="text-xs text-slate-300 flex items-center gap-3 flex-wrap">
                  <span className="text-amber-400 font-mono font-bold">📞 {MANAGING_DIRECTOR.phone}</span>
                  <span className="text-blue-400 font-mono">✉️ {MANAGING_DIRECTOR.email}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveTab('rfqs')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition ${activeTab === 'rfqs' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
              >
                Review RFQs ({ACTIVE_RFQS.length})
              </button>
              <button
                onClick={() => setActiveTab('verifications')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition ${activeTab === 'verifications' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
              >
                Approve Verification Badges
              </button>
              <button
                onClick={() => setActiveTab('tenders')}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition ${activeTab === 'tenders' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
              >
                + Publish Tender
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800/60">
                <Sparkles className="w-4 h-4" /> Active Role View: <span className="uppercase text-white font-mono">{userRole}</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-white">
                {userRole === 'supplier' ? 'Supplier Portal & RFQ Control Desk' : 'Buyer Procurement Portal'}
              </h1>
              <p className="text-xs text-slate-300">
                Track submitted RFQs, matching tenders, supplier proposals, and verified compliance status.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenPostRFQ}
                className="bg-amber-500 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-xl hover:bg-amber-400 transition flex items-center gap-1.5"
              >
                <PlusCircle className="w-4 h-4" /> Post New RFQ
              </button>
              <button
                onClick={onOpenListBusiness}
                className="bg-blue-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl hover:bg-blue-500 transition flex items-center gap-1.5"
              >
                <Building2 className="w-4 h-4" /> Manage Supplier Profile
              </button>
            </div>
          </div>
        )}

        {/* Executive Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-1">
            <div className="text-xs text-slate-400 uppercase font-bold">Active Live RFQs</div>
            <div className="text-2xl font-black text-amber-400 font-mono">14 RFQs</div>
            <div className="text-[10px] text-emerald-400">↑ Routed to MD Desk</div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-1">
            <div className="text-xs text-slate-400 uppercase font-bold">Verified Tenders</div>
            <div className="text-2xl font-black text-blue-400 font-mono">{TENDERS_DATA.length} Published</div>
            <div className="text-[10px] text-slate-400">PPIP & Gazette Authenticated</div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-1">
            <div className="text-xs text-slate-400 uppercase font-bold">Verified Suppliers</div>
            <div className="text-2xl font-black text-emerald-400 font-mono">{SUPPLIERS_DATA.length + approvedSuppliers.length} Active</div>
            <div className="text-[10px] text-emerald-400">KRA & KEBS Audited</div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-1">
            <div className="text-xs text-slate-400 uppercase font-bold">MD Direct Line Status</div>
            <div className="text-sm font-black text-emerald-400 flex items-center gap-1">
              <Phone className="w-4 h-4 text-emerald-400" />
              {MANAGING_DIRECTOR.phone}
            </div>
            <div className="text-[10px] text-slate-400">WhatsApp & Call Active</div>
          </div>
        </div>

        {/* Tab 1: Active RFQs */}
        {activeTab === 'rfqs' && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-extrabold text-base text-white">Active Requests for Quotation (RFQs)</h3>
              <span className="text-xs text-amber-400 font-semibold">{ACTIVE_RFQS.length} Open Opportunities</span>
            </div>

            <div className="space-y-3">
              {ACTIVE_RFQS.map((rfq) => (
                <div key={rfq.id} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] bg-amber-950 text-amber-400 border border-amber-800/80 font-bold px-2 py-0.5 rounded uppercase">
                        {rfq.category}
                      </span>
                      <span className="text-xs font-mono text-slate-400">{rfq.id}</span>
                    </div>
                    <h4 className="font-bold text-white text-sm">{rfq.title}</h4>
                    <div className="text-xs text-slate-400">
                      Buyer: <strong className="text-slate-200">{rfq.buyerOrganization}</strong> • Deadline: {rfq.deadline}
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-4 text-xs border-t md:border-t-0 pt-2 md:pt-0 border-slate-800">
                    <div className="text-right">
                      <div className="text-[10px] text-slate-400 uppercase">Budget</div>
                      <div className="font-mono font-bold text-amber-400">{rfq.budgetRange}</div>
                    </div>

                    <div className="text-right">
                      <div className="text-[10px] text-slate-400 uppercase">Quotations</div>
                      <div className="font-bold text-emerald-400">{rfq.bidsCount} Bids Received</div>
                    </div>

                    <button
                      onClick={() => alert(`Reviewing RFQ ${rfq.id}. Direct quotes routed to Managing Director Desk.`)}
                      className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs"
                    >
                      Manage Quotes
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Approve Verification Badges (MD Desk) */}
        {activeTab === 'verifications' && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
            <div className="border-b border-slate-800 pb-3">
              <h3 className="font-extrabold text-base text-white">Supplier Verification & Badge Approvals</h3>
              <p className="text-xs text-slate-400">Approve KRA PIN, KEBS Quality Mark, and AGPO certificates submitted by suppliers</p>
            </div>

            <div className="space-y-3">
              {SUPPLIERS_DATA.map((sup) => {
                const isApproved = approvedSuppliers.includes(sup.id);
                return (
                  <div key={sup.id} className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="font-bold text-white text-sm">{sup.name}</div>
                      <div className="text-xs text-slate-400">{sup.location}, {sup.country} • Contact: {sup.contactPerson} ({sup.phone})</div>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {sup.badges.map((b, bIdx) => (
                          <span key={bIdx} className="text-[10px] bg-slate-900 text-emerald-400 px-2 py-0.5 rounded border border-slate-800">
                            ✓ {b}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      {isApproved ? (
                        <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-3 py-1.5 rounded-lg border border-emerald-800 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" /> Verified & Approved
                        </span>
                      ) : (
                        <button
                          onClick={() => handleApproveSupplier(sup.id)}
                          className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2 rounded-lg transition"
                        >
                          Approve Verification Badge
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 3: Publish Tender Notice (MD Desk) */}
        {activeTab === 'tenders' && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
            <div className="border-b border-slate-800 pb-3">
              <h3 className="font-extrabold text-base text-white">Publish New Verified Tender Notice</h3>
              <p className="text-xs text-slate-400">Add a new verified public or corporate tender notice to the Tandora platform</p>
            </div>

            {tenderPosted ? (
              <div className="p-4 bg-emerald-950 border border-emerald-800 rounded-xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <div className="font-bold text-white text-sm">Tender Published Successfully!</div>
                <div className="text-xs text-slate-300">Live notice added to the Tandora Tenders Discovery directory.</div>
              </div>
            ) : (
              <form onSubmit={handlePostTender} className="space-y-4 max-w-2xl">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Tender Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Supply & Installation of Medical Cold Storage Units"
                    value={newTenderTitle}
                    onChange={(e) => setNewTenderTitle(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Procuring Organization *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ministry of Health / Amref Health Africa / County Government"
                    value={newTenderOrg}
                    onChange={(e) => setNewTenderOrg(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-xs text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-6 py-2.5 rounded-lg transition"
                >
                  Publish Tender Notice
                </button>
              </form>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
