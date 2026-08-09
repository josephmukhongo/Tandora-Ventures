import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Send, CheckCircle2, 
  MessageSquare, ShieldCheck, Clock, Building2, User 
} from 'lucide-react';
import { MANAGING_DIRECTOR } from '../data/mockData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Procurement Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800/60">
            <Phone className="w-4 h-4" /> Direct Communication Desk
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Contact Tandora Ventures
          </h1>
          <p className="text-xs md:text-sm text-slate-300">
            Get in touch with our executive leadership, procurement desk, or logistics team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Executive Direct Contact Box */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-xl">
              <div className="flex items-center gap-4">
                <img
                  src={MANAGING_DIRECTOR.image}
                  alt={MANAGING_DIRECTOR.name}
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-amber-400 shadow-md"
                />
                <div>
                  <div className="text-xs font-bold text-amber-400 uppercase">Managing Director</div>
                  <h3 className="text-lg font-extrabold text-white">{MANAGING_DIRECTOR.name}</h3>
                  <p className="text-xs text-slate-400">Tandora Ventures Limited</p>
                </div>
              </div>

              <div className="space-y-4 pt-2 border-t border-slate-800 text-xs">
                
                <a
                  href={`tel:${MANAGING_DIRECTOR.phoneClean}`}
                  className="bg-slate-950 hover:bg-slate-850 p-3.5 rounded-xl border border-slate-800 flex items-center gap-3 transition group"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Call / Phone Number</div>
                    <div className="text-sm font-mono font-bold text-white group-hover:text-amber-400">{MANAGING_DIRECTOR.phone}</div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${MANAGING_DIRECTOR.phoneClean.replace('+', '')}?text=Hello%20Tandora%20Ventures,%20I%20have%20a%20procurement%20inquiry.`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-950/60 hover:bg-emerald-900/60 p-3.5 rounded-xl border border-emerald-800/60 flex items-center gap-3 transition group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-emerald-400 uppercase font-bold">Direct WhatsApp Chat</div>
                    <div className="text-xs font-bold text-white">Chat with Managing Director Desk</div>
                  </div>
                </a>

                <a
                  href={`mailto:${MANAGING_DIRECTOR.email}`}
                  className="bg-slate-950 hover:bg-slate-850 p-3.5 rounded-xl border border-slate-800 flex items-center gap-3 transition group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Official Email Address</div>
                    <div className="text-xs font-bold text-white group-hover:text-amber-400 break-all">{MANAGING_DIRECTOR.email}</div>
                  </div>
                </a>

                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-amber-400 uppercase font-bold">Headquarters</div>
                    <div className="text-xs font-bold text-white">Commercial District, Nairobi, Kenya</div>
                  </div>
                </div>

                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-blue-400 uppercase font-bold">Operational Address</div>
                    <div className="text-xs font-bold text-white">Port & Logistics Hub, Mombasa, Kenya</div>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-xl">
            <h3 className="text-xl font-extrabold text-white mb-1">Send a Direct Procurement Inquiry</h3>
            <p className="text-xs text-slate-400 mb-6">Our trade response team responds within 1 business hour.</p>

            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold text-white">Message Delivered to Tandora Desk!</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you, <strong className="text-amber-400">{formData.name}</strong>. Managing Director Joshua Watiti Wekesa & the procurement team will respond to <span className="text-white font-mono">{formData.email}</span> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eng. Peter Kimani"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:border-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+254 7XX XXX XXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Inquiry Topic</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:border-amber-500 focus:outline-none"
                    >
                      <option value="General Procurement Inquiry">General Procurement Inquiry</option>
                      <option value="Tender Sourcing & Verification">Tender Sourcing & Verification</option>
                      <option value="Global Import Order">Global Import Order (China / UAE)</option>
                      <option value="Freight & Haulage Quote">Freight & Haulage Quote</option>
                      <option value="Supplier Verification Badge">Supplier Verification Badge</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Message / Procurement Requirements *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your inquiry or order specifications..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-xs text-white focus:border-amber-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-6 py-2.5 rounded-lg transition flex items-center gap-1.5"
                >
                  <Send className="w-4 h-4" /> Send Direct Message
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
