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
  ArrowRight,
  Navigation,
  ExternalLink,
  Briefcase
} from 'lucide-react';
import { MetaTags } from '../components/common/MetaTags';
import { InstagramIcon, FacebookIcon, LinkedinIcon } from '../components/common/SocialIcons';
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
    <div className="relative overflow-hidden py-12 md:py-16 bg-[#F8FAFC]">
      <MetaTags
        title="Contact Us & Project Enquiry | Zippy Enterprises Private Limited"
        description="Schedule a software consultation with Zippy Enterprises Private Limited. Discuss web development, custom business apps, or AI automation with our senior engineering team."
        canonicalPath="/contact"
      />

      {/* Hero Section */}
      <section className="relative pb-12 md:pb-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold badge-cyan mb-6">
            <Mail className="w-3.5 h-3.5 text-blue-600" />
            <span>Consultation & Project Scoping</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Discuss Your Project with{' '}
            <span className="text-gradient-cyan block sm:inline">
              Our Senior Engineers
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
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
              <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-lg relative overflow-hidden">
                
                {/* Submitted Success Confirmation Screen */}
                {submissionSuccess ? (
                  <div className="space-y-6 py-4 animate-fadeIn">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="text-center">
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                        Enquiry Confirmed & Logged
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                        Thank You, {submissionSuccess.fullName}!
                      </h3>
                      <p className="mt-2 text-slate-600 text-sm max-w-md mx-auto">
                        Your project enquiry has been securely received by our engineering triage team. An architect will review your scope within 24 business hours.
                      </p>
                    </div>

                    {/* Official Receipt Card */}
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs sm:text-sm">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                        <span className="text-slate-500">Reference Tracking ID:</span>
                        <span className="font-mono font-bold text-blue-700 text-base">
                          {submissionSuccess.referenceId}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Client Organization:</span>
                        <span className="font-semibold text-slate-900">{submissionSuccess.businessName}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Selected Service:</span>
                        <span className="font-semibold text-slate-900">{submissionSuccess.service}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Contact Email:</span>
                        <span className="font-semibold text-slate-900">{submissionSuccess.email}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Received Timestamp:</span>
                        <span className="font-mono text-slate-700">
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
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors"
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
                        className="w-full py-3 rounded-xl border border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-100 text-xs font-semibold"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Project Enquiry Form */
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    
                    <div className="border-b border-slate-200 pb-4 mb-2">
                      <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                        Project Consultation Form
                      </h3>
                      <p className="text-slate-500 text-xs mt-1">
                        Please provide your project context. All information is guarded under mutual confidentiality.
                      </p>
                    </div>

                    {serverError && (
                      <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{serverError}</span>
                      </div>
                    )}

                    {/* Row 1: Name & Business Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Your Full Name <span className="text-blue-600">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Ramesh Kumar"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-900 text-sm focus:outline-none focus:bg-white transition-colors ${
                            errors.fullName ? 'border-rose-500 bg-rose-50' : 'border-slate-200 focus:border-blue-500'
                          }`}
                        />
                        {errors.fullName && (
                          <p className="mt-1 text-[11px] text-rose-600">{errors.fullName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Company / Business Name <span className="text-blue-600">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          placeholder="e.g. Apex Agri Solutions"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-900 text-sm focus:outline-none focus:bg-white transition-colors ${
                            errors.businessName ? 'border-rose-500 bg-rose-50' : 'border-slate-200 focus:border-blue-500'
                          }`}
                        />
                        {errors.businessName && (
                          <p className="mt-1 text-[11px] text-rose-600">{errors.businessName}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Work Email Address <span className="text-blue-600">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ramesh@company.com"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-900 text-sm focus:outline-none focus:bg-white transition-colors ${
                            errors.email ? 'border-rose-500 bg-rose-50' : 'border-slate-200 focus:border-blue-500'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-[11px] text-rose-600">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Phone / WhatsApp Number <span className="text-blue-600">*</span>
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 63026 90251"
                          className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-900 text-sm focus:outline-none focus:bg-white transition-colors ${
                            errors.phone ? 'border-rose-500 bg-rose-50' : 'border-slate-200 focus:border-blue-500'
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-[11px] text-rose-600">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    {/* Interested Service Dropdown */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Interested Service Division <span className="text-blue-600">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value as any })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-blue-500 transition-colors"
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
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Estimated Budget Range
                        </label>
                        <select
                          value={formData.budgetRange}
                          onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-xs focus:outline-none focus:bg-white focus:border-blue-500"
                        >
                          <option value="Startup MVP (₹35k - ₹75k / $500 - $1k)">Startup MVP (₹35k - ₹75k)</option>
                          <option value="Standard (₹50k - ₹2L / $1k - $3k)">Growth / Standard (₹50k - ₹2L)</option>
                          <option value="Enterprise Suite (₹2L - ₹10L+ / $3k - $15k+)">Enterprise Suite (₹2L - ₹10L+)</option>
                          <option value="Flexible / To be scoped with Architect">Flexible / To be scoped with Architect</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Target Launch Timeline
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-xs focus:outline-none focus:bg-white focus:border-blue-500"
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
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Project Description & Scope <span className="text-blue-600">*</span>
                      </label>
                      <textarea
                        rows={4}
                        value={formData.projectDescription}
                        onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                        placeholder="Please describe your requirements, key features, target users, or operational bottlenecks you want to resolve..."
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-slate-900 text-sm focus:outline-none focus:bg-white transition-colors ${
                          errors.projectDescription ? 'border-rose-500 bg-rose-50' : 'border-slate-200 focus:border-blue-500'
                        }`}
                      />
                      {errors.projectDescription && (
                        <p className="mt-1 text-[11px] text-rose-600">{errors.projectDescription}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base transition-all shadow-md shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
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
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                      <span>Enterprise Non-Disclosure Protected &bull; Verified Database Persistence</span>
                    </div>

                  </form>
                )}

              </div>
            </div>

            {/* Right Column: Corporate Contacts & Direct Channels (Spans 5) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* WhatsApp Fast Track Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50 border border-emerald-200 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  Fast-Track Communication
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Prefer Direct WhatsApp Chat?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Connect immediately with our technical project coordinators. Ideal for quick questions, scheduling calls, and sharing existing documents.
                </p>
                <div className="mt-5">
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors"
                  >
                    <span>Launch WhatsApp Chat</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Corporate Office Information */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight border-b border-slate-100 pb-3">
                  Corporate Headquarters
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Registered Office:</strong>
                      <a 
                        href={COMPANY_INFO.address.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-blue-700 leading-relaxed block"
                      >
                        {COMPANY_INFO.address.fullAddress}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Official Inquiries:</strong>
                      <a href={`mailto:${COMPANY_INFO.officialEmail}`} className="text-blue-700 hover:underline font-medium">
                        {COMPANY_INFO.officialEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Direct Phone Line:</strong>
                      <a href={`tel:${COMPANY_INFO.officialPhone}`} className="text-blue-700 hover:underline font-medium">
                        {COMPANY_INFO.displayPhone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Office Working Hours:</strong>
                      <span className="text-slate-600">{COMPANY_INFO.workingHours}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  Corporate Identification Number: <span className="font-mono text-slate-700 font-medium">{COMPANY_INFO.cin}</span>
                </div>
              </div>

              {/* Consultation Guarantee */}
              <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs text-slate-700 space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  What Happens Next?
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  1. Our lead architect reviews your submission.<br />
                  2. We provide an initial technical feasibility overview.<br />
                  3. We schedule a 30-minute scoping call to map sprint milestones.
                </p>
              </div>

              {/* Official Social Media Channels */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Connect on Official Social Media
                </div>
                <p className="text-xs text-slate-500">
                  Follow Zippy Enterprises for product launches, tech updates, and service announcements:
                </p>
                <div className="grid grid-cols-3 gap-2.5 pt-1">
                  <a
                    href={COMPANY_INFO.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-pink-50/60 border border-pink-200/80 hover:bg-pink-100 text-pink-700 transition-colors group"
                    title="Instagram: @zippyenterprises"
                  >
                    <InstagramIcon className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-bold">Instagram</span>
                  </a>

                  <a
                    href={COMPANY_INFO.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-blue-50/60 border border-blue-200/80 hover:bg-blue-100 text-blue-700 transition-colors group"
                    title="Facebook: @zippyenterprises"
                  >
                    <FacebookIcon className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-bold">Facebook</span>
                  </a>

                  <a
                    href={COMPANY_INFO.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-sky-50/60 border border-sky-200/80 hover:bg-sky-100 text-sky-700 transition-colors group"
                    title="LinkedIn: Zippy Enterprises Private Limited"
                  >
                    <LinkedinIcon className="w-5 h-5 mb-1 group-hover:scale-110 transition-transform" />
                    <span className="text-[11px] font-bold">LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Recruitment Desk Notice */}
              <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-slate-800 space-y-2">
                <div className="font-bold text-slate-900 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-amber-600" />
                    Career Openings: 4 Positions
                  </span>
                  <span className="text-[10px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full font-bold">Hiring Now</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  We are hiring 4 Digital Marketing Executives at our Nacharam office.
                </p>
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent('open-hiring-modal'))}
                  className="text-xs font-bold text-blue-700 hover:text-blue-800 underline flex items-center gap-1 cursor-pointer pt-1"
                >
                  <span>View job specifications & apply →</span>
                </button>
              </div>

            </div>

          </div>

          {/* Interactive Google Maps Location Section */}
          <div className="mt-12 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-[#102747] to-blue-950 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  <Navigation className="w-4 h-4" />
                  <span>Office Location & Route Directions</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Zippy Softwares Office — Nacharam, Hyderabad
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  {COMPANY_INFO.address.fullAddress}
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] text-slate-300">
                  <span className="bg-white/10 px-2.5 py-1 rounded-md border border-white/10">Near Habsiguda (5 Mins)</span>
                  <span className="bg-white/10 px-2.5 py-1 rounded-md border border-white/10">Near Uppal (10 Mins)</span>
                  <span className="bg-white/10 px-2.5 py-1 rounded-md border border-white/10">Near Secunderabad (15 Mins)</span>
                </div>
              </div>

              <a
                href={COMPANY_INFO.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all shrink-0 cursor-pointer"
              >
                <MapPin className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="w-full h-80 sm:h-96 bg-slate-100">
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

    </div>
  );
};
