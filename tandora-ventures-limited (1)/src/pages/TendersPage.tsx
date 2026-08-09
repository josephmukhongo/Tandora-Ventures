import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Search, ShieldCheck, Filter, Calendar, MapPin, Building, 
  ExternalLink, FileText, CheckCircle2, ChevronDown, Download, Send 
} from 'lucide-react';
import { TENDERS_DATA, CATEGORIES_LIST } from '../data/mockData';
import { Tender } from '../types';
import { TenderDetailModal } from '../components/TenderDetailModal';

export const TendersPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  const idParam = searchParams.get('id') || '';

  const [search, setSearch] = useState(queryParam);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedSector, setSelectedSector] = useState('All Sectors');
  const [selectedVerification, setSelectedVerification] = useState('All Verification');
  const [selectedTender, setSelectedTender] = useState<Tender | null>(
    idParam ? TENDERS_DATA.find(t => t.id === idParam) || null : null
  );

  const filteredTenders = useMemo(() => {
    return TENDERS_DATA.filter((tender) => {
      const matchesSearch = 
        tender.title.toLowerCase().includes(search.toLowerCase()) ||
        tender.organization.toLowerCase().includes(search.toLowerCase()) ||
        tender.referenceNumber.toLowerCase().includes(search.toLowerCase());

      const matchesCategory = selectedCategory === 'All Categories' || tender.category === selectedCategory;
      const matchesSector = selectedSector === 'All Sectors' || tender.sector === selectedSector;
      const matchesVerification = selectedVerification === 'All Verification' || tender.verificationType === selectedVerification;

      return matchesSearch && matchesCategory && matchesSector && matchesVerification;
    });
  }, [search, selectedCategory, selectedSector, selectedVerification]);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800/60">
            <ShieldCheck className="w-4 h-4" /> Verified Public & Corporate Procurement Search
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Tender Discovery Portal
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl">
            Browse verified tenders across Government Ministries, County Governments, NGOs, and Multinationals. All original sources are authenticated by Tandora Verification Desk.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-4 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            
            {/* Search Input */}
            <div className="relative md:col-span-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Keywords, tender ref, ministry..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-slate-950 text-sm text-white pl-9 pr-3 py-2 rounded-lg border border-slate-700 focus:border-amber-500 focus:outline-none"
              />
            </div>

            {/* Category Dropdown */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-slate-950 text-xs text-white px-3 py-2.5 rounded-lg border border-slate-700 focus:border-amber-500 focus:outline-none cursor-pointer"
              >
                <option value="All Categories">All Categories ({CATEGORIES_LIST.length})</option>
                {CATEGORIES_LIST.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Sector Dropdown */}
            <div>
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="w-full bg-slate-950 text-xs text-white px-3 py-2.5 rounded-lg border border-slate-700 focus:border-amber-500 focus:outline-none cursor-pointer"
              >
                <option value="All Sectors">All Sectors</option>
                <option value="Government">Government</option>
                <option value="NGO">NGO</option>
                <option value="Corporate">Corporate</option>
                <option value="County Government">County Government</option>
              </select>
            </div>

            {/* Verification Dropdown */}
            <div>
              <select
                value={selectedVerification}
                onChange={(e) => setSelectedVerification(e.target.value)}
                className="w-full bg-slate-950 text-xs text-white px-3 py-2.5 rounded-lg border border-slate-700 focus:border-amber-500 focus:outline-none cursor-pointer"
              >
                <option value="All Verification">All Verification Types</option>
                <option value="Verified Original Source">Verified Original Source</option>
                <option value="Community Verified">Community Verified</option>
                <option value="User Submitted">User Submitted</option>
              </select>
            </div>

          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-800">
            <span>Showing <strong className="text-amber-400">{filteredTenders.length}</strong> active tender listings</span>
            <button
              onClick={() => {
                setSearch('');
                setSelectedCategory('All Categories');
                setSelectedSector('All Sectors');
                setSelectedVerification('All Verification');
              }}
              className="text-amber-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Tenders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTenders.map((tender) => (
            <div
              key={tender.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 hover:border-amber-500/50 transition-all shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                
                <div className="flex items-center justify-between gap-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase border ${
                    tender.verificationType === 'Verified Original Source'
                      ? 'bg-emerald-950 text-emerald-400 border-emerald-800'
                      : 'bg-amber-950 text-amber-400 border-amber-800'
                  }`}>
                    <ShieldCheck className="w-3 h-3 inline mr-1" />
                    {tender.verificationType}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">{tender.referenceNumber}</span>
                </div>

                <h3 className="text-base font-extrabold text-white leading-snug line-clamp-2">
                  {tender.title}
                </h3>

                <div className="space-y-1 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5 font-semibold text-amber-400">
                    <Building className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{tender.organization}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{tender.location}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Deadline: <strong className="text-white">{tender.deadline}</strong></span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 line-clamp-2">
                  {tender.description}
                </p>

              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Estimated Budget</div>
                  <div className="text-xs font-mono font-bold text-amber-400">{tender.estimatedValue || 'Quote Required'}</div>
                </div>

                <button
                  onClick={() => setSelectedTender(tender)}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-lg transition"
                >
                  View Details & Bid
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Tender Modal */}
      <TenderDetailModal
        tender={selectedTender}
        onClose={() => setSelectedTender(null)}
      />
    </div>
  );
};
