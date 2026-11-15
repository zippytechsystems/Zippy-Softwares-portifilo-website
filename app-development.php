<?php
/**
 * Zippy Softwares - Custom Software & App Development
 * A Division of Zippy Enterprises Private Limited
 */
require_once __DIR__ . '/includes/config.php';
require_once __DIR__ . '/includes/data.php';

$pageTitle = "Android & iOS Mobile App Development Company in Hyderabad | Zippy Softwares";
$pageDescription = "Premier Android and iOS Mobile Application Development Company based in Nacharam, Hyderabad (500076) - Zippy Enterprises Private Limited. High-performance native & cross-platform Flutter/React Native mobile apps, custom enterprise ERPs, and business software.";
$canonicalPath = "/app-development.php";

$whatsappUrl = get_whatsapp_url("App Development", "Hello Zippy Enterprises, I want to discuss a Custom Software / Mobile Application project.");

include __DIR__ . '/includes/header.php';
?>

<!-- Hero Section -->
<section class="relative py-16 md:py-24 overflow-hidden bg-slate-900 text-white">
    <div class="absolute inset-0 cyber-grid opacity-25"></div>
    <div class="absolute -top-32 -left-32 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 mb-6 backdrop-blur-md">
            <i data-lucide="smartphone" class="w-4 h-4 text-emerald-400"></i>
            <span>Division 02 • Mobile Apps & Enterprise Systems</span>
        </div>

        <h1 class="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto text-3d-hero">
            Custom Software & <br class="hidden sm:inline" />
            <span class="text-gradient-cyan-3d">App Development</span>
        </h1>

        <p class="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Turn your vision into high-performance Android & iOS mobile applications, custom ERPs, CRM systems, and automated billing software with bulletproof security.
        </p>

        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="contact.php?service=App%20Development" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-base transition-all shadow-lg shadow-emerald-500/25 hover:scale-105 active:scale-95">
                <span>Build Your Application</span>
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
                <div class="text-2xl sm:text-3xl font-black text-white">Flutter & Native</div>
                <div class="text-xs text-emerald-400 mt-1 font-semibold">Cross-Platform Ready</div>
            </div>
            <div class="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-md">
                <div class="text-2xl sm:text-3xl font-black text-white">Offline Sync</div>
                <div class="text-xs text-emerald-400 mt-1 font-semibold">Local SQLite / Encrypted</div>
            </div>
            <div class="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-md">
                <div class="text-2xl sm:text-3xl font-black text-white">Bank-Grade</div>
                <div class="text-xs text-emerald-400 mt-1 font-semibold">AES-256 & JWT Auth</div>
            </div>
            <div class="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-md">
                <div class="text-2xl sm:text-3xl font-black text-white">Full IP</div>
                <div class="text-xs text-emerald-400 mt-1 font-semibold">100% Client Ownership</div>
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
                        <img src="assets/images/slider-app-development.jpg" alt="Custom Software & App Development Blueprint" class="w-full h-auto object-contain mx-auto transition-transform duration-500 group-hover:scale-102">
                        <button type="button" onclick="openImageModal('assets/images/slider-app-development.jpg', 'Custom Software & App Development - Full Blueprint')" class="absolute bottom-3 right-3 px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-black backdrop-blur-md text-white text-xs font-bold flex items-center gap-1.5 shadow-xl border border-emerald-400/40 transition-all cursor-pointer hover:scale-105 active:scale-95">
                            <i data-lucide="maximize-2" class="w-3.5 h-3.5 text-emerald-400"></i>
                            <span>Full Clarity 🔍</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Right: Capabilities Checklist -->
            <div class="lg:col-span-7 space-y-6">
                <span class="px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 inline-flex items-center gap-1.5 shadow-xs">
                    <i data-lucide="sparkles" class="w-3.5 h-3.5 text-emerald-600"></i>
                    <span>Division 02 Capabilities</span>
                </span>

                <h2 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    Turn Your Ideas Into <br />
                    <span class="text-emerald-600">Powerful Digital Solutions</span>
                </h2>

                <p class="text-slate-600 text-base leading-relaxed">
                    From enterprise resource planning to intuitive mobile applications on Google Play Store & Apple App Store. We engineer tailored software designed around your actual operational workflows.
                </p>

                <!-- Service Grid from Poster -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">Mobile App Development</strong>
                            <span class="text-slate-500 text-xs">Android & iOS cross-platform apps built in Flutter</span>
                        </div>
                    </div>

                    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">Business Management Software</strong>
                            <span class="text-slate-500 text-xs">Custom business ERP, CRM, and operational portals</span>
                        </div>
                    </div>

                    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">Billing & Invoicing Systems</strong>
                            <span class="text-slate-500 text-xs">GST compliant billing, thermal printer integration, receipts</span>
                        </div>
                    </div>

                    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">Inventory & Stock Tracking</strong>
                            <span class="text-slate-500 text-xs">Barcode/QR scanner, low-stock alerts, warehouse management</span>
                        </div>
                    </div>

                    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">Appointment Booking Systems</strong>
                            <span class="text-slate-500 text-xs">Staff scheduling, customer booking apps, instant alerts</span>
                        </div>
                    </div>

                    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">Sports & Event Management Apps</strong>
                            <span class="text-slate-500 text-xs">Tournament scoring, member passes, stadium ticket booking</span>
                        </div>
                    </div>

                    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">API Integration & Third Party Services</strong>
                            <span class="text-slate-500 text-xs">Payment gateways, SMS, WhatsApp Business API, CRM sync</span>
                        </div>
                    </div>

                    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                        <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">Data Analytics & Executive Dashboards</strong>
                            <span class="text-slate-500 text-xs">Real-time charts, revenue metrics, automated CSV export</span>
                        </div>
                    </div>
                </div>

                <div class="pt-4 flex flex-wrap gap-4">
                    <a href="contact.php?service=App%20Development" class="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm inline-flex items-center gap-2 transition-all">
                        <span>Discuss App Requirements</span>
                        <i data-lucide="arrow-right" class="w-4 h-4 text-emerald-400"></i>
                    </a>
                    <button type="button" onclick="openImageModal('assets/images/slider-app-development.jpg', 'Custom Software & App Development')" class="px-6 py-3 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-sm inline-flex items-center gap-2 transition-all">
                        <i data-lucide="zoom-in" class="w-4 h-4 text-emerald-600"></i>
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
            <span class="text-xs font-bold text-emerald-600 uppercase tracking-wider">Engineered Architectural Solutions</span>
            <h2 class="text-3xl sm:text-4xl font-black text-slate-900 mt-2">Custom Software Specializations</h2>
            <p class="text-slate-600 text-base mt-3">Precision-built systems delivering measurable operational efficiency.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Card 1 -->
            <div class="tilt-card p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between" data-tilt="true">
                <div>
                    <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                        <i data-lucide="tablet-smartphone" class="w-6 h-6"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-2">Flutter & Native Mobile Apps</h3>
                    <p class="text-slate-600 text-xs leading-relaxed mb-4">
                        Single codebase reaching both Android & iOS with 60fps native performance, offline database, and push notifications.
                    </p>
                    <ul class="space-y-2 text-xs text-slate-700">
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500"></i> Play Store & App Store Publishing</li>
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500"></i> Firebase & Push Notifications</li>
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500"></i> Hardware Biometrics & Bluetooth</li>
                    </ul>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span class="text-[11px] font-semibold text-slate-400">Flutter • React Native • iOS</span>
                    <a href="contact.php?service=Mobile%20Apps" class="text-emerald-600 hover:text-emerald-700 font-bold text-xs inline-flex items-center gap-1">Inquire <i data-lucide="chevron-right" class="w-3 h-3"></i></a>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="tilt-card p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between" data-tilt="true">
                <div>
                    <div class="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-5">
                        <i data-lucide="briefcase" class="w-6 h-6"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-2">Custom ERP & CRM Portals</h3>
                    <p class="text-slate-600 text-xs leading-relaxed mb-4">
                        Consolidate sales pipelines, lead management, workforce attendance, and procurement into one unified dashboard.
                    </p>
                    <ul class="space-y-2 text-xs text-slate-700">
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500"></i> Multi-branch Role Hierarchy</li>
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500"></i> WhatsApp Lead Routing</li>
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500"></i> Live Executive Reporting</li>
                    </ul>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span class="text-[11px] font-semibold text-slate-400">Enterprise Workflows</span>
                    <a href="contact.php?service=Custom%20ERP" class="text-emerald-600 hover:text-emerald-700 font-bold text-xs inline-flex items-center gap-1">Inquire <i data-lucide="chevron-right" class="w-3 h-3"></i></a>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="tilt-card p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between" data-tilt="true">
                <div>
                    <div class="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                        <i data-lucide="calculator" class="w-6 h-6"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-2">Billing & Accounting Software</h3>
                    <p class="text-slate-600 text-xs leading-relaxed mb-4">
                        Point of Sale (POS) and accounting tools with GST invoice generation, thermal printing, barcode scanning, and stock alerts.
                    </p>
                    <ul class="space-y-2 text-xs text-slate-700">
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500"></i> GST / Non-GST Invoice PDF</li>
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500"></i> Fast Thermal Print Integration</li>
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500"></i> Ledger & Balance Sheet Export</li>
                    </ul>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span class="text-[11px] font-semibold text-slate-400">Desktop & Web POS</span>
                    <a href="contact.php?service=Billing%20Software" class="text-emerald-600 hover:text-emerald-700 font-bold text-xs inline-flex items-center gap-1">Inquire <i data-lucide="chevron-right" class="w-3 h-3"></i></a>
                </div>
            </div>

            <!-- Card 4 -->
            <div class="tilt-card p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between" data-tilt="true">
                <div>
                    <div class="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5">
                        <i data-lucide="layers" class="w-6 h-6"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-2">Hospital & Booking Portals</h3>
                    <p class="text-slate-600 text-xs leading-relaxed mb-4">
                        Custom clinic management portals, doctor schedules, patient records, electronic prescriptions, and token queue boards.
                    </p>
                    <ul class="space-y-2 text-xs text-slate-700">
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500"></i> Patient EHR Management</li>
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500"></i> Real-time Token Queue Display</li>
                        <li class="flex items-center gap-1.5"><i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500"></i> SMS & WhatsApp Reminders</li>
                    </ul>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span class="text-[11px] font-semibold text-slate-400">Healthcare Solutions</span>
                    <a href="contact.php?service=Clinic%20Management" class="text-emerald-600 hover:text-emerald-700 font-bold text-xs inline-flex items-center gap-1">Inquire <i data-lucide="chevron-right" class="w-3 h-3"></i></a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Bottom CTA -->
<section class="py-16 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white relative overflow-hidden">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-3d-hero">Transform Your Operations With Custom Software</h2>
        <p class="mt-4 text-slate-300 text-base max-w-2xl mx-auto">
            Discuss your application requirements directly with our Hyderabad engineering leads.
        </p>
        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="contact.php?service=App%20Development" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base shadow-lg transition-all hover:scale-105">
                Request Software Demo
            </a>
            <a href="<?php echo htmlspecialchars($whatsappUrl); ?>" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white font-semibold text-base transition-all">
                WhatsApp Directly: +91 63026 90251
            </a>
        </div>
    </div>
</section>

<?php include __DIR__ . '/includes/footer.php'; ?>
