import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, ShieldCheck, FileText, Building2, PlusCircle, ArrowRight, 
  Globe, Truck, Package, Wrench, CheckCircle2, ChevronRight, Phone, Mail, 
  MapPin, Award, Layers, Zap, Scale, Users, Factory, Sparkles
} from 'lucide-react';
import { 
  MANAGING_DIRECTOR, 
  TENDERS_DATA, 
  SUPPLIERS_DATA, 
  CATEGORIES_LIST,
  ACTIVE_RFQS 
} from '../data/mockData';

interface HomePageProps {
  onOpenPostRFQ: () => void;
  onOpenListBusiness: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenPostRFQ,
  onOpenListBusiness,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.png" 
            alt="East Africa Logistics and Trade Hub" 
            className="w-full h-full object-cover opacity-20 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl space-y-6">
            
            {/* Top Verification Tag */}
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-lg">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Kenya’s Premier Verified Procurement & Sourcing Ecosystem</span>
            </div>

            {/* Prompt Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Tandora Ventures Limited <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-blue-400 bg-clip-text text-transparent block mt-1">Connecting Opportunities. Powering Supply Chains.</span>
            </h1>

            {/* Prompt Subheadline */}
            <p className="text-base md:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl">
              Discover tenders, suppliers, products, services, logistics solutions and global sourcing opportunities — all through one trusted platform.
            </p>

            {/* Prompt Primary Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              
              <Link
                to="/tenders"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-xl hover:shadow-amber-500/20 transition-all flex items-center gap-2 group"
              >
                <FileText className="w-4 h-4" />
                <span>Find Tenders</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/suppliers"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-6 py-3.5 rounded-xl border border-blue-400/30 shadow-lg transition-all flex items-center gap-2"
              >
                <Building2 className="w-4 h-4" />
                <span>Find Suppliers</span>
              </Link>

              <button
                onClick={onOpenPostRFQ}
                className="bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-sm px-6 py-3.5 rounded-xl border border-slate-700 transition flex items-center gap-2"
              >
                <PlusCircle className="w-4 h-4 text-amber-400" />
                <span>Post an RFQ</span>
              </button>

              <button
                onClick={onOpenListBusiness}
                className="bg-slate-850 hover:bg-slate-800 text-slate-200 font-semibold text-sm px-6 py-3.5 rounded-xl border border-slate-700 transition flex items-center gap-2"
              >
                <Award className="w-4 h-4 text-emerald-400" />
                <span>List Your Business</span>
              </button>

            </div>

            {/* Trust Statement Bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified Original Source Tenders</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>KRA / KEBS / AGPO Vetted Suppliers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>End-to-End Logistics & Global Sourcing</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUST STATEMENT BANNER */}
      <section className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 py-6 px-4 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-slate-950 text-amber-400 rounded-xl flex items-center justify-center shrink-0 font-extrabold text-xl shadow-lg">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs uppercase font-extrabold tracking-widest text-slate-900">Platform Guarantee</div>
              <div className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-950">
                "Find opportunities. Verify sources. Connect with confidence."
              </div>
            </div>
          </div>

          <div className="text-xs font-bold bg-slate-950 text-white px-4 py-2.5 rounded-xl shrink-0 shadow-md">
            No Fabricated Notices • Authentic Original Gazette Links
          </div>
        </div>
      </section>

      {/* BUYER & SUPPLIER CORE VALUE PROPOSITIONS */}
      <section className="py-16 px-4 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800/60">
              Dual Ecosystem Architecture
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">
              Bringing Buyers, Suppliers & Opportunities Together
            </h2>
            <p className="text-slate-400 text-xs md:text-sm">
              Tandora Ventures makes procurement and sourcing effortless through a single integrated digital network.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* BUYER CARD */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 relative overflow-hidden group hover:border-amber-500/40 transition-all shadow-xl">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all"></div>
              
              <div className="space-y-1">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">For Purchasing & Sourcing Managers</span>
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <span>Buyer Persona:</span>
                  <span className="italic text-amber-300">"I need something."</span>
                </h3>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Search Tandora Ventures and resolve your procurement workflow step-by-step:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="font-bold text-amber-400">1. What is available</div>
                  <div className="text-slate-400">Catalog of 10,000+ verified East African and global products.</div>
                </div>
                <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="font-bold text-amber-400">2. Who supplies it</div>
                  <div className="text-slate-400">Directory of KEBS, KRA & AGPO compliant manufacturers.</div>
                </div>
                <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="font-bold text-amber-400">3. Where it comes from</div>
                  <div className="text-slate-400">Country-of-origin badging (Kenya, UAE, China, India, EU).</div>
                </div>
                <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="font-bold text-amber-400">4. How much & Delivery</div>
                  <div className="text-slate-400">Transparent wholesale pricing & freight route calculator.</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenPostRFQ}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-lg transition flex items-center gap-1.5"
                >
                  <PlusCircle className="w-4 h-4" /> Post an RFQ as Buyer
                </button>
              </div>

            </div>

            {/* SUPPLIER CARD */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 relative overflow-hidden group hover:border-blue-500/40 transition-all shadow-xl">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
              
              <div className="space-y-1">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">For Suppliers, Vendors & Contractors</span>
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <span>Supplier Persona:</span>
                  <span className="italic text-blue-300">"I have something to sell."</span>
                </h3>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Use Tandora Ventures to unlock new revenue streams across public & private sectors:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="font-bold text-blue-400">1. List Your Business</div>
                  <div className="text-slate-400">Gain verified supplier badge and showcase product catalog.</div>
                </div>
                <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="font-bold text-blue-400">2. Reach Buyers</div>
                  <div className="text-slate-400">Connect with government, NGO, and multinational procurement heads.</div>
                </div>
                <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="font-bold text-blue-400">3. Find Tenders & RFQs</div>
                  <div className="text-slate-400">Receive real-time alerts matching your exact business sector.</div>
                </div>
                <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="font-bold text-blue-400">4. Submit Quotations</div>
                  <div className="text-slate-400">Submit competitive bids and build long-term trade relations.</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenListBusiness}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-5 py-2.5 rounded-lg transition flex items-center gap-1.5"
                >
                  <Building2 className="w-4 h-4" /> List Your Business as Supplier
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* EXECUTIVE LEADERSHIP SECTION - MANAGING DIRECTOR JOSHUA WATITI WEKESA */}
      <section className="py-16 px-4 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-blue-950 border border-amber-500/30 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Photo Column */}
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-blue-600 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
                  <img 
                    src={MANAGING_DIRECTOR.image} 
                    alt={MANAGING_DIRECTOR.name} 
                    className="relative w-56 h-56 md:w-64 md:h-64 object-cover rounded-2xl border-2 border-amber-400 shadow-2xl"
                  />
                  <div className="absolute -bottom-3 bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-lg left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Managing Director
                  </div>
                </div>

                <div className="mt-6 space-y-1">
                  <h3 className="text-xl font-black text-white">{MANAGING_DIRECTOR.name}</h3>
                  <div className="text-xs text-amber-400 font-bold">{MANAGING_DIRECTOR.title}</div>
                  <div className="text-xs text-slate-400">Tandora Ventures Limited</div>
                </div>
              </div>

              {/* Bio & Direct Contact Column */}
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800/60">
                  <Sparkles className="w-3.5 h-3.5" /> Executive Leadership Message
                </div>

                <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  "Powering African Supply Chains with Integrity, Verification & Speed."
                </h2>

                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  {MANAGING_DIRECTOR.bio}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <a 
                    href={`tel:${MANAGING_DIRECTOR.phoneClean}`}
                    className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-xl border border-slate-700/80 transition flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 font-bold group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-bold">Direct Call / WhatsApp</div>
                      <div className="text-sm font-bold text-white group-hover:text-amber-400 font-mono">{MANAGING_DIRECTOR.phone}</div>
                    </div>
                  </a>

                  <a 
                    href={`mailto:${MANAGING_DIRECTOR.email}`}
                    className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-xl border border-slate-700/80 transition flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-bold group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-bold">Executive Office Email</div>
                      <div className="text-xs font-bold text-white group-hover:text-amber-400 break-all">{MANAGING_DIRECTOR.email}</div>
                    </div>
                  </a>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* WHAT TANDORA VENTURES DOES - INTEGRATED PLATFORM COVERAGE (22 SECTORS) */}
      <section className="py-16 px-4 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Integrated Business Capabilities</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                What Tandora Ventures Does
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              A comprehensive procurement and sourcing matrix covering public, private, NGO, and cross-border trade verticals.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {CATEGORIES_LIST.map((cat, idx) => (
              <div 
                key={idx}
                onClick={() => navigate('/tenders')}
                className="bg-slate-950 hover:bg-slate-800/80 border border-slate-800 hover:border-amber-500/50 p-3.5 rounded-xl transition cursor-pointer group text-center space-y-2"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 text-amber-400 border border-slate-800 flex items-center justify-center mx-auto group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-slate-200 group-hover:text-amber-400 transition-colors leading-snug">
                  {cat}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FEATURED TENDERS STREAM */}
      <section className="py-16 px-4 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-800/60 mb-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Verified Original Source Tenders
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Active Public & Corporate Tenders
              </h2>
            </div>

            <Link
              to="/tenders"
              className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 self-start sm:self-auto"
            >
              <span>Explore All Tenders</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TENDERS_DATA.slice(0, 3).map((tender) => (
              <div 
                key={tender.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4 hover:border-amber-500/40 transition-all shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-extrabold uppercase bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      {tender.verificationType}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">{tender.deadline}</span>
                  </div>

                  <h3 className="text-base font-extrabold text-white line-clamp-2 leading-snug">
                    {tender.title}
                  </h3>

                  <div className="text-xs text-slate-300 font-semibold flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{tender.organization}</span>
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2">
                    {tender.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-400">{tender.estimatedValue}</span>
                  <Link
                    to={`/tenders?id=${tender.id}`}
                    className="bg-amber-500/10 hover:bg-amber-500 hover:text-slate-950 text-amber-400 font-bold text-xs px-3.5 py-1.5 rounded-lg border border-amber-500/30 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TOP VERIFIED SUPPLIERS PREVIEW */}
      <section className="py-16 px-4 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Vetted Business Network</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">
                Featured Verified East African Suppliers
              </h2>
            </div>

            <Link
              to="/suppliers"
              className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 self-start sm:self-auto"
            >
              <span>Browse Supplier Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUPPLIERS_DATA.slice(0, 3).map((supplier) => (
              <div 
                key={supplier.id}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4 hover:border-blue-500/40 transition-all shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400">{supplier.category}</span>
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                      ★ {supplier.rating} ({supplier.reviewCount})
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white">{supplier.name}</h3>

                  <p className="text-xs text-slate-400 line-clamp-2">{supplier.description}</p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {supplier.badges.map((badge, bIdx) => (
                      <span key={bIdx} className="text-[10px] bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                        ✓ {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <span>📍 {supplier.location}</span>
                  <Link 
                    to={`/suppliers?id=${supplier.id}`}
                    className="text-amber-400 font-bold hover:underline"
                  >
                    Request Quote →
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PAN-AFRICAN VISION & GLOBAL TRADE DESK BANNER */}
      <section className="py-16 px-4 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800/60">
                Long-Term Pan-African Vision
              </span>

              <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
                From Local Kenyan Suppliers to Continental & Global Trade Markets
              </h2>

              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                Tandora Ventures Limited is built for scalability — starting from Nairobi across East Africa (Uganda, Tanzania, Rwanda, DRC, South Sudan) and expanding into major international supply hubs in China, Dubai/UAE, India, Europe, and the Americas.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-200">
                <div className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-blue-400" /> Cross-Border Duty Clearance
                </div>
                <div className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-amber-400" /> Multi-Modal Haulage
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Direct Factory Verification
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/sourcing"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs px-6 py-3 rounded-xl transition inline-flex items-center gap-2"
                >
                  <span>Explore Global Sourcing Hub</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
