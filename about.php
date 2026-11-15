<?php
/**
 * Zippy Softwares - About Us & Corporate Heritage
 * A Division of Zippy Enterprises Private Limited
 */
require_once __DIR__ . '/includes/config.php';
require_once __DIR__ . '/includes/data.php';

$pageTitle = "About Us | Zippy Softwares & Zippy Enterprises Private Limited";
$pageDescription = "Learn about Zippy Softwares (A Division of Zippy Enterprises Private Limited), our engineering ethos, technology stack standards, corporate governance, and commitment to custom software excellence in Hyderabad.";
$canonicalPath = "/about.php";

$whatsappUrl = get_whatsapp_url("Corporate Inquiry", "Hello Zippy Enterprises, I want to learn more about your company services and partnerships.");

include __DIR__ . '/includes/header.php';
?>

<!-- Hero Header -->
<section class="relative py-16 md:py-24 bg-slate-900 text-white overflow-hidden">
    <div class="absolute inset-0 cyber-grid opacity-25"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <!-- Official Emblem with 3D Floating -->
        <div class="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl border-4 border-sky-400/50 bg-black image-3d-floating">
            <img src="assets/images/zippy-logo.jpg" alt="Zippy Enterprises Emblem" class="w-full h-full object-cover">
        </div>

        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase bg-sky-500/10 border border-sky-400/30 text-sky-300 mb-6 backdrop-blur-md">
            <i data-lucide="building-2" class="w-4 h-4 text-sky-400"></i>
            <span>Corporate Identity & Heritage</span>
        </div>

        <h1 class="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto text-3d-hero">
            Engineered for Precision. <br class="hidden sm:inline" />
            <span class="text-gradient-cyan-3d">Built for Enterprise Scale.</span>
        </h1>

        <p class="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            <strong class="text-white font-bold">Zippy Softwares</strong> is the premier IT services and custom software engineering division of <strong class="text-sky-400 font-bold"><?php echo COMPANY_LEGAL_NAME; ?></strong>, headquartered in Nacharam, Hyderabad, Telangana. We partner with startups, growing SMBs, and established enterprises to engineer high-velocity digital systems.
        </p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-300">
            <span class="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 shadow-xs">
                <i data-lucide="shield-check" class="w-4 h-4 text-sky-400"></i>
                CIN: <?php echo COMPANY_CIN; ?>
            </span>
            <span class="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 shadow-xs">
                <i data-lucide="map-pin" class="w-4 h-4 text-emerald-400"></i>
                Nacharam, Hyderabad 500076
            </span>
            <span class="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 shadow-xs">
                <i data-lucide="award" class="w-4 h-4 text-yellow-400"></i>
                100% Client Code Ownership
            </span>
        </div>
    </div>
</section>

<!-- Company Governance & Leadership -->
<section class="py-16 md:py-24 bg-white border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div class="lg:col-span-6 space-y-6">
                <span class="text-xs font-bold text-sky-600 uppercase tracking-wider">Engineering Manifesto</span>
                <h2 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    Why Companies Partner With Zippy Softwares
                </h2>
                <p class="text-slate-600 text-base leading-relaxed">
                    Most software agencies deliver monolithic, bloated codebases with hidden vendor lock-in. At Zippy Softwares, we reject that model. Every web application, mobile product, and AI automation pipeline we construct is modular, fully documented, and legally transferred to you upon completion.
                </p>

                <div class="space-y-4 pt-2">
                    <div class="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <i data-lucide="check-circle-2" class="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">Zero Technical Debt & Modular Repositories</strong>
                            <p class="text-slate-500 text-xs mt-0.5">Clean architecture, typed interfaces, and exhaustive automated unit tests.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <i data-lucide="check-circle-2" class="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">Physical Office & In-Person Collaboration</strong>
                            <p class="text-slate-500 text-xs mt-0.5">Meet our engineers at our Nacharam office for whiteboarding and milestone demos.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <i data-lucide="check-circle-2" class="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">Predictable Milestone Pricing</strong>
                            <p class="text-slate-500 text-xs mt-0.5">Transparent scope of work, clear milestone disbursements, and zero hidden costs.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right: Corporate Snapshot Card with 3D Tilt -->
            <div class="lg:col-span-6 flex justify-center">
                <div class="tilt-card p-8 rounded-3xl bg-slate-900 text-white border-2 border-slate-700 shadow-2xl w-full max-w-lg" data-tilt="true">
                    <div class="flex items-center gap-3 border-b border-slate-800 pb-5 mb-6">
                        <div class="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-black text-xl">
                            Z
                        </div>
                        <div>
                            <h3 class="font-extrabold text-white text-lg"><?php echo COMPANY_LEGAL_NAME; ?></h3>
                            <p class="text-xs text-sky-400">Registered Private Limited Company</p>
                        </div>
                    </div>

                    <div class="space-y-4 text-xs">
                        <div class="flex justify-between py-2 border-b border-slate-800">
                            <span class="text-slate-400">Corporate Identity Number (CIN)</span>
                            <span class="font-mono font-bold text-white"><?php echo COMPANY_CIN; ?></span>
                        </div>
                        <div class="flex justify-between py-2 border-b border-slate-800">
                            <span class="text-slate-400">Headquarters</span>
                            <span class="font-bold text-white">Nacharam, Hyderabad, Telangana</span>
                        </div>
                        <div class="flex justify-between py-2 border-b border-slate-800">
                            <span class="text-slate-400">Postal Pincode</span>
                            <span class="font-bold text-white">500076</span>
                        </div>
                        <div class="flex justify-between py-2 border-b border-slate-800">
                            <span class="text-slate-400">Direct Telephone</span>
                            <span class="font-bold text-sky-400"><?php echo COMPANY_PHONE; ?></span>
                        </div>
                        <div class="flex justify-between py-2 border-b border-slate-800">
                            <span class="text-slate-400">Corporate Email</span>
                            <span class="font-bold text-sky-400"><?php echo COMPANY_EMAIL; ?></span>
                        </div>
                        <div class="flex justify-between py-2">
                            <span class="text-slate-400">Official Website</span>
                            <span class="font-bold text-sky-400">zippysoftwares.in</span>
                        </div>
                    </div>

                    <div class="mt-8 pt-6 border-t border-slate-800">
                        <a href="contact.php" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm text-center block transition-all shadow-lg">
                            Schedule In-Person Consultation
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

<!-- 4 Core Engineering Pillars -->
<section class="py-16 md:py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-14">
            <span class="text-xs font-bold text-sky-600 uppercase tracking-wider">Our Architectural Principles</span>
            <h2 class="text-3xl sm:text-4xl font-black text-slate-900 mt-2">The 4 Pillars of Zippy Engineering</h2>
            <p class="text-slate-600 text-base mt-3">Every project follows these non-negotiable quality and security benchmarks.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="tilt-card p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md" data-tilt="true">
                <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                    <i data-lucide="target" class="w-6 h-6"></i>
                </div>
                <h3 class="text-lg font-bold text-slate-900 mb-2">1. Precision Architecture</h3>
                <p class="text-slate-600 text-xs leading-relaxed">
                    We start with thorough technical discovery, database ER diagrams, and interactive Figma wireframes before writing code.
                </p>
            </div>

            <div class="tilt-card p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md" data-tilt="true">
                <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                    <i data-lucide="lock" class="w-6 h-6"></i>
                </div>
                <h3 class="text-lg font-bold text-slate-900 mb-2">2. Security by Design</h3>
                <p class="text-slate-600 text-xs leading-relaxed">
                    OWASP Top 10 compliance, SQL injection prevention, strict CORS policies, bcrypt password hashing, and encrypted JWT tokens.
                </p>
            </div>

            <div class="tilt-card p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md" data-tilt="true">
                <div class="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-5">
                    <i data-lucide="zap" class="w-6 h-6"></i>
                </div>
                <h3 class="text-lg font-bold text-slate-900 mb-2">3. Sub-Second Velocity</h3>
                <p class="text-slate-600 text-xs leading-relaxed">
                    Server-side rendering, CDN edge asset caching, optimized database indexes, and minimal bundle sizes ensure instantaneous page loads.
                </p>
            </div>

            <div class="tilt-card p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md" data-tilt="true">
                <div class="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5">
                    <i data-lucide="shield-check" class="w-6 h-6"></i>
                </div>
                <h3 class="text-lg font-bold text-slate-900 mb-2">4. Complete Client Freedom</h3>
                <p class="text-slate-600 text-xs leading-relaxed">
                    Zero lock-in. You receive the complete git repository, Docker deployment scripts, environment configs, and database dumps.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Office Location & Maps Integration -->
<section class="py-16 md:py-20 bg-white border-y border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div class="lg:col-span-5 space-y-5">
                <span class="text-xs font-bold text-sky-600 uppercase tracking-wider">Physical Head Office</span>
                <h2 class="text-3xl font-black text-slate-900 tracking-tight">Visit Our Office in Nacharam</h2>
                <p class="text-slate-600 text-sm leading-relaxed">
                    We welcome our clients, partners, and aspiring engineering talent to visit us for live project discussions, architectural reviews, and contract finalization.
                </p>

                <div class="space-y-3 pt-2 text-xs">
                    <div class="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                        <i data-lucide="map-pin" class="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold">Address</strong>
                            <span class="text-slate-600"><?php echo COMPANY_ADDRESS; ?></span>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                        <i data-lucide="clock" class="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold">Working Hours</strong>
                            <span class="text-slate-600">Monday - Saturday: 9:30 AM - 7:00 PM IST (Sunday Closed)</span>
                        </div>
                    </div>

                    <div class="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                        <i data-lucide="phone" class="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold">Direct Line & WhatsApp</strong>
                            <span class="text-slate-600"><?php echo COMPANY_PHONE; ?></span>
                        </div>
                    </div>
                </div>

                <div class="pt-2 flex gap-3">
                    <a href="https://maps.google.com/?q=Nacharam+Hyderabad+500076" target="_blank" rel="noopener noreferrer" class="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs inline-flex items-center gap-2 transition-all">
                        <i data-lucide="navigation" class="w-4 h-4 text-sky-400"></i>
                        <span>Get Directions on Google Maps</span>
                    </a>
                </div>
            </div>

            <div class="lg:col-span-7">
                <div class="rounded-2xl overflow-hidden border-2 border-slate-200 shadow-xl h-[380px] bg-slate-100 relative">
                    <iframe 
                        title="Zippy Softwares Office Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.629199990835!2d78.55835694999999!3d17.4282544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb997f74c7cf8d%3A0x7d6f5f3e9c5c2d33!2sNacharam%2C%20Hyderabad%2C%20Telangana%20500076!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                        class="w-full h-full border-0" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>

        </div>
    </div>
</section>

<!-- Bottom CTA -->
<section class="py-16 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white relative overflow-hidden">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-3d-hero">Partner With Hyderabad's Premier Engineering Team</h2>
        <p class="mt-4 text-slate-300 text-base max-w-2xl mx-auto">
            Bring your software requirements to reality with verified engineering standards and transparent corporate accountability.
        </p>
        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="contact.php" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-base shadow-lg transition-all hover:scale-105">
                Contact Our Leadership Team
            </a>
            <a href="<?php echo htmlspecialchars($whatsappUrl); ?>" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white font-semibold text-base transition-all">
                WhatsApp Directly: +91 63026 90251
            </a>
        </div>
    </div>
</section>

<?php include __DIR__ . '/includes/footer.php'; ?>
