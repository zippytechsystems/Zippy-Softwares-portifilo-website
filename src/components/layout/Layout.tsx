import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A1128] text-slate-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      <ScrollToTop />
      
      {/* Skip to Content for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-cyan-500 text-black font-bold rounded-lg shadow-xl"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-grow pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
};
