import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  ArrowRight, 
  CheckCircle2, 
  Briefcase, 
  Calculator, 
  Layers, 
  TabletSmartphone, 
  Zap, 
  Database,
  WifiOff
} from 'lucide-react';
import { MetaTags } from '../components/common/MetaTags';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTASection } from '../components/common/CTASection';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { SERVICES_DATA } from '../data/servicesData';
import { generateWhatsAppUrl } from '../utils/whatsapp';

export const AppDevelopmentPage: React.FC = () => {
  const service = SERVICES_DATA['app-development'];
  const [activeCategoryId, setActiveCategoryId] = useState<string>(service.categories[0].id);

  const activeCategory = service.categories.find(c => c.id === activeCategoryId) || service.categories[0];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-emerald-600" />;
      case 'Calculator': return <Calculator className="w-5 h-5 text-teal-600" />;
      case 'Layers': return <Layers className="w-5 h-5 text-sky-600" />;
      default: return <TabletSmartphone className="w-5 h-5 text-emerald-600" />;
    }
  };

  const whatsappUrl = generateWhatsAppUrl({
    service: "App Development",
    projectDescription: "Hello Zippy Enterprises, I want to discuss a Business App / Mobile Application project."
  });

  return (
    <div className="relative overflow-hidden py-12 md:py-16 bg-[#F8FAFC]">
      <MetaTags
        title="Android & iOS Mobile App Development Company in Hyderabad | Zippy Softwares"
        description="Premier Android and iOS Mobile Application Development Company based in Nacharam, Hyderabad (500076) - Zippy Enterprises Private Limited. High-performance native & cross-platform Flutter/React Native mobile apps, custom enterprise ERPs, and business management software."
        keywords="mobile app development Hyderabad, android and ios app development, app developers near me, mobile app development Nacharam 500076, flutter app development Hyderabad, react native app developers, custom business mobile applications, Zippy Softwares"
        canonicalPath="/services/app-development"
      />

      {/* Hero Section */}
      <section className="relative pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-6">
            <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
            <span>{service.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
            {service.heroHeadline}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {service.heroSubheadline}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact?service=App%20Development"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base transition-all shadow-md shadow-emerald-500/20"
            >
              <span>Build Your Application</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-base transition-colors shadow-xs"
            >
              <span>Instant WhatsApp Inquiry</span>
            </a>
          </div>

          {/* Key Metrics */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {service.metrics.map((m, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900">{m.value}</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Architecture - Tabbed Detail */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Category Architecture"
            title="Four Specialized Pillars of"
            highlightedText="App & ERP Engineering"
            description="Explore our specialized application development categories, architecture deliverables, business use cases, and client benefits."
          />

          {/* Category Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {service.categories.map((cat) => {
              const isSelected = cat.id === activeCategoryId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 flex items-center gap-3 ${
                    isSelected 
                      ? 'bg-emerald-50 border-2 border-emerald-600 shadow-sm text-emerald-950 font-bold' 
                      : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 shadow-xs'
                  }`}
                >
                  <div className={`p-2 rounded-xl flex-shrink-0 ${isSelected ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider">
                      {cat.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Category Deep Dive */}
          <div className="rounded-3xl bg-slate-50/70 border border-slate-200 p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Narrative & Features */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                    Category Overview
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                    {activeCategory.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-600 mt-1">
                    {activeCategory.subtitle}
                  </p>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {activeCategory.description}
                </p>

                {/* Key Features */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                    Architectural Features & Capabilities:
                  </h4>
                  <div className="space-y-2">
                    {activeCategory.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                    Client Deliverables Included:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeCategory.deliverables.map((deliv, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs text-xs text-slate-700">
                        &bull; {deliv}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Business Impact & Suitability */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Business Benefits Card */}
                <div className="p-6 rounded-2xl bg-white border border-emerald-200 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">
                    <Zap className="w-4 h-4 text-emerald-600" />
                    Measurable Commercial Value
                  </div>
                  <div className="space-y-3">
                    {activeCategory.businessBenefits.map((benefit, idx) => (
                      <div key={idx} className="text-xs sm:text-sm text-slate-700 leading-relaxed border-l-2 border-emerald-600 pl-3">
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal For */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                    Engineered Specifically For:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeCategory.idealFor.map((target, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-lg text-xs bg-slate-100 text-slate-700 border border-slate-200 font-medium">
                        {target}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <Link
                    to={`/contact?service=App%20Development&subCategory=${encodeURIComponent(activeCategory.title)}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors"
                  >
                    <span>Request Proposal for {activeCategory.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Offline First & Sync Architecture Spotlight */}
      <section className="py-16 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-emerald-50/60 border border-emerald-200">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
                  <WifiOff className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Resilient Offline-First Architecture</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Zero Data Loss in Rural & Remote Highway Zones
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Field service technicians and freight drivers cannot be halted by cell dead spots. Our applications write data directly to an encrypted local on-device SQLite database and synchronize automatically with master servers the moment a network connection is detected.
                </p>
              </div>
              <div className="md:col-span-4 flex justify-center">
                <div className="p-6 rounded-2xl bg-white border border-emerald-200 shadow-sm text-center space-y-2">
                  <Database className="w-10 h-10 text-emerald-600 mx-auto" />
                  <div className="text-sm font-bold text-slate-900">Local-First Persistence</div>
                  <div className="text-xs text-slate-500">Bidirectional Sync with Conflict Resolution</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 md:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Engineering Stack"
            title="Mobile, Desktop & Cloud Frameworks"
            description="High-velocity cross-platform frameworks delivering native speed and seamless app store approval."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.technologies.map((techGroup, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">
                  {techGroup.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {techGroup.items.map((item, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md text-xs font-mono bg-white text-slate-700 border border-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App FAQs */}
      <section className="py-20 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion 
            faqs={service.faqs}
            title="App Development FAQs"
            subtitle="Guidance on app store publication, offline architecture, and backend ERP synchronizations."
          />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Build Your Custom Business Application?"
        subtitle="Empower your workforce with custom operational tools, accounting software, and mobile applications engineered by Zippy Enterprises."
      />
    </div>
  );
};
