import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GitBranch, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  FileText, 
  ShieldCheck, 
  Compass, 
  Palette, 
  Code2, 
  Rocket, 
  Headphones, 
  MessagesSquare
} from 'lucide-react';
import { MetaTags } from '../components/common/MetaTags';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTASection } from '../components/common/CTASection';
import { PROCESS_STEPS } from '../data/processData';

export const ProcessPage: React.FC = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessagesSquare': return <MessagesSquare className="w-5 h-5 text-blue-400" />;
      case 'Compass': return <Compass className="w-5 h-5 text-cyan-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-purple-400" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-teal-400" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-amber-400" />;
      default: return <Headphones className="w-5 h-5 text-sky-400" />;
    }
  };

  const activeStep = PROCESS_STEPS[selectedStepIndex];

  return (
    <div className="relative overflow-hidden py-12 md:py-16">
      <MetaTags
        title="Our Development Process | 7-Stage Software Engineering Lifecycle"
        description="Discover the structured 7-stage development methodology of Zippy Enterprises Private Limited: from requirement scoping and UI/UX design to agile coding, QA, and 24/7 maintenance."
        canonicalPath="/process"
      />

      {/* Hero Section */}
      <section className="relative pb-16 md:pb-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold badge-cyan mb-6">
            <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
            <span>Disciplined Agile Execution</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Our 7-Stage Development Process:{' '}
            <span className="text-gradient-cyan block sm:inline">
              Predictable, Proven & Scalable
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Great software is not built by chance. It is engineered through rigorous requirements discovery, precise architectural blueprinting, agile sprint execution, and exhaustive quality validation.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              Two-Week Agile Sprint Cycles
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Bi-Weekly Working Staging Demos
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              Zero Surprise Overages
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Process Stepper / Master Navigator */}
      <section className="py-16 md:py-20 bg-[#070D1E] border-y border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Interactive Phase Navigator"
            title="Explore Each Stage of Your"
            highlightedText="Project Roadmap"
            description="Select any stage below to inspect the day-to-day engineering activities, client deliverables, and tools utilized."
          />

          {/* Stepper Navigation Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-12">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = selectedStepIndex === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setSelectedStepIndex(idx)}
                  className={`p-3.5 rounded-2xl border text-center transition-all duration-200 flex flex-col items-center justify-between gap-2 ${
                    isSelected 
                      ? 'bg-[#0E1B38] border-cyan-400 shadow-lg shadow-cyan-950/40 text-white' 
                      : 'bg-[#0A1329]/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-[#0E1B38]/50'
                  }`}
                >
                  <div className="text-[11px] font-mono font-bold text-slate-500">
                    STAGE 0{step.step}
                  </div>
                  <div className={`p-2 rounded-xl ${isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'}`}>
                    {getStepIcon(step.icon)}
                  </div>
                  <div className="text-xs font-bold leading-tight line-clamp-2">
                    {step.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep Dive Card */}
          <div className="rounded-3xl bg-[#0E1B38]/90 border border-slate-800 p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    STAGE 0{activeStep.step} OF 07
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    Timeline: {activeStep.timeline}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {activeStep.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-cyan-300">
                    {activeStep.tagline}
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activeStep.description}
                </p>

                {/* Core Activities */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    What Happens During This Stage:
                  </h4>
                  <div className="space-y-2.5">
                    {activeStep.activities.map((act, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Deliverables & Tooling */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Concrete Deliverables */}
                <div className="p-6 rounded-2xl bg-[#070D1E]/90 border border-cyan-500/30">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                    <FileText className="w-4 h-4 text-cyan-400" />
                    Tangible Client Deliverables
                  </div>
                  <div className="space-y-2">
                    {activeStep.deliverables.map((deliv, i) => (
                      <div key={i} className="text-xs sm:text-sm text-slate-200 border-l-2 border-cyan-500 pl-3 leading-relaxed">
                        {deliv}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools Used */}
                <div className="p-6 rounded-2xl bg-[#070D1E]/90 border border-slate-800">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Engineering & Collaboration Stack:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeStep.toolsUsed.map((tool, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#0E1B38] text-slate-300 border border-slate-700">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Action */}
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-colors"
                  >
                    <span>Schedule Step 1: Requirement Discussion</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Comprehensive 7-Step Vertical Roadmap Breakdown */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Full Lifecycle Walkthrough"
            title="Complete Step-by-Step Overview"
            description="From the first discovery conversation to long-term cloud maintenance, here is our full 7-stage roadmap."
          />

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-cyan-400 before:to-emerald-500">
            {PROCESS_STEPS.map((step) => (
              <div 
                key={step.step}
                className="relative flex items-start gap-6 group"
              >
                {/* Step Circle Node */}
                <div className="w-16 h-16 rounded-2xl bg-[#0E1B38] border-2 border-cyan-400 flex items-center justify-center text-white font-extrabold text-xl font-mono shadow-lg shadow-cyan-950/50 flex-shrink-0 z-10 group-hover:scale-105 transition-transform">
                  0{step.step}
                </div>

                {/* Step Detail Card */}
                <div className="flex-grow p-6 sm:p-8 rounded-3xl bg-[#0E1B38]/60 border border-slate-800 hover:border-cyan-500/40 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {step.title}
                    </h3>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      Typical: {step.timeline}
                    </span>
                  </div>

                  <p className="text-cyan-400 text-xs sm:text-sm font-medium mb-3">
                    {step.tagline}
                  </p>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-slate-800/80">
                    {step.deliverables.slice(0, 2).map((deliv, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Begin Step 1 with Our Architects?"
        subtitle="Schedule your initial requirement discovery session. We will clarify your project scope and calculate accurate timeline estimates."
      />
    </div>
  );
};
