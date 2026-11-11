import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Shield, 
  MessageSquare, 
  ArrowUpRight, 
  CheckCircle2
} from 'lucide-react';
import { Logo } from '../common/Logo';
import { InstagramIcon, FacebookIcon, LinkedinIcon } from '../common/SocialIcons';
import { COMPANY_INFO } from '../../data/companyData';
import { generateWhatsAppUrl } from '../../utils/whatsapp';

const CURRENT_YEAR = 2026;

export const Footer: React.FC = () => {
  const whatsappUrl = generateWhatsAppUrl({
    projectDescription: "Hello Zippy Enterprises, I am contacting you for software services consultation."
  });

  return (
    <footer className="relative bg-[#0A1628] text-slate-400 border-t border-slate-800 pt-16 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Company Profile (Spans 2 on LG) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" variant="dark" />
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              <strong className="text-white font-semibold">Zippy Softwares</strong> is the flagship IT services and software development brand of <strong className="text-slate-200">{COMPANY_INFO.legalName}</strong>. We engineer high-performance web platforms, custom enterprise apps, and autonomous AI automation solutions.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>CIN: {COMPANY_INFO.cin} &bull; Registered Private Limited Entity</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Enterprise NDA Protected &bull; 100% Code Ownership</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-semibold hover:bg-emerald-900/40 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: {COMPANY_INFO.displayPhone}</span>
              </a>
            </div>

            {/* Official Social Media Pages */}
            <div className="pt-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Official Social Channels
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={COMPANY_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500 hover:bg-pink-950/40 text-slate-400 hover:text-pink-400 flex items-center justify-center transition-all hover:scale-105"
                  aria-label="Follow Zippy Enterprises on Instagram"
                  title="Instagram: @zippyenterprises"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                <a
                  href={COMPANY_INFO.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 hover:bg-blue-950/40 text-slate-400 hover:text-blue-400 flex items-center justify-center transition-all hover:scale-105"
                  aria-label="Follow Zippy Enterprises on Facebook"
                  title="Facebook: @zippyenterprises"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>

                <a
                  href={COMPANY_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500 hover:bg-sky-950/40 text-slate-400 hover:text-sky-400 flex items-center justify-center transition-all hover:scale-105"
                  aria-label="Follow Zippy Enterprises on LinkedIn"
                  title="LinkedIn: Zippy Enterprises Private Limited"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={COMPANY_INFO.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:bg-emerald-950/40 text-slate-400 hover:text-emerald-400 flex items-center justify-center transition-all hover:scale-105"
                  aria-label="Connect on WhatsApp"
                  title="WhatsApp: +91 63026 90251"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Core Divisions */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Core Divisions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/services/web-development" className="hover:text-cyan-400 transition-colors flex items-center justify-between group">
                  <span>Web Development</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400" />
                </Link>
              </li>
              <li>
                <Link to="/services/app-development" className="hover:text-cyan-400 transition-colors flex items-center justify-between group">
                  <span>App Development</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400" />
                </Link>
              </li>
              <li>
                <Link to="/services/ai-automation" className="hover:text-cyan-400 transition-colors flex items-center justify-between group">
                  <span>AI Agent & Automation</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors flex items-center justify-between group">
                  <span>Services Directory</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">
                  About Zippy Enterprises
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-cyan-400 transition-colors">
                  Portfolio & Case Studies
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-cyan-400 transition-colors">
                  7-Phase Development Process
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition-colors">
                  Contact & Project Inquiry
                </Link>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent('open-hiring-modal'))}
                  className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer font-medium"
                >
                  <span>Careers (Hiring 4 Marketers)</span>
                  <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded border border-amber-400/40">4 Open</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Corporate Office
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <a 
                  href={COMPANY_INFO.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors leading-relaxed"
                >
                  {COMPANY_INFO.address.fullAddress}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.officialEmail}`} className="hover:text-cyan-400 transition-colors">
                  {COMPANY_INFO.officialEmail}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.officialPhone}`} className="hover:text-cyan-400 transition-colors">
                  {COMPANY_INFO.displayPhone}
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {CURRENT_YEAR} {COMPANY_INFO.name} &bull; A Unit of {COMPANY_INFO.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Enterprise IT & Software Engineering</span>
            <span>&bull;</span>
            <span>ISO Quality & Security Practices</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
