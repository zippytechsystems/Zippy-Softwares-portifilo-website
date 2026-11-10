import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight
} from 'lucide-react';
import { MetaTags } from '../components/common/MetaTags';
import { COMPANY_INFO } from '../data/companyData';
import { saveEnquiry } from '../utils/storage';
import { generateWhatsAppUrl } from '../utils/whatsapp';
import type { EnquirySubmission } from '../types';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  // Form State initialized from searchParams
  const [formData, setFormData] = useState(() => {
    let initialService: EnquirySubmission['service'] = 'Web Development';
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      if (serviceParam.includes('Web')) initialService = 'Web Development';
      else if (serviceParam.includes('App') || serviceParam.includes('Mobile')) initialService = 'App Development';
      else if (serviceParam.includes('AI') || serviceParam.includes('Automation')) initialService = 'AI Agent & Automation';
    }

    let initialDesc = '';
    const projectRef = searchParams.get('projectRef');
    if (projectRef) {
      initialDesc = `I am interested in building a solution similar to "${projectRef}". `;
    }

    return {
      fullName: '',
      businessName: '',
      email: '',
      phone: '',
      service: initialService,
      budgetRange: 'Standard (₹50k - ₹2L / $1k - $3k)',
      timeline: '1 - 2 Months',
      projectDescription: initialDesc
    };
  });

  // Validation Errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<EnquirySubmission | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  // Validation function
  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full Name is required (minimum 2 characters)';
    }

    if (!formData.businessName.trim() || formData.businessName.trim().length < 2) {
      newErrors.businessName = 'Business or Organization name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid work email address';
    }

    const cleanPhone = formData.phone.replace(/[^0-9+]/g, '');
    if (!cleanPhone || cleanPhone.length < 8) {
      newErrors.phone = 'Valid phone number with country code is required (min 8 digits)';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a primary service division';
    }

    if (!formData.projectDescription.trim() || formData.projectDescription.trim().length < 15) {
      newErrors.projectDescription = 'Please describe your project requirements (minimum 15 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const confirmedSubmission = await saveEnquiry({
        fullName: formData.fullName.trim(),
        businessName: formData.businessName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        service: formData.service,
        budgetRange: formData.budgetRange,
        timeline: formData.timeline,
        projectDescription: formData.projectDescription.trim()
      });

      setSubmissionSuccess(confirmedSubmission);
    } catch (err) {
      console.error('Submission failed:', err);
      setServerError('An unexpected error occurred while transmitting your enquiry. Please contact us directly via WhatsApp or official phone.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappDirectUrl = generateWhatsAppUrl({
    fullName: formData.fullName,
    businessName: formData.businessName,
    service: formData.service,
    projectDescription: formData.projectDescription,
    referenceId: submissionSuccess?.referenceId
  });

  return (
    <div className="relative overflow-hidden py-12 md:py-16">
      <MetaTags
        title="Contact Us & Project Enquiry | Zippy Enterprises Private Limited"
        description="Schedule a software consultation with Zippy Enterprises Private Limited. Discuss web development, custom business apps, or AI automation with our senior engineering team."
        canonicalPath="/contact"
      />

      {/* Hero Section */}
      <section className="relative pb-12 md:pb-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold badge-cyan mb-6">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Consultation & Project Scoping</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Discuss Your Project with{' '}
            <span className="text-gradient-cyan block sm:inline">
              Our Senior Engineers
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Have an upcoming digital product, need to replace outdated manual processes, or require autonomous AI workflows? We evaluate requirements and return architectural blueprints within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Grid: Form & Corporate Details */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Form / Success Receipt (Spans 7) */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-[#0E1B38]/90 border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
                
                {/* Submitted Success Confirmation Screen */}
                {submissionSuccess ? (
                  <div className="space-y-6 py-4 animate-fadeIn">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="text-center">
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                        Enquiry Confirmed & Logged
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                        Thank You, {submissionSuccess.fullName}!
                      </h3>
                      <p className="mt-2 text-slate-300 text-sm max-w-md mx-auto">
                        Your project enquiry has been securely received by our engineering triage team. An architect will review your scope within 24 business hours.
                      </p>
                    </div>

                    {/* Official Receipt Card */}
                    <div className="p-5 rounded-2xl bg-[#070D1E] border border-cyan-500/30 space-y-3 text-xs sm:text-sm">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                        <span className="text-slate-400">Reference Tracking ID:</span>
                        <span className="font-mono font-bold text-cyan-400 text-base">
                          {submissionSuccess.referenceId}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Client Organization:</span>
                        <span className="font-semibold text-white">{submissionSuccess.businessName}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Selected Service:</span>
                        <span className="font-semibold text-white">{submissionSuccess.service}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Contact Email:</span>
                        <span className="font-semibold text-white">{submissionSuccess.email}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Received Timestamp:</span>
                        <span className="font-mono text-slate-300">
                          {new Date(submissionSuccess.submittedAt).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons for Next Steps */}
                    <div className="space-y-3 pt-2">
                      <a
                        href={whatsappDirectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Fast-Track on WhatsApp with Reference ID</span>
                      </a>

                      <button
                        onClick={() => {
                          setSubmissionSuccess(null);
                          setFormData({
                            fullName: '',
                            businessName: '',
                            email: '',
                            phone: '',
                            service: 'Web Development',
                            budgetRange: 'Standard (₹50k - ₹2L / $1k - $3k)',
                            timeline: '1 - 2 Months',
                            projectDescription: ''
                          });
                        }}
                        className="w-full py-3 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-semibold"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Project Enquiry Form */
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    
                    <div className="border-b border-slate-800 pb-4 mb-2">
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        Project Consultation Form
                      </h3>
                      <p className="text-slate-400 text-xs mt-1">
                        Please provide your project context. All information is guarded under mutual confidentiality.
                      </p>
                    </div>

                    {serverError && (
                      <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{serverError}</span>
                      </div>
                    )}

                    {/* Row 1: Name & Business Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                          Your Full Name <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Ramesh Kumar"
                          className={`w-full px-4 py-3 rounded-xl bg-[#070D1E] border text-slate-200 text-sm focus:outline-none transition-colors ${
                            errors.fullName ? 'border-rose-500 bg-rose-950/10' : 'border-slate-800 focus:border-cyan-400'
                          }`}
                        />
                        {errors.fullName && (
                          <p className="mt-1 text-[11px] text-rose-400">{errors.fullName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                          Company / Business Name <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          placeholder="e.g. Apex Agri Solutions"
                          className={`w-full px-4 py-3 rounded-xl bg-[#070D1E] border text-slate-200 text-sm focus:outline-none transition-colors ${
                            errors.businessName ? 'border-rose-500 bg-rose-950/10' : 'border-slate-800 focus:border-cyan-400'
                          }`}
                        />
                        {errors.businessName && (
                          <p className="mt-1 text-[11px] text-rose-400">{errors.businessName}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                          Work Email Address <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ramesh@company.com"
                          className={`w-full px-4 py-3 rounded-xl bg-[#070D1E] border text-slate-200 text-sm focus:outline-none transition-colors ${
                            errors.email ? 'border-rose-500 bg-rose-950/10' : 'border-slate-800 focus:border-cyan-400'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-[11px] text-rose-400">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                          Phone / WhatsApp Number <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98480 12345"
                          className={`w-full px-4 py-3 rounded-xl bg-[#070D1E] border text-slate-200 text-sm focus:outline-none transition-colors ${
                            errors.phone ? 'border-rose-500 bg-rose-950/10' : 'border-slate-800 focus:border-cyan-400'
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-[11px] text-rose-400">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    {/* Interested Service Dropdown */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Interested Service Division <span className="text-cyan-400">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value as any })}
                        className="w-full px-4 py-3 rounded-xl bg-[#070D1E] border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      >
                        <option value="Web Development">Web Development (Websites, E-commerce, SaaS Portals)</option>
                        <option value="App Development">App Development (Business Apps, ERP, Accounting, Mobile)</option>
                        <option value="AI Agent & Automation">AI Agent & Automation (Chatbots, Voice Bots, Workflows)</option>
                        <option value="Multiple Services">Multiple Services (Cross-Division Engineering)</option>
                        <option value="Other">Other Custom Software Requirements</option>
                      </select>
                    </div>

                    {/* Budget & Timeline Selectors */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                          Estimated Budget Range
                        </label>
                        <select
                          value={formData.budgetRange}
                          onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl bg-[#070D1E] border border-slate-800 text-slate-300 text-xs focus:outline-none focus:border-cyan-400"
                        >
                          <option value="Startup MVP (₹35k - ₹75k / $500 - $1k)">Startup MVP (₹35k - ₹75k)</option>
                          <option value="Standard (₹50k - ₹2L / $1k - $3k)">Growth / Standard (₹50k - ₹2L)</option>
                          <option value="Enterprise Suite (₹2L - ₹10L+ / $3k - $15k+)">Enterprise Suite (₹2L - ₹10L+)</option>
                          <option value="Flexible / To be scoped with Architect">Flexible / To be scoped with Architect</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                          Target Launch Timeline
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl bg-[#070D1E] border border-slate-800 text-slate-300 text-xs focus:outline-none focus:border-cyan-400"
                        >
                          <option value="Immediate (< 3 Weeks)">Immediate (&lt; 3 Weeks)</option>
                          <option value="1 - 2 Months">1 - 2 Months</option>
                          <option value="3 - 6 Months">3 - 6 Months</option>
                          <option value="Planning Phase">Planning Phase</option>
                        </select>
                      </div>
                    </div>

                    {/* Project Description */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Project Description & Scope <span className="text-cyan-400">*</span>
                      </label>
                      <textarea
                        rows={4}
                        value={formData.projectDescription}
                        onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                        placeholder="Please describe your requirements, key features, target users, or operational bottlenecks you want to resolve..."
                        className={`w-full px-4 py-3 rounded-xl bg-[#070D1E] border text-slate-200 text-sm focus:outline-none transition-colors ${
                          errors.projectDescription ? 'border-rose-500 bg-rose-950/10' : 'border-slate-800 focus:border-cyan-400'
                        }`}
                      />
                      {errors.projectDescription && (
                        <p className="mt-1 text-[11px] text-rose-400">{errors.projectDescription}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-base transition-all shadow-xl shadow-blue-600/30 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            <span>Verifying & Logging Enquiry...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Submit Project Enquiry</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Enterprise Non-Disclosure Protected &bull; Verified Database Persistence</span>
                    </div>

                  </form>
                )}

              </div>
            </div>

            {/* Right Column: Corporate Contacts & Direct Channels (Spans 5) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* WhatsApp Fast Track Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0F2826] to-[#0A1A18] border border-emerald-500/40 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  Fast-Track Communication
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Prefer Direct WhatsApp Chat?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Connect immediately with our technical project coordinators. Ideal for quick questions, scheduling calls, and sharing existing documents.
                </p>
                <div className="mt-5">
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
                  >
                    <span>Launch WhatsApp Chat</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Corporate Office Information */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0E1B38]/70 border border-slate-800 space-y-5">
                <h3 className="text-lg font-bold text-white tracking-tight border-b border-slate-800 pb-3">
                  Corporate Headquarters
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Registered Office:</strong>
                      <span className="text-slate-300 leading-relaxed">{COMPANY_INFO.address.fullAddress}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Official Inquiries:</strong>
                      <a href={`mailto:${COMPANY_INFO.officialEmail}`} className="text-cyan-400 hover:underline">
                        {COMPANY_INFO.officialEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Direct Phone Line:</strong>
                      <a href={`tel:${COMPANY_INFO.officialPhone}`} className="text-cyan-400 hover:underline">
                        {COMPANY_INFO.displayPhone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Office Working Hours:</strong>
                      <span className="text-slate-300">{COMPANY_INFO.workingHours}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-500">
                  Corporate Identification Number: <span className="font-mono text-slate-400">{COMPANY_INFO.cin}</span>
                </div>
              </div>

              {/* Consultation Guarantee */}
              <div className="p-5 rounded-2xl bg-[#0A1329] border border-blue-500/20 text-xs text-slate-300 space-y-2">
                <div className="font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  What Happens Next?
                </div>
                <p className="text-slate-400 leading-relaxed text-[11px]">
                  1. Our lead architect reviews your submission.<br />
                  2. We provide an initial technical feasibility overview.<br />
                  3. We schedule a 30-minute scoping call to map sprint milestones.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
