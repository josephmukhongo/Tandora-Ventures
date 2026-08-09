import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Search, FileText, Building2, PlusCircle, UserCheck, 
  Phone, Mail, Menu, X, ShieldCheck, ChevronDown, Sparkles, 
  Globe, PackageCheck, Truck, Layers, HelpCircle
} from 'lucide-react';
import { MANAGING_DIRECTOR } from '../data/mockData';
import { UserRole } from '../types';

interface HeaderProps {
  onOpenPostRFQ: () => void;
  onOpenListBusiness: () => void;
  onOpenAuth: () => void;
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenPostRFQ,
  onOpenListBusiness,
  onOpenAuth,
  userRole,
  setUserRole,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState('All');
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/tenders?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tenders', path: '/tenders' },
    { name: 'Suppliers', path: '/suppliers' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Sourcing', path: '/sourcing' },
    { name: 'Logistics', path: '/logistics' },
    { name: 'Opportunities', path: '/opportunities' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-xl">
      {/* Top Bar with MD Quick Contact & Trust Banner */}
      <div className="bg-slate-950 border-b border-slate-800 py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-semibold text-amber-400 bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-800/50">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Procurement Platform
            </span>
            <span className="hidden lg:inline-block text-slate-400">|</span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-300">
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              Pan-African Trade Hub • HQ: Nairobi, Kenya
            </span>
          </div>

          <div className="flex items-center gap-4 flex-wrap text-slate-300">
            <a 
              href={`tel:${MANAGING_DIRECTOR.phoneClean}`}
              className="hover:text-amber-400 transition-colors flex items-center gap-1"
              title="MD Direct Line"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{MANAGING_DIRECTOR.phone}</span>
            </a>
            <a 
              href={`mailto:${MANAGING_DIRECTOR.email}`}
              className="hover:text-amber-400 transition-colors flex items-center gap-1 hidden sm:flex"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>{MANAGING_DIRECTOR.email}</span>
            </a>

            {/* Role Switcher */}
            <div className="relative">
              <button
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-0.5 rounded flex items-center gap-1 font-medium border border-slate-700 transition"
              >
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span className="capitalize">View as: {userRole}</span>
                <ChevronDown className="w-3 h-3 opacity-70" />
              </button>

              {roleDropdownOpen && (
                <div className="absolute right-0 mt-1 w-48 bg-slate-900 border border-slate-700 rounded shadow-2xl py-1 z-50 text-slate-200">
                  <div className="px-3 py-1 text-[10px] text-slate-400 uppercase font-bold tracking-wider">Switch Portal View</div>
                  <button
                    onClick={() => { setUserRole('public'); setRoleDropdownOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 text-xs hover:bg-slate-800 flex items-center gap-2 ${userRole === 'public' ? 'text-amber-400 font-semibold' : ''}`}
                  >
                    <Globe className="w-3.5 h-3.5" /> Public Visitor
                  </button>
                  <button
                    onClick={() => { setUserRole('buyer'); setRoleDropdownOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 text-xs hover:bg-slate-800 flex items-center gap-2 ${userRole === 'buyer' ? 'text-amber-400 font-semibold' : ''}`}
                  >
                    <FileText className="w-3.5 h-3.5" /> Buyer Portal
                  </button>
                  <button
                    onClick={() => { setUserRole('supplier'); setRoleDropdownOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 text-xs hover:bg-slate-800 flex items-center gap-2 ${userRole === 'supplier' ? 'text-amber-400 font-semibold' : ''}`}
                  >
                    <Building2 className="w-3.5 h-3.5" /> Supplier Portal
                  </button>
                  <button
                    onClick={() => { setUserRole('admin'); setRoleDropdownOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 text-xs hover:bg-slate-800 flex items-center gap-2 ${userRole === 'admin' ? 'text-amber-400 font-semibold' : ''}`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" /> Verification Admin
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Main Header Row */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Tagline */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-11 h-11 bg-gradient-to-br from-amber-500 via-amber-600 to-blue-700 rounded-xl p-0.5 shadow-lg group-hover:scale-105 transition-transform flex items-center justify-center">
            <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
              <span className="font-extrabold text-2xl tracking-tighter bg-gradient-to-r from-amber-400 via-amber-200 to-blue-400 bg-clip-text text-transparent">
                TV
              </span>
            </div>
          </div>
          <div>
            <div className="font-extrabold text-xl tracking-tight leading-none text-white flex items-center gap-1.5">
              TANDORA VENTURES <span className="text-amber-400 font-bold text-xs uppercase px-1.5 py-0.5 bg-amber-950 border border-amber-800/60 rounded">LTD</span>
            </div>
            <div className="text-[11px] text-slate-300 font-medium tracking-wide mt-0.5">
              Connecting Opportunities. Powering Supply Chains.
            </div>
          </div>
        </Link>

        {/* Search Bar - Desktop */}
        <form onSubmit={handleSearchSubmit} className="hidden lg:flex flex-1 max-w-xl mx-4">
          <div className="relative flex w-full bg-slate-800/90 border border-slate-700 rounded-lg overflow-hidden focus-within:border-amber-500 focus-within:ring-1 focus-within:ring-amber-500 transition-all">
            <select
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
              className="bg-slate-850 text-slate-300 text-xs px-3 py-2 border-r border-slate-700 focus:outline-none cursor-pointer"
            >
              <option value="All">All Portal</option>
              <option value="Tenders">Tenders</option>
              <option value="Suppliers">Suppliers</option>
              <option value="Products">Products</option>
              <option value="Services">Services</option>
            </select>

            <input
              type="text"
              placeholder="Search tenders, suppliers, products, equipment, codes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm text-white px-3 py-2 focus:outline-none placeholder-slate-400"
            />

            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-4 flex items-center justify-center font-bold transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Primary Header Action Buttons */}
        <div className="hidden md:flex items-center gap-2.5">
          <button
            onClick={onOpenPostRFQ}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xs px-3.5 py-2 rounded-lg shadow-md hover:shadow-amber-500/20 transition flex items-center gap-1.5"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Post an RFQ</span>
          </button>

          <button
            onClick={onOpenListBusiness}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-3.5 py-2 rounded-lg transition flex items-center gap-1.5 border border-blue-500/50"
          >
            <Building2 className="w-4 h-4" />
            <span>List Your Business</span>
          </button>

          <button
            onClick={onOpenAuth}
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs px-3 py-2 rounded-lg border border-slate-700 transition flex items-center gap-1"
          >
            <UserCheck className="w-4 h-4 text-amber-400" />
            <span>Sign In</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white bg-slate-800 rounded-lg border border-slate-700"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-slate-950/80 border-t border-slate-800/80 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-1 py-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-all ${
                    active
                      ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-400">
            {userRole !== 'public' && (
              <Link 
                to="/dashboard" 
                className="bg-amber-950/60 text-amber-400 border border-amber-800/60 px-3 py-1 rounded font-semibold flex items-center gap-1.5 hover:bg-amber-900/50"
              >
                <Layers className="w-3.5 h-3.5" />
                My Portal Dashboard
              </Link>
            )}
            <span className="inline-flex items-center gap-1 text-emerald-400 font-medium bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Opportunities: 140+ Active
            </span>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-4 py-4 space-y-4">
          
          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="flex gap-2">
            <input
              type="text"
              placeholder="Search tenders, suppliers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-slate-800 text-sm text-white px-3 py-2 rounded-lg border border-slate-700"
            />
            <button
              type="submit"
              className="bg-amber-500 text-slate-950 font-bold px-4 rounded-lg"
            >
              Search
            </button>
          </form>

          {/* Nav Links Grid */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-xs font-semibold rounded-lg ${
                  isActive(link.path)
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    : 'bg-slate-800/50 text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action buttons */}
          <div className="pt-3 border-t border-slate-800 space-y-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenPostRFQ(); }}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold py-2.5 rounded-lg text-xs flex items-center justify-center gap-2"
            >
              <PlusCircle className="w-4 h-4" />
              Post an RFQ
            </button>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenListBusiness(); }}
              className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg text-xs flex items-center justify-center gap-2"
            >
              <Building2 className="w-4 h-4" />
              List Your Business
            </button>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAuth(); }}
              className="w-full bg-slate-800 text-slate-200 font-medium py-2.5 rounded-lg text-xs flex items-center justify-center gap-2 border border-slate-700"
            >
              <UserCheck className="w-4 h-4 text-amber-400" />
              Sign In / Register
            </button>
          </div>

        </div>
      )}
    </header>
  );
};
