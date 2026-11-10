import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { AlertCircle, ArrowLeft } from 'lucide-react';

// Code-split pages for lightning-fast sub-second loading
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const WebDevelopmentPage = lazy(() => import('./pages/WebDevelopmentPage').then(m => ({ default: m.WebDevelopmentPage })));
const AppDevelopmentPage = lazy(() => import('./pages/AppDevelopmentPage').then(m => ({ default: m.AppDevelopmentPage })));
const AIAgentAutomationPage = lazy(() => import('./pages/AIAgentAutomationPage').then(m => ({ default: m.AIAgentAutomationPage })));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage').then(m => ({ default: m.PortfolioPage })));
const ProcessPage = lazy(() => import('./pages/ProcessPage').then(m => ({ default: m.ProcessPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));

const PageLoader: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20"></div>
      <div className="absolute inset-0 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin"></div>
    </div>
    <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
      Loading Architecture...
    </span>
  </div>
);

const NotFoundPage: React.FC = () => (
  <div className="py-24 text-center max-w-xl mx-auto px-4">
    <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mx-auto mb-6">
      <AlertCircle className="w-8 h-8" />
    </div>
    <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-2">
      HTTP 404 &bull; Page Not Found
    </div>
    <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
      Resource Relocated or Not Found
    </h1>
    <p className="mt-4 text-slate-300 text-sm leading-relaxed">
      The page you requested does not exist or may have been reorganized. Please return to our main corporate portal.
    </p>
    <div className="mt-8 flex justify-center gap-4">
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home</span>
      </Link>
      <Link
        to="/services"
        className="px-6 py-3 rounded-xl bg-[#0E1B38] border border-slate-700 text-slate-200 text-sm font-semibold hover:bg-[#132247]"
      >
        View Services
      </Link>
    </div>
  </div>
);

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/web-development" element={<WebDevelopmentPage />} />
            <Route path="/services/app-development" element={<AppDevelopmentPage />} />
            <Route path="/services/ai-automation" element={<AIAgentAutomationPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
