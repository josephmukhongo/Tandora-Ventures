import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Award, Phone, Mail, MapPin, Globe, 
  CheckCircle2, Users, Building2, Truck, ArrowRight, Lock 
} from 'lucide-react';
import { MANAGING_DIRECTOR } from '../data/mockData';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Hero Brand Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-950/80 px-3.5 py-1 rounded-full border border-amber-800/60">
            <ShieldCheck className="w-4 h-4" /> Company Overview & Pan-African Trade Vision
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Tandora Ventures Limited
          </h1>

          <p className="text-lg font-semibold text-amber-400">
            "Connecting Opportunities. Powering Supply Chains."
          </p>

          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
            Tandora Ventures Limited is a Kenya-based procurement, supply-chain, sourcing and business-opportunities platform connecting organizations with reliable suppliers, products, services, tenders, manufacturers, logistics providers and international sourcing opportunities.
          </p>
        </div>

        {/* MANAGING DIRECTOR LEADERSHIP HIGHLIGHT */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-blue-950 border border-amber-500/40 rounded-3xl p-6 md:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-blue-600 rounded-2xl blur opacity-60"></div>
                <img 
                  src={MANAGING_DIRECTOR.image} 
                  alt={MANAGING_DIRECTOR.name} 
                  className="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl border-2 border-amber-400 shadow-2xl"
                />
                <div className="absolute -bottom-3 bg-amber-500 text-slate-950 text-[11px] font-black uppercase px-4 py-1 rounded-full shadow-lg left-1/2 -translate-x-1/2 whitespace-nowrap">
                  Managing Director & CEO
                </div>
              </div>

              <div className="mt-6 space-y-1">
                <h3 className="text-2xl font-extrabold text-white">{MANAGING_DIRECTOR.name}</h3>
                <p className="text-xs text-amber-400 font-bold">{MANAGING_DIRECTOR.title}</p>
                <p className="text-xs text-slate-400">Tandora Ventures Limited • Nairobi, Kenya</p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-extrabold uppercase text-amber-400 tracking-wider">Leadership Profile</div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Driving Sustainable Procurement & Supply Chain Excellence Across Africa
              </h3>

              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                {MANAGING_DIRECTOR.bio}
              </p>

              <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
                <div className="font-bold text-amber-400 uppercase tracking-wider">Direct Managing Director Office Contacts</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-200">
                  <a href={`tel:${MANAGING_DIRECTOR.phoneClean}`} className="hover:text-amber-400 font-mono font-bold flex items-center gap-1.5">
                    📞 {MANAGING_DIRECTOR.phone}
                  </a>
                  <a href={`mailto:${MANAGING_DIRECTOR.email}`} className="hover:text-amber-400 font-bold flex items-center gap-1.5 break-all">
                    ✉️ {MANAGING_DIRECTOR.email}
                  </a>
                </div>
              </div>

              <div className="text-xs text-emerald-400 font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Verified Governance & KRA / KEBS / AGPO Compliance Standards</span>
              </div>

            </div>

          </div>
        </div>

        {/* Brand Promise & Anti-Fabrication Guarantee */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-white">Core Trust & Verification Policy</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>"Find opportunities. Verify sources. Connect with confidence."</strong>
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              For tenders and business opportunities, Tandora Ventures clearly identifies original sources (e.g. Kenya PPIP Portal, gazettes, NGO procurement boards) and distinguishes verified notices from user-submitted listings.
            </p>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-amber-300 font-medium">
              ✓ Strict Policy: Tandora Ventures Limited never fabricates tenders, companies, suppliers, prices, certifications or procurement information.
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-4 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-white">Pan-African & Global Expansion Vision</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Positioned to grow from a Kenya procurement hub into a major <strong>African supply-chain and business-opportunity network</strong>, eventually connecting African businesses with suppliers, buyers, manufacturers and procurement opportunities around the world.
            </p>
            <div className="space-y-1.5 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> East African Community (EAC) Single Customs Territory
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> AfCFTA (African Continental Free Trade Area) Alignment
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Global Import Corridors (China, UAE, India, Europe)
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
