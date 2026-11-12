import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  ExternalLink, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  Code, 
  Smartphone, 
  Bot, 
  Building2,
  ChevronDown
} from 'lucide-react';
import { 
  TARGET_LOCALITIES, 
  PRIMARY_LOCATION, 
  LOCAL_SEO_FAQS 
} from '../../data/localSeoData';
import type { LocalAreaInfo } from '../../data/localSeoData';
import { generateWhatsAppUrl } from '../../utils/whatsapp';

export const LocalAreasHub: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<LocalAreaInfo>(TARGET_LOCALITIES[0]);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const getAreaWhatsAppUrl = (areaName: string) => {
    return generateWhatsAppUrl({
      projectDescription: `Hello Zippy Softwares, I am looking for IT software development / web design / app development services for my business in ${areaName}. Please schedule a consultation.`
    });
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section 
      id="local-seo-hub"
      className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50/70 to-blue-50/30 border-y border-slate-200 relative overflow-hidden"
      itemScope 
      itemType="https://schema.org/LocalBusiness"
    >
      {/* Hidden Structured Data for Schema */}
      <meta itemProp="name" content={PRIMARY_LOCATION.name} />
      <meta itemProp="legalName" content={PRIMARY_LOCATION.legalName} />
      <meta itemProp="telephone" content={PRIMARY_LOCATION.phone} />
      <meta itemProp="email" content={PRIMARY_LOCATION.email} />
      <meta itemProp="priceRange" content={PRIMARY_LOCATION.priceRange} />
      <meta itemProp="url" content={PRIMARY_LOCATION.website} />
      
      <div 
        itemProp="address" 
        itemScope 
        itemType="https://schema.org/PostalAddress" 
        className="hidden"
      >
        <meta itemProp="streetAddress" content={PRIMARY_LOCATION.street} />
        <meta itemProp="addressLocality" content={PRIMARY_LOCATION.locality} />
        <meta itemProp="addressRegion" content={PRIMARY_LOCATION.state} />
        <meta itemProp="postalCode" content={PRIMARY_LOCATION.postalCode} />
        <meta itemProp="addressCountry" content={PRIMARY_LOCATION.countryCode} />
      </div>

      <div 
        itemProp="geo" 
        itemScope 
        itemType="https://schema.org/GeoCoordinates" 
        className="hidden"
      >
        <meta itemProp="latitude" content={PRIMARY_LOCATION.latitude.toString()} />
        <meta itemProp="longitude" content={PRIMARY_LOCATION.longitude.toString()} />
      </div>

      {/* Decorative ambient background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/60 text-blue-800 text-xs font-bold tracking-wide uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            <span>Nacharam, Hyderabad 500076 &bull; Local IT Hub</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Near By <span className="bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-600 bg-clip-text text-transparent">IT Software Development</span>, Web Design & AI Automation
          </h2>

          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Headquartered in <strong>Nacharam, Hyderabad (PIN: 500076)</strong>, <strong className="text-slate-900">{PRIMARY_LOCATION.legalName}</strong> is the trusted digital technology partner for businesses, factories, and startups across <strong>Nacharam, Habsiguda, Mallapur, Uppal, Cherlapally, Secunderabad, Narapally, and LB Nagar</strong>.
          </p>
        </div>

        {/* Local Area Selector Tabs */}
        <div className="mb-8">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3 text-center sm:text-left">
            Select Service Area to view local coverage & drive time:
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-slate-300">
            {TARGET_LOCALITIES.map((area) => {
              const isSelected = selectedArea.slug === area.slug;
              return (
                <button
                  key={area.slug}
                  onClick={() => setSelectedArea(area)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 border cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md scale-105'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50/50'
                  }`}
                >
                  <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-blue-500'}`} />
                  <span>{area.name}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {area.pincode}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Area Highlight Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden mb-16 transition-all duration-300">
          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 7 Columns: Area Specific Information */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-xs">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{selectedArea.distanceMinutes}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 font-bold text-xs">
                  <span>Postal PIN: {selectedArea.pincode}</span>
                </span>
                <span className="text-xs text-slate-500">
                  Approx. {selectedArea.distanceKm} from Nacharam HQ
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  IT Software & Web Development in {selectedArea.name}
                </h3>
                <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
                  {selectedArea.description}
                </p>
              </div>

              {/* Nearby Landmarks */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Key Connected Landmarks:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedArea.nearbyLandmarks.map((landmark, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
                    >
                      &bull; {landmark}
                    </span>
                  ))}
                </div>
              </div>

              {/* Popular Services for this Area */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Core Engineering Services for {selectedArea.name}:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedArea.popularServices.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={getAreaWhatsAppUrl(selectedArea.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Consult IT Team for {selectedArea.name}</span>
                </a>

                <a
                  href={`tel:${PRIMARY_LOCATION.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Call {PRIMARY_LOCATION.phone}</span>
                </a>
              </div>
            </div>

            {/* Right 5 Columns: Headquarters Box & Proximity Map Preview */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-[#102747] to-blue-950 p-6 sm:p-8 rounded-2xl text-white shadow-lg space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Central Office & Technology Hub</span>
              </div>

              <h4 className="text-xl font-bold tracking-tight text-white">
                Zippy Enterprises Private Limited
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed">
                {PRIMARY_LOCATION.fullAddress}
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-200">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Postal PIN Code</span>
                  <strong className="text-white font-mono">500076 (Nacharam)</strong>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Office Working Hours</span>
                  <strong className="text-white">09:30 AM – 07:00 PM IST</strong>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">On-Site Consultation</span>
                  <strong className="text-emerald-400 font-semibold">Available for all areas</strong>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-slate-400">Metro Proximity</span>
                  <strong className="text-cyan-300">Habsiguda / Uppal Metro (5-10m)</strong>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href={PRIMARY_LOCATION.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Driving Route on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Pillars of Nearby IT Services */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
              Complete Digital Engineering Stack
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              What We Build for Hyderabad & Local Area Businesses
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pillar 1: Web Design */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                <Code className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Web Design & Web Development
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Fast, responsive, and SEO-engineered corporate portals, custom React/Next.js web apps, and e-commerce stores designed to rank top in local Google searches.
              </p>
              <div className="text-[11px] font-mono text-blue-600 font-semibold">
                React &bull; Next.js &bull; Node.js &bull; SEO
              </div>
            </div>

            {/* Pillar 2: App Development */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-cyan-400 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 mb-4 group-hover:scale-110 transition-transform">
                <Smartphone className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Android & iOS App Development
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Native and Flutter cross-platform mobile apps for business management, field operations, customer bookings, and secure payment processing.
              </p>
              <div className="text-[11px] font-mono text-cyan-600 font-semibold">
                Android &bull; iOS &bull; Flutter &bull; Kotlin
              </div>
            </div>

            {/* Pillar 3: AI Agent Automation */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-purple-400 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                <Bot className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                AI Agent & Workflow Automation
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Autonomous LLM conversational agents, 24/7 AI voice phone bots, WhatsApp marketing automation, and automated invoice/document processing.
              </p>
              <div className="text-[11px] font-mono text-purple-600 font-semibold">
                LLM Bots &bull; AI Voice &bull; WhatsApp &bull; CRM
              </div>
            </div>

            {/* Pillar 4: Custom ERP & Software */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                ERP, CRM & Industrial Systems
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Tailor-made inventory platforms, GST billing software, production trackers, and client management databases for Nacharam & Cherlapally manufacturing firms.
              </p>
              <div className="text-[11px] font-mono text-emerald-600 font-semibold">
                ERP &bull; GST Billing &bull; Database &bull; Cloud
              </div>
            </div>

          </div>
        </div>

        {/* Local SEO FAQ Section (With Microdata Schema for Google Rich Snippets) */}
        <div 
          className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm"
          itemScope 
          itemType="https://schema.org/FAQPage"
        >
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
              Got Questions?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Frequently Asked Questions & Local Search Queries
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Common questions from business owners in Nacharam, Habsiguda, Uppal, Cherlapally, and Secunderabad.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {LOCAL_SEO_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  itemScope 
                  itemProp="mainEntity" 
                  itemType="https://schema.org/Question"
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-slate-50 hover:bg-slate-100/70 transition-colors cursor-pointer"
                  >
                    <span 
                      itemProp="name" 
                      className="font-bold text-slate-900 text-sm sm:text-base"
                    >
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`} />
                  </button>

                  {isOpen && (
                    <div 
                      itemScope 
                      itemProp="acceptedAnswer" 
                      itemType="https://schema.org/Answer"
                      className="p-4 sm:p-5 bg-white text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100"
                    >
                      <div itemProp="text">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
