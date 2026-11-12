import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Globe, 
  Smartphone, 
  Bot, 
  ShieldCheck, 
  TrendingUp, 
  Cpu, 
  Layout, 
  Layers, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  Code,
  Building2,
  Users2,
  Lock,
  MessageSquare,
  Sprout,
  Factory,
  ShoppingBag,
  Stethoscope,
  GraduationCap,
  Building,
  Landmark,
  Truck,
  UtensilsCrossed,
  Briefcase,
  Mail,
  Phone,
  Sparkles,
  Users
} from 'lucide-react';
import { MetaTags } from '../components/common/MetaTags';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTASection } from '../components/common/CTASection';
import { LocalAreasHub } from '../components/common/LocalAreasHub';
import { ProjectModal } from '../components/modals/ProjectModal';
import { COMPANY_INFO } from '../data/companyData';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { PROCESS_STEPS } from '../data/processData';
import { INDUSTRIES_DATA } from '../data/industriesData';
import type { Project } from '../types';
import { generateWhatsAppUrl } from '../utils/whatsapp';

export const HomePage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Industry Icon mapping helper
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sprout': return <Sprout className="w-5 h-5 text-emerald-600" />;
      case 'Factory': return <Factory className="w-5 h-5 text-blue-600" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-sky-600" />;
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-rose-600" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-amber-600" />;
      case 'Building': return <Building className="w-5 h-5 text-indigo-600" />;
      case 'Landmark': return <Landmark className="w-5 h-5 text-teal-600" />;
      case 'Truck': return <Truck className="w-5 h-5 text-sky-600" />;
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-5 h-5 text-orange-600" />;
      default: return <Briefcase className="w-5 h-5 text-purple-600" />;
    }
  };

  const getWhyIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-sky-600" />;
      case 'Code': return <Code className="w-6 h-6 text-blue-600" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-emerald-600" />;
      case 'Layout': return <Layout className="w-6 h-6 text-purple-600" />;
      case 'Layers': return <Layers className="w-6 h-6 text-amber-600" />;
      default: return <ShieldCheck className="w-6 h-6 text-rose-600" />;
    }
  };

  const whatsappHeroUrl = generateWhatsAppUrl({
    projectDescription: "Hello Zippy Softwares, I would like to explore custom software development for my business."
  });

  return (
    <div className="relative overflow-hidden bg-[#F8FAFC]">
      <MetaTags
        title="Zippy Softwares | IT Software Company in Nacharam, Hyderabad 500076 | Web, App & AI Development"
        description="Top IT Software Development Company in Nacharam, Hyderabad (500076) - Zippy Enterprises Private Limited. Near by IT services, Custom Web Design, Android & iOS Mobile Apps, and AI Agent Automation serving Nacharam, Habsiguda, Mallapur, Uppal, Cherlapally, Secunderabad, Narapally & LB Nagar."
        keywords="IT software company near me, software company in Nacharam 500076, web design Hyderabad, web development Nacharam, mobile app development android ios Hyderabad, AI agent automation Hyderabad, IT companies in 500076, software company Habsiguda, web design Uppal, software company Mallapur, software development Cherlapally, IT services Secunderabad, app development Narapally, software company LB Nagar, Zippy Softwares, Zippy Enterprises Private Limited"
        canonicalPath="/"
      />

      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-[#F8FAFC]">
        {/* Soft Ambient Radial Accents */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-blue-400/10 via-sky-300/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Official Brand Logo Emblem */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-6 rounded-full overflow-hidden shadow-xl border-4 border-white bg-black hover:scale-105 transition-transform duration-300">
            <img 
              src="/zippy-logo.jpg" 
              alt="Zippy Tech Softwares - Innovate • Develop • Deliver" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top Corporate Badge with Local SEO indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold badge-cyan mb-8 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span>Near By IT Software Development &bull; Nacharam, Hyderabad 500076</span>
          </div>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.12] max-w-5xl mx-auto">
            Building Digital Solutions.{' '}
            <span className="text-gradient-cyan block sm:inline">
              Empowering Businesses.
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
            {COMPANY_INFO.subheading}
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base transition-all duration-200 shadow-lg shadow-blue-500/20 hover:-translate-y-0.5"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-base transition-all duration-200 shadow-sm hover:-translate-y-0.5"
            >
              <span>Discuss Your Project</span>
              <ChevronRight className="w-4 h-4 text-blue-600" />
            </Link>
          </div>

          {/* Quick Consultation Channel */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
            <span>Prefer instant WhatsApp?</span>
            <a 
              href={whatsappHeroUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1 underline"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Connect directly on WhatsApp</span>
            </a>
          </div>

          {/* Live Metric Strip */}
          <div className="mt-16 pt-12 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          2. COMPANY INTRODUCTION
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold badge-cyan">
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                <span>About Zippy Softwares & Zippy Enterprises</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Architecting Enterprise-Grade Technology for High-Growth Businesses
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                <strong className="text-slate-900 font-bold">Zippy Softwares</strong> is the flagship IT services and custom software engineering division of <strong className="text-slate-900 font-bold">{COMPANY_INFO.legalName}</strong>, based in Nacharam, Hyderabad, Telangana. We engineer high-performance web applications, bespoke business software, and autonomous AI automation solutions.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We believe that software should never be a cost center—it must be an engine that drives commercial velocity, optimizes profit margins, and scales operational capacity. Whether assisting a regional agro-processing business, a retail chemist network, or an enterprise loan verification desk, we combine engineering rigor with business practicality.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Full Intellectual Property Ownership</h4>
                    <p className="text-xs text-slate-500 mt-0.5">You own 100% of your source code, databases, and digital assets.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Users2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Dedicated In-House Engineers</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Zero anonymous outsourcing. Direct access to your project lead.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-800 group"
                >
                  <span>Learn more about our company background and engineering ethos</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Architectural Graphic Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-white border border-slate-200 p-8 shadow-xl overflow-hidden">
                <div className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-4">
                  Corporate Architecture Matrix
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-500 font-mono">01. WEB APPS & PORTALS</div>
                      <div className="text-sm font-bold text-slate-900 mt-0.5">High-Speed Frontends & APIs</div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200 font-medium">React / Next.js</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-500 font-mono">02. BUSINESS SOFTWARE</div>
                      <div className="text-sm font-bold text-slate-900 mt-0.5">Operational CRMs & ERP Suites</div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">Flutter / SQL</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-500 font-mono">03. COGNITIVE AGENTS</div>
                      <div className="text-sm font-bold text-slate-900 mt-0.5">LLM Chatbots & Voice Bots</div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-md bg-sky-50 text-sky-700 border border-sky-200 font-medium">RAG / Telephony</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
                  <span>ISO-aligned QA workflows</span>
                  <span className="text-emerald-700 flex items-center gap-1 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" /> SOC2-Ready Security
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. OUR THREE CORE DIVISIONS
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Three Core Divisions"
            title="Specialized Software Engineering for"
            highlightedText="Every Layer of Your Business"
            description="Our company operates through three specialized divisions, each staffed with dedicated domain architects and software engineers."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Division 1: Web Development */}
            <div className="group rounded-3xl bg-white border border-slate-200 hover:border-blue-400 p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-105 transition-transform">
                  <Globe className="w-7 h-7" />
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                  Division 01
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Web Development
                </h3>

                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  High-speed, SEO-engineered corporate websites, conversion-driven e-commerce platforms, SaaS web applications, and enterprise intranets.
                </p>

                {/* Subcategories */}
                <div className="mt-6 pt-6 border-t border-slate-100 space-y-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Core Solutions:
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span>Business Websites</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span>E-commerce Platforms</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span>Custom Web Applications</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span>Enterprise Portals</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to="/services/web-development"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-50 hover:bg-blue-600 border border-blue-200 hover:border-blue-600 text-blue-700 hover:text-white font-bold text-sm transition-all duration-200"
                >
                  <span>Explore Web Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Division 2: App Development */}
            <div className="group rounded-3xl bg-white border border-slate-200 hover:border-emerald-400 p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-105 transition-transform">
                  <Smartphone className="w-7 h-7" />
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
                  Division 02
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  App Development
                </h3>

                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  Tailored business operations software, accounting and invoicing engines, CRM & ERP suites, and cross-platform iOS/Android mobile apps.
                </p>

                {/* Subcategories */}
                <div className="mt-6 pt-6 border-t border-slate-100 space-y-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Core Solutions:
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Business Management Apps</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Accounting Applications</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>CRM & ERP Applications</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Custom Mobile Applications</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to="/services/app-development"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-600 border border-emerald-200 hover:border-emerald-600 text-emerald-700 hover:text-white font-bold text-sm transition-all duration-200"
                >
                  <span>Explore App Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Division 3: AI Agent & Automation */}
            <div className="group rounded-3xl bg-white border border-slate-200 hover:border-sky-400 p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-6 group-hover:scale-105 transition-transform">
                  <Bot className="w-7 h-7" />
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-1">
                  Division 03
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  AI Agent & Automation
                </h3>

                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  Autonomous LLM chatbots with strict guardrails, conversational AI voice telephony, document OCR pipelines, and multi-system automation.
                </p>

                {/* Subcategories */}
                <div className="mt-6 pt-6 border-t border-slate-100 space-y-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Core Solutions:
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                    <span>AI Chatbots</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                    <span>AI Voice Agents</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                    <span>Business Workflow Automation</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                    <span>Customer Support Automation</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to="/services/ai-automation"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-50 hover:bg-sky-600 border border-sky-200 hover:border-sky-600 text-sky-700 hover:text-white font-bold text-sm transition-all duration-200"
                >
                  <span>Explore AI Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WHY CHOOSE US
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Engineering Standards"
            title="Why Companies Partner with"
            highlightedText="Zippy Enterprises"
            description="We eliminate the risks of software outsourcing with transparent engineering cadences, bank-grade security, and architecture built to scale."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {COMPANY_INFO.whyChooseUs.map((item, idx) => (
              <div 
                key={idx}
                className="p-7 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-blue-400 transition-all duration-200 hover:bg-white hover:shadow-md group"
              >
                <div className="p-3 rounded-xl bg-white w-fit border border-slate-200 shadow-xs mb-5 group-hover:scale-110 transition-transform">
                  {getWhyIcon(item.icon)}
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CAREER SPOTLIGHT: HIRING 4 DIGITAL MARKETING EXECUTIVES
          ========================================================================= */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-slate-900 via-[#102747] to-blue-950 text-white relative overflow-hidden">
        {/* Soft decorative background accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-7 sm:p-10 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Job Overview */}
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-400 text-slate-950 shadow-sm">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Immediate Hiring &bull; 4 Positions</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-950"></span>
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-slate-900" /> Walk-In / Direct Apply
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                  We Are Hiring: <span className="text-cyan-300">4 Digital Marketing Executives</span>
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                  <strong className="text-white">Zippy Enterprises Private Limited (Zippy Softwares)</strong> is rapidly expanding our Nacharam, Hyderabad marketing and client engagement team. We are onboarding 4 enthusiastic digital marketers to spearhead social media campaigns, SEO, and business lead generation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="p-3.5 rounded-xl bg-white/10 border border-white/10">
                    <span className="text-slate-400 block font-mono text-[10px] uppercase">Open Positions</span>
                    <strong className="text-white text-sm flex items-center gap-1.5 mt-0.5">
                      <Users className="w-4 h-4 text-cyan-300" />
                      4 Members
                    </strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/10 border border-white/10">
                    <span className="text-slate-400 block font-mono text-[10px] uppercase">Job Location</span>
                    <strong className="text-white text-sm block mt-0.5">Nacharam, Hyderabad</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/10 border border-white/10">
                    <span className="text-slate-400 block font-mono text-[10px] uppercase">Experience</span>
                    <strong className="text-white text-sm block mt-0.5">0 – 3 Yrs (Freshers Welcome)</strong>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-cyan-200">
                  <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10">SEO & Traffic Growth</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10">Instagram Reels & Posts</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10">Facebook & LinkedIn Leads</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10">Performance Marketing</span>
                </div>
              </div>

              {/* Right Column: Fast Application CTA Card */}
              <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-7 text-slate-800 shadow-xl border border-slate-100 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center justify-between">
                    <span>Recruitment Desk</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">Active</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    Apply Immediately
                  </h3>
                  <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                    Connect directly with our recruitment team via WhatsApp or Email your resume for an interview slot.
                  </p>
                </div>

                <div className="space-y-2.5 pt-1">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                      "Hello Zippy Enterprises, I am applying for the Digital Marketing Executive opening (4 positions) at your Nacharam, Hyderabad office. Please review my profile."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Apply via WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href={`mailto:${COMPANY_INFO.officialEmail}?subject=${encodeURIComponent(
                      "Job Application: Digital Marketing Executive (4 Openings) - Zippy Enterprises"
                    )}`}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 font-bold text-xs transition-colors cursor-pointer"
                  >
                    <Mail className="w-4 h-4 text-blue-700" />
                    <span>Email Resume Directly</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-hiring-modal'))}
                    className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    View Complete Job Specifications →
                  </button>
                </div>

                <div className="text-center pt-1 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
                  <Phone className="w-3 h-3 text-blue-600" />
                  <span>HR Line: </span>
                  <a href={`tel:${COMPANY_INFO.officialPhone}`} className="text-blue-700 font-bold hover:underline">
                    {COMPANY_INFO.displayPhone}
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. OUR DEVELOPMENT PROCESS
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Development Process"
            title="A Structured 7-Stage Journey"
            highlightedText="From Concept to Scale"
            description="Our disciplined development lifecycle ensures total transparency, predictable delivery milestones, and flawless software execution."
          />

          {/* Stepper Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.slice(0, 4).map((step) => (
              <div 
                key={step.step}
                className="relative p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-blue-500/40 font-mono">
                    0{step.step}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                    {step.timeline}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            {PROCESS_STEPS.slice(4, 7).map((step) => (
              <div 
                key={step.step}
                className="relative p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-blue-500/40 font-mono">
                    0{step.step}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-sky-50 text-sky-700 border border-sky-200">
                    {step.timeline}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/process"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-blue-700 font-bold text-sm transition-colors shadow-xs"
            >
              <span>Explore the Complete 7-Stage Development Process</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. INDUSTRIES WE SERVE
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Industry Expertise"
            title="Software Solutions Tailored to"
            highlightedText="Your Industry Dynamics"
            description="Every sector carries unique operational compliance, logistics pipelines, and customer journeys. We tailor systems specifically for your market."
          />

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {INDUSTRIES_DATA.map((ind) => (
              <div 
                key={ind.id}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-md group flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 rounded-xl bg-white w-fit border border-slate-200 shadow-xs mb-3 group-hover:scale-105 transition-transform">
                    {getIndustryIcon(ind.icon)}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight leading-snug">
                    {ind.name}
                  </h3>
                  <p className="mt-2 text-slate-500 text-xs line-clamp-2">
                    {ind.summary}
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-200 text-[10px] text-blue-700 font-semibold">
                  {ind.badge}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-blue-50/70 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-slate-900 font-bold text-base">
                Don't see your specific industry vertical listed?
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                Our custom software architecture is domain-agnostic. We build bespoke software for specialized niche operations.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs whitespace-nowrap shadow-sm"
            >
              Consult an Architect
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. FEATURED PORTFOLIO PREVIEWS
          ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Proven Solutions"
            title="Featured Projects &"
            highlightedText="Enterprise Case Studies"
            description="Explore our completed client platforms and interactive demo prototypes spanning field management, pharmacy retail, banking, and autonomous AI."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_PROJECTS.slice(0, 3).map((project) => (
              <div 
                key={project.id}
                className="rounded-3xl bg-white border border-slate-200 hover:border-blue-400 p-6 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${project.badgeColor || 'badge-cyan'}`}>
                      {project.projectType}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 space-y-1.5">
                    {project.deliverables.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1.5 focus:outline-none"
                  >
                    <span>View Architecture Details</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {project.industry}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 hover:-translate-y-0.5 transition-all"
            >
              <span>Explore All Completed & Demo Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          8. LOCAL IT SERVICE AREAS HUB (NACHARAM, HYDERABAD 500076 & SURROUNDING)
          ========================================================================= */}
      <LocalAreasHub />

      {/* =========================================================================
          9. CONTACT CALL-TO-ACTION (CTA)
          ========================================================================= */}
      <CTASection />

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
