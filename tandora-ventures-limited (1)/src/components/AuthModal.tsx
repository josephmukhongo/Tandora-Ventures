import React, { useState } from 'react';
import { X, UserCheck, ShieldCheck, Mail, Lock, Building2, Sparkles } from 'lucide-react';
import { UserRole } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  setUserRole: (role: UserRole) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  setUserRole,
}) => {
  const [mode, setMode] = useState<'signin' | 'register'>('signin');
  const [accountType, setAccountType] = useState<'buyer' | 'supplier'>('buyer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [organization, setOrganization] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserRole(accountType);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-md text-white shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-slate-850 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center font-bold">
              <UserCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white">Tandora Ventures Portal Access</h3>
              <p className="text-xs text-slate-400">Verified Buyer & Supplier Login</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-800 bg-slate-950/50">
          <button
            type="button"
            onClick={() => setMode('signin')}
            className={`flex-1 py-2.5 text-xs font-bold transition ${
              mode === 'signin'
                ? 'text-amber-400 border-b-2 border-amber-500 bg-slate-800/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setMode('register')}
            className={`flex-1 py-2.5 text-xs font-bold transition ${
              mode === 'register'
                ? 'text-amber-400 border-b-2 border-amber-500 bg-slate-800/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Create Account
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {/* Account Type selector */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">Account Role</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setAccountType('buyer')}
                className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 border transition ${
                  accountType === 'buyer'
                    ? 'bg-amber-500/20 text-amber-400 border-amber-500/50'
                    : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}
              >
                <UserCheck className="w-3.5 h-3.5" />
                Buyer / Procurement
              </button>
              <button
                type="button"
                onClick={() => setAccountType('supplier')}
                className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 border transition ${
                  accountType === 'supplier'
                    ? 'bg-blue-500/20 text-blue-400 border-blue-500/50'
                    : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                Supplier / Manufacturer
              </button>
            </div>
          </div>

          {mode === 'register' && (
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">Organization Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Kenya Agri Tech or Ministry / NGO"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">Corporate Email Address *</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">Password *</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 rounded-lg text-xs transition flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" />
              {mode === 'signin' ? `Sign In as ${accountType.toUpperCase()}` : 'Complete Portal Registration'}
            </button>
          </div>

          <div className="text-center text-[11px] text-slate-400 pt-2 border-t border-slate-800">
            Protected by Tandora Ventures Sourcing Verification Protocols
          </div>

        </form>

      </div>
    </div>
  );
};
