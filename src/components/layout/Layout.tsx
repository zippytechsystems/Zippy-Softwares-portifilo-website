import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { HiringSideBadge } from '../common/HiringSideBadge';
import { SmoothScroll } from '../animations/SmoothScroll';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 font-sans selection:bg-blue-600/15 selection:text-blue-950 relative">
        <ScrollToTop />
        
        {/* Skip to Content for Accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-xl"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content" className="flex-grow pt-20">
          {children}
        </main>

        {/* Floating Side Hiring Badge & Drawer */}
        <HiringSideBadge />

        {/* Floating WhatsApp Action Button */}
        <WhatsAppButton />

        <Footer />
      </div>
    </SmoothScroll>
  );
};
