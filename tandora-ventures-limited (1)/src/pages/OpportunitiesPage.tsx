import React from 'react';
import { 
  Sparkles, ShieldCheck, Award, ArrowRight, 
  Calendar, CheckCircle2, Globe, Building2 
} from 'lucide-react';
import { BUSINESS_OPPORTUNITIES } from '../data/mockData';

export const OpportunitiesPage: React.FC = () => {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800/60">
            <Sparkles className="w-4 h-4" /> Strategic Partnerships & Reserved Government Notices
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Business Opportunities Desk
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl">
            Access AGPO youth/women reserved procurement pools, international distributor agencies, sub-contracting allocations, and Joint Venture partnerships across East Africa.
          </p>
        </div>

        {/* Opportunity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_OPPORTUNITIES.map((opp) => (
            <div
              key={opp.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-amber-500/50 transition-all shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400">{opp.type}</span>
                  <span className="text-xs font-mono text-slate-400">{opp.country}</span>
                </div>

                <h3 className="text-lg font-extrabold text-white leading-snug">{opp.title}</h3>

                <div className="text-xs text-slate-300 font-semibold flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>{opp.organization}</span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">{opp.description}</p>

                <div className="space-y-1 pt-2">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Eligibility Criteria:</div>
                  {opp.eligibility.map((el, eIdx) => (
                    <div key={eIdx} className="text-xs text-slate-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{el}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Value Allocation</div>
                  <div className="text-xs font-mono font-bold text-amber-400">{opp.value}</div>
                </div>

                <button
                  onClick={() => alert(`Application for ${opp.title} submitted to Tandora Trade Desk.`)}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-lg transition"
                >
                  Apply / Express Interest
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
