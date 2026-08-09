import React from 'react';
import { SERVICES_DATA } from '../data/mockData';
import { Wrench, CheckCircle2, Star, MapPin, Send } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800/60">
            <Wrench className="w-4 h-4" /> Technical & Professional Service Providers
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Professional Services Directory
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl">
            Vetted engineering, ICT network infrastructure, environmental audits, customs clearing, and equipment calibration specialists for corporate & public sector projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-amber-500/50 transition-all shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400">{service.category}</span>
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                    {service.rating}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-white leading-snug">{service.name}</h3>

                <div className="text-xs text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>{service.location}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">{service.description}</p>

                <div className="space-y-1 pt-2">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Core Capabilities:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.capabilities.map((cap, cIdx) => (
                      <span key={cIdx} className="text-[10px] bg-slate-950 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                        ✓ {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Standard Rate</div>
                  <div className="text-xs font-mono font-bold text-amber-400">{service.startingRate}</div>
                </div>

                <button
                  onClick={() => alert(`Service Inquiry initiated for ${service.name}. Our coordinator will contact you.`)}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-lg transition flex items-center gap-1"
                >
                  <Send className="w-3.5 h-3.5" /> Book Service
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
