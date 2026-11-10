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
  Briefcase
} from 'lucide-react';
import { MetaTags } from '../components/common/MetaTags';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTASection } from '../components/common/CTASection';
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
      case 'Sprout': return <Sprout className="w-5 h-5 text-emerald-400" />;
      case 'Factory': return <Factory className="w-5 h-5 text-blue-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-cyan-400" />;
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-rose-400" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-amber-400" />;
      case 'Building': return <Building className="w-5 h-5 text-indigo-400" />;
      case 'Landmark': return <Landmark className="w-5 h-5 text-teal-400" />;
      case 'Truck': return <Truck className="w-5 h-5 text-sky-400" />;
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-5 h-5 text-orange-400" />;
      default: return <Briefcase className="w-5 h-5 text-purple-400" />;
    }
  };

  const getWhyIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-cyan-400" />;
      case 'Code': return <Code className="w-6 h-6 text-blue-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-emerald-400" />;
      case 'Layout': return <Layout className="w-6 h-6 text-purple-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-amber-400" />;
      default: return <ShieldCheck className="w-6 h-6 text-rose-400" />;
    }
  };

  const whatsappHeroUrl = generateWhatsAppUrl({
    projectDescription: "Hello Zippy Enterprises, I would like to explore custom software development for my business."
  });

  return (
    <div className="relative overflow-hidden">
      <MetaTags
        title="Building Digital Solutions. Empowering Businesses."
        description="Zippy Enterprises Private Limited is an enterprise-grade IT services and software development company specializing in Web Development, Business Apps, and AI Automation."
        canonicalPath="/"
      />

      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
        {/* Modern Cybernetic Mesh Background Gradients */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-blue-600/20 via-cyan-500/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-blue-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-cyan-400/10 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Top Corporate Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold badge-cyan mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>Enterprise IT Services & Custom Software Engineering</span>
          </div>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12] max-w-5xl mx-auto">
            Building Digital Solutions.{' '}
            <span className="text-gradient-cyan block sm:inline">
              Empowering Businesses.
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            {COMPANY_INFO.subheading}
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-base transition-all duration-300 shadow-xl shadow-blue-600/30 hover:shadow-cyan-500/30 hover:-translate-y-0.5"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#0E1B38] hover:bg-[#132247] border border-cyan-500/30 hover:border-cyan-400 text-slate-100 font-semibold text-base transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              <span>Discuss Your Project</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </Link>
          </div>

          {/* Quick Consultation Channel */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
            <span>Prefer instant WhatsApp?</span>
            <a 
              href={whatsappHeroUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 underline"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Connect directly on WhatsApp</span>
            </a>
          </div>

          {/* Live Metric Strip */}
          <div className="mt-16 pt-12 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#0A1329]/70 border border-slate-800/80 backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
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
      <section className="py-16 md:py-24 bg-[#070D1E] border-y border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold badge-cyan">
                <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>About Zippy Enterprises Private Limited</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Architecting Enterprise-Grade Technology for High-Growth Businesses
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                <strong className="text-white">Zippy Enterprises Private Limited</strong> is a full-service technology solutions company focused on building modern digital products, robust corporate portals, and intelligent automation systems.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We believe that software should never be a cost center—it must be an engine that drives commercial velocity, optimizes profit margins, and scales operational capacity. Whether assisting a regional agro-processing business, a retail chemist network, or an enterprise loan verification desk, we combine engineering rigor with business practicality.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0E1B38]/60 border border-slate-800">
                  <Lock className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Full Intellectual Property Ownership</h4>
                    <p className="text-xs text-slate-400 mt-0.5">You own 100% of your source code, databases, and digital assets.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0E1B38]/60 border border-slate-800">
                  <Users2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Dedicated In-House Engineers</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Zero anonymous outsourcing. Direct access to your project lead.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 group"
                >
                  <span>Learn more about our company background and engineering ethos</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Architectural Graphic Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-gradient-to-br from-[#0E1B38] to-[#0A1128] border border-cyan-500/20 p-8 shadow-2xl overflow-hidden">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl" />
                
                <div className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">
                  Corporate Architecture Matrix
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#070D1E]/90 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400 font-mono">01. WEB APPS & PORTALS</div>
                      <div className="text-sm font-bold text-white mt-0.5">High-Speed Frontends & APIs</div>
                    </div>
                    <span className="text-xs px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/30">React / Next.js</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#070D1E]/90 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400 font-mono">02. BUSINESS SOFTWARE</div>
                      <div className="text-sm font-bold text-white mt-0.5">Operational CRMs & ERP Suites</div>
                    </div>
                    <span className="text-xs px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">Flutter / SQL</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#070D1E]/90 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400 font-mono">03. COGNITIVE AGENTS</div>
                      <div className="text-sm font-bold text-white mt-0.5">LLM Chatbots & Voice Bots</div>
                    </div>
                    <span className="text-xs px-2 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">RAG / Telephony</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                  <span>ISO-aligned QA workflows</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-semibold">
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
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Three Core Divisions"
            title="Specialized Software Engineering for"
            highlightedText="Every Layer of Your Business"
            description="Our company operates through three specialized divisions, each staffed with dedicated domain architects and software engineers."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Division 1: Web Development */}
            <div className="group rounded-3xl bg-[#0E1B38]/80 border border-slate-800 hover:border-blue-500/50 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/10 hover:-translate-y-1">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-105 transition-transform">
                  <Globe className="w-7 h-7" />
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
                  Division 01
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Web Development
                </h3>

                <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                  High-speed, SEO-engineered corporate websites, conversion-driven e-commerce platforms, SaaS web applications, and enterprise intranets.
                </p>

                {/* Subcategories */}
                <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Core Solutions:
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                    <span>Business Websites</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                    <span>E-commerce Platforms</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                    <span>Custom Web Applications</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                    <span>Enterprise Portals</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <Link
                  to="/services/web-development"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600/20 hover:bg-blue-600 border border-blue-500/40 text-blue-300 hover:text-white font-bold text-sm transition-all duration-200"
                >
                  <span>Explore Web Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Division 2: App Development */}
            <div className="group rounded-3xl bg-[#0E1B38]/80 border border-slate-800 hover:border-emerald-500/50 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-600/10 hover:-translate-y-1">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-105 transition-transform">
                  <Smartphone className="w-7 h-7" />
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                  Division 02
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  App Development
                </h3>

                <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                  Tailored business operations software, accounting and invoicing engines, CRM & ERP suites, and cross-platform iOS/Android mobile apps.
                </p>

                {/* Subcategories */}
                <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Core Solutions:
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Business Management Apps</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Accounting Applications</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>CRM & ERP Applications</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Custom Mobile Applications</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <Link
                  to="/services/app-development"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 border border-emerald-500/40 text-emerald-300 hover:text-white font-bold text-sm transition-all duration-200"
                >
                  <span>Explore App Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Division 3: AI Agent & Automation */}
            <div className="group rounded-3xl bg-[#0E1B38]/80 border border-slate-800 hover:border-cyan-500/50 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-600/10 hover:-translate-y-1">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-105 transition-transform">
                  <Bot className="w-7 h-7" />
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
                  Division 03
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  AI Agent & Automation
                </h3>

                <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                  Autonomous LLM chatbots with strict guardrails, conversational AI voice telephony, document OCR pipelines, and multi-system automation.
                </p>

                {/* Subcategories */}
                <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Core Solutions:
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span>AI Chatbots</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span>AI Voice Agents</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span>Business Workflow Automation</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span>Customer Support Automation</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <Link
                  to="/services/ai-automation"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-600/20 hover:bg-cyan-600 border border-cyan-500/40 text-cyan-300 hover:text-white font-bold text-sm transition-all duration-200"
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
      <section className="py-20 md:py-28 bg-[#070D1E] border-y border-slate-850">
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
                className="p-7 rounded-2xl bg-[#0E1B38]/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-200 hover:bg-[#0E1B38] group"
              >
                <div className="p-3 rounded-xl bg-[#070D1E] w-fit border border-slate-700/60 mb-5 group-hover:scale-110 transition-transform">
                  {getWhyIcon(item.icon)}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. OUR DEVELOPMENT PROCESS
          ========================================================================= */}
      <section className="py-20 md:py-28 relative">
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
                className="relative p-6 rounded-2xl bg-[#0E1B38]/60 border border-slate-800 hover:border-blue-500/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-blue-500/40 font-mono">
                    0{step.step}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    {step.timeline}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            {PROCESS_STEPS.slice(4, 7).map((step) => (
              <div 
                key={step.step}
                className="relative p-6 rounded-2xl bg-[#0E1B38]/60 border border-slate-800 hover:border-cyan-500/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-cyan-500/40 font-mono">
                    0{step.step}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {step.timeline}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/process"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0E1B38] hover:bg-[#132247] border border-cyan-500/30 text-cyan-400 font-bold text-sm hover:text-cyan-300 transition-colors shadow-md"
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
      <section className="py-20 md:py-28 bg-[#070D1E] border-y border-slate-850">
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
                className="p-5 rounded-2xl bg-[#0A1329]/80 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-200 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 rounded-xl bg-[#070D1E] w-fit border border-slate-700/60 mb-3 group-hover:scale-105 transition-transform">
                    {getIndustryIcon(ind.icon)}
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight leading-snug">
                    {ind.name}
                  </h3>
                  <p className="mt-2 text-slate-400 text-xs line-clamp-2">
                    {ind.summary}
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-800/80 text-[10px] text-cyan-400 font-semibold">
                  {ind.badge}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-[#0E1B38] to-cyan-950/40 border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-white font-bold text-base">
                Don't see your specific industry vertical listed?
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                Our custom software architecture is domain-agnostic. We build bespoke software for specialized niche operations.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs whitespace-nowrap shadow-md"
            >
              Consult an Architect
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. FEATURED PORTFOLIO PREVIEWS
          ========================================================================= */}
      <section className="py-20 md:py-28 relative">
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
                className="rounded-3xl bg-[#0E1B38]/70 border border-slate-800 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/30 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${project.badgeColor || 'badge-cyan'}`}>
                      {project.projectType}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 space-y-1.5">
                    {project.deliverables.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-[#070D1E] text-slate-300 border border-slate-800 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 focus:outline-none"
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
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 transition-all"
            >
              <span>Explore All Completed & Demo Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          8. CONTACT CALL-TO-ACTION (CTA)
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
