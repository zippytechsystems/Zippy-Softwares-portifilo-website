import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Smartphone, 
  Bot, 
  ArrowRight, 
  Layers,
  Maximize2,
  X
} from 'lucide-react';
import { MetaTags } from '../components/common/MetaTags';
import { CTASection } from '../components/common/CTASection';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { Tilt3D } from '../components/animations/Tilt3D';

export const ServicesPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const masterFaqs = [
    {
      question: "Which division should I engage for our business needs?",
      answer: "If your primary goal is online brand presence, e-commerce sales, or customer web portals, our Web Development division is the best fit. If you need staff operational tooling, technician dispatch, accounting, or cross-platform mobile apps, choose App Development. If you want 24/7 autonomous chatbots, AI voice calling, or document OCR automation, our AI Agent & Automation division is built for you. We also frequently orchestrate unified cross-division solutions."
    },
    {
      question: "Do you sign Non-Disclosure Agreements (NDAs) before discussing requirements?",
      answer: "Yes, absolutely. We treat your intellectual property, business workflows, and trade secrets with absolute confidentiality. We execute mutual enterprise NDAs prior to detailed scoping calls."
    },
    {
      question: "What is your approach to code ownership and vendor lock-in?",
      answer: "Zippy Enterprises guarantees 100% intellectual property ownership to the client upon milestone settlement. You receive complete Git repositories, database migration scripts, Docker containers, and cloud deployment pipelines."
    },
    {
      question: "Can Zippy Enterprises integrate with our existing legacy software?",
      answer: "Yes. Our senior architects specialize in bridging legacy databases (SQL Server, Oracle, Tally, SAP) with modern web dashboards, mobile apps, and AI agents through secure custom middleware and RESTful APIs."
    }
  ];

  return (
    <div className="relative overflow-hidden py-12 md:py-16 bg-[#F8FAFC]">
      <MetaTags
        title="IT Software Services & Engineering Divisions | Zippy Softwares Hyderabad"
        description="Explore the three core software divisions of Zippy Enterprises Private Limited in Nacharam, Hyderabad 500076: Custom Web Development, Android & iOS App Development, and AI Agent Automation Solutions."
        keywords="IT services Hyderabad, software development divisions, web design services, mobile app development Hyderabad, AI agent automation, custom software services Nacharam"
        canonicalPath="/services"
      />

      {/* Hero */}
      <section className="relative pb-16 md:pb-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold badge-cyan mb-6">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Comprehensive IT Engineering Capabilities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Full-Spectrum Technology Solutions for{' '}
            <span className="text-gradient-cyan block sm:inline">
              Ambitious Enterprises
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We architect, develop, and scale digital products through three specialized engineering divisions. Each division delivers domain expertise, production-grade security, and measurable commercial results.
          </p>
        </div>
      </section>

      {/* Division 1: Web Development Featurette */}
      <section className="py-16 md:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                <span>Division 01 &bull; Web Engineering</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-3d-hero">
                Web Development Services
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                From high-conversion corporate flagships to multi-tenant SaaS applications and enterprise intranets, we construct responsive, accessible, and SEO-engineered web platforms.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs card-3d-depth">
                  <div className="font-bold text-slate-900 mb-1">Business Websites</div>
                  <p className="text-slate-500 text-[11px]">Corporate flagships engineered for trust & lead capture.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs card-3d-depth">
                  <div className="font-bold text-slate-900 mb-1">E-commerce Platforms</div>
                  <p className="text-slate-500 text-[11px]">Multi-variant shopping carts with automated GST & shipping.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs card-3d-depth">
                  <div className="font-bold text-slate-900 mb-1">Custom Web Applications</div>
                  <p className="text-slate-500 text-[11px]">Bespoke SaaS architectures and operational dashboards.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs card-3d-depth">
                  <div className="font-bold text-slate-900 mb-1">Enterprise Portals</div>
                  <p className="text-slate-500 text-[11px]">Internal intranets, vendor portals, and compliance hubs.</p>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/services/web-development"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all hover:scale-102"
                >
                  <span>Explore Web Development In-Depth</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <Tilt3D maxTilt={10} scale={1.03} idleFloat={true} floatVariant="normal" className="w-full">
                <div className="rounded-3xl bg-slate-900 border border-slate-200 overflow-hidden shadow-2xl relative frame-3d-poster group">
                  <img
                    src="/images/slider-web-development.jpg"
                    alt="Web Development & Business Portals - Zippy Enterprises"
                    className="w-full h-auto max-h-[480px] object-contain mx-auto transition-transform duration-500 group-hover:scale-102"
                    loading="lazy"
                  />
                  <button
                    type="button"
                    onClick={() => setSelectedImage('/images/slider-web-development.jpg')}
                    className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 shadow-xl border border-white/20 transition-all cursor-pointer hover:scale-105 active:scale-95"
                    title="View Full Clarity High-Res"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Full Clarity 🔍</span>
                  </button>
                </div>
              </Tilt3D>
            </div>

          </div>
        </div>
      </section>

      {/* Division 2: App Development Featurette */}
      <section className="py-16 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 order-2 lg:order-1">
              <Tilt3D maxTilt={10} scale={1.03} idleFloat={true} floatVariant="slow" className="w-full">
                <div className="rounded-3xl bg-slate-900 border border-slate-200 overflow-hidden shadow-2xl relative frame-3d-poster group">
                  <img
                    src="/images/slider-app-development.jpg"
                    alt="Custom Software & App Development - Zippy Enterprises"
                    className="w-full h-auto max-h-[480px] object-contain mx-auto transition-transform duration-500 group-hover:scale-102"
                    loading="lazy"
                  />
                  <button
                    type="button"
                    onClick={() => setSelectedImage('/images/slider-app-development.jpg')}
                    className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 shadow-xl border border-white/20 transition-all cursor-pointer hover:scale-105 active:scale-95"
                    title="View Full Clarity High-Res"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Full Clarity 🔍</span>
                  </button>
                </div>
              </Tilt3D>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5 depth-layer-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs">
                <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Division 02 &bull; Business & Mobile Apps</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-3d-hero">
                App Development Services
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We design and engineer bespoke operational software, tailored accounting tools, enterprise CRM/ERP suites, and native/cross-platform mobile apps for field and office teams.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs text-xs card-3d-depth">
                  <div className="font-bold text-slate-900 mb-1">Business Management Apps</div>
                  <p className="text-slate-500 text-[11px]">Field technician dispatch, job tracking & customer approvals.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs text-xs card-3d-depth">
                  <div className="font-bold text-slate-900 mb-1">Accounting Applications</div>
                  <p className="text-slate-500 text-[11px]">Tailored ledgers, GST invoices & automated payment links.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs text-xs card-3d-depth">
                  <div className="font-bold text-slate-900 mb-1">CRM & ERP Applications</div>
                  <p className="text-slate-500 text-[11px]">Centralized lead pipelines, multi-warehouse inventory & POs.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs text-xs card-3d-depth">
                  <div className="font-bold text-slate-900 mb-1">Custom Mobile Apps</div>
                  <p className="text-slate-500 text-[11px]">Cross-platform Flutter apps for Apple iOS and Google Play.</p>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/services/app-development"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all hover:scale-102"
                >
                  <span>Explore App Development In-Depth</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Division 3: AI Agent & Automation Featurette */}
      <section className="py-16 md:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5 depth-layer-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200 shadow-xs">
                <Bot className="w-3.5 h-3.5 text-sky-600" />
                <span>Division 03 &bull; AI Agents & Cognitive Automation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-3d-hero">
                AI Agent & Automation Services
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Transform repetitive human operations into intelligent 24/7 automated pipelines. We deploy autonomous LLM chatbots with strict guardrails, conversational voice telephony agents, and document OCR workflows.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs card-3d-depth">
                  <div className="font-bold text-slate-900 mb-1">AI Chatbots</div>
                  <p className="text-slate-500 text-[11px]">RAG-powered conversational knowledge agents for web & WhatsApp.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs card-3d-depth">
                  <div className="font-bold text-slate-900 mb-1">AI Voice Agents</div>
                  <p className="text-slate-500 text-[11px]">Sub-500ms voice telephony for appointment booking & reminders.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs card-3d-depth">
                  <div className="font-bold text-slate-900 mb-1">Workflow Automation</div>
                  <p className="text-slate-500 text-[11px]">Intelligent invoice OCR, API data syncing & zero-human data entry.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs card-3d-depth">
                  <div className="font-bold text-slate-900 mb-1">Support Automation</div>
                  <p className="text-slate-500 text-[11px]">Ticket auto-triage, sentiment escalation & multi-channel inbox.</p>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/services/ai-automation"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-md transition-all hover:scale-102"
                >
                  <span>Explore AI Automation In-Depth</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <Tilt3D maxTilt={10} scale={1.03} idleFloat={true} floatVariant="reverse" className="w-full">
                <div className="rounded-3xl bg-slate-900 border border-slate-200 overflow-hidden shadow-2xl relative frame-3d-poster group">
                  <img
                    src="/images/slider-ai-automation.jpg"
                    alt="AI Agent & Automation Services - Zippy Enterprises"
                    className="w-full h-auto max-h-[480px] object-contain mx-auto transition-transform duration-500 group-hover:scale-102"
                    loading="lazy"
                  />
                  <button
                    type="button"
                    onClick={() => setSelectedImage('/images/slider-ai-automation.jpg')}
                    className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 shadow-xl border border-white/20 transition-all cursor-pointer hover:scale-105 active:scale-95"
                    title="View Full Clarity High-Res"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>Full Clarity 🔍</span>
                  </button>
                </div>
              </Tilt3D>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs on Services */}
      <section className="py-20 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqs={masterFaqs} />
        </div>
      </section>

      {/* CTA */}
      <CTASection />

      {/* Full-Screen Clarity Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-slate-950 rounded-2xl overflow-hidden p-2 border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center border border-white/20 cursor-pointer transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage}
              alt="Full Clarity View - Zippy Enterprises"
              className="max-h-[85vh] w-auto mx-auto object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};
