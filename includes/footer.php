<?php
/**
 * Zippy Softwares - Common Footer Component
 * Physical Address, Corporate Divisions, Local Areas, Modals, and Main JS Engine
 */

declare(strict_types=1);

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/data.php';
?>
</main>

<!-- Corporate Footer Section -->
<footer class="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Main Footer Columns -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
            
            <!-- Column 1: Company Profile & Registered Office (4 cols) -->
            <div class="lg:col-span-4 space-y-4">
                <div class="flex items-center gap-3">
                    <div class="w-11 h-11 rounded-xl overflow-hidden border-2 border-slate-700 bg-black">
                        <img src="/assets/images/zippy-logo.jpg" alt="<?= BRAND_NAME ?>" class="w-full h-full object-cover">
                    </div>
                    <div>
                        <span class="text-xl font-extrabold text-white tracking-tight block">
                            <?= BRAND_NAME ?>
                        </span>
                        <span class="text-[11px] text-slate-400 font-medium block">
                            <?= LEGAL_NAME ?>
                        </span>
                    </div>
                </div>

                <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Flagship digital engineering division of <strong><?= LEGAL_NAME ?></strong>. We build enterprise web portals, custom Android & iOS mobile applications, and autonomous AI automation workflows.
                </p>

                <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2 text-xs">
                    <div class="flex items-start gap-2.5 text-slate-300">
                        <i data-lucide="map-pin" class="w-4 h-4 text-cyan-400 shrink-0 mt-0.5"></i>
                        <span><?= OFFICE_FULL_ADDRESS ?></span>
                    </div>
                    <div class="flex items-center gap-2.5 text-slate-300">
                        <i data-lucide="phone" class="w-4 h-4 text-emerald-400 shrink-0"></i>
                        <a href="tel:<?= CONTACT_PHONE_RAW ?>" class="hover:text-white font-bold"><?= CONTACT_PHONE_DISPLAY ?></a>
                    </div>
                    <div class="flex items-center gap-2.5 text-slate-300">
                        <i data-lucide="mail" class="w-4 h-4 text-blue-400 shrink-0"></i>
                        <a href="mailto:<?= OFFICIAL_EMAIL ?>" class="hover:text-white"><?= OFFICIAL_EMAIL ?></a>
                    </div>
                    <div class="flex items-center gap-2.5 text-slate-400 pt-1 border-t border-slate-700/80 text-[11px]">
                        <span>CIN: <strong class="text-slate-300 font-mono"><?= CIN_NUMBER ?></strong></span>
                    </div>
                </div>
            </div>

            <!-- Column 2: Three Core Divisions (3 cols) -->
            <div class="lg:col-span-3 space-y-4">
                <h4 class="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Core Divisions
                </h4>
                <div class="space-y-3 text-xs">
                    <a href="/web-development.php" class="block p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 transition-colors group">
                        <strong class="text-white block group-hover:text-cyan-400 transition-colors">01. Web Development</strong>
                        <span class="text-slate-400 text-[11px] block mt-0.5">Business Websites, E-Commerce & Web Apps</span>
                    </a>

                    <a href="/app-development.php" class="block p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 transition-colors group">
                        <strong class="text-white block group-hover:text-emerald-400 transition-colors">02. App Development</strong>
                        <span class="text-slate-400 text-[11px] block mt-0.5">Mobile Apps (Android & iOS), ERP & CRM</span>
                    </a>

                    <a href="/ai-automation.php" class="block p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 transition-colors group">
                        <strong class="text-white block group-hover:text-sky-400 transition-colors">03. AI Agent & Automation</strong>
                        <span class="text-slate-400 text-[11px] block mt-0.5">LLM Chatbots, Voice Bots & Document OCR</span>
                    </a>
                </div>
            </div>

            <!-- Column 3: Quick Links & Careers (2 cols) -->
            <div class="lg:col-span-2 space-y-3">
                <h4 class="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Company
                </h4>
                <ul class="space-y-2 text-xs text-slate-400">
                    <li><a href="/index.php" class="hover:text-white transition-colors">Home</a></li>
                    <li><a href="/services.php" class="hover:text-white transition-colors">All Services</a></li>
                    <li><a href="/about.php" class="hover:text-white transition-colors">About Us</a></li>
                    <li><a href="/process.php" class="hover:text-white transition-colors">Our 7-Stage Process</a></li>
                    <li><a href="/portfolio.php" class="hover:text-white transition-colors">Client Portfolio</a></li>
                    <li><a href="/contact.php" class="hover:text-white transition-colors">Contact & Office</a></li>
                    <li>
                        <button type="button" onclick="openInternshipModal()" class="text-sky-400 hover:text-white font-bold flex items-center gap-1 mt-1">
                            <i data-lucide="graduation-cap" class="w-3 h-3 text-sky-400"></i>
                            <span>Internship Openings</span>
                        </button>
                    </li>
                    <li>
                        <button type="button" onclick="openHiringModal()" class="text-amber-400 hover:text-white font-bold flex items-center gap-1 mt-1">
                            <i data-lucide="sparkles" class="w-3 h-3 text-amber-300"></i>
                            <span>Careers (4 Openings)</span>
                        </button>
                    </li>
                    <li>
                        <a href="/admin.php" class="text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1 mt-1">
                            <i data-lucide="lock" class="w-3 h-3 text-slate-500"></i>
                            <span>Admin Panel</span>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Column 4: Local Service Hub (3 cols) -->
            <div class="lg:col-span-3 space-y-3">
                <h4 class="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Local Service Hub (Hyderabad)
                </h4>
                <p class="text-[11px] text-slate-400">
                    On-site consulting & direct software deployments across:
                </p>
                <div class="flex flex-wrap gap-1.5 text-[11px]">
                    <span class="px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">Nacharam (500076)</span>
                    <span class="px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">Habsiguda (500007)</span>
                    <span class="px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">Mallapur (500076)</span>
                    <span class="px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">Uppal (500039)</span>
                    <span class="px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">Cherlapally</span>
                    <span class="px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">Secunderabad</span>
                    <span class="px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">Narapally</span>
                    <span class="px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">LB Nagar</span>
                </div>

                <div class="pt-2">
                    <a href="<?= OFFICE_MAPS_URL ?>" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 underline font-medium">
                        <i data-lucide="map" class="w-3.5 h-3.5"></i>
                        <span>Open Office on Google Maps</span>
                    </a>
                </div>
            </div>

        </div>

        <!-- Bottom Copyright & Legal Links -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
                &copy; <?= date('Y') ?> <strong><?= LEGAL_NAME ?></strong> (<?= BRAND_NAME ?>). All rights reserved.
            </div>
            <div class="flex flex-wrap items-center gap-3 sm:gap-4 text-xs">
                <a href="/privacy-policy.php" class="hover:text-slate-300 transition-colors">Privacy Policy</a>
                <span>&bull;</span>
                <a href="/terms-conditions.php" class="hover:text-slate-300 transition-colors">Terms of Service</a>
                <span>&bull;</span>
                <a href="/sitemap.xml" target="_blank" class="hover:text-slate-300 transition-colors">Sitemap XML</a>
                <span>&bull;</span>
                <a href="/admin.php" class="text-slate-500 hover:text-cyan-400 transition-colors inline-flex items-center gap-1">
                    <i data-lucide="lock" class="w-3 h-3 text-slate-500"></i>
                    <span>Admin Panel</span>
                </a>
            </div>
        </div>

    </div>
</footer>

<?php
// Include Interactive Modals & Floating Buttons
require_once __DIR__ . '/image_modal.php';
require_once __DIR__ . '/hiring_modal.php';
require_once __DIR__ . '/internship_badge.php';
require_once __DIR__ . '/internship_modal.php';
require_once __DIR__ . '/project_modal.php';
require_once __DIR__ . '/whatsapp_button.php';
?>

<!-- JavaScript Core Engine -->
<script src="/assets/js/main.js"></script>
<script>
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
</script>
</body>
</html>
