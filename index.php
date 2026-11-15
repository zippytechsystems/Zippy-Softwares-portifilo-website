<?php
/**
 * Zippy Softwares - Homepage (index.php)
 * Native PHP/HTML Enterprise Implementation with 3D Animations & Media
 */

declare(strict_types=1);

$pageTitle = 'Zippy Softwares | IT Software Company in Nacharam, Hyderabad 500076 | Web, App & AI Development';
$pageDesc = 'Top IT Software Development Company in Nacharam, Hyderabad (500076) - Zippy Enterprises Private Limited. Near by IT services, Custom Web Design, Android & iOS Mobile Apps, and AI Agent Automation serving Nacharam, Habsiguda, Mallapur, Uppal, Cherlapally, Secunderabad, Narapally & LB Nagar.';
$pageKeywords = 'IT software company near me, software company in Nacharam 500076, web design Hyderabad, web development Nacharam, mobile app development android ios Hyderabad, AI agent automation Hyderabad, IT companies in 500076, software company Habsiguda, web design Uppal, software company Mallapur, software development Cherlapally, IT services Secunderabad, app development Narapally, software company LB Nagar, Zippy Softwares, Zippy Enterprises Private Limited';
$currentPage = 'index';

require_once __DIR__ . '/includes/header.php';
?>

<!-- =========================================================================
    1. HERO SECTION WITH 3D CANVAS & INTERACTIVE SLIDER
    ========================================================================= -->
<section class="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-[#F8FAFC]">
    <!-- Interactive 3D Cyber Neural Particle Mesh Canvas -->
    <canvas id="hero3DCanvas" class="absolute inset-0 pointer-events-auto z-0 opacity-80" style="touch-action: none;"></canvas>

    <!-- Soft Ambient Radial Accent Glow -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] pointer-events-none rounded-full opacity-60" 
         style="background: radial-gradient(ellipse 650px 350px at 50% 30%, rgba(56, 189, 248, 0.15), rgba(37, 99, 235, 0.05), transparent 70%);">
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <!-- Official Brand Logo Emblem with Continuous 3D Floating Tilt -->
        <div class="tilt-card w-fit mx-auto mb-6 image-3d-floating" data-max-tilt="16" data-scale="1.08">
            <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-2xl border-4 border-white bg-black transition-transform duration-300 glow-3d-pulse depth-layer-2">
                <img src="/assets/images/zippy-logo.jpg" alt="<?= BRAND_NAME ?> Logo" width="112" height="112" class="w-full h-full object-cover">
            </div>
            <div class="tilt-glare"></div>
        </div>

        <!-- Top Corporate Badge with Local SEO Indicator -->
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-sky-50 text-sky-800 border border-sky-200 mb-8 shadow-xs depth-layer-1 image-3d-floating-slow">
            <span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span>Near By IT Software Development &bull; Nacharam, Hyderabad 500076</span>
        </div>

        <!-- Master Headline with 3D Depth & Shimmer -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.12] max-w-5xl mx-auto text-3d-hero">
            Building Digital Solutions.{' '}
            <span class="text-gradient-cyan-3d block sm:inline">
                Empowering Businesses.
            </span>
        </h1>

        <!-- Subheading -->
        <p class="mt-6 text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
            We help businesses grow with professional web development, custom business applications, and intelligent AI-powered automation solutions.
        </p>

        <!-- =========================================================================
            FEATURED CORE SERVICES UI/UX INTERACTIVE SLIDE SHOWCASE
            ========================================================================= -->
        <div id="heroServiceSlider" class="mt-12 sm:mt-16 max-w-5xl mx-auto relative z-20">
            
            <!-- Category Navigation Switcher Tabs -->
            <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
                <?php foreach ($serviceSlides as $sIdx => $slide): ?>
                <button type="button" class="slider-category-tab px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 border border-slate-200 bg-white text-slate-700 hover:border-blue-400 cursor-pointer shadow-xs">
                    <i data-lucide="<?= $slide['icon'] ?>" class="w-4 h-4"></i>
                    <span><?= explode('&', $slide['title'])[0] ?></span>
                </button>
                <?php endforeach; ?>
            </div>

            <!-- Slide Items Container -->
            <div class="relative rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden card-3d-depth">
                <?php foreach ($serviceSlides as $sIdx => $slide): ?>
                <div class="hero-slide-item <?= ($sIdx === 0) ? 'flex' : 'hidden' ?> flex-col">
                    <div class="h-1.5 w-full bg-gradient-to-r <?= $slide['themeColor'] ?>"></div>
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 p-5 sm:p-7 lg:p-9 items-center">
                        
                        <!-- Left Column: High Clarity 3D Poster Image -->
                        <div class="lg:col-span-6 relative">
                            <div class="tilt-card w-full" data-max-tilt="10" data-scale="1.03">
                                <div class="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 frame-3d-poster group">
                                    <img src="<?= $slide['image'] ?>" alt="<?= htmlspecialchars($slide['title']) ?>" class="w-full h-auto max-h-[460px] sm:max-h-[520px] object-contain mx-auto transition-transform duration-500 group-hover:scale-102">
                                    
                                    <!-- Full Clarity Zoom Button -->
                                    <button type="button" onclick="openImageZoom('<?= $slide['image'] ?>')" class="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 shadow-xl transition-all cursor-pointer border border-white/20 hover:scale-105 active:scale-95" title="View Full Clarity High-Res Image">
                                        <i data-lucide="maximize-2" class="w-3.5 h-3.5 text-cyan-400"></i>
                                        <span>Full Clarity 🔍</span>
                                    </button>

                                    <!-- Tagline Badge -->
                                    <div class="absolute top-3 left-3 depth-layer-2">
                                        <span class="px-3.5 py-1.5 rounded-full bg-blue-600/95 backdrop-blur-md text-white text-[11px] font-bold border border-white/30 shadow-lg flex items-center gap-1.5 image-3d-floating-slow">
                                            <i data-lucide="sparkles" class="w-3.5 h-3.5 text-cyan-300"></i>
                                            <span><?= $slide['tagline'] ?></span>
                                        </span>
                                    </div>
                                </div>
                                <div class="tilt-glare"></div>
                            </div>
                        </div>

                        <!-- Right Column: Details & Actions -->
                        <div class="lg:col-span-6 flex flex-col justify-between space-y-5 text-left depth-layer-1">
                            <div>
                                <div class="flex items-center justify-between gap-2 mb-3">
                                    <span class="px-3.5 py-1 rounded-full text-xs font-extrabold border shadow-xs <?= $slide['badgeBg'] ?>">
                                        <?= $slide['badge'] ?>
                                    </span>
                                    <span class="text-xs font-mono font-semibold text-slate-500">
                                        Slide <?= $sIdx + 1 ?> of <?= count($serviceSlides) ?>
                                    </span>
                                </div>

                                <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight text-3d-hero">
                                    <?= $slide['title'] ?>
                                </h2>

                                <p class="mt-2 text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                                    <?= $slide['subtitle'] ?>
                                </p>

                                <div class="mt-4 space-y-2.5 pt-2">
                                    <?php foreach ($slide['highlights'] as $hl): ?>
                                    <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                                        <i data-lucide="check-circle-2" class="w-4 h-4 text-blue-600 shrink-0 mt-0.5"></i>
                                        <span class="font-medium"><?= $hl ?></span>
                                    </div>
                                    <?php endforeach; ?>
                                </div>
                            </div>

                            <!-- Buttons -->
                            <div class="pt-4 border-t border-slate-100 space-y-3">
                                <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                                    <a href="<?= $slide['exploreLink'] ?>" class="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5">
                                        <span>Explore Details</span>
                                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                                    </a>

                                    <a href="<?= get_whatsapp_url($slide['whatsappMessage']) ?>" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all hover:-translate-y-0.5">
                                        <i data-lucide="message-square" class="w-4 h-4"></i>
                                        <span>WhatsApp Quote</span>
                                    </a>
                                </div>

                                <div class="text-[11px] text-slate-500 flex items-center justify-between">
                                    <span>Direct Office: Nacharam 500076</span>
                                    <span class="font-semibold text-slate-700">Call: <?= CONTACT_PHONE_DISPLAY ?></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <?php endforeach; ?>
            </div>

            <!-- Arrows -->
            <div class="flex items-center justify-center gap-4 mt-5">
                <button type="button" class="slider-prev-btn p-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 shadow-xs transition-colors" title="Previous Slide">
                    <i data-lucide="chevron-left" class="w-5 h-5"></i>
                </button>
                <span class="text-xs text-slate-500 font-mono font-semibold">Auto-Slides Every 5s &bull; Hover to Pause</span>
                <button type="button" class="slider-next-btn p-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 shadow-xs transition-colors" title="Next Slide">
                    <i data-lucide="chevron-right" class="w-5 h-5"></i>
                </button>
            </div>
        </div>

        <!-- Primary CTA Buttons -->
        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-xl mx-auto">
            <a href="/services.php" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base transition-all duration-200 shadow-xl shadow-blue-500/25 hover:-translate-y-1 hover:shadow-2xl">
                <span>Explore Services</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>

            <a href="#ai-automation-demo" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-300 text-sky-800 font-bold text-base transition-all duration-200 shadow-sm hover:-translate-y-1 hover:shadow-md">
                <i data-lucide="play" class="w-4 h-4 text-sky-600 fill-sky-600 animate-pulse"></i>
                <span>Watch AI Demo</span>
            </a>

            <a href="/contact.php" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-base transition-all duration-200 shadow-sm hover:-translate-y-1 hover:shadow-md">
                <span>Discuss Project</span>
                <i data-lucide="chevron-right" class="w-4 h-4 text-blue-600"></i>
            </a>
        </div>

        <!-- Live Metric Strip -->
        <div class="mt-16 pt-12 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <?php foreach ($companyStats as $stat): ?>
            <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm card-3d-depth">
                <div class="text-3xl sm:text-4xl font-black tracking-tight font-sans text-3d-cyan">
                    <?= $stat['value'] ?>
                </div>
                <div class="text-xs sm:text-sm text-slate-500 mt-1 font-semibold">
                    <?= $stat['label'] ?>
                </div>
            </div>
            <?php endforeach; ?>
        </div>

    </div>
</section>

<!-- =========================================================================
    2. THREE CORE DIVISIONS SHOWCASE
    ========================================================================= -->
<section class="py-20 md:py-28 bg-[#F8FAFC]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 uppercase tracking-wider">
                Three Core Divisions
            </span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 text-3d-hero">
                Specialized Software Engineering for <span class="text-gradient-cyan-3d">Every Layer of Your Business</span>
            </h2>
            <p class="mt-3 text-slate-600 text-sm sm:text-base">
                Our company operates through three specialized divisions, each staffed with dedicated domain architects and software engineers.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <!-- Division 1: Web Development -->
            <div class="tilt-card h-full image-3d-floating" data-max-tilt="10" data-scale="1.03">
                <div class="group rounded-3xl bg-white border border-slate-200 hover:border-blue-400 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-2xl h-full card-3d-depth">
                    <div>
                        <div class="relative rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-slate-200 shadow-sm aspect-[4/3] frame-3d-poster">
                            <img src="/assets/images/slider-web-development.jpg" alt="Web Development" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104">
                            <div class="absolute top-2.5 left-2.5 depth-layer-2">
                                <span class="px-3 py-1 rounded-full bg-blue-600/95 text-white text-[10.5px] font-bold shadow-md">
                                    Division 01
                                </span>
                            </div>
                            <button type="button" onclick="openImageZoom('/assets/images/slider-web-development.jpg')" class="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-md bg-black/80 text-cyan-300 text-[10.5px] font-mono font-semibold">
                                Full Clarity 🔍
                            </button>
                        </div>

                        <div class="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1 flex items-center gap-1.5">
                            <i data-lucide="globe" class="w-3.5 h-3.5"></i>
                            <span>Division 01</span>
                        </div>

                        <h3 class="text-2xl font-extrabold text-slate-900 tracking-tight text-3d-hero">
                            Web Development
                        </h3>

                        <p class="mt-3 text-slate-600 text-sm leading-relaxed">
                            High-speed, SEO-engineered corporate websites, conversion-driven e-commerce platforms, SaaS web applications, and enterprise intranets.
                        </p>

                        <div class="mt-6 pt-6 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                            <div class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-blue-600 shrink-0"></i><span>Business Websites & Portals</span></div>
                            <div class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-blue-600 shrink-0"></i><span>E-Commerce Platforms (GST & Shipping)</span></div>
                            <div class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-blue-600 shrink-0"></i><span>Custom Web Applications & SaaS</span></div>
                            <div class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-blue-600 shrink-0"></i><span>Enterprise Intranets & Extranets</span></div>
                        </div>
                    </div>

                    <div class="mt-8 pt-6 border-t border-slate-100">
                        <a href="/web-development.php" class="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-50 hover:bg-blue-600 border border-blue-200 hover:border-blue-600 text-blue-700 hover:text-white font-bold text-sm transition-all duration-200 shadow-xs hover:shadow-md">
                            <span>Explore Web Services</span>
                            <i data-lucide="arrow-right" class="w-4 h-4"></i>
                        </a>
                    </div>
                </div>
                <div class="tilt-glare"></div>
            </div>

            <!-- Division 2: App Development -->
            <div class="tilt-card h-full image-3d-floating-slow" data-max-tilt="10" data-scale="1.03">
                <div class="group rounded-3xl bg-white border border-slate-200 hover:border-emerald-400 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-2xl h-full card-3d-depth">
                    <div>
                        <div class="relative rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-slate-200 shadow-sm aspect-[4/3] frame-3d-poster">
                            <img src="/assets/images/slider-app-development.jpg" alt="App Development" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104">
                            <div class="absolute top-2.5 left-2.5 depth-layer-2">
                                <span class="px-3 py-1 rounded-full bg-emerald-600/95 text-white text-[10.5px] font-bold shadow-md">
                                    Division 02
                                </span>
                            </div>
                            <button type="button" onclick="openImageZoom('/assets/images/slider-app-development.jpg')" class="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-md bg-black/80 text-emerald-300 text-[10.5px] font-mono font-semibold">
                                Full Clarity 🔍
                            </button>
                        </div>

                        <div class="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1 flex items-center gap-1.5">
                            <i data-lucide="smartphone" class="w-3.5 h-3.5"></i>
                            <span>Division 02</span>
                        </div>

                        <h3 class="text-2xl font-extrabold text-slate-900 tracking-tight text-3d-hero">
                            Custom Software & App
                        </h3>

                        <p class="mt-3 text-slate-600 text-sm leading-relaxed">
                            Tailored business operations software, accounting and invoicing engines, CRM & ERP suites, and cross-platform iOS/Android mobile apps.
                        </p>

                        <div class="mt-6 pt-6 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                            <div class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-600 shrink-0"></i><span>Mobile Apps (Android & iOS Flutter)</span></div>
                            <div class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-600 shrink-0"></i><span>Business Management Software & CRM</span></div>
                            <div class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-600 shrink-0"></i><span>Billing & GST Invoicing Software</span></div>
                            <div class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-600 shrink-0"></i><span>Appointment & Booking Portals</span></div>
                        </div>
                    </div>

                    <div class="mt-8 pt-6 border-t border-slate-100">
                        <a href="/app-development.php" class="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-600 border border-emerald-200 hover:border-emerald-600 text-emerald-700 hover:text-white font-bold text-sm transition-all duration-200 shadow-xs hover:shadow-md">
                            <span>Explore App Services</span>
                            <i data-lucide="arrow-right" class="w-4 h-4"></i>
                        </a>
                    </div>
                </div>
                <div class="tilt-glare"></div>
            </div>

            <!-- Division 3: AI Agent & Automation -->
            <div class="tilt-card h-full image-3d-floating-reverse" data-max-tilt="10" data-scale="1.03">
                <div class="group rounded-3xl bg-white border border-slate-200 hover:border-sky-400 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-2xl h-full card-3d-depth">
                    <div>
                        <div class="relative rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-slate-200 shadow-sm aspect-[4/3] frame-3d-poster">
                            <img src="/assets/images/slider-ai-automation.jpg" alt="AI Agent & Automation" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104">
                            <div class="absolute top-2.5 left-2.5 depth-layer-2">
                                <span class="px-3 py-1 rounded-full bg-sky-600/95 text-white text-[10.5px] font-bold shadow-md">
                                    Division 03
                                </span>
                            </div>
                            <button type="button" onclick="openImageZoom('/assets/images/slider-ai-automation.jpg')" class="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-md bg-black/80 text-sky-300 text-[10.5px] font-mono font-semibold">
                                Full Clarity 🔍
                            </button>
                        </div>

                        <div class="text-xs font-bold uppercase tracking-wider text-sky-700 mb-1 flex items-center gap-1.5">
                            <i data-lucide="bot" class="w-3.5 h-3.5"></i>
                            <span>Division 03</span>
                        </div>

                        <h3 class="text-2xl font-extrabold text-slate-900 tracking-tight text-3d-hero">
                            AI Agent & Automation
                        </h3>

                        <p class="mt-3 text-slate-600 text-sm leading-relaxed">
                            Autonomous LLM chatbots with strict guardrails, conversational AI voice telephony, document OCR pipelines, and multi-system automation.
                        </p>

                        <div class="mt-6 pt-6 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                            <div class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-sky-600 shrink-0"></i><span>WhatsApp & Website AI Chatbots</span></div>
                            <div class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-sky-600 shrink-0"></i><span>Conversational Voice Calling Telephony</span></div>
                            <div class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-sky-600 shrink-0"></i><span>Business Workflow & Invoice OCR</span></div>
                            <div class="flex items-center gap-2"><i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-sky-600 shrink-0"></i><span>Google Sheets & Database Auto Sync</span></div>
                        </div>
                    </div>

                    <div class="mt-8 pt-6 border-t border-slate-100">
                        <a href="/ai-automation.php" class="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-50 hover:bg-sky-600 border border-sky-200 hover:border-sky-600 text-sky-700 hover:text-white font-bold text-sm transition-all duration-200 shadow-xs hover:shadow-md">
                            <span>Explore AI Services</span>
                            <i data-lucide="arrow-right" class="w-4 h-4"></i>
                        </a>
                    </div>
                </div>
                <div class="tilt-glare"></div>
            </div>

        </div>
    </div>
</section>

<!-- =========================================================================
    3. LIVE AI VIDEO SHOWCASE (ai_automation_add.mp4)
    ========================================================================= -->
<section id="ai-automation-demo" class="py-20 md:py-28 bg-gradient-to-b from-[#F8FAFC] via-white to-blue-50/40 border-y border-slate-200 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="px-3.5 py-1.5 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200 uppercase tracking-wider">
                Live Video Showcase &bull; Division 03
            </span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 text-3d-hero">
                See Our Autonomous AI Automation <span class="text-gradient-cyan-3d">In Live Action</span>
            </h2>
            <p class="mt-3 text-slate-600 text-sm sm:text-base">
                Watch how autonomous customer support agents, AI voice bots, and automated business workflows operate 24/7—capturing qualified leads and slashing operational friction.
            </p>
        </div>

        <div class="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <!-- Left Column: Smartphone 3D Device Mockup -->
            <div class="lg:col-span-5 flex justify-center">
                <div class="tilt-card relative w-full max-w-[320px] sm:max-w-[340px] image-3d-floating" data-max-tilt="12" data-scale="1.04">
                    <!-- Outer 3D Neon Aura Glow -->
                    <div class="absolute -inset-4 bg-gradient-to-tr from-cyan-500/30 via-blue-600/30 to-indigo-600/30 rounded-[56px] blur-2xl opacity-80 glow-3d-pulse"></div>

                    <!-- Smartphone Chassis -->
                    <div class="relative rounded-[48px] p-3 sm:p-3.5 bg-gradient-to-b from-slate-800 via-slate-900 to-black shadow-2xl border-4 border-slate-700/80 depth-layer-1">
                        <!-- Dynamic Island Top Camera -->
                        <div class="w-24 h-4 bg-slate-950 rounded-full mx-auto mb-2.5 flex items-center justify-center gap-1.5 shadow-inner">
                            <span class="w-2 h-2 rounded-full bg-slate-800"></span>
                            <span class="w-1.5 h-1.5 rounded-full bg-blue-900"></span>
                        </div>

                        <!-- 9:16 Video Display -->
                        <div class="relative rounded-[32px] overflow-hidden bg-black aspect-[9/16] border border-slate-800 shadow-inner group">
                            <video id="aiVideoPlayer" src="/assets/videos/ai_automation_add.mp4" class="w-full h-full object-cover" autoplay loop muted playsinline preload="metadata" controls></video>

                            <!-- Audio Toggle Pill -->
                            <div class="absolute top-3 right-3 z-20 depth-layer-2">
                                <button type="button" id="aiVideoMuteBtn" class="px-3.5 py-1.5 rounded-full bg-black/80 hover:bg-black backdrop-blur-md text-white text-[11px] font-bold border border-white/30 flex items-center gap-1.5 shadow-xl transition-all cursor-pointer">
                                    <i data-lucide="volume-x" class="w-3.5 h-3.5 text-rose-400"></i>
                                    <span>Unmute 🔊</span>
                                </button>
                            </div>

                            <!-- Showcase Badge -->
                            <div class="absolute top-3 left-3 z-20 pointer-events-none depth-layer-2">
                                <span class="px-2.5 py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 flex items-center gap-1 shadow-md">
                                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                                    <span>AI SHOWCASE</span>
                                </span>
                            </div>
                        </div>

                        <!-- Home Bar -->
                        <div class="w-28 h-1 bg-slate-700 rounded-full mx-auto mt-2.5"></div>
                    </div>

                    <!-- Floating 3D Highlights Outside Phone -->
                    <div class="hidden sm:flex absolute -left-6 bottom-12 px-4 py-2.5 rounded-xl bg-white/95 border border-slate-200 shadow-xl backdrop-blur-md items-center gap-2 text-xs font-bold text-slate-800 depth-layer-2 image-3d-floating-slow">
                        <i data-lucide="bot" class="w-4 h-4 text-blue-600"></i>
                        <span>24/7 Autonomous Agent</span>
                    </div>

                    <div class="hidden sm:flex absolute -right-6 top-16 px-4 py-2.5 rounded-xl bg-white/95 border border-slate-200 shadow-xl backdrop-blur-md items-center gap-2 text-xs font-bold text-slate-800 depth-layer-2 image-3d-floating-reverse">
                        <i data-lucide="zap" class="w-4 h-4 text-amber-500"></i>
                        <span>10x Inbound Conversion</span>
                    </div>

                    <div class="tilt-glare"></div>
                </div>
            </div>

            <!-- Right Column: Capabilities & Action -->
            <div class="lg:col-span-7 space-y-6 depth-layer-1">
                <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-200 shadow-xs">
                    <i data-lucide="sparkles" class="w-3.5 h-3.5 text-blue-600"></i>
                    <span>Zero Hallucinations &bull; Enterprise Grade</span>
                </div>

                <h3 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight text-3d-hero">
                    Transform Routine Operations Into Automated Revenue Engines
                </h3>

                <p class="text-slate-600 text-base sm:text-lg leading-relaxed">
                    Modern businesses lose up to 40% of potential leads due to delayed follow-ups and after-hours silence. Our autonomous AI agents engage prospective buyers instantly, conduct lifelike voice calls, and orchestrate back-office software workflows without human intervention.
                </p>

                <!-- 4 Capabilities Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 transition-colors card-3d-depth">
                        <div class="flex items-center gap-2.5 mb-1.5">
                            <div class="p-2 rounded-lg bg-blue-50 text-blue-600"><i data-lucide="bot" class="w-4 h-4"></i></div>
                            <h4 class="text-sm font-bold text-slate-900">24/7 Web & WhatsApp AI</h4>
                        </div>
                        <p class="text-xs text-slate-600 leading-relaxed">Responds to customer queries under 3 seconds with exact product and catalog knowledge.</p>
                    </div>

                    <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 transition-colors card-3d-depth">
                        <div class="flex items-center gap-2.5 mb-1.5">
                            <div class="p-2 rounded-lg bg-sky-50 text-sky-600"><i data-lucide="phone" class="w-4 h-4"></i></div>
                            <h4 class="text-sm font-bold text-slate-900">Conversational Voice Bots</h4>
                        </div>
                        <p class="text-xs text-slate-600 leading-relaxed">Ultra-low latency telephony agents for appointment scheduling and automated customer reminders.</p>
                    </div>

                    <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 transition-colors card-3d-depth">
                        <div class="flex items-center gap-2.5 mb-1.5">
                            <div class="p-2 rounded-lg bg-emerald-50 text-emerald-600"><i data-lucide="zap" class="w-4 h-4"></i></div>
                            <h4 class="text-sm font-bold text-slate-900">Document & Workflow OCR</h4>
                        </div>
                        <p class="text-xs text-slate-600 leading-relaxed">Automates invoice reading, GST data ingestion, and multi-app sync across CRM, ERP, and Sheets.</p>
                    </div>

                    <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 transition-colors card-3d-depth">
                        <div class="flex items-center gap-2.5 mb-1.5">
                            <div class="p-2 rounded-lg bg-purple-50 text-purple-600"><i data-lucide="shield-check" class="w-4 h-4"></i></div>
                            <h4 class="text-sm font-bold text-slate-900">Zero-Hallucination Safety</h4>
                        </div>
                        <p class="text-xs text-slate-600 leading-relaxed">Strict enterprise boundaries and data privacy—your business data is never used to train public models.</p>
                    </div>
                </div>

                <div class="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                    <a href="/ai-automation.php" class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5">
                        <span>Explore AI Division Architecture</span>
                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </a>

                    <a href="<?= get_whatsapp_url('Hello Zippy Softwares, I watched your AI Automation video demo on the website and want to explore AI automation for our business.') ?>" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all hover:-translate-y-0.5">
                        <i data-lucide="message-square" class="w-4 h-4"></i>
                        <span>Consult on WhatsApp</span>
                    </a>
                </div>

            </div>

        </div>

    </div>
</section>

<!-- =========================================================================
    4. CAREER SPOTLIGHT: HIRING 4 DIGITAL MARKETING EXECUTIVES
    ========================================================================= -->
<section class="py-16 md:py-20 bg-gradient-to-r from-slate-900 via-[#102747] to-blue-950 text-white relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="bg-white/10 border border-white/15 rounded-3xl p-7 sm:p-10 lg:p-12 shadow-2xl card-3d-depth">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div class="lg:col-span-8 space-y-4">
                    <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-400 text-slate-950 shadow-sm">
                        <i data-lucide="briefcase" class="w-3.5 h-3.5"></i>
                        <span>Immediate Hiring &bull; 4 Positions</span>
                        <span class="w-1.5 h-1.5 rounded-full bg-slate-950"></span>
                        <span class="flex items-center gap-1"><i data-lucide="sparkles" class="w-3 h-3 text-slate-900"></i> Direct Apply</span>
                    </div>

                    <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight text-3d-hero">
                        We Are Hiring: <span class="text-cyan-300">4 Digital Marketing Executives</span>
                    </h2>

                    <p class="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                        <strong><?= LEGAL_NAME ?> (<?= BRAND_NAME ?>)</strong> is expanding our Nacharam, Hyderabad client acquisition team. We are onboarding 4 enthusiastic digital marketers to spearhead social media campaigns, SEO, and business lead generation.
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                        <div class="p-3.5 rounded-xl bg-white/10 border border-white/10">
                            <span class="text-slate-400 block font-mono text-[10px] uppercase">Open Positions</span>
                            <strong class="text-white text-sm flex items-center gap-1.5 mt-0.5"><i data-lucide="users" class="w-4 h-4 text-cyan-300"></i> 4 Members</strong>
                        </div>
                        <div class="p-3.5 rounded-xl bg-white/10 border border-white/10">
                            <span class="text-slate-400 block font-mono text-[10px] uppercase">Job Location</span>
                            <strong class="text-white text-sm block mt-0.5">Nacharam, Hyderabad</strong>
                        </div>
                        <div class="p-3.5 rounded-xl bg-white/10 border border-white/10">
                            <span class="text-slate-400 block font-mono text-[10px] uppercase">Experience</span>
                            <strong class="text-white text-sm block mt-0.5">0 – 3 Yrs (Freshers Welcome)</strong>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-7 text-slate-800 shadow-xl border border-slate-100 flex flex-col justify-between space-y-4">
                    <div>
                        <div class="text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center justify-between">
                            <span>Recruitment Desk</span>
                            <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">Active</span>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mt-1">Apply Immediately</h3>
                        <p class="text-slate-600 text-xs mt-1 leading-relaxed">
                            Connect directly with our recruitment team via WhatsApp or Email your resume.
                        </p>
                    </div>

                    <div class="space-y-2.5 pt-1">
                        <a href="https://wa.me/<?= WHATSAPP_NUMBER ?>?text=<?= rawurlencode("Hello Zippy Enterprises, I am applying for the Digital Marketing Executive opening (4 positions) at your Nacharam, Hyderabad office. Please review my profile.") ?>" target="_blank" rel="noopener noreferrer" class="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors cursor-pointer">
                            <i data-lucide="message-square" class="w-4 h-4"></i>
                            <span>Apply via WhatsApp</span>
                            <i data-lucide="arrow-right" class="w-4 h-4"></i>
                        </a>

                        <button type="button" onclick="openHiringModal()" class="w-full py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 text-xs font-semibold transition-colors cursor-pointer">
                            View Complete Job Specifications &rarr;
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>

<!-- =========================================================================
    5. FEATURED PORTFOLIO CASE STUDIES
    ========================================================================= -->
<section class="py-20 md:py-28 bg-[#F8FAFC]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 uppercase tracking-wider">
                Proven Solutions
            </span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 text-3d-hero">
                Featured Projects & <span class="text-gradient-cyan-3d">Enterprise Case Studies</span>
            </h2>
            <p class="mt-3 text-slate-600 text-sm sm:text-base">
                Explore our completed client platforms and interactive demo prototypes spanning field management, pharmacy retail, banking, and autonomous AI.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <?php foreach (array_slice($portfolioProjects, 0, 3) as $pIdx => $project): ?>
            <div class="tilt-card h-full" data-max-tilt="8" data-scale="1.02">
                <div class="rounded-3xl bg-white border border-slate-200 hover:border-blue-400 p-6 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-2xl h-full card-3d-depth group">
                    <div>
                        <div class="flex items-center justify-between gap-2 mb-3">
                            <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold border <?= $project['badgeColor'] ?>">
                                <?= $project['projectType'] ?>
                            </span>
                            <span class="text-xs text-slate-500 font-mono">
                                <?= $project['category'] ?>
                            </span>
                        </div>

                        <h3 class="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors text-3d-hero">
                            <?= $project['title'] ?>
                        </h3>

                        <p class="mt-2 text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                            <?= $project['description'] ?>
                        </p>

                        <div class="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
                            <?php foreach (array_slice($project['deliverables'], 0, 2) as $deliv): ?>
                            <div class="flex items-start gap-2 text-xs text-slate-700">
                                <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5"></i>
                                <span class="line-clamp-1"><?= $deliv ?></span>
                            </div>
                            <?php endforeach; ?>
                        </div>
                    </div>

                    <div class="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                        <button type="button" onclick="openProjectModal('<?= $project['id'] ?>')" class="text-xs font-bold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1.5 cursor-pointer">
                            <span>View Architecture Details</span>
                            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                        </button>
                        <span class="text-[11px] text-slate-500 font-medium">
                            <?= $project['industry'] ?>
                        </span>
                    </div>
                </div>
                <div class="tilt-glare"></div>
            </div>
            <?php endforeach; ?>
        </div>

        <div class="mt-12 text-center">
            <a href="/portfolio.php" class="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 hover:-translate-y-0.5 transition-all">
                <span>Explore All Completed & Demo Projects</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
        </div>

    </div>
</section>

<!-- =========================================================================
    6. LOCAL SERVICE HUB (NACHARAM, HYDERABAD 500076 & SURROUNDING)
    ========================================================================= -->
<section class="py-20 md:py-24 bg-white border-y border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-14">
            <span class="px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 uppercase tracking-wider">
                Local Presence &bull; Hyderabad
            </span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 text-3d-hero">
                Serving Businesses in <span class="text-gradient-cyan-3d">Nacharam & Greater Hyderabad</span>
            </h2>
            <p class="mt-3 text-slate-600 text-sm sm:text-base">
                Direct on-site engineering consultations, rapid project deployment, and localized technical support from our office in Sneha Apartments, HMT Nagar, Nacharam (500076).
            </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <?php foreach ($localServiceAreas as $area): ?>
            <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white transition-all card-3d-depth">
                <div class="flex items-center justify-between mb-2">
                    <h3 class="font-bold text-slate-900 text-base"><?= $area['name'] ?></h3>
                    <span class="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-mono font-bold"><?= $area['pincode'] ?></span>
                </div>
                <div class="text-[11px] text-blue-700 font-semibold mb-2 flex items-center gap-1">
                    <i data-lucide="map-pin" class="w-3 h-3 text-blue-600"></i>
                    <span><?= $area['distance'] ?></span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                    <?= $area['description'] ?>
                </p>
            </div>
            <?php endforeach; ?>
        </div>

    </div>
</section>

<!-- =========================================================================
    7. FINAL CALL TO ACTION (CTA)
    ========================================================================= -->
<section class="py-20 bg-gradient-to-br from-[#102747] via-slate-900 to-blue-950 text-white relative overflow-hidden">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span class="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 text-cyan-300 border border-white/15 uppercase tracking-wider">
            Initiate Your Project
        </span>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mt-4 text-3d-hero">
            Ready to Architect High-Impact Software for Your Business?
        </h2>
        <p class="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Consult directly with a senior full-stack architect. We review your requirements, provide architectural recommendations, and share transparent milestones within 24 hours.
        </p>

        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/contact.php" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-xl shadow-blue-500/25 transition-all hover:-translate-y-1">
                <span>Schedule a Consultation</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>

            <a href="<?= get_whatsapp_url() ?>" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-xl transition-all hover:-translate-y-1">
                <i data-lucide="message-square" class="w-4 h-4"></i>
                <span>Direct WhatsApp Chat</span>
            </a>
        </div>
    </div>
</section>

<!-- =========================================================================
    8. DISCREET STAFF & ADMIN QUICK ACCESS STRIP
    ========================================================================= -->
<div class="bg-slate-950/80 py-2.5 px-4 border-t border-slate-800/80 text-center">
    <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] text-slate-500">
        <span class="text-slate-400 font-semibold flex items-center gap-1">
            <i data-lucide="shield" class="w-3 h-3 text-slate-500"></i>
            <span>Operations Portal:</span>
        </span>
        <a href="/admin.php?tab=leads" class="text-slate-400 hover:text-cyan-400 font-medium transition-colors inline-flex items-center gap-1">
            <i data-lucide="inbox" class="w-3 h-3 text-sky-400"></i>
            <span>Customer Leads</span>
        </a>
        <span class="text-slate-700">&bull;</span>
        <a href="/admin.php?tab=internships" class="text-slate-400 hover:text-emerald-400 font-medium transition-colors inline-flex items-center gap-1">
            <i data-lucide="graduation-cap" class="w-3 h-3 text-emerald-400"></i>
            <span>Internships & Hiring</span>
        </a>
        <span class="text-slate-700">&bull;</span>
        <a href="/admin.php" class="text-slate-400 hover:text-white font-bold transition-colors inline-flex items-center gap-1">
            <i data-lucide="lock" class="w-3 h-3 text-slate-500"></i>
            <span>Admin Panel</span>
        </a>
    </div>
</div>

<?php
require_once __DIR__ . '/includes/footer.php';
?>
