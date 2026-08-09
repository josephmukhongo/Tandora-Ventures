import React, { useState, useMemo } from 'react';
import { 
  Search, Building2, ShieldCheck, MapPin, Phone, Mail, 
  Award, CheckCircle2, Send, ExternalLink, Star 
} from 'lucide-react';
import { SUPPLIERS_DATA, CATEGORIES_LIST } from '../data/mockData';
import { Supplier } from '../types';

export const SuppliersPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null);
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryText, setInquiryText] = useState('');

  const filteredSuppliers = useMemo(() => {
    return SUPPLIERS_DATA.filter((sup) => {
      const matchesSearch = 
        sup.name.toLowerCase().includes(search.toLowerCase()) ||
        sup.description.toLowerCase().includes(search.toLowerCase()) ||
        sup.city.toLowerCase().includes(search.toLowerCase());

      const matchesCat = category === 'All' || sup.category.includes(category) || sup.sectors.some(s => s.toLowerCase().includes(category.toLowerCase()));

      return matchesSearch && matchesCat;
    });
  }, [search, category]);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800/60">
            <Building2 className="w-4 h-4" /> Vetted Manufacturer & Wholesale Supplier Network
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Verified Supplier Directory
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl">
            Discover audited East African and international suppliers, verified with KRA, KEBS, AGPO, and ISO compliance standards. Submit direct Requests for Quotation (RFQs) with zero middleman fees.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-4 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            
            <div className="relative md:col-span-2">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search suppliers by name, product line, city (e.g. Nairobi, Eldoret, Mombasa)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-slate-950 text-sm text-white pl-9 pr-3 py-2 rounded-lg border border-slate-700 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-slate-950 text-xs text-white px-3 py-2.5 rounded-lg border border-slate-700 focus:border-blue-500 focus:outline-none cursor-pointer"
              >
                <option value="All">All Categories</option>
                {CATEGORIES_LIST.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* Supplier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSuppliers.map((supplier) => (
            <div
              key={supplier.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-blue-500/50 transition-all shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400">{supplier.category}</span>
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                    {supplier.rating} ({supplier.reviewCount} reviews)
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-white">{supplier.name}</h3>

                <div className="text-xs text-slate-300 space-y-1">
                  <div className="flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{supplier.location}, {supplier.country}</span>
                  </div>
                  <div className="text-slate-400">
                    Est. {supplier.yearEstablished} • {supplier.completedOrders}+ Orders Executed
                  </div>
                </div>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {supplier.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {supplier.badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="text-[10px] bg-slate-950 text-emerald-400 px-2.5 py-0.5 rounded border border-emerald-800/60 font-semibold flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      {badge}
                    </span>
                  ))}
                </div>

              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Contact Person</div>
                  <div className="text-xs font-bold text-white">{supplier.contactPerson}</div>
                </div>

                <button
                  onClick={() => {
                    setSelectedSupplier(supplier);
                    setInquirySent(false);
                  }}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2 rounded-lg transition flex items-center gap-1"
                >
                  <Send className="w-3.5 h-3.5" /> Request Quote
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Direct RFQ Modal for Selected Supplier */}
      {selectedSupplier && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-lg text-white p-6 shadow-2xl space-y-4">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="font-extrabold text-base text-white">Direct RFQ to {selectedSupplier.name}</h3>
                <p className="text-xs text-slate-400">Directly message this verified supplier</p>
              </div>
              <button
                onClick={() => setSelectedSupplier(null)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {inquirySent ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-white text-base">Inquiry Sent to {selectedSupplier.contactPerson}!</h4>
                <p className="text-xs text-slate-300">
                  {selectedSupplier.name} will review your specifications and reply via email ({selectedSupplier.email}) or phone ({selectedSupplier.phone}).
                </p>
                <button
                  onClick={() => setSelectedSupplier(null)}
                  className="bg-blue-600 text-white font-bold px-5 py-2 rounded-lg text-xs"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Inquiry Specification / Order Details *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide quantities, specifications, target delivery date, and destination city..."
                    value={inquiryText}
                    onChange={(e) => setInquiryText(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-xs text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedSupplier(null)}
                    className="bg-slate-800 text-slate-300 px-4 py-2 rounded text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-2 rounded text-xs transition flex items-center gap-1"
                  >
                    <Send className="w-3.5 h-3.5" /> Send Direct RFQ
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
