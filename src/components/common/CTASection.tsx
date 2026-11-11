import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight, Shield, Zap, Clock } from 'lucide-react';
import { generateWhatsAppUrl } from '../../utils/whatsapp';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Have a Business Idea? Let's Build It Together.",
  subtitle = "Whether you are a startup building your MVP, a growing business automating field operations, or an enterprise scaling digital infrastructure, our engineering team is ready.",
  className = ""
}) => {
  const whatsappUrl = generateWhatsAppUrl({
    projectDescription: "Hello Zippy Enterprises team, I want to discuss a new software project requirement."
  });

  return (
    <section className={`relative overflow-hidden py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-[#102747] via-[#0D213F] to-[#17365F] border border-blue-900/60 p-8 sm:p-12 lg:p-16 text-center shadow-xl">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-900/60 text-blue-200 border border-blue-400/30 mb-6 mx-auto">
            <Zap className="w-3.5 h-3.5 text-blue-300" />
            <span>Fast-Track Your Technology Roadmap</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base transition-all duration-200 shadow-lg shadow-blue-900/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base transition-all duration-200 shadow-md hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Enterprise Commitments Banner */}
          <div className="mt-12 pt-8 border-t border-blue-800/60 grid grid-cols-1 sm:grid-cols-3 gap-6 text-slate-200 text-xs sm:text-sm">
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-blue-300 flex-shrink-0" />
              <span>Strict Non-Disclosure (NDA) Protected</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-blue-300 flex-shrink-0" />
              <span>Guaranteed 24-Hour Scoping Turnaround</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 text-blue-300 flex-shrink-0" />
              <span>Transparent Agile Sprint Pricing</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
