import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  ShoppingCart, 
  AppWindow, 
  ShieldAlert, 
  Zap
} from 'lucide-react';
import { MetaTags } from '../components/common/MetaTags';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTASection } from '../components/common/CTASection';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { SERVICES_DATA } from '../data/servicesData';
import { generateWhatsAppUrl } from '../utils/whatsapp';

export const WebDevelopmentPage: React.FC = () => {
  const service = SERVICES_DATA['web-development'];
  const [activeCategoryId, setActiveCategoryId] = useState<string>(service.categories[0].id);

  const activeCategory = service.categories.find(c => c.id === activeCategoryId) || service.categories[0];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-5 h-5 text-blue-600" />;
      case 'ShoppingCart': return <ShoppingCart className="w-5 h-5 text-sky-600" />;
      case 'AppWindow': return <AppWindow className="w-5 h-5 text-indigo-600" />;
      default: return <ShieldAlert className="w-5 h-5 text-blue-600" />;
    }
  };

  const whatsappUrl = generateWhatsAppUrl({
    service: "Web Development",
    projectDescription: "Hello Zippy Enterprises, I want to discuss a Web Development project requirement."
  });

  return (
    <div className="relative overflow-hidden py-12 md:py-16 bg-[#F8FAFC]">
      <MetaTags
        title="Web Development Services | Corporate Websites, E-commerce & SaaS Portals"
        description="Bespoke web development by Zippy Enterprises Private Limited. High-performance corporate websites, scalable e-commerce platforms, custom web applications, and secure enterprise portals."
        canonicalPath="/services/web-development"
      />

      {/* Hero Section */}
      <section className="relative pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold badge-blue mb-6">
            <Globe className="w-3.5 h-3.5 text-blue-600" />
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
              to="/contact?service=Web%20Development"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base transition-all shadow-md shadow-blue-500/20"
            >
              <span>Initiate Web Project</span>
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
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">{m.value}</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Architecture - Interactive Tabbed Detail */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Category Architecture"
            title="Four Specialized Pillars of"
            highlightedText="Web Engineering"
            description="Explore our specialized web development categories, architecture deliverables, business use cases, and client benefits."
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
                      ? 'bg-blue-50 border-2 border-blue-600 shadow-sm text-blue-950 font-bold' 
                      : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 shadow-xs'
                  }`}
                >
                  <div className={`p-2 rounded-xl flex-shrink-0 ${isSelected ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'}`}>
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
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
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
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
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
                <div className="p-6 rounded-2xl bg-white border border-blue-200 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">
                    <Zap className="w-4 h-4 text-blue-600" />
                    Measurable Commercial Value
                  </div>
                  <div className="space-y-3">
                    {activeCategory.businessBenefits.map((benefit, idx) => (
                      <div key={idx} className="text-xs sm:text-sm text-slate-700 leading-relaxed border-l-2 border-blue-600 pl-3">
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
                    to={`/contact?service=Web%20Development&subCategory=${encodeURIComponent(activeCategory.title)}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors"
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

      {/* Technology Stack Grid */}
      <section className="py-20 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Technology Stack"
            title="Modern Frameworks & Cloud Infrastructure"
            description="We build on battle-tested, high-performance programming languages and cloud platforms with zero technical debt."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.technologies.map((techGroup, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">
                  {techGroup.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {techGroup.items.map((item, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-50 text-slate-700 border border-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve in Web */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            badge="Target Sectors"
            title="Industries Accelerated by our Web Division"
          />

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {service.industriesServed.map((ind, idx) => (
              <span key={idx} className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold shadow-xs">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Web Development FAQs */}
      <section className="py-20 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion 
            faqs={service.faqs}
            title="Web Engineering FAQs"
            subtitle="Answers to common questions regarding our web development methodologies, testing standards, and post-launch warranties."
          />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Build a High-Performance Web Platform?"
        subtitle="Consult with our web engineering leads. We provide a full technical scoping document and milestone breakdown within 24 hours."
      />
    </div>
  );
};
