import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  Globe, 
  Smartphone, 
  Bot, 
  ArrowRight, 
  MessageSquare, 
  Maximize2, 
  X,
  Sparkles,
  CheckCircle2,
  Phone
} from 'lucide-react';
import { generateWhatsAppUrl } from '../../utils/whatsapp';
import { Tilt3D } from '../animations/Tilt3D';

export interface ServiceSlide {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  badge: string;
  icon: 'Globe' | 'Smartphone' | 'Bot';
  image: string;
  exploreLink: string;
  whatsappMessage: string;
  highlights: string[];
  themeColor: string;
  badgeBg: string;
}

export const SERVICE_SLIDES: ServiceSlide[] = [
  {
    id: 'web-development',
    title: 'Web Development & Business Portals',
    subtitle: 'Modern Websites. Powerful Portals. Real Business Growth.',
    tagline: 'Build Your Business Online!',
    badge: 'Core Division 01',
    icon: 'Globe',
    image: '/images/slider-web-development.jpg',
    exploreLink: '/services/web-development',
    whatsappMessage: 'Hello Zippy Softwares, I am interested in Web Development & Business Portals for my business.',
    highlights: [
      'Business Websites & High-Conversion Landing Pages',
      'Corporate, E-Commerce & Clinic/Hospital Portals',
      'Custom Domain, Fast Cloud Hosting & SEO-Ready Setup'
    ],
    themeColor: 'from-blue-600 to-cyan-600',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  {
    id: 'app-development',
    title: 'Custom Software & App Development',
    subtitle: 'Turn Your Ideas into Powerful Digital Solutions.',
    tagline: 'Build Your Dream App & Software!',
    badge: 'Core Division 02',
    icon: 'Smartphone',
    image: '/images/slider-app-development.jpg',
    exploreLink: '/services/app-development',
    whatsappMessage: 'Hello Zippy Softwares, I want to build a Custom Mobile App / Software Solution for my business.',
    highlights: [
      'Native & Cross-Platform Android & iOS Mobile Apps',
      'Business Management, CRM, ERP & Invoicing Software',
      'API Integration, Appointment Booking & Analytics'
    ],
    themeColor: 'from-blue-700 to-indigo-600',
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  {
    id: 'ai-automation',
    title: 'AI Automation Services & Agents',
    subtitle: 'Work Smarter, Not Harder! Automate 24/7.',
    tagline: 'Automate Your Business Today!',
    badge: 'Core Division 03',
    icon: 'Bot',
    image: '/images/slider-ai-automation.jpg',
    exploreLink: '/services/ai-automation',
    whatsappMessage: 'Hello Zippy Softwares, I am looking for AI Agent & Workflow Automation Services for my business.',
    highlights: [
      'WhatsApp & Website Conversational AI Chatbots',
      'Voice AI Telephony & Automated Customer Calling',
      'Document OCR, Invoice Parsing & Google Sheets Sync'
    ],
    themeColor: 'from-sky-600 to-blue-800',
    badgeBg: 'bg-sky-50 text-sky-700 border-sky-200'
  }
];

export const HeroServiceSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [zoomImage, setZoomImage] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SERVICE_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + SERVICE_SLIDES.length) % SERVICE_SLIDES.length);
  };

  // Auto-slide every 5 seconds (pauses on hover)
  useEffect(() => {
    if (!isPaused && !zoomImage) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused, zoomImage]);

  const currentSlide = SERVICE_SLIDES[currentIndex];

  const getSlideIcon = (icon: 'Globe' | 'Smartphone' | 'Bot') => {
    switch (icon) {
      case 'Globe': return <Globe className="w-4 h-4 text-blue-600" />;
      case 'Smartphone': return <Smartphone className="w-4 h-4 text-emerald-600" />;
      case 'Bot': return <Bot className="w-4 h-4 text-sky-600" />;
    }
  };

  return (
    <div 
      className="relative w-full max-w-6xl mx-auto my-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Category Tab Selector */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-5 px-2">
        {SERVICE_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer shadow-xs ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-102 ring-2 ring-blue-400/40'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
              }`}
            >
              <span className={isActive ? 'text-white' : ''}>
                {getSlideIcon(slide.icon)}
              </span>
              <span>{slide.title.split('&')[0].trim()}</span>
            </button>
          );
        })}
      </div>

      {/* Main Slide Card Container */}
      <div className="relative rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
        {/* Soft Decorative Ambient Top Accent */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${currentSlide.themeColor}`} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 p-5 sm:p-7 lg:p-9 items-center">
          
          {/* Left Column: Image with Full Clarity, 3D Tilt & Zoom Action */}
          <div className="lg:col-span-6 relative">
            <Tilt3D maxTilt={6} scale={1.01} className="w-full">
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md group">
                <img
                  src={currentSlide.image}
                  alt={`${currentSlide.title} - Zippy Enterprises Private Limited`}
                  className="w-full h-auto max-h-[460px] sm:max-h-[520px] object-contain mx-auto transition-transform duration-300 group-hover:scale-101"
                  loading="eager"
                  decoding="async"
                />

                {/* Clarity & Zoom Overlay Button */}
                <button
                  type="button"
                  onClick={() => setZoomImage(currentSlide.image)}
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/75 hover:bg-black/90 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg transition-colors cursor-pointer border border-white/20"
                  title="View Full Clarity High-Res Image"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Full Clarity</span>
                </button>

                {/* Tagline Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-white text-[11px] font-bold border border-white/20 shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-cyan-300" />
                    <span>{currentSlide.tagline}</span>
                  </span>
                </div>
              </div>
            </Tilt3D>
          </div>

          {/* Right Column: Slide Information & Direct Conversion Actions */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-5 text-left">
            <div>
              {/* Division Badge & Slide Indicator */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${currentSlide.badgeBg}`}>
                  {currentSlide.badge}
                </span>
                <span className="text-xs font-mono font-semibold text-slate-600">
                  Slide {currentIndex + 1} of {SERVICE_SLIDES.length}
                </span>
              </div>

              {/* Slide Main Heading */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {currentSlide.title}
              </h2>

              {/* Subtitle */}
              <p className="mt-2 text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                {currentSlide.subtitle}
              </p>

              {/* Highlights List */}
              <div className="mt-4 space-y-2.5 pt-2">
                {currentSlide.highlights.map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact & Action Buttons */}
            <div className="pt-2 border-t border-slate-100 space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to={currentSlide.exploreLink}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5"
                >
                  <span>Explore Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={generateWhatsAppUrl({
                    projectDescription: currentSlide.whatsappMessage
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>Instant Call: <strong>+91 63026 90251</strong></span>
                </span>
                <span className="text-slate-400 hidden sm:inline">Hyderabad &bull; Nacharam 500076</span>
              </div>
            </div>

          </div>

        </div>

        {/* Previous & Next Control Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-blue-600 border border-slate-200 shadow-md flex items-center justify-center transition-all hover:scale-110 cursor-pointer z-10"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-blue-600 border border-slate-200 shadow-md flex items-center justify-center transition-all hover:scale-110 cursor-pointer z-10"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Bottom Dot Indicators */}
        <div className="py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-center gap-2">
          {SERVICE_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex ? 'w-8 bg-blue-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Full-Screen High-Res Clarity Lightbox Modal */}
      {zoomImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setZoomImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-slate-950 rounded-2xl overflow-hidden p-2 border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setZoomImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center border border-white/20 cursor-pointer transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={zoomImage}
              alt="Full Clarity View - Zippy Enterprises"
              className="max-h-[85vh] w-auto mx-auto object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};
