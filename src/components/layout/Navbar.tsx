import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  Smartphone, 
  Bot, 
  ArrowRight, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { Logo } from '../common/Logo';
import { COMPANY_INFO } from '../../data/companyData';
import { generateWhatsAppUrl } from '../../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close mobile and dropdown menus upon route change
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (location.pathname !== prevPathname) {
    setPrevPathname(location.pathname);
    setIsOpen(false);
    setServicesOpen(false);
  }

  // Track window scroll for sticky navbar styling using requestAnimationFrame (60/120fps smooth)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 15;
          setScrolled(prev => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const whatsappUrl = generateWhatsAppUrl({
    projectDescription: "Hello Zippy Enterprises, I am contacting you from your website."
  });

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 py-3.5 transition-colors duration-200 gpu-layer ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs' 
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Corporate Logo */}
            <Logo size="md" variant="light" />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                to="/"
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  location.pathname === '/' 
                    ? 'text-blue-700 bg-blue-50 border border-blue-200/80 shadow-xs' 
                    : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive('/about') 
                    ? 'text-blue-700 bg-blue-50 border border-blue-200/80 shadow-xs' 
                    : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
                }`}
              >
                About Us
              </Link>

              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onMouseEnter={() => setServicesOpen(true)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive('/services')
                      ? 'text-blue-700 bg-blue-50 border border-blue-200/80 shadow-xs'
                      : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
                  }`}
                  aria-expanded={servicesOpen}
                >
                  <span>Our Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-blue-600' : 'text-slate-500'}`} />
                </button>

                {/* Dropdown Menu */}
                {servicesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-white border border-slate-200 shadow-2xl p-3 z-50 animate-fadeIn"
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 px-3 py-1.5 border-b border-slate-100 flex items-center justify-between">
                      <span>Core IT Divisions</span>
                      <Sparkles className="w-3 h-3 text-blue-600" />
                    </div>

                    <div className="mt-1 space-y-1">
                      <Link
                        to="/services/web-development"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 flex-shrink-0">
                          <Globe className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                            Web Development
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-1">
                            Websites, E-commerce, SaaS, Enterprise Portals
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/services/app-development"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 flex-shrink-0">
                          <Smartphone className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                            App Development
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-1">
                            Business Apps, ERP/CRM, Accounting, iOS/Android
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/services/ai-automation"
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-sky-50 text-sky-600 group-hover:bg-sky-100 flex-shrink-0">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                            AI Agent & Automation
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-1">
                            Autonomous LLM Bots, Voice Telephony, Workflows
                          </p>
                        </div>
                      </Link>
                    </div>

                    <div className="mt-2 pt-2 border-t border-slate-150 px-2">
                      <Link
                        to="/services"
                        className="flex items-center justify-between text-xs font-semibold text-blue-600 hover:text-blue-800 p-1.5 rounded-lg hover:bg-blue-50/50"
                      >
                        <span>View All Services & Solutions</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/portfolio"
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive('/portfolio') 
                    ? 'text-blue-700 bg-blue-50 border border-blue-200/80 shadow-xs' 
                    : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
                }`}
              >
                Portfolio
              </Link>

              <Link
                to="/process"
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive('/process') 
                    ? 'text-blue-700 bg-blue-50 border border-blue-200/80 shadow-xs' 
                    : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
                }`}
              >
                Development Process
              </Link>

              <Link
                to="/contact"
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive('/contact') 
                    ? 'text-blue-700 bg-blue-50 border border-blue-200/80 shadow-xs' 
                    : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
                }`}
              >
                Contact Us
              </Link>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent('open-hiring-modal'))}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold transition-colors cursor-pointer"
                title="We are hiring 4 Digital Marketing Executives"
              >
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                <span>Hiring (4)</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 hover:bg-emerald-100 transition-colors"
                title="Chat with our team on WhatsApp"
                aria-label="WhatsApp chat"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all duration-300 shadow-md shadow-blue-500/20"
              >
                <span>Discuss Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6 text-blue-600" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Backdrop + Slide-over) */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white border-l border-slate-200 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-slideLeft"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-200">
                <Logo size="sm" variant="light" />
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Navigation List */}
              <nav className="mt-6 space-y-1">
                <Link
                  to="/"
                  className={`block px-4 py-3 rounded-xl text-base font-semibold ${
                    location.pathname === '/' 
                      ? 'text-blue-700 bg-blue-50 border border-blue-200/80' 
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  className={`block px-4 py-3 rounded-xl text-base font-semibold ${
                    isActive('/about') 
                      ? 'text-blue-700 bg-blue-50 border border-blue-200/80' 
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  About Us
                </Link>

                {/* Mobile Services Accordion */}
                <div className="pt-2">
                  <div className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                    Our Core Divisions
                  </div>
                  <div className="space-y-1 pl-2">
                    <Link
                      to="/services"
                      className="block px-3 py-2 rounded-lg text-sm text-blue-600 hover:bg-blue-50 font-semibold"
                    >
                      → Services Overview
                    </Link>
                    <Link
                      to="/services/web-development"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <Globe className="w-4 h-4 text-blue-600" />
                      <span>Web Development Services</span>
                    </Link>
                    <Link
                      to="/services/app-development"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <Smartphone className="w-4 h-4 text-emerald-600" />
                      <span>App Development Services</span>
                    </Link>
                    <Link
                      to="/services/ai-automation"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50"
                    >
                      <Bot className="w-4 h-4 text-sky-600" />
                      <span>AI Agent & Automation Services</span>
                    </Link>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/portfolio"
                    className={`block px-4 py-3 rounded-xl text-base font-semibold ${
                      isActive('/portfolio') 
                        ? 'text-blue-700 bg-blue-50 border border-blue-200/80' 
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    Our Portfolio & Projects
                  </Link>

                  <Link
                    to="/process"
                    className={`block px-4 py-3 rounded-xl text-base font-semibold ${
                      isActive('/process') 
                        ? 'text-blue-700 bg-blue-50 border border-blue-200/80' 
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    Development Process
                  </Link>

                  <Link
                    to="/contact"
                    className={`block px-4 py-3 rounded-xl text-base font-semibold ${
                      isActive('/contact') 
                        ? 'text-blue-700 bg-blue-50 border border-blue-200/80' 
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    Contact Us
                  </Link>
                </div>
              </nav>
            </div>

            {/* Mobile Drawer Bottom Actions */}
            <div className="pt-6 border-t border-slate-200 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  window.dispatchEvent(new CustomEvent('open-hiring-modal'));
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 font-bold text-sm transition-colors cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                <span>We're Hiring 4 Digital Marketers</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="text-center pt-2 text-xs text-slate-500">
                Official Helpline: {COMPANY_INFO.displayPhone}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
