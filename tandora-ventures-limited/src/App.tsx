import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { TendersPage } from './pages/TendersPage';
import { SuppliersPage } from './pages/SuppliersPage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { SourcingPage } from './pages/SourcingPage';
import { LogisticsPage } from './pages/LogisticsPage';
import { OpportunitiesPage } from './pages/OpportunitiesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { DashboardPage } from './pages/DashboardPage';

import { PostRFQModal } from './components/PostRFQModal';
import { ListBusinessModal } from './components/ListBusinessModal';
import { AuthModal } from './components/AuthModal';
import { UserRole } from './types';

export function App() {
  const [postRFQOpen, setPostRFQOpen] = useState(false);
  const [listBusinessOpen, setListBusinessOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>('public');

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
        
        {/* Header Navigation */}
        <Header
          onOpenPostRFQ={() => setPostRFQOpen(true)}
          onOpenListBusiness={() => setListBusinessOpen(true)}
          onOpenAuth={() => setAuthOpen(true)}
          userRole={userRole}
          setUserRole={setUserRole}
        />

        {/* Main Content Pages */}
        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenPostRFQ={() => setPostRFQOpen(true)}
                  onOpenListBusiness={() => setListBusinessOpen(true)}
                />
              } 
            />
            <Route path="/tenders" element={<TendersPage />} />
            <Route path="/suppliers" element={<SuppliersPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/sourcing" element={<SourcingPage />} />
            <Route path="/logistics" element={<LogisticsPage />} />
            <Route path="/opportunities" element={<OpportunitiesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route 
              path="/dashboard" 
              element={
                <DashboardPage 
                  userRole={userRole}
                  onOpenPostRFQ={() => setPostRFQOpen(true)}
                  onOpenListBusiness={() => setListBusinessOpen(true)}
                />
              } 
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Modals */}
        <PostRFQModal
          isOpen={postRFQOpen}
          onClose={() => setPostRFQOpen(false)}
        />

        <ListBusinessModal
          isOpen={listBusinessOpen}
          onClose={() => setListBusinessOpen(false)}
        />

        <AuthModal
          isOpen={authOpen}
          onClose={() => setAuthOpen(false)}
          setUserRole={setUserRole}
        />

      </div>
    </BrowserRouter>
  );
}

export default App;
