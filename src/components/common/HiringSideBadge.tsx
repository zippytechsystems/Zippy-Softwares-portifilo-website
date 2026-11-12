import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  X, 
  MapPin, 
  Users, 
  CheckCircle2, 
  MessageSquare, 
  Mail, 
  Phone, 
  ArrowRight,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const HiringSideBadge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-hiring-modal', handleOpen);
    return () => window.removeEventListener('open-hiring-modal', handleOpen);
  }, []);

  const whatsappApplyUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hello Zippy Enterprises, I am interested in applying for the Digital Marketing Executive opening (4 positions) at your Nacharam, Hyderabad office. Please let me know how to share my resume."
  )}`;

  const emailApplyUrl = `mailto:${COMPANY_INFO.officialEmail}?subject=${encodeURIComponent(
    "Job Application: Digital Marketing Executive (4 Openings) - Zippy Enterprises"
  )}&body=${encodeURIComponent(
    "Dear Hiring Team,\n\nI would like to apply for the Digital Marketing Executive position (4 Openings) at Zippy Enterprises Private Limited, Nacharam, Hyderabad.\n\nPlease find my resume attached.\n\nFull Name:\nContact Number:\nRelevant Experience / Skills:\n\nThank you."
  )}`;

  return (
    <>
      {/* Floating Side Badge (Left Edge) */}
      <aside 
        aria-label="Career Opportunities Badge" 
        className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden sm:flex gpu-layer"
      >
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-3.5 py-3 rounded-r-2xl bg-gradient-to-r from-[#102747] via-blue-900 to-blue-700 hover:from-blue-700 hover:to-indigo-600 text-white shadow-2xl border-y border-r border-blue-400/30 transition-all duration-300 hover:pl-5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="We are hiring 4 Digital Marketing Employees - View Details"
        >
          {/* Pulsing indicator */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
          </span>

          <Briefcase className="w-4 h-4 text-cyan-300 group-hover:rotate-12 transition-transform" />

          <div className="flex flex-col text-left leading-tight">
            <span className="text-[10px] uppercase font-black tracking-widest text-cyan-300 flex items-center gap-1">
              We're Hiring <Sparkles className="w-2.5 h-2.5 text-amber-300" />
            </span>
            <span className="text-xs font-extrabold text-white">
              4 Digital Marketers
            </span>
          </div>

          <span className="ml-1 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-mono">
            4 Openings
          </span>
        </button>
      </aside>

      {/* Mobile Top/Floating Pill (Visible only on smaller screens) */}
      <div className="sm:hidden fixed bottom-24 left-4 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#102747] text-white shadow-xl border border-blue-400/40 text-xs font-bold"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <Briefcase className="w-3.5 h-3.5 text-cyan-300" />
          <span>Hiring 4 Marketers</span>
        </button>
      </div>

      {/* Comprehensive Job Description & Application Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-slate-900 via-[#102747] to-blue-900 p-6 text-white relative shrink-0">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1.5 transition-all cursor-pointer"
                aria-label="Close Job Details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-400 text-slate-950 mb-3">
                <Users className="w-3.5 h-3.5" />
                <span>Immediate Openings &bull; 4 Vacancies</span>
              </div>

              <h3 className="text-2xl font-black tracking-tight text-white">
                Digital Marketing Executives / Specialists
              </h3>

              <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-slate-300 font-medium">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  Nacharam, Hyderabad (In-Office)
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                  Full-Time Permanent
                </span>
                <span>&bull;</span>
                <span className="text-cyan-300 font-bold">4 Positions Available</span>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-sm">
              
              {/* About Role */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1.5">
                  About The Opportunity
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  <strong className="text-slate-900">Zippy Enterprises Private Limited (Zippy Softwares)</strong> is actively hiring <strong className="text-blue-700">4 energetic Digital Marketing professionals</strong> to expand our IT services client base, manage active social media channels (Instagram, Facebook, LinkedIn), and generate high-intent leads.
                </p>
              </div>

              {/* Key Responsibilities */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                  <span>Key Job Responsibilities (Roles):</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Manage daily social media postings, reels, and community engagement across Instagram, Facebook, and LinkedIn.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Lead generation campaigns targeting businesses needing websites, custom mobile apps, and AI automation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Search Engine Optimization (SEO), Google My Business (GMB) optimization, and local directory listings.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Follow-up on incoming customer enquiries via WhatsApp and phone to schedule software demos.</span>
                  </li>
                </ul>
              </div>

              {/* Eligibility & Qualifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200">
                  <strong className="block text-slate-900 font-bold mb-1">Experience Level:</strong>
                  <span className="text-slate-600">0 - 3 Years (Freshers with strong digital marketing drive & social media skills are warmly welcome).</span>
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200">
                  <strong className="block text-slate-900 font-bold mb-1">Work Location:</strong>
                  <span className="text-slate-600">{COMPANY_INFO.address.fullAddress}</span>
                </div>
              </div>

              {/* Remuneration & Benefits */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-slate-700">
                <strong className="text-slate-900 font-bold block mb-1">Perks & Growth:</strong>
                <span>Competitive Salary + Performance Incentives on successful project closures, hands-on mentorship in modern tech marketing, and fast-track career advancement.</span>
              </div>

              {/* Fast Apply Actions */}
              <div className="pt-2 border-t border-slate-200 space-y-3">
                <div className="text-xs font-bold text-slate-900">
                  How To Apply (Immediate Interview Scheduling):
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={whatsappApplyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Apply via WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={emailApplyUrl}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email Your Resume</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="text-center pt-2 text-[11px] text-slate-500 flex items-center justify-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>HR Direct Line: </span>
                  <a href={`tel:${COMPANY_INFO.officialPhone}`} className="text-blue-700 font-bold hover:underline">
                    {COMPANY_INFO.displayPhone}
                  </a>
                </div>
              </div>

            </div>

            {/* Modal Sticky Bottom Bar */}
            <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 shrink-0">
              <span>Zippy Enterprises Pvt Ltd &bull; Recruitment Desk</span>
              <span className="font-semibold text-slate-700">Walk-in interviews available</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
