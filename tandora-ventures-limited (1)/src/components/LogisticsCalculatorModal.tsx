import React, { useState } from 'react';
import { X, Truck, Plane, Ship, ShieldCheck, ArrowRight, Calculator, CheckCircle2 } from 'lucide-react';

interface LogisticsCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogisticsCalculatorModal: React.FC<LogisticsCalculatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [origin, setOrigin] = useState('Mombasa Port, Kenya');
  const [destination, setDestination] = useState('Nairobi ICD / Industrial Area');
  const [mode, setMode] = useState<'Road Trucking' | 'Air Freight' | 'Ocean Cargo'>('Road Trucking');
  const [weightKg, setWeightKg] = useState('2500');
  const [cargoType, setCategory] = useState('General Commercial Goods');
  const [calculated, setCalculated] = useState(false);

  if (!isOpen) return null;

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setCalculated(true);
  };

  const weightNum = parseFloat(weightKg) || 1000;
  const estimatedFreightKES = mode === 'Air Freight' 
    ? Math.round(weightNum * 650)
    : mode === 'Road Trucking'
    ? Math.round(95000 + (weightNum / 1000) * 8500)
    : Math.round(180000 + (weightNum / 1000) * 4200);

  const estimatedImportDutyKES = Math.round(estimatedFreightKES * 0.25);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl text-white shadow-2xl my-8 overflow-hidden">
        
        {/* Top Header */}
        <div className="bg-slate-850 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/40 flex items-center justify-center font-bold">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white">East Africa Freight & Import Tax Estimator</h3>
              <p className="text-xs text-slate-400">Instant rates for Mombasa, JKIA, Kampala, Kigali & Global Hubs</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <div className="p-6 space-y-4">
          <form onSubmit={handleCalculate} className="space-y-4">
            
            {/* Mode selection */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Transport Mode</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setMode('Road Trucking')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 border transition ${
                    mode === 'Road Trucking'
                      ? 'bg-amber-500/20 text-amber-400 border-amber-500/50'
                      : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}
                >
                  <Truck className="w-4 h-4" /> Road Trucking
                </button>
                <button
                  type="button"
                  onClick={() => setMode('Air Freight')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 border transition ${
                    mode === 'Air Freight'
                      ? 'bg-blue-500/20 text-blue-400 border-blue-500/50'
                      : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}
                >
                  <Plane className="w-4 h-4" /> Air Freight
                </button>
                <button
                  type="button"
                  onClick={() => setMode('Ocean Cargo')}
                  className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 border transition ${
                    mode === 'Ocean Cargo'
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
                      : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}
                >
                  <Ship className="w-4 h-4" /> Ocean Cargo
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Origin Point</label>
                <select
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
                >
                  <option value="Mombasa Port, Kenya">Mombasa Port, Kenya</option>
                  <option value="Nairobi JKIA Cargo Terminal">Nairobi JKIA, Kenya</option>
                  <option value="Guangzhou, China">Guangzhou, China (Import)</option>
                  <option value="Dubai Jebel Ali, UAE">Dubai Jebel Ali, UAE (Import)</option>
                  <option value="Mumbai Port, India">Mumbai, India</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Destination Point</label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
                >
                  <option value="Nairobi ICD / Industrial Area">Nairobi ICD / Industrial Area</option>
                  <option value="Eldoret Depot, Kenya">Eldoret / Kisumu Hub</option>
                  <option value="Kampala, Uganda">Kampala, Uganda (Cross-Border)</option>
                  <option value="Kigali, Rwanda">Kigali, Rwanda (Cross-Border)</option>
                  <option value="Juba, South Sudan">Juba, South Sudan</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Gross Cargo Weight (Kg)</label>
                <input
                  type="number"
                  required
                  value={weightKg}
                  onChange={(e) => setWeightKg(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Cargo Type</label>
                <select
                  value={cargoType}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
                >
                  <option value="General Commercial Goods">General Commercial Goods</option>
                  <option value="Heavy Machinery & Equipment">Heavy Machinery & Equipment</option>
                  <option value="Medical Consumables (Cold Chain)">Medical Consumables (Cold Chain)</option>
                  <option value="Hazardous / Solar Batteries">Hazardous / Solar Batteries</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 rounded-lg text-xs transition"
            >
              Calculate Estimated Rate
            </button>

          </form>

          {/* Results Display */}
          {calculated && (
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Estimated Freight Cost Breakdown</div>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  Tandora Rates Standard
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                  <div className="text-slate-400 text-[11px]">Freight Charges ({mode}):</div>
                  <div className="text-lg font-extrabold text-amber-400 font-mono">
                    KES {estimatedFreightKES.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Includes port handling & transit insurance</div>
                </div>

                <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                  <div className="text-slate-400 text-[11px]">Est. Import Duty & Port Taxes:</div>
                  <div className="text-lg font-extrabold text-blue-400 font-mono">
                    KES {estimatedImportDutyKES.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Based on EAC Common External Tariff</div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 text-xs">
                <span className="text-slate-300">Need guaranteed booking & customs clearance?</span>
                <button
                  onClick={() => {
                    alert("Your logistics request has been routed to Managing Director Joshua Watiti Wekesa & Tandora Freight Desk.");
                    onClose();
                  }}
                  className="bg-amber-500 text-slate-950 font-bold px-4 py-1.5 rounded-lg hover:bg-amber-400 transition"
                >
                  Book Haulage Now
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
