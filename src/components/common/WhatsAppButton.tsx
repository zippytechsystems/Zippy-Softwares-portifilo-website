import React, { useState } from 'react';
import { X, MessageSquare, Send, CheckCircle2, Sparkles, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { generateWhatsAppUrl } from '../../utils/whatsapp';

const POPULAR_SERVICES = [
  'Web Development & Portals',
  'Mobile App Development (Android/iOS)',
  'Custom Business Management Software / ERP',
  'AI Agent & Automation Systems',
  'Digital Marketing & Lead Generation',
  'Other Software Consultation'
];

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [fullName, setFullName] = useState('');
  const [selectedService, setSelectedService] = useState('Web Development & Portals');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleOpenModal = () => {
    setShowTooltip(false);
    setIsOpen(true);
    setSubmitted(false);
  };

  const handleDirectChat = () => {
    const directUrl = generateWhatsAppUrl({
      projectDescription: "Hello Zippy Softwares, I would like to consult with your engineering team."
    });
    window.open(directUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waUrl = generateWhatsAppUrl({
      fullName: fullName.trim() || undefined,
      service: selectedService,
      projectDescription: notes.trim() || 'Software inquiry via website WhatsApp button'
    });

    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      setIsOpen(false);
      setSubmitted(false);
      setFullName('');
      setNotes('');
    }, 1200);
  };

  return (
    <>
      {/* Floating Bottom-Right Trigger Button */}
      <aside 
        aria-label="Direct WhatsApp Contact" 
        className="fixed bottom-6 right-6 z-50 flex items-end flex-col gpu-layer"
      >
        {/* Hover Tooltip Card */}
        {!isOpen && showTooltip && (
          <div className="mb-3 p-3.5 bg-white rounded-2xl shadow-xl border border-slate-200 text-slate-800 text-xs w-64 animate-fadeIn relative">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2.5 right-2.5 text-slate-400 hover:text-slate-600 p-0.5"
              aria-label="Close tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-2 mb-1.5 font-bold text-slate-900">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Instant WhatsApp Chat</span>
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Connect directly with our Hyderabad engineering & consultation team on WhatsApp.
            </p>
            <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-medium">
              <span>Fast Response &bull; Mon - Sat</span>
              <span className="font-mono text-emerald-700 font-bold">{COMPANY_INFO.displayPhone}</span>
            </div>
          </div>
        )}

        {/* Floating WhatsApp Action Button */}
        <button
          type="button"
          onClick={handleOpenModal}
          onMouseEnter={() => setShowTooltip(true)}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300 cursor-pointer"
          aria-label="Chat on WhatsApp with Zippy Softwares"
        >
          {/* Radar ping ring animation */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-60 animate-ping group-hover:opacity-0 -z-10 pointer-events-none"></span>

          {/* Official WhatsApp SVG glyph */}
          <svg
            className="w-7 h-7 fill-current drop-shadow-xs"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>

          {/* Status Online Badge */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full"></span>
        </button>
      </aside>

      {/* Interactive Quick WhatsApp Consultation Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-sm bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-emerald-600 via-teal-700 to-emerald-800 p-5 text-white relative">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/15 hover:bg-black/30 rounded-full p-1.5 transition-all"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-1.5">
                <span className="p-1.5 bg-white/20 rounded-lg">
                  <MessageSquare className="w-4 h-4 text-white" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-100 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-300" /> WhatsApp Direct Desk
                </span>
              </div>
              <h3 className="text-lg font-black tracking-tight">Direct WhatsApp Consultation</h3>
              <p className="text-emerald-100 text-xs mt-1">
                Chat directly with our software architects in Hyderabad.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-5">
              {submitted ? (
                <div className="text-center py-6 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
                  <h4 className="text-base font-bold text-slate-900">Redirecting to WhatsApp...</h4>
                  <p className="text-xs text-slate-600">
                    Your consultation request is prepared. WhatsApp will open automatically.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Name <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Anand Varma"
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Interested Service
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-colors cursor-pointer"
                    >
                      {POPULAR_SERVICES.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Brief Requirement <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Need an e-commerce website / mobile app"
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-colors"
                    />
                  </div>

                  {/* Primary Button */}
                  <button
                    type="submit"
                    className="w-full mt-2 py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold text-xs shadow-md shadow-emerald-500/20 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Start WhatsApp Chat Now</span>
                  </button>

                  {/* Fast Direct Bypass */}
                  <div className="text-center pt-1">
                    <button
                      type="button"
                      onClick={handleDirectChat}
                      className="text-[11px] text-slate-500 hover:text-emerald-700 font-medium underline transition-colors cursor-pointer"
                    >
                      Or skip and open chat immediately →
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Modal Footer Note */}
            <div className="bg-slate-50 px-5 py-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span className="font-semibold text-slate-700">{COMPANY_INFO.displayPhone}</span>
              </span>
              <span>Nacharam, Hyderabad</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
