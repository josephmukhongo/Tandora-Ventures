import React, { useState } from 'react';
import { 
  Truck, Plane, Ship, MapPin, Calculator, 
  ShieldCheck, ArrowRight, CheckCircle2, Clock 
} from 'lucide-react';
import { LOGISTICS_ROUTES } from '../data/mockData';
import { LogisticsCalculatorModal } from '../components/LogisticsCalculatorModal';

export const LogisticsPage: React.FC = () => {
  const [calcOpen, setCalcOpen] = useState(false);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800/60">
              <Truck className="w-4 h-4" /> Multi-Modal Supply Chain & Warehousing Network
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Logistics & Freight Hub
            </h1>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl">
              Connecting Mombasa Port, Nairobi Inland Container Depot (ICD), JKIA Airport, and cross-border transit routes to Kampala, Kigali, and Juba.
            </p>
          </div>

          <button
            onClick={() => setCalcOpen(true)}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs px-6 py-3 rounded-xl shadow-xl transition flex items-center gap-2 self-start md:self-auto"
          >
            <Calculator className="w-4 h-4" /> Open Freight Rate Estimator
          </button>
        </div>

        {/* Hero image preview */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl h-64 md:h-80">
          <img 
            src="/images/warehouse.png" 
            alt="East Africa Logistics Warehouse"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-amber-400 uppercase tracking-widest">Bonded Warehousing</div>
              <div className="text-xl md:text-2xl font-black text-white">Nairobi & Mombasa Industrial Freight Depots</div>
              <p className="text-xs text-slate-300">200,000+ Sq. Ft. of CCTV Monitored Cold Chain & General Storage</p>
            </div>
            <div className="bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700 text-xs font-bold text-emerald-400 shrink-0">
              ✓ KRA Bonded Escort Available
            </div>
          </div>
        </div>

        {/* Routes Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-extrabold text-white">Major Freight & Transit Corridors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LOGISTICS_ROUTES.map((route) => (
              <div
                key={route.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-amber-500/50 transition-all shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400">{route.mode}</span>
                    <span className="text-xs font-mono font-bold text-emerald-400">{route.transitTime}</span>
                  </div>

                  <h3 className="text-base font-extrabold text-white leading-snug">{route.title}</h3>

                  <div className="space-y-1 text-xs text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>Origin: <strong className="text-white">{route.origin}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Destination: <strong className="text-white">{route.destination}</strong></span>
                    </div>
                  </div>

                  <div className="space-y-1 pt-2">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Included Protection:</div>
                    {route.features.map((feat, fIdx) => (
                      <div key={fIdx} className="text-xs text-slate-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Standard Rate</div>
                    <div className="text-xs font-mono font-bold text-amber-400">{route.startingPrice}</div>
                  </div>

                  <button
                    onClick={() => setCalcOpen(true)}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2 rounded-lg transition"
                  >
                    Get Booking Quote
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

      <LogisticsCalculatorModal
        isOpen={calcOpen}
        onClose={() => setCalcOpen(false)}
      />
    </div>
  );
};
