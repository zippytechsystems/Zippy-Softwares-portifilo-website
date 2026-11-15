<?php
/**
 * Zippy Softwares - AI Automation Services & Autonomous Agents
 * A Division of Zippy Enterprises Private Limited
 */
require_once __DIR__ . '/includes/config.php';
require_once __DIR__ . '/includes/data.php';

$pageTitle = "Autonomous AI Agent & Business Workflow Automation Company | Zippy Softwares";
$pageDescription = "Deploy cutting-edge autonomous AI agents, 24/7 intelligent customer chatbots, AI voice telephony agents, and end-to-end business workflow automation in Hyderabad, Telangana by Zippy Enterprises Private Limited (Nacharam 500076).";
$canonicalPath = "/ai-automation.php";

$whatsappUrl = get_whatsapp_url("AI Automation", "Hello Zippy Enterprises, I want to discuss an AI Agent / Automation solution for my business.");

include __DIR__ . '/includes/header.php';
?>

<!-- Hero Section -->
<section class="relative py-16 md:py-24 overflow-hidden bg-slate-900 text-white">
    <div class="absolute inset-0 cyber-grid opacity-25"></div>
    <div class="absolute -top-32 -left-32 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 mb-6 backdrop-blur-md">
            <i data-lucide="bot" class="w-4 h-4 text-cyan-400"></i>
            <span>Division 03 • Autonomous AI & Neural Workflows</span>
        </div>

        <h1 class="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto text-3d-hero">
            AI Automation Services & <br class="hidden sm:inline" />
            <span class="text-gradient-cyan-3d">Intelligent Agents</span>
        </h1>

        <p class="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Work Smarter, Not Harder! Automate customer acquisition, WhatsApp support, voice calling, and repetitive business workflows with custom trained neural agents.
        </p>

        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="contact.php?service=AI%20Automation" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-base transition-all shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95">
                <span>Deploy AI Solution</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>

            <a href="<?php echo htmlspecialchars($whatsappUrl); ?>" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-base transition-all shadow-md hover:scale-105 active:scale-95">
                <i data-lucide="message-square" class="w-4 h-4 text-emerald-400"></i>
                <span>Instant WhatsApp Inquiry</span>
            </a>
        </div>

        <!-- Metrics -->
        <div class="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div class="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-md">
                <div class="text-2xl sm:text-3xl font-black text-white">24 / 7 / 365</div>
                <div class="text-xs text-cyan-400 mt-1 font-semibold">Zero Downtime Response</div>
            </div>
            <div class="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-md">
                <div class="text-2xl sm:text-3xl font-black text-white">&lt; 3 Sec</div>
                <div class="text-xs text-cyan-400 mt-1 font-semibold">Average Agent Reply</div>
            </div>
            <div class="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-md">
                <div class="text-2xl sm:text-3xl font-black text-white">85%+</div>
                <div class="text-xs text-cyan-400 mt-1 font-semibold">Manual Labor Reduction</div>
            </div>
            <div class="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-md">
                <div class="text-2xl sm:text-3xl font-black text-white">100% Secure</div>
                <div class="text-xs text-cyan-400 mt-1 font-semibold">Private LLM Data Silos</div>
            </div>
        </div>
    </div>
</section>

<!-- Visual Service Blueprint & Capabilities Poster -->
<section class="py-16 md:py-20 bg-white border-y border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <!-- Left: High-Clarity Poster with 3D Tilt -->
            <div class="lg:col-span-5 flex justify-center">
                <div class="tilt-card image-3d-floating max-w-md w-full" data-tilt="true">
                    <div class="relative rounded-2xl overflow-hidden bg-slate-900 border-2 border-slate-200 shadow-2xl frame-3d-poster group">
                        <img src="assets/images/slider-ai-automation.jpg" alt="AI Automation Services & Agents Blueprint" class="w-full h-auto object-contain mx-auto transition-transform duration-500 group-hover:scale-102">
                        <button type="button" onclick="openImageModal('assets/images/slider-ai-automation.jpg', 'AI Automation Services & Agents - Full Blueprint')" class="absolute bottom-3 right-3 px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-black backdrop-blur-md text-white text-xs font-bold flex items-center gap-1.5 shadow-xl border border-cyan-400/40 transition-all cursor-pointer hover:scale-105 active:scale-95">
                            <i data-lucide="maximize-2" class="w-3.5 h-3.5 text-cyan-400"></i>
                            <span>Full Clarity 🔍</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Right: Capabilities Checklist -->
            <div class="lg:col-span-7 space-y-6">
                <span class="px-3.5 py-1.5 rounded-full text-xs font-bold bg-cyan-50 text-cyan-700 border border-cyan-200 inline-flex items-center gap-1.5 shadow-xs">
                    <i data-lucide="sparkles" class="w-3.5 h-3.5 text-cyan-600"></i>
                    <span>Division 03 Capabilities</span>
                </span>

                <h2 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    Work Smarter, Not Harder! <br />
                    <span class="text-cyan-600">Let AI Automate Your Business</span>
                </h2>

                <p class="text-slate-600 text-base leading-relaxed">
                    Deploy autonomous customer support chatbots, conversational voice telephony agents, and end-to-end task automation pipelines that operate 24/7 with zero human intervention.
                </p>

                <!-- 10 Services from Poster -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">1. WhatsApp Automation</strong>
                            <span class="text-slate-500 text-xs">Chatbots, instant replies, enquiries, order updates</span>
                        </div>
                    </div>

                    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">2. Website Automation</strong>
                            <span class="text-slate-500 text-xs">AI website chatbots, live support, lead capture bots</span>
                        </div>
                    </div>

                    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">3. Voice AI Calling</strong>
                            <span class="text-slate-500 text-xs">Automated customer calls, appointment reminders, phone assistants</span>
                        </div>
                    </div>

                    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">4. Business Workflow Automation</strong>
                            <span class="text-slate-500 text-xs">Task automation, data entry, automated approvals, notifications</span>
                        </div>
                    </div>

                    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">5. Sales & Lead Automation</strong>
                            <span class="text-slate-500 text-xs">Lead routing, follow-up emails, instant quotation PDFs</span>
                        </div>
                    </div>

                    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">6. Email Automation Pipelines</strong>
                            <span class="text-slate-500 text-xs">AI email responders, onboarding sequences, alert feeds</span>
                        </div>
                    </div>

                    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">7. Appointment & Booking AI</strong>
                            <span class="text-slate-500 text-xs">Online booking, calendar sync, confirmations, rescheduling</span>
                        </div>
                    </div>

                    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">8. Document OCR & Generation</strong>
                            <span class="text-slate-500 text-xs">Automated invoices, receipts, contract parsing, data extraction</span>
                        </div>
                    </div>

                    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">9. Google Sheets & Cloud Sync</strong>
                            <span class="text-slate-500 text-xs">Live spreadsheet sync, automated reporting, record updates</span>
                        </div>
                    </div>

                    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">10. Custom Autonomous AI Agents</strong>
                            <span class="text-slate-500 text-xs">Domain-trained LLMs, multi-tool executors, internal business bots</span>
                        </div>
                    </div>
                </div>

                <div class="pt-4 flex flex-wrap gap-4">
                    <a href="contact.php?service=AI%20Automation" class="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm inline-flex items-center gap-2 transition-all">
                        <span>Deploy Custom AI Agent</span>
                        <i data-lucide="arrow-right" class="w-4 h-4 text-cyan-400"></i>
                    </a>
                    <button type="button" onclick="openImageModal('assets/images/slider-ai-automation.jpg', 'AI Automation Services & Agents')" class="px-6 py-3 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-sm inline-flex items-center gap-2 transition-all">
                        <i data-lucide="zoom-in" class="w-4 h-4 text-cyan-600"></i>
                        <span>Inspect High-Res Poster</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- LIVE AI VIDEO DEMO SHOWCASE -->
<section class="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
    <div class="absolute inset-0 cyber-grid opacity-20 pointer-events-none"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <!-- Video Mockup -->
            <div class="lg:col-span-6 flex justify-center">
                <div class="relative w-full max-w-[340px] sm:max-w-[380px] rounded-[36px] p-3 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 border-4 border-slate-600 shadow-2xl image-3d-floating">
                    <div class="relative rounded-[28px] overflow-hidden bg-black aspect-[9/16]">
                        <video id="aiVideoPlayer" class="w-full h-full object-cover" autoplay loop muted playsinline poster="assets/images/slider-ai-automation.jpg">
                            <source src="assets/videos/ai_automation_add.mp4" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        <button id="videoSoundBtn" type="button" class="absolute bottom-4 right-4 p-3 rounded-full bg-slate-900/90 text-white border border-cyan-400/40 hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-xl">
                            <i data-lucide="volume-x" id="videoSoundIcon" class="w-5 h-5"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Video Context & Explanation -->
            <div class="lg:col-span-6 space-y-6">
                <span class="px-3.5 py-1.5 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 inline-flex items-center gap-1.5">
                    <i data-lucide="play-circle" class="w-4 h-4 text-cyan-400"></i>
                    <span>Live Autonomous Demo</span>
                </span>

                <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight text-3d-hero">
                    Experience Real-Time <br />
                    <span class="text-gradient-cyan-3d">AI Voice & Workflow Automation</span>
                </h2>

                <p class="text-slate-300 text-base leading-relaxed">
                    Watch our conversational voice agents handle customer inquiries, process appointment scheduling, and dispatch instant WhatsApp confirmations simultaneously. Zero human lag, 100% precision.
                </p>

                <div class="space-y-3 pt-2">
                    <div class="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-3">
                        <i data-lucide="zap" class="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-white block font-bold text-sm">Ultra-Low Latency Telephony</strong>
                            <p class="text-slate-400 text-xs mt-0.5">Natural voice conversational flow with sub-second response times in English, Telugu, and Hindi.</p>
                        </div>
                    </div>
                    <div class="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex items-start gap-3">
                        <i data-lucide="shield-check" class="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-white block font-bold text-sm">Enterprise Data Isolation</strong>
                            <p class="text-slate-400 text-xs mt-0.5">Your customer information and enterprise knowledgebase remain private, secure, and encrypted.</p>
                        </div>
                    </div>
                </div>

                <div class="pt-4">
                    <a href="contact.php?service=AI%20Automation" class="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black text-base inline-flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-cyan-500/20">
                        <span>Deploy For Your Business</span>
                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Deep Dive Service Cards -->
<section class="py-16 md:py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-14">
            <span class="text-xs font-bold text-cyan-600 uppercase tracking-wider">Engineered Architectural Solutions</span>
            <h2 class="text-3xl sm:text-4xl font-black text-slate-900 mt-2">AI Implementation Blueprints</h2>
            <p class="text-slate-600 text-base mt-3">Custom models tailored specifically to your company's domain.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Card 1 -->
            <div class="tilt-card p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between" data-tilt="true">
                <div>
                    <div class="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-5">
                        <i data-lucide="message-square-code" class="w-6 h-6"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-2">WhatsApp & Web Chatbots</h3>
                    <p class="text-slate-600 text-xs leading-relaxed mb-4">
                        Trained on your product catalog, service policies, and pricing sheets. Answers customer queries instantly 24/7.
                    </p>
                    <ul class="space-y-2 text-xs text-slate-700">
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-cyan-600"></i> WhatsApp Business API Sync</li>
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-cyan-600"></i> RAG Vector Knowledge Base</li>
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-cyan-600"></i> Human Agent Handoff Trigger</li>
                    </ul>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span class="text-[11px] font-semibold text-slate-400">Meta Cloud API • LLM</span>
                    <a href="contact.php?service=WhatsApp%20Bots" class="text-cyan-600 hover:text-cyan-700 font-bold text-xs inline-flex items-center gap-1">Inquire <i data-lucide="chevron-right" class="w-3 h-3"></i></a>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="tilt-card p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between" data-tilt="true">
                <div>
                    <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                        <i data-lucide="phone-call" class="w-6 h-6"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-2">Voice AI Telephony Agents</h3>
                    <p class="text-slate-600 text-xs leading-relaxed mb-4">
                        Outbound customer verification, payment reminders, feedback calls, and inbound receptionist bots that talk naturally.
                    </p>
                    <ul class="space-y-2 text-xs text-slate-700">
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-cyan-600"></i> Natural Multi-Lingual Speech</li>
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-cyan-600"></i> Automated Call Transcripts</li>
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-cyan-600"></i> CRM Contact Sync</li>
                    </ul>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span class="text-[11px] font-semibold text-slate-400">Twilio • OpenAI • ElevenLabs</span>
                    <a href="contact.php?service=Voice%20AI" class="text-cyan-600 hover:text-cyan-700 font-bold text-xs inline-flex items-center gap-1">Inquire <i data-lucide="chevron-right" class="w-3 h-3"></i></a>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="tilt-card p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between" data-tilt="true">
                <div>
                    <div class="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5">
                        <i data-lucide="git-fork" class="w-6 h-6"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-2">Workflow & ERP Automation</h3>
                    <p class="text-slate-600 text-xs leading-relaxed mb-4">
                        Connect disjointed software tools. Auto-extract invoice data, populate Google Sheets, update ERPs, and send email notifications.
                    </p>
                    <ul class="space-y-2 text-xs text-slate-700">
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-cyan-600"></i> Document OCR & PDF Extraction</li>
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-cyan-600"></i> Multi-Step Zapier / n8n Chains</li>
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-cyan-600"></i> Error Handling & Retry Queues</li>
                    </ul>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span class="text-[11px] font-semibold text-slate-400">n8n • Python • OCR</span>
                    <a href="contact.php?service=Workflow%20Automation" class="text-cyan-600 hover:text-cyan-700 font-bold text-xs inline-flex items-center gap-1">Inquire <i data-lucide="chevron-right" class="w-3 h-3"></i></a>
                </div>
            </div>

            <!-- Card 4 -->
            <div class="tilt-card p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between" data-tilt="true">
                <div>
                    <div class="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5">
                        <i data-lucide="sparkles" class="w-6 h-6"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-2">Custom Autonomous Agents</h3>
                    <p class="text-slate-600 text-xs leading-relaxed mb-4">
                        Intelligent AI assistants capable of web browsing, competitor price monitoring, automated reporting, and customer outreach.
                    </p>
                    <ul class="space-y-2 text-xs text-slate-700">
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-cyan-600"></i> Tool Calling & Code Execution</li>
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-cyan-600"></i> Autonomous Daily Execution</li>
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-cyan-600"></i> High-Level Human Approvals</li>
                    </ul>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span class="text-[11px] font-semibold text-slate-400">LangChain • LlamaIndex</span>
                    <a href="contact.php?service=Custom%20Agents" class="text-cyan-600 hover:text-cyan-700 font-bold text-xs inline-flex items-center gap-1">Inquire <i data-lucide="chevron-right" class="w-3 h-3"></i></a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Bottom CTA -->
<section class="py-16 bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 text-white relative overflow-hidden">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-3d-hero">Ready to Automate Your Business With AI?</h2>
        <p class="mt-4 text-slate-300 text-base max-w-2xl mx-auto">
            Schedule a free live consultation with our Hyderabad AI engineering team.
        </p>
        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="contact.php?service=AI%20Automation" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-base shadow-lg transition-all hover:scale-105">
                Schedule AI Discovery Call
            </a>
            <a href="<?php echo htmlspecialchars($whatsappUrl); ?>" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white font-semibold text-base transition-all">
                WhatsApp Directly: +91 63026 90251
            </a>
        </div>
    </div>
</section>

<?php include __DIR__ . '/includes/footer.php'; ?>
