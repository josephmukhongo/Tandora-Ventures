import React from 'react';
import { 
  FileText, Building2, PlusCircle, CheckCircle2, ShieldCheck, 
  Clock, Award, Layers, Sparkles, TrendingUp, Users, Send 
} from 'lucide-react';
import { UserRole } from '../types';
import { ACTIVE_RFQS, TENDERS_DATA, SUPPLIERS_DATA } from '../data/mockData';

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
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Portal Banner */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800/60">
              <Sparkles className="w-4 h-4" /> Active Role View: <span className="uppercase text-white font-mono">{userRole}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-white">
              {userRole === 'supplier' ? 'Supplier Portal & RFQ Control Desk' : userRole === 'admin' ? 'Tandora Verification Admin Desk' : 'Buyer Procurement Portal'}
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

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-1">
            <div className="text-xs text-slate-400 uppercase font-bold">Active Live RFQs</div>
            <div className="text-2xl font-black text-amber-400 font-mono">14 RFQs</div>
            <div className="text-[10px] text-emerald-400">↑ 3 new bids this week</div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-1">
            <div className="text-xs text-slate-400 uppercase font-bold">Matching Tenders</div>
            <div className="text-2xl font-black text-blue-400 font-mono">28 Saved</div>
            <div className="text-[10px] text-slate-400">Verified Original Sources</div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-1">
            <div className="text-xs text-slate-400 uppercase font-bold">Quotations Received</div>
            <div className="text-2xl font-black text-emerald-400 font-mono">42 Bids</div>
            <div className="text-[10px] text-emerald-400">Avg. response 3.2 hrs</div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-1">
            <div className="text-xs text-slate-400 uppercase font-bold">Verification Badge</div>
            <div className="text-sm font-black text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              KRA & KEBS Verified
            </div>
            <div className="text-[10px] text-slate-400">Valid through 2025</div>
          </div>
        </div>

        {/* Active RFQs List */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="font-extrabold text-base text-white">Active Requests for Quotation (RFQs)</h3>
            <span className="text-xs text-amber-400 font-semibold">{ACTIVE_RFQS.length} Open for Quotation</span>
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
                    Buyer: <strong className="text-slate-200">{rfq.buyerOrganization}</strong> • Location: {rfq.location}
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-4 text-xs border-t md:border-t-0 pt-2 md:pt-0 border-slate-800">
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400 uppercase">Budget</div>
                    <div className="font-mono font-bold text-amber-400">{rfq.budgetRange}</div>
                  </div>

                  <div className="text-right">
                    <div className="text-[10px] text-slate-400 uppercase">Quotations</div>
                    <div className="font-bold text-emerald-400">{rfq.bidsCount} Suppliers Responded</div>
                  </div>

                  <button
                    onClick={() => alert(`Reviewing proposals for ${rfq.id}`)}
                    className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-3 py-1.5 rounded-lg border border-slate-700"
                  >
                    View Bids
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
