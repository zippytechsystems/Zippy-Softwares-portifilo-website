import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Smartphone, 
  Bot, 
  ArrowRight, 
  Layers
} from 'lucide-react';
import { MetaTags } from '../components/common/MetaTags';
import { CTASection } from '../components/common/CTASection';
import { FAQAccordion } from '../components/common/FAQAccordion';

export const ServicesPage: React.FC = () => {
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

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Web Development Services
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                From high-conversion corporate flagships to multi-tenant SaaS applications and enterprise intranets, we construct responsive, accessible, and SEO-engineered web platforms.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="font-bold text-slate-900 mb-1">Business Websites</div>
                  <p className="text-slate-500 text-[11px]">Corporate flagships engineered for trust & lead capture.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="font-bold text-slate-900 mb-1">E-commerce Platforms</div>
                  <p className="text-slate-500 text-[11px]">Multi-variant shopping carts with automated GST & shipping.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="font-bold text-slate-900 mb-1">Custom Web Applications</div>
                  <p className="text-slate-500 text-[11px]">Bespoke SaaS architectures and operational dashboards.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="font-bold text-slate-900 mb-1">Enterprise Portals</div>
                  <p className="text-slate-500 text-[11px]">Internal intranets, vendor portals, and compliance hubs.</p>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/services/web-development"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all"
                >
                  <span>Explore Web Development In-Depth</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-slate-50 border border-blue-200 p-8 shadow-lg">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-4">
                  Division Highlights & Benchmarks
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-2xl font-black text-slate-900">&lt; 1.2s</div>
                    <div className="text-xs text-slate-500 mt-1">Average First Contentful Paint</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-2xl font-black text-slate-900">100%</div>
                    <div className="text-xs text-slate-500 mt-1">Mobile & Tablet Responsive</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-2xl font-black text-slate-900">99.9%</div>
                    <div className="text-xs text-slate-500 mt-1">Cloud Server Availability</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="text-2xl font-black text-slate-900">A+</div>
                    <div className="text-xs text-slate-500 mt-1">SSL Security & OWASP Rating</div>
                  </div>
                </div>
                <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span>Stack: React &bull; Next.js &bull; Node &bull; Tailwind</span>
                  <span className="text-blue-700 font-semibold">Ready to deploy</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Division 2: App Development Featurette */}
      <section className="py-16 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-3xl bg-slate-50 border border-emerald-200 p-8 shadow-lg">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-4">
                  Enterprise Operational Capabilities
                </div>
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">Offline-First Synchronization</span>
                    <span className="text-xs text-emerald-700 font-mono font-semibold">SQLite + Cloud Sync</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">Hardware API Integrations</span>
                    <span className="text-xs text-emerald-700 font-mono font-semibold">GPS, Camera, Bluetooth, QR</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">GST Billing & E-Way Bills</span>
                    <span className="text-xs text-emerald-700 font-mono font-semibold">Real-time Tax Ledger</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">Cross-Platform Deployment</span>
                    <span className="text-xs text-emerald-700 font-mono font-semibold">Flutter (iOS & Android)</span>
                  </div>
                </div>
                <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span>Stack: Flutter &bull; React Native &bull; PostgreSQL &bull; SQLite</span>
                  <span className="text-emerald-700 font-semibold">Store Approval Guarantee</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Division 02 &bull; Business & Mobile Apps</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                App Development Services
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We design and engineer bespoke operational software, tailored accounting tools, enterprise CRM/ERP suites, and native/cross-platform mobile apps for field and office teams.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs text-xs">
                  <div className="font-bold text-slate-900 mb-1">Business Management Apps</div>
                  <p className="text-slate-500 text-[11px]">Field technician dispatch, job tracking & customer approvals.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs text-xs">
                  <div className="font-bold text-slate-900 mb-1">Accounting Applications</div>
                  <p className="text-slate-500 text-[11px]">Tailored ledgers, GST invoices & automated payment links.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs text-xs">
                  <div className="font-bold text-slate-900 mb-1">CRM & ERP Applications</div>
                  <p className="text-slate-500 text-[11px]">Centralized lead pipelines, multi-warehouse inventory & POs.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs text-xs">
                  <div className="font-bold text-slate-900 mb-1">Custom Mobile Apps</div>
                  <p className="text-slate-500 text-[11px]">Cross-platform Flutter apps for Apple iOS and Google Play.</p>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/services/app-development"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
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
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200">
                <Bot className="w-3.5 h-3.5 text-sky-600" />
                <span>Division 03 &bull; AI Agents & Cognitive Automation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                AI Agent & Automation Services
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Transform repetitive human operations into intelligent 24/7 automated pipelines. We deploy autonomous LLM chatbots with strict guardrails, conversational voice telephony agents, and document OCR workflows.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="font-bold text-slate-900 mb-1">AI Chatbots</div>
                  <p className="text-slate-500 text-[11px]">RAG-powered conversational knowledge agents for web & WhatsApp.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="font-bold text-slate-900 mb-1">AI Voice Agents</div>
                  <p className="text-slate-500 text-[11px]">Sub-500ms voice telephony for appointment booking & reminders.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="font-bold text-slate-900 mb-1">Workflow Automation</div>
                  <p className="text-slate-500 text-[11px]">Intelligent invoice OCR, API data syncing & zero-human data entry.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="font-bold text-slate-900 mb-1">Support Automation</div>
                  <p className="text-slate-500 text-[11px]">Ticket auto-triage, sentiment escalation & multi-channel inbox.</p>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/services/ai-automation"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-md transition-all"
                >
                  <span>Explore AI Automation In-Depth</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-slate-50 border border-sky-200 p-8 shadow-lg">
                <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-4">
                  Enterprise AI Guardrails & Architecture
                </div>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-900">Zero Data Training Agreement</span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">Strict Privacy</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Enterprise LLM API agreements explicitly isolate client corporate data from public training sets.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-900">Retrieval-Augmented Generation (RAG)</span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200 font-semibold">pgvector / Pinecone</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Chatbots and voice agents speak strictly from your verified company documents and product catalogs.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-900">Full-Duplex Speech Telephony</span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-semibold">Sub-500ms</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">WebSockets streaming with voice interruption handling and human-like natural intonation.</p>
                  </div>
                </div>
              </div>
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
    </div>
  );
};
