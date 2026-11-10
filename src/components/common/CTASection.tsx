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
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-transparent blur-3xl pointer-events-none rounded-full" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-[#0E1B38] to-[#070D1E] border border-cyan-500/30 p-8 sm:p-12 lg:p-16 text-center shadow-2xl shadow-cyan-950/30">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold badge-cyan mb-6 mx-auto">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Fast-Track Your Technology Roadmap</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-base transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#0F2826] hover:bg-[#133734] border border-emerald-500/40 text-emerald-400 font-semibold text-base transition-all duration-300 shadow-md hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Enterprise Commitments Banner */}
          <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-slate-400 text-xs sm:text-sm">
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>Strict Non-Disclosure (NDA) Protected</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>Guaranteed 24-Hour Scoping Turnaround</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>Transparent Agile Sprint Pricing</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
