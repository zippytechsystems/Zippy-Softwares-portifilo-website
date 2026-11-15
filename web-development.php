<?php
/**
 * Zippy Softwares - Web Development & Business Portals
 * A Division of Zippy Enterprises Private Limited
 */
require_once __DIR__ . '/includes/config.php';
require_once __DIR__ . '/includes/data.php';

$pageTitle = "Web Design & Development Company in Nacharam, Hyderabad | Zippy Softwares";
$pageDescription = "Top Web Design and Web Development Company in Nacharam, Hyderabad (500076) by Zippy Enterprises Private Limited. Modern responsive corporate websites, high-converting e-commerce platforms, and custom React/Next.js web applications.";
$canonicalPath = "/web-development.php";

$whatsappUrl = get_whatsapp_url("Web Development", "Hello Zippy Enterprises, I want to discuss a Web Development project requirement.");

include __DIR__ . '/includes/header.php';
?>

<!-- Hero Section -->
<section class="relative py-16 md:py-24 overflow-hidden bg-slate-900 text-white">
    <div class="absolute inset-0 cyber-grid opacity-25"></div>
    <div class="absolute -top-32 -left-32 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase bg-sky-500/10 border border-sky-400/30 text-sky-300 mb-6 backdrop-blur-md">
            <i data-lucide="globe" class="w-4 h-4 text-sky-400"></i>
            <span>Division 01 • Enterprise Web Engineering</span>
        </div>

        <h1 class="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto text-3d-hero">
            Web Development & <br class="hidden sm:inline" />
            <span class="text-gradient-cyan-3d">Business Portals</span>
        </h1>

        <p class="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            High-performance, secure, responsive web platforms built with React, Next.js, and modern cloud architecture. From corporate flagships to multi-vendor commerce engines.
        </p>

        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="contact.php?service=Web%20Development" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-base transition-all shadow-lg shadow-sky-500/25 hover:scale-105 active:scale-95">
                <span>Initiate Web Project</span>
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
                <div class="text-2xl sm:text-3xl font-black text-white">100%</div>
                <div class="text-xs text-sky-400 mt-1 font-semibold">Mobile Responsive</div>
            </div>
            <div class="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-md">
                <div class="text-2xl sm:text-3xl font-black text-white">&lt; 1.2s</div>
                <div class="text-xs text-sky-400 mt-1 font-semibold">LCP Speed Target</div>
            </div>
            <div class="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-md">
                <div class="text-2xl sm:text-3xl font-black text-white">99.9%</div>
                <div class="text-xs text-sky-400 mt-1 font-semibold">Uptime SLA Guarantee</div>
            </div>
            <div class="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-md">
                <div class="text-2xl sm:text-3xl font-black text-white">100%</div>
                <div class="text-xs text-sky-400 mt-1 font-semibold">IP Ownership Transferred</div>
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
                        <img src="assets/images/slider-web-development.jpg" alt="Web Development & Business Portals Blueprint" class="w-full h-auto object-contain mx-auto transition-transform duration-500 group-hover:scale-102">
                        <button type="button" onclick="openImageModal('assets/images/slider-web-development.jpg', 'Web Development & Business Portals - Full Blueprint')" class="absolute bottom-3 right-3 px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-black backdrop-blur-md text-white text-xs font-bold flex items-center gap-1.5 shadow-xl border border-sky-400/40 transition-all cursor-pointer hover:scale-105 active:scale-95">
                            <i data-lucide="maximize-2" class="w-3.5 h-3.5 text-sky-400"></i>
                            <span>Full Clarity 🔍</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Right: Capabilities Checklist -->
            <div class="lg:col-span-7 space-y-6">
                <span class="px-3.5 py-1.5 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200 inline-flex items-center gap-1.5 shadow-xs">
                    <i data-lucide="sparkles" class="w-3.5 h-3.5 text-sky-600"></i>
                    <span>Division 01 Capabilities</span>
                </span>

                <h2 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    Modern Websites. Powerful Portals. <br />
                    <span class="text-sky-600">Real Business Growth.</span>
                </h2>

                <p class="text-slate-600 text-base leading-relaxed">
                    We create professional, responsive, and SEO-friendly websites that help your business get noticed, build trust, and generate more leads. Every build includes custom domain, SSL certification, fast hosting, and technical on-page SEO.
                </p>

                <!-- Service Grid from Poster -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">Business Websites & Landing Pages</strong>
                            <span class="text-slate-500 text-xs">High-converting pages built for lead generation</span>
                        </div>
                    </div>

                    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">Corporate & Company Websites</strong>
                            <span class="text-slate-500 text-xs">Enterprise multi-page hubs with investor/client sections</span>
                        </div>
                    </div>

                    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">E-Commerce Websites</strong>
                            <span class="text-slate-500 text-xs">Custom carts, payment gateways, invoice generator</span>
                        </div>
                    </div>

                    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">Hospital & Clinic Websites</strong>
                            <span class="text-slate-500 text-xs">Patient appointment booking, doctor profiles, teleconsult</span>
                        </div>
                    </div>

                    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">School & College Websites</strong>
                            <span class="text-slate-500 text-xs">Student inquiry portals, fee schedules, faculty hubs</span>
                        </div>
                    </div>

                    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">Booking & Appointment Systems</strong>
                            <span class="text-slate-500 text-xs">Live calendar sync, slot reservation, SMS/WhatsApp alerts</span>
                        </div>
                    </div>

                    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">Custom Domain & Cloud Hosting</strong>
                            <span class="text-slate-500 text-xs">DNS setup, SSL certificate, CDN caching, business emails</span>
                        </div>
                    </div>

                    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">SEO-Friendly Architecture</strong>
                            <span class="text-slate-500 text-xs">Schema.org markup, semantic HTML, sitemap & search indexing</span>
                        </div>
                    </div>
                </div>

                <div class="pt-4 flex flex-wrap gap-4">
                    <a href="contact.php?service=Web%20Development" class="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm inline-flex items-center gap-2 transition-all">
                        <span>Get Instant Quote</span>
                        <i data-lucide="arrow-right" class="w-4 h-4 text-sky-400"></i>
                    </a>
                    <button type="button" onclick="openImageModal('assets/images/slider-web-development.jpg', 'Web Development & Business Portals')" class="px-6 py-3 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-sm inline-flex items-center gap-2 transition-all">
                        <i data-lucide="zoom-in" class="w-4 h-4 text-sky-600"></i>
                        <span>Inspect High-Res Poster</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Deep Dive Service Categories -->
<section class="py-16 md:py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-14">
            <span class="text-xs font-bold text-sky-600 uppercase tracking-wider">Engineered Architectural Solutions</span>
            <h2 class="text-3xl sm:text-4xl font-black text-slate-900 mt-2">Comprehensive Web Engineering Solutions</h2>
            <p class="text-slate-600 text-base mt-3">From lightweight corporate presentations to robust cloud software portals.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Card 1 -->
            <div class="tilt-card p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between" data-tilt="true">
                <div>
                    <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                        <i data-lucide="building-2" class="w-6 h-6"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-2">Corporate & Brand Websites</h3>
                    <p class="text-slate-600 text-xs leading-relaxed mb-4">
                        Elite digital flagships engineered for corporate credibility, investor relations, and high-conversion client acquisition.
                    </p>
                    <ul class="space-y-2 text-xs text-slate-700">
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500"></i> Modern UI/UX Wireframing</li>
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500"></i> Dynamic Content Management</li>
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500"></i> Local & International SEO</li>
                    </ul>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span class="text-[11px] font-semibold text-slate-400">React • Next.js • Tailwind</span>
                    <a href="contact.php?service=Corporate%20Websites" class="text-sky-600 hover:text-sky-700 font-bold text-xs inline-flex items-center gap-1">Inquire <i data-lucide="chevron-right" class="w-3 h-3"></i></a>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="tilt-card p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between" data-tilt="true">
                <div>
                    <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                        <i data-lucide="shopping-cart" class="w-6 h-6"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-2">E-Commerce & Digital Commerce</h3>
                    <p class="text-slate-600 text-xs leading-relaxed mb-4">
                        Scalable online storefronts with frictionless checkout, multi-gateway payments (UPI, Cards, Razorpay), and automated inventory.
                    </p>
                    <ul class="space-y-2 text-xs text-slate-700">
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500"></i> Razorpay & Stripe Gateway</li>
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500"></i> Automated Order & Invoice PDF</li>
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500"></i> WhatsApp Order Notifications</li>
                    </ul>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span class="text-[11px] font-semibold text-slate-400">Full-Stack Commerce</span>
                    <a href="contact.php?service=Ecommerce" class="text-sky-600 hover:text-sky-700 font-bold text-xs inline-flex items-center gap-1">Inquire <i data-lucide="chevron-right" class="w-3 h-3"></i></a>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="tilt-card p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between" data-tilt="true">
                <div>
                    <div class="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5">
                        <i data-lucide="app-window" class="w-6 h-6"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-2">Custom SaaS & Web Portals</h3>
                    <p class="text-slate-600 text-xs leading-relaxed mb-4">
                        Complex client dashboards, subscription billing engines, multi-tenant database designs, and high-availability cloud deployments.
                    </p>
                    <ul class="space-y-2 text-xs text-slate-700">
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500"></i> Role-Based Access (RBAC)</li>
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500"></i> Real-time Analytics Visualizer</li>
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500"></i> RESTful / GraphQL API Backends</li>
                    </ul>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span class="text-[11px] font-semibold text-slate-400">Node • Python • PostgreSQL</span>
                    <a href="contact.php?service=Custom%20SaaS" class="text-sky-600 hover:text-sky-700 font-bold text-xs inline-flex items-center gap-1">Inquire <i data-lucide="chevron-right" class="w-3 h-3"></i></a>
                </div>
            </div>

            <!-- Card 4 -->
            <div class="tilt-card p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between" data-tilt="true">
                <div>
                    <div class="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5">
                        <i data-lucide="shield-check" class="w-6 h-6"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-2">Enterprise Intranets & Portals</h3>
                    <p class="text-slate-600 text-xs leading-relaxed mb-4">
                        Secure internal communication portals, employee document repositories, attendance trackers, and operational intranets.
                    </p>
                    <ul class="space-y-2 text-xs text-slate-700">
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500"></i> End-to-End Encryption</li>
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500"></i> Single Sign-On (SSO / OAuth)</li>
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500"></i> Automated Daily Backups</li>
                    </ul>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span class="text-[11px] font-semibold text-slate-400">Enterprise Security</span>
                    <a href="contact.php?service=Enterprise%20Intranet" class="text-sky-600 hover:text-sky-700 font-bold text-xs inline-flex items-center gap-1">Inquire <i data-lucide="chevron-right" class="w-3 h-3"></i></a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Technology Stack Standards -->
<section class="py-14 bg-white border-y border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-10">
            <span class="text-xs font-bold text-sky-600 uppercase tracking-wider">Battle-Tested Architecture</span>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 mt-2">Technology Stack Standards</h2>
            <p class="text-slate-500 text-xs sm:text-sm mt-2">Every line of code is structured for zero technical debt and elastic vertical scaling.</p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-400 transition-colors">
                <div class="font-extrabold text-slate-900 text-sm">React & Next.js</div>
                <div class="text-[11px] text-slate-500 mt-0.5">Frontend Excellence</div>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-400 transition-colors">
                <div class="font-extrabold text-slate-900 text-sm">Tailwind CSS</div>
                <div class="text-[11px] text-slate-500 mt-0.5">Responsive Styling</div>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-400 transition-colors">
                <div class="font-extrabold text-slate-900 text-sm">Node.js & PHP</div>
                <div class="text-[11px] text-slate-500 mt-0.5">Scalable Backends</div>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-400 transition-colors">
                <div class="font-extrabold text-slate-900 text-sm">PostgreSQL & MySQL</div>
                <div class="text-[11px] text-slate-500 mt-0.5">ACID Database</div>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-400 transition-colors">
                <div class="font-extrabold text-slate-900 text-sm">Cloudflare & SSL</div>
                <div class="text-[11px] text-slate-500 mt-0.5">DDoS & Edge CDN</div>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-400 transition-colors">
                <div class="font-extrabold text-slate-900 text-sm">Docker & AWS</div>
                <div class="text-[11px] text-slate-500 mt-0.5">Cloud Hosting</div>
            </div>
        </div>
    </div>
</section>

<!-- Division FAQ Section -->
<section class="py-16 md:py-20 bg-slate-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <span class="text-xs font-bold text-sky-600 uppercase tracking-wider">Frequently Asked Questions</span>
            <h2 class="text-3xl font-black text-slate-900 mt-2">Web Development FAQ</h2>
        </div>

        <div class="space-y-4">
            <details class="group bg-white rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden" open>
                <summary class="flex items-center justify-between cursor-pointer">
                    <h3 class="text-base font-bold text-slate-900">How long does it take to deliver a custom corporate website?</h3>
                    <span class="ml-4 flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform">
                        <i data-lucide="chevron-down" class="w-5 h-5"></i>
                    </span>
                </summary>
                <p class="mt-4 text-sm text-slate-600 leading-relaxed">
                    Standard business websites typically launch within 7 to 14 business days. Complex web applications, e-commerce engines, and custom portal integrations span 3 to 6 weeks, structured across clear milestone deliverables and live staging approvals.
                </p>
            </details>

            <details class="group bg-white rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary class="flex items-center justify-between cursor-pointer">
                    <h3 class="text-base font-bold text-slate-900">Do we own the full source code and intellectual property?</h3>
                    <span class="ml-4 flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform">
                        <i data-lucide="chevron-down" class="w-5 h-5"></i>
                    </span>
                </summary>
                <p class="mt-4 text-sm text-slate-600 leading-relaxed">
                    Yes, 100%. Upon project completion and milestone clearance, Zippy Enterprises Private Limited legally transfers full source code ownership, repository access, database credentials, and production assets to your company with zero ongoing license fees.
                </p>
            </details>

            <details class="group bg-white rounded-2xl border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary class="flex items-center justify-between cursor-pointer">
                    <h3 class="text-base font-bold text-slate-900">Can our team visit your office in Hyderabad?</h3>
                    <span class="ml-4 flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform">
                        <i data-lucide="chevron-down" class="w-5 h-5"></i>
                    </span>
                </summary>
                <p class="mt-4 text-sm text-slate-600 leading-relaxed">
                    Absolutely! Our corporate office is located at Sneha Apartments, HMT Nagar, Nacharam, Hyderabad, Telangana (500076). Clients are welcome to visit for in-person project discovery sessions, milestone demos, or architectural reviews.
                </p>
            </details>
        </div>
    </div>
</section>

<!-- Bottom CTA -->
<section class="py-16 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white relative overflow-hidden">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-3d-hero">Ready to Build Your High-Performance Web Portal?</h2>
        <p class="mt-4 text-slate-300 text-base max-w-2xl mx-auto">
            Contact our engineering team today for a transparent quote, milestone roadmap, and free architectural consultation.
        </p>
        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="contact.php?service=Web%20Development" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-base shadow-lg transition-all hover:scale-105">
                Initiate Project Discovery
            </a>
            <a href="<?php echo htmlspecialchars($whatsappUrl); ?>" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white font-semibold text-base transition-all">
                WhatsApp Directly: +91 63026 90251
            </a>
        </div>
    </div>
</section>

<?php include __DIR__ . '/includes/footer.php'; ?>
