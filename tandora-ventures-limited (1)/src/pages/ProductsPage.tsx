import React, { useState } from 'react';
import { 
  Search, Package, ShieldCheck, Tag, ShoppingBag, 
  Globe, Truck, CheckCircle2, Send 
} from 'lucide-react';
import { PRODUCTS_DATA, CATEGORIES_LIST } from '../data/mockData';
import { Product } from '../types';

export const ProductsPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [requestedProduct, setRequestedProduct] = useState<Product | null>(null);
  const [quoteSuccess, setQuoteSuccess] = useState(false);

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
    const matchesCat = category === 'All' || p.category === category;
    return matchesSearch && matchesCat;
  });

  const handleRequestQuote = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSuccess(true);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800/60">
            <Package className="w-4 h-4" /> B2B Wholesale Catalog & Bulk Product Sourcing
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Wholesale Products Catalog
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl">
            Browse verified industrial equipment, medical supplies, renewable energy kits, and agricultural machinery with transparent MOQs and direct supplier pricing.
          </p>
        </div>

        {/* Search & Category toolbar */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-4 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="relative md:col-span-2">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search products, machinery, equipment, solar, medical..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-slate-950 text-sm text-white pl-9 pr-3 py-2 rounded-lg border border-slate-700 focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-slate-950 text-xs text-white px-3 py-2.5 rounded-lg border border-slate-700 focus:border-amber-500 focus:outline-none"
              >
                <option value="All">All Product Categories</option>
                {CATEGORIES_LIST.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all shadow-xl flex flex-col justify-between"
            >
              <div className="relative h-48 bg-slate-950 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-bold text-amber-400 border border-slate-800">
                  Origin: {product.originFlag} {product.originCountry}
                </div>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{product.category}</div>
                  <h3 className="text-base font-extrabold text-white leading-snug">{product.name}</h3>
                  <p className="text-xs text-slate-300 line-clamp-2">{product.description}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Price Range:</span>
                    <span className="font-mono font-bold text-amber-400">{product.priceRange}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span>MOQ: <strong className="text-white">{product.moq}</strong></span>
                    <span className="text-emerald-400 font-semibold">✓ {product.stockStatus}</span>
                  </div>

                  <div className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-blue-400" />
                    <span>Lead Time: {product.deliveryLeadTime}</span>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => {
                      setRequestedProduct(product);
                      setQuoteSuccess(false);
                    }}
                    className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs py-2 rounded-lg transition flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" /> Request Wholesale Quote
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Product Quote Modal */}
      {requestedProduct && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-md text-white p-6 shadow-2xl space-y-4">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="font-extrabold text-base text-white">Product Quote Request</h3>
                <p className="text-xs text-slate-400">{requestedProduct.name}</p>
              </div>
              <button
                onClick={() => setRequestedProduct(null)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {quoteSuccess ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-white text-base">Quote Request Received!</h4>
                <p className="text-xs text-slate-300">
                  Supplied by <strong>{requestedProduct.supplierName}</strong>. Our logistics team will send bulk pricing and freight options within 2 hours.
                </p>
                <button
                  onClick={() => setRequestedProduct(null)}
                  className="bg-amber-500 text-slate-950 font-bold px-5 py-2 rounded-lg text-xs"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleRequestQuote} className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Required Quantity / Order Volume *</label>
                  <input
                    type="text"
                    required
                    placeholder={`e.g. 10 ${requestedProduct.unit}s`}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Delivery Destination *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Nairobi ICD / Industrial Area / Mombasa"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-xs text-white"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setRequestedProduct(null)}
                    className="bg-slate-800 text-slate-300 px-4 py-2 rounded text-xs"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2 rounded text-xs transition"
                  >
                    Submit Quote Request
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
