<?php
/**
 * Zippy Softwares - Common Header Component
 * Corporate Navigation, SEO Meta, Tailwind CDN & 3D CSS Engine
 */

declare(strict_types=1);

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/data.php';

$pageTitle = $pageTitle ?? (BRAND_NAME . ' | IT Software Company in Nacharam, Hyderabad 500076 | Web, App & AI Development');
$pageDesc = $pageDesc ?? 'Top IT Software Development Company in Nacharam, Hyderabad (500076) - Zippy Enterprises Private Limited. Near by IT services, Custom Web Design, Android & iOS Mobile Apps, and AI Agent Automation.';
$pageKeywords = $pageKeywords ?? 'IT software company near me, software company in Nacharam 500076, web design Hyderabad, mobile app development Hyderabad, AI agent automation Hyderabad, Zippy Softwares, Zippy Enterprises Private Limited';
$currentPage = $currentPage ?? basename($_SERVER['PHP_SELF'] ?? 'index.php', '.php');
$canonicalUrl = SITE_URL . '/' . ($currentPage === 'index' ? '' : $currentPage . '.php');
?>
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($pageTitle) ?></title>
    <meta name="description" content="<?= htmlspecialchars($pageDesc) ?>">
    <meta name="keywords" content="<?= htmlspecialchars($pageKeywords) ?>">
    <link rel="canonical" href="<?= htmlspecialchars($canonicalUrl) ?>">

    <!-- Open Graph Metadata -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="<?= htmlspecialchars($pageTitle) ?>">
    <meta property="og:description" content="<?= htmlspecialchars($pageDesc) ?>">
    <meta property="og:url" content="<?= htmlspecialchars($canonicalUrl) ?>">
    <meta property="og:site_name" content="<?= BRAND_NAME ?> - <?= LEGAL_NAME ?>">
    <meta property="og:image" content="<?= SITE_URL ?>/assets/images/slider-web-development.jpg">

    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">

    <!-- Google Fonts: Plus Jakarta Sans -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">

    <!-- Tailwind CSS (CDN for zero-build Native PHP execution) -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#102747',
                        royalBlue: '#1769AA',
                        cyanAccent: '#0284C7',
                        darkSlate: '#0F172A'
                    },
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif']
                    }
                }
            }
        }
    </script>

    <!-- Custom High-Impact 3D CSS Stylesheet -->
    <link rel="stylesheet" href="/assets/css/style.css">

    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 font-sans selection:bg-blue-600 selection:text-white">

<!-- Top Advisory & Local SEO Strip -->
<div class="bg-[#102747] text-slate-200 text-xs py-2 px-4 border-b border-slate-700/60">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span class="font-medium">Near By IT Software Development &bull; Nacharam, Hyderabad 500076</span>
        </div>

        <div class="flex items-center gap-4 text-xs">
            <button type="button" onclick="openHiringModal()" class="flex items-center gap-1.5 text-amber-300 hover:text-white font-semibold transition-colors bg-blue-900/70 px-2.5 py-0.5 rounded-full border border-amber-400/40">
                <i data-lucide="sparkles" class="w-3 h-3 text-amber-300"></i>
                <span>We Are Hiring: 4 Marketing Executives</span>
            </button>
            <span class="text-slate-400 hidden md:inline">|</span>
            <a href="tel:<?= CONTACT_PHONE_RAW ?>" class="hidden md:flex items-center gap-1.5 text-white hover:text-cyan-300 font-bold transition-colors">
                <i data-lucide="phone" class="w-3 h-3 text-cyan-400"></i>
                <span><?= CONTACT_PHONE_DISPLAY ?></span>
            </a>
        </div>
    </div>
</div>

<!-- Main Corporate Navigation Bar -->
<header class="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <!-- Brand Identity Logo & Name -->
        <a href="/index.php" class="flex items-center gap-3 group shrink-0">
            <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden shadow-md border-2 border-slate-200 bg-black transition-transform duration-300 group-hover:scale-105">
                <img src="/assets/images/zippy-logo.jpg" alt="<?= BRAND_NAME ?>" class="w-full h-full object-cover">
            </div>
            <div>
                <span class="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight block leading-tight group-hover:text-blue-600 transition-colors">
                    <?= BRAND_NAME ?>
                </span>
                <span class="text-[10px] text-slate-500 font-medium block">
                    <?= LEGAL_NAME ?>
                </span>
            </div>
        </a>

        <!-- Desktop Navigation Links -->
        <div class="hidden lg:flex items-center gap-7 text-sm font-semibold">
            <a href="/index.php" class="<?= is_active_page('index', $currentPage) ?> transition-colors py-1">Home</a>
            
            <!-- Services with Dropdown -->
            <div class="relative group py-1">
                <a href="/services.php" class="<?= (in_array($currentPage, ['services', 'web-development', 'app-development', 'ai-automation'])) ? 'text-blue-600 font-bold' : 'text-slate-700 hover:text-blue-600 font-medium' ?> flex items-center gap-1 transition-colors">
                    <span>Services</span>
                    <i data-lucide="chevron-down" class="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:rotate-180"></i>
                </a>
                
                <!-- Dropdown Menu -->
                <div class="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 hidden group-hover:block transition-all z-50 animate-fadeIn">
                    <a href="/web-development.php" class="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                        <div class="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                            <i data-lucide="globe" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <div class="text-xs font-bold text-slate-900">Web Development</div>
                            <div class="text-[11px] text-slate-500">Business Portals & High-Speed Web</div>
                        </div>
                    </a>

                    <a href="/app-development.php" class="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                        <div class="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                            <i data-lucide="smartphone" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <div class="text-xs font-bold text-slate-900">Custom Software & Apps</div>
                            <div class="text-[11px] text-slate-500">Mobile Apps, CRM, ERP & Invoicing</div>
                        </div>
                    </a>

                    <a href="/ai-automation.php" class="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                        <div class="p-2 rounded-lg bg-sky-50 text-sky-600 shrink-0">
                            <i data-lucide="bot" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <div class="text-xs font-bold text-slate-900">AI Agent & Automation</div>
                            <div class="text-[11px] text-slate-500">Chatbots, Voice Telephony & OCR</div>
                        </div>
                    </a>
                </div>
            </div>

            <a href="/about.php" class="<?= is_active_page('about', $currentPage) ?> transition-colors py-1">About Us</a>
            <a href="/process.php" class="<?= is_active_page('process', $currentPage) ?> transition-colors py-1">Process</a>
            <a href="/portfolio.php" class="<?= is_active_page('portfolio', $currentPage) ?> transition-colors py-1">Portfolio</a>
            <a href="/contact.php" class="<?= is_active_page('contact', $currentPage) ?> transition-colors py-1">Contact</a>
        </div>

        <!-- Right Side CTA Actions -->
        <div class="hidden sm:flex items-center gap-3">
            <a href="<?= get_whatsapp_url() ?>" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold transition-all shadow-2xs hover:-translate-y-0.5">
                <i data-lucide="message-square" class="w-3.5 h-3.5 text-emerald-600"></i>
                <span>WhatsApp</span>
            </a>

            <a href="/contact.php" class="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5">
                <span>Discuss Project</span>
                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </a>
        </div>

        <!-- Mobile Menu Trigger Button -->
        <div class="flex lg:hidden items-center gap-2">
            <a href="<?= get_whatsapp_url() ?>" target="_blank" rel="noopener noreferrer" class="p-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                <i data-lucide="message-square" class="w-4 h-4"></i>
            </a>
            <button type="button" id="mobileMenuBtn" class="p-2 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200" aria-label="Open Navigation Menu">
                <i data-lucide="menu" class="w-6 h-6"></i>
            </button>
        </div>

    </nav>
</header>

<!-- Mobile Navigation Drawer -->
<div id="mobileDrawer" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex justify-end">
    <div class="w-full max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between p-6 overflow-y-auto animate-fadeIn">
        <div>
            <div class="flex items-center justify-between pb-6 border-b border-slate-200">
                <div class="flex items-center gap-2.5">
                    <img src="/assets/images/zippy-logo.jpg" alt="<?= BRAND_NAME ?>" class="w-9 h-9 rounded-lg object-cover">
                    <span class="font-bold text-slate-900"><?= BRAND_NAME ?></span>
                </div>
                <button type="button" id="closeMobileDrawer" class="p-2 rounded-lg bg-slate-100 text-slate-600">
                    <i data-lucide="x" class="w-5 h-5"></i>
                </button>
            </div>

            <div class="py-6 space-y-4 text-base font-semibold text-slate-800">
                <a href="/index.php" class="block py-2 hover:text-blue-600">Home</a>
                <a href="/services.php" class="block py-2 hover:text-blue-600">All Services</a>
                <div class="pl-4 space-y-2 border-l-2 border-blue-200 text-sm font-medium text-slate-600">
                    <a href="/web-development.php" class="block py-1 hover:text-blue-600">&bull; Web Development</a>
                    <a href="/app-development.php" class="block py-1 hover:text-blue-600">&bull; App Development</a>
                    <a href="/ai-automation.php" class="block py-1 hover:text-blue-600">&bull; AI Agent & Automation</a>
                </div>
                <a href="/about.php" class="block py-2 hover:text-blue-600">About Us</a>
                <a href="/process.php" class="block py-2 hover:text-blue-600">Development Process</a>
                <a href="/portfolio.php" class="block py-2 hover:text-blue-600">Client Portfolio</a>
                <a href="/contact.php" class="block py-2 hover:text-blue-600">Contact & Office</a>
            </div>
        </div>

        <div class="pt-6 border-t border-slate-200 space-y-3">
            <button type="button" onclick="openHiringModal()" class="w-full py-2.5 px-4 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2">
                <i data-lucide="briefcase" class="w-4 h-4"></i>
                <span>We Are Hiring (4 Positions)</span>
            </button>
            <a href="<?= get_whatsapp_url() ?>" target="_blank" rel="noopener noreferrer" class="w-full py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2">
                <i data-lucide="message-square" class="w-4 h-4"></i>
                <span>Chat on WhatsApp</span>
            </a>
            <a href="tel:<?= CONTACT_PHONE_RAW ?>" class="w-full py-2.5 px-4 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs flex items-center justify-center gap-2">
                <i data-lucide="phone" class="w-4 h-4 text-blue-600"></i>
                <span>Call <?= CONTACT_PHONE_DISPLAY ?></span>
            </a>
        </div>
    </div>
</div>

<main class="flex-grow">
