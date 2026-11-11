import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  CheckCircle2, 
  Lock, 
  ArrowRight,
  MapPin,
  Navigation,
  Phone,
  Mail,
  ExternalLink,
  Clock,
  MessageSquare
} from 'lucide-react';
import { MetaTags } from '../components/common/MetaTags';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTASection } from '../components/common/CTASection';
import { COMPANY_INFO } from '../data/companyData';

export const AboutPage: React.FC = () => {
  return (
    <div className="relative overflow-hidden py-12 md:py-16 bg-[#F8FAFC]">
      <MetaTags
        title="About Us | Zippy Softwares & Zippy Enterprises Private Limited"
        description="Learn about Zippy Softwares (A Division of Zippy Enterprises Private Limited), our engineering ethos, technology stack standards, corporate governance, and commitment to custom software excellence."
        canonicalPath="/about"
      />

      {/* Hero Header */}
      <section className="relative pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Official Emblem */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-2 border-slate-200 bg-black hover:scale-105 transition-transform duration-300">
            <img 
              src="/zippy-logo.jpg" 
              alt="Zippy Tech Softwares Emblem" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold badge-cyan mb-6">
            <Building2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Corporate Identity & Heritage</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Engineered for Precision.{' '}
            <span className="text-gradient-cyan block sm:inline">
              Built for Scale.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-slate-900 font-bold">Zippy Softwares</strong> is the premier IT services and custom software engineering division of <strong className="text-slate-900 font-bold">{COMPANY_INFO.legalName}</strong>, headquartered in Nacharam, Hyderabad, Telangana. We partner with startups, SMBs, and enterprises to build high-performance web platforms, bespoke mobile apps, and autonomous AI automation systems.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-600">
            <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              CIN: {COMPANY_INFO.cin}
            </span>
            <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <MapPin className="w-4 h-4 text-rose-600" />
              Nacharam, Hyderabad, Telangana
            </span>
            <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <Lock className="w-4 h-4 text-emerald-600" />
              Strict Enterprise NDA Protected
            </span>
            <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <Award className="w-4 h-4 text-amber-600" />
              100% Client Code & IP Ownership
            </span>
          </div>
        </div>
      </section>

      {/* Corporate Vision & Mission */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Mission */}
            <div className="p-8 rounded-3xl bg-blue-50/50 border border-blue-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-blue-200 flex items-center justify-center text-blue-600 mb-6 shadow-xs">
                  <Target className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
                  Our Mission
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Democratizing Enterprise-Grade Software Engineering
                </h2>
                <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  To empower ambitious businesses of all sizes with software solutions that match the engineering standards of global tech giants. We bridge the gap between commercial strategy and technical execution, eliminating technical debt and delivering high-ROI digital assets.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-blue-200/60 text-xs text-slate-500">
                Focus: Business outcome acceleration &bull; Robust scalability &bull; Zero bloatware
              </div>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-3xl bg-sky-50/50 border border-sky-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-sky-200 flex items-center justify-center text-sky-600 mb-6 shadow-xs">
                  <Eye className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-sky-700 mb-2">
                  Our Vision
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  To Be the Most Trusted Technology Partner for Growing Enterprises
                </h2>
                <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  We envision a landscape where every regional, mid-sized, and multinational enterprise can seamlessly deploy cloud-native software and autonomous AI agents without excessive overhead, convoluted vendor dependencies, or unreliable offshore teams.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-sky-200/60 text-xs text-slate-500">
                Aspiration: Integrity-first &bull; Technical transparency &bull; Enduring client relationships
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Corporate Ethics"
            title="The Four Core Values That"
            highlightedText="Govern Our Engineering"
            description="Our organizational culture is anchored in technical honesty, rigorous documentation, and relentless accountability."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-md transition-all">
              <div className="text-blue-600 font-mono text-2xl font-black mb-3">01</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Absolute Code Ownership</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We write clean, well-commented code that belongs 100% to you. We never lock clients into proprietary hosting or closed runtimes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-md transition-all">
              <div className="text-sky-600 font-mono text-2xl font-black mb-3">02</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Commercial Pragmatism</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We prioritize features that move your commercial needles: customer conversion, operational efficiency, and lower maintenance costs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-md transition-all">
              <div className="text-emerald-600 font-mono text-2xl font-black mb-3">03</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Radical Transparency</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bi-weekly live sprint demos, version-controlled git repositories, and open Jira/Linear boards. You always see actual progress.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-md transition-all">
              <div className="text-purple-600 font-mono text-2xl font-black mb-3">04</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Zero Compromise Security</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                From encrypted databases to strict authorization tokens, we engineer security into the architecture rather than patching it after launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 md:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Flexible Collaboration"
            title="Commercial Engagement Models"
            description="Choose the working model that fits your operational rhythm and financial predictability."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold badge-blue">
                  Model A
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-4">Fixed-Scope Milestones</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  Ideal for well-defined corporate websites, specific mobile applications, and MVP builds with defined scopes and fixed timelines.
                </p>
                <ul className="mt-6 space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    Fixed deliverables & clear milestone dates
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    Predictable pricing with zero unexpected overages
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    Includes QA and post-launch warranty
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200">
                <Link to="/contact" className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1">
                  <span>Inquire for Fixed Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border-2 border-blue-600 shadow-xl flex flex-col justify-between relative">
              <div className="absolute top-4 right-4 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200">
                Most Popular
              </div>
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold badge-cyan">
                  Model B
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-4">Dedicated Agile Engineering Pod</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  A full-stack squad of architects, front-end developers, back-end engineers, and QA assigned full-time to your roadmap.
                </p>
                <ul className="mt-6 space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    Flexible backlog prioritization on demand
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    Direct participation in daily standups and sprint planning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    Rapid velocity for fast-moving startups and SaaS
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link to="/contact" className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1">
                  <span>Inquire for Dedicated Pod</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold badge-blue">
                  Model C
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-4">Enterprise AMC & DevOps SLA</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  24/7 ongoing system maintenance, security patching, cloud optimization, and emergency SLA response for mission-critical apps.
                </p>
                <ul className="mt-6 space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    Uptime monitoring with sub-1-hour critical response
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    Continuous security patches & OS updates
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    Monthly cloud cost optimization & performance tuning
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200">
                <Link to="/contact" className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1">
                  <span>Inquire for AMC & SLA</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Headquarters & Office Location Section */}
      <section className="py-20 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Corporate Headquarters"
            title="Our Hyderabad Development Hub"
            highlightedText="& Registered Office"
            description="Visit our engineering center or connect directly with our technical leads in Hyderabad, Telangana."
          />

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-[#102747] to-blue-950 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  <Navigation className="w-4 h-4" />
                  <span>Office Location & Route Directions</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Zippy Softwares — Nacharam, Hyderabad Hub
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium">
                  {COMPANY_INFO.address.fullAddress}
                </p>
                
                <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-slate-300">
                  <span className="bg-white/10 px-2.5 py-1 rounded-md border border-white/10">Near Habsiguda (5 Mins)</span>
                  <span className="bg-white/10 px-2.5 py-1 rounded-md border border-white/10">Near Uppal (10 Mins)</span>
                  <span className="bg-white/10 px-2.5 py-1 rounded-md border border-white/10">Near Secunderabad (15 Mins)</span>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-200">
                  <a href={`tel:${COMPANY_INFO.officialPhone}`} className="hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{COMPANY_INFO.displayPhone}</span>
                  </a>
                  <a href={`mailto:${COMPANY_INFO.officialEmail}`} className="hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{COMPANY_INFO.officialEmail}</span>
                  </a>
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{COMPANY_INFO.workingHours}</span>
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full lg:w-auto">
                <a
                  href={COMPANY_INFO.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Embedded Interactive Google Map */}
            <div className="w-full h-80 sm:h-96 md:h-[420px] bg-slate-100">
              <iframe
                title="Zippy Softwares Office Location Map"
                src={COMPANY_INFO.address.embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Summary & CTA */}
      <CTASection
        title="Ready to Scale Your Technology with Zippy Softwares?"
        subtitle="Schedule a 30-minute architectural consultation with our senior engineering team. No sales pressure—just technical clarity."
      />
    </div>
  );
};
