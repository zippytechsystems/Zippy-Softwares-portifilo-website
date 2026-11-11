import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquareCode, 
  PhoneCall, 
  GitFork, 
  Headphones, 
  Zap, 
  ShieldCheck, 
  Lock,
  Server
} from 'lucide-react';
import { MetaTags } from '../components/common/MetaTags';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTASection } from '../components/common/CTASection';
import { FAQAccordion } from '../components/common/FAQAccordion';
import { SERVICES_DATA } from '../data/servicesData';
import { generateWhatsAppUrl } from '../utils/whatsapp';

export const AIAgentAutomationPage: React.FC = () => {
  const service = SERVICES_DATA['ai-automation'];
  const [activeCategoryId, setActiveCategoryId] = useState<string>(service.categories[0].id);

  const activeCategory = service.categories.find(c => c.id === activeCategoryId) || service.categories[0];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquareCode': return <MessageSquareCode className="w-5 h-5 text-sky-600" />;
      case 'PhoneCall': return <PhoneCall className="w-5 h-5 text-blue-600" />;
      case 'GitFork': return <GitFork className="w-5 h-5 text-indigo-600" />;
      default: return <Headphones className="w-5 h-5 text-teal-600" />;
    }
  };

  const whatsappUrl = generateWhatsAppUrl({
    service: "AI Agent & Automation",
    projectDescription: "Hello Zippy Enterprises, I want to discuss an AI Agent / Automation solution for my business."
  });

  return (
    <div className="relative overflow-hidden py-12 md:py-16 bg-[#F8FAFC]">
      <MetaTags
        title="AI Agent & Automation Services | Autonomous LLM Chatbots, Voice Telephony & Workflows"
        description="Deploy autonomous AI agents, intelligent LLM chatbots, conversational voice agents, and business workflow automation by Zippy Enterprises Private Limited."
        canonicalPath="/services/ai-automation"
      />

      {/* Hero Section */}
      <section className="relative pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold badge-cyan mb-6">
            <Bot className="w-3.5 h-3.5 text-blue-600" />
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
              to="/contact?service=AI%20Agent%20%26%20Automation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base transition-all shadow-md shadow-blue-500/20"
            >
              <span>Deploy AI Solutions</span>
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
            highlightedText="Cognitive AI & Automation"
            description="Explore our specialized AI agent categories, architecture deliverables, business use cases, and client benefits."
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
                      ? 'bg-sky-50 border-2 border-sky-600 shadow-sm text-sky-950 font-bold' 
                      : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 shadow-xs'
                  }`}
                >
                  <div className={`p-2 rounded-xl flex-shrink-0 ${isSelected ? 'bg-sky-100 text-sky-700' : 'bg-slate-100 text-slate-500'}`}>
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
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
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
                        <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
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
                <div className="p-6 rounded-2xl bg-white border border-sky-200 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 mb-3">
                    <Zap className="w-4 h-4 text-sky-600" />
                    Measurable Commercial Value
                  </div>
                  <div className="space-y-3">
                    {activeCategory.businessBenefits.map((benefit, idx) => (
                      <div key={idx} className="text-xs sm:text-sm text-slate-700 leading-relaxed border-l-2 border-sky-600 pl-3">
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
                    to={`/contact?service=AI%20Agent%20%26%20Automation&subCategory=${encodeURIComponent(activeCategory.title)}`}
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

      {/* Enterprise Security & Privacy Guardrails */}
      <section className="py-16 md:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="AI Safety & Trust"
            title="Enterprise Privacy & Zero-Hallucination Guardrails"
            description="We build AI solutions that protect your corporate data assets, adhere to strict regulatory compliance, and speak only fact-grounded truths."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <Lock className="w-8 h-8 text-sky-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Zero Data Model Training</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We contract with enterprise API providers whose legally binding terms forbid using client data for public model training. Your proprietary operational data remains 100% private.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <ShieldCheck className="w-8 h-8 text-emerald-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Deterministic Guardrails</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our RAG systems employ cosine similarity thresholds and policy filter layers. If an inquiry is outside authorized scope, the bot defers gracefully without inventing false answers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <Server className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Private On-Premise AI Option</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                For banking and healthcare clients with strict data sovereignty mandates, we deploy air-gapped open-weight LLMs (Llama 3 / Mistral) entirely on your private VPC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 md:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="AI Stack"
            title="Cutting-Edge LLM & Telephony Architecture"
            description="Built with the world's most capable foundation models, low-latency streaming infrastructure, and resilient middleware."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.technologies.map((techGroup, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-3">
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

      {/* AI FAQs */}
      <section className="py-20 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion 
            faqs={service.faqs}
            title="AI Agent & Automation FAQs"
            subtitle="Details on hallucination mitigation, latency thresholds, and API integration with existing databases."
          />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Automate Your Business Operations with AI?"
        subtitle="Schedule an AI strategy discovery call with our machine learning architects. We identify your highest-ROI automation opportunities."
      />
    </div>
  );
};
