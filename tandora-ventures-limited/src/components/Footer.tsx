import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Phone, Mail, MapPin, Globe, 
  ArrowRight, ExternalLink, FileText, CheckCircle2, Lock
} from 'lucide-react';
import { MANAGING_DIRECTOR, CATEGORIES_LIST } from '../data/mockData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      
      {/* Managing Director & Trust Guarantee Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-blue-950 border-b border-slate-800 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Managing Director Profile Highlight */}
          <div className="flex items-center gap-4 bg-slate-900/90 p-4 rounded-xl border border-slate-800 shadow-xl max-w-xl">
            <div className="relative shrink-0">
              <img 
                src={MANAGING_DIRECTOR.image} 
                alt={MANAGING_DIRECTOR.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-amber-500 shadow-md"
              />
              <div className="absolute -bottom-1 -right-1 bg-amber-500 p-1 rounded-full text-slate-950" title="Verified MD">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-amber-400 tracking-wider uppercase">Executive Leadership</div>
              <div className="text-base font-bold text-white">{MANAGING_DIRECTOR.name}</div>
              <div className="text-xs text-slate-400">{MANAGING_DIRECTOR.title}</div>
              <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-300 flex-wrap">
                <a href={`tel:${MANAGING_DIRECTOR.phoneClean}`} className="hover:text-amber-400 font-semibold flex items-center gap-1">
                  <Phone className="w-3 h-3 text-amber-400" /> {MANAGING_DIRECTOR.phone}
                </a>
                <a href={`mailto:${MANAGING_DIRECTOR.email}`} className="hover:text-amber-400 font-semibold flex items-center gap-1">
                  <Mail className="w-3 h-3 text-blue-400" /> {MANAGING_DIRECTOR.email}
                </a>
              </div>
            </div>
          </div>

          {/* Core Trust & Source Verification Statement */}
          <div className="lg:max-w-xl text-center lg:text-left bg-slate-900/60 p-5 rounded-xl border border-slate-800/80">
            <div className="inline-flex items-center gap-1.5 text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              Verified Sourcing Standard
            </div>
            <p className="text-lg font-extrabold text-white tracking-tight">
              "Find opportunities. Verify sources. Connect with confidence."
            </p>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Tandora Ventures Limited verifies original tender notices directly from official gazettes, government procurement portals (PPIP), and accredited NGOs. We never fabricate tenders, prices, or supplier certifications.
            </p>
          </div>

        </div>
      </div>

      {/* Footer Main Links */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Col 1: Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center font-extrabold text-slate-950 text-xl shadow-lg">
              TV
            </div>
            <div>
              <div className="font-extrabold text-lg text-white">TANDORA VENTURES LIMITED</div>
              <div className="text-xs text-amber-400 font-medium">Connecting Opportunities. Powering Supply Chains.</div>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Kenya-based procurement, supply-chain, sourcing and business-opportunities platform connecting organizations with reliable suppliers, products, services, tenders, manufacturers, logistics providers and international sourcing opportunities.
          </p>

          <p className="text-xs text-slate-400 italic font-medium">
            "From Local Suppliers to Global Opportunities."
          </p>

          <div className="pt-2 text-xs space-y-1.5 text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Nairobi Headquarters • Commercial District, Nairobi, Kenya</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Pan-African Regional Network: Kenya, Uganda, Tanzania, Rwanda, DRC, Global Trade Hubs</span>
            </div>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div>
          <div className="text-white font-bold text-sm mb-3 uppercase tracking-wider border-b border-slate-800 pb-1">
            Platform Navigation
          </div>
          <ul className="space-y-2 text-xs">
            <li><Link to="/tenders" className="hover:text-amber-400 transition flex items-center gap-1"><ArrowRight className="w-3 h-3 text-amber-500" /> Tenders Discovery</Link></li>
            <li><Link to="/suppliers" className="hover:text-amber-400 transition flex items-center gap-1"><ArrowRight className="w-3 h-3 text-amber-500" /> Supplier Directory</Link></li>
            <li><Link to="/products" className="hover:text-amber-400 transition flex items-center gap-1"><ArrowRight className="w-3 h-3 text-amber-500" /> Product Sourcing</Link></li>
            <li><Link to="/services" className="hover:text-amber-400 transition flex items-center gap-1"><ArrowRight className="w-3 h-3 text-amber-500" /> Service Providers</Link></li>
            <li><Link to="/sourcing" className="hover:text-amber-400 transition flex items-center gap-1"><ArrowRight className="w-3 h-3 text-amber-500" /> Global Sourcing Desk</Link></li>
            <li><Link to="/logistics" className="hover:text-amber-400 transition flex items-center gap-1"><ArrowRight className="w-3 h-3 text-amber-500" /> Logistics & Freight Hub</Link></li>
            <li><Link to="/opportunities" className="hover:text-amber-400 transition flex items-center gap-1"><ArrowRight className="w-3 h-3 text-amber-500" /> Business Opportunities</Link></li>
          </ul>
        </div>

        {/* Col 3: Key Sectors */}
        <div>
          <div className="text-white font-bold text-sm mb-3 uppercase tracking-wider border-b border-slate-800 pb-1">
            Procurement Sectors
          </div>
          <ul className="space-y-1.5 text-xs text-slate-400">
            {CATEGORIES_LIST.slice(0, 8).map((cat) => (
              <li key={cat} className="hover:text-slate-200 transition">
                • {cat}
              </li>
            ))}
            <li className="pt-1">
              <Link to="/tenders" className="text-amber-400 hover:underline text-xs font-semibold">
                + View all 22+ Sectors
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact & Verification */}
        <div>
          <div className="text-white font-bold text-sm mb-3 uppercase tracking-wider border-b border-slate-800 pb-1">
            Contact & Support
          </div>
          <div className="space-y-3 text-xs">
            <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-1.5">
              <div className="font-bold text-amber-400">Managing Director Desk</div>
              <div className="text-slate-200 font-semibold">{MANAGING_DIRECTOR.name}</div>
              <a href={`tel:${MANAGING_DIRECTOR.phoneClean}`} className="block text-slate-300 hover:text-white font-mono">
                📞 {MANAGING_DIRECTOR.phone}
              </a>
              <a href={`mailto:${MANAGING_DIRECTOR.email}`} className="block text-slate-300 hover:text-white break-all">
                ✉️ {MANAGING_DIRECTOR.email}
              </a>
            </div>

            <div className="flex items-center gap-2 text-slate-400 text-[11px]">
              <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>ISO Compliance & KRA Verification Standards</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Legal & Vision bar */}
      <div className="bg-slate-950 border-t border-slate-900 py-4 px-4 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-200">Tandora Ventures Limited</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Verified Tender Discovery</span>
            <span>•</span>
            <span>Cross-Border Sourcing</span>
            <span>•</span>
            <span>Pan-African Trade Vision</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
