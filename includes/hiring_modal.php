<?php
/**
 * Hiring Modal: 4 Digital Marketing Executives
 */
?>
<div id="hiringModal" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden items-center justify-center p-4 sm:p-6" onclick="closeHiringModal()">
    <div class="relative max-w-2xl w-full bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 max-h-[90vh] overflow-y-auto" onclick="event.stopPropagation()">
        
        <!-- Close Button -->
        <button type="button" onclick="closeHiringModal()" class="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors">
            <i data-lucide="x" class="w-5 h-5"></i>
        </button>

        <!-- Header -->
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-400 text-slate-950 shadow-xs mb-3">
            <i data-lucide="briefcase" class="w-3.5 h-3.5"></i>
            <span>Immediate Hiring &bull; 4 Positions</span>
        </div>

        <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Digital Marketing Executives
        </h3>
        <p class="text-sm text-slate-600 mt-1">
            <strong><?= LEGAL_NAME ?></strong> &bull; Office: Sneha Apartments, HMT Nagar, Nacharam, Hyderabad 500076
        </p>

        <!-- Position Overview Cards -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5 text-xs">
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span class="text-slate-400 block text-[10px] font-mono uppercase">Openings</span>
                <strong class="text-slate-900 text-sm mt-0.5 block">4 Members</strong>
            </div>
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span class="text-slate-400 block text-[10px] font-mono uppercase">Experience</span>
                <strong class="text-slate-900 text-sm mt-0.5 block">0 – 3 Yrs</strong>
            </div>
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span class="text-slate-400 block text-[10px] font-mono uppercase">Role Type</span>
                <strong class="text-slate-900 text-sm mt-0.5 block">Full Time</strong>
            </div>
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span class="text-slate-400 block text-[10px] font-mono uppercase">Location</span>
                <strong class="text-slate-900 text-sm mt-0.5 block">Nacharam, Hyd</strong>
            </div>
        </div>

        <!-- Role Responsibilities -->
        <div class="space-y-4 text-xs sm:text-sm text-slate-700">
            <div>
                <h4 class="font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                    <i data-lucide="check-circle-2" class="w-4 h-4 text-blue-600"></i>
                    <span>Key Responsibilities:</span>
                </h4>
                <ul class="list-disc pl-5 space-y-1 text-slate-600 text-xs">
                    <li>Drive social media campaigns across Instagram, Facebook, LinkedIn, and YouTube for IT & Software products.</li>
                    <li>Plan and execute local SEO strategies for businesses across Nacharam, Habsiguda, Uppal, and Secunderabad.</li>
                    <li>Generate qualified commercial leads for web development, custom software, and AI automation services.</li>
                    <li>Coordinate with graphic designers and software engineers to publish creative posts, reels, and client case studies.</li>
                </ul>
            </div>

            <div>
                <h4 class="font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                    <i data-lucide="award" class="w-4 h-4 text-emerald-600"></i>
                    <span>Who Can Apply:</span>
                </h4>
                <p class="text-xs text-slate-600 leading-relaxed">
                    Freshers with passionate digital marketing knowledge, graduates (B.Com, BBA, B.Tech, MBA), or candidates with 1-3 years of marketing experience. Fluency in Telugu & English is preferred. Immediate joiners given preference.
                </p>
            </div>
        </div>

        <!-- Direct Application Pathways -->
        <div class="mt-6 pt-5 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href="https://wa.me/<?= WHATSAPP_NUMBER ?>?text=<?= rawurlencode("Hello Zippy Enterprises, I am applying for the Digital Marketing Executive opening (4 positions) at your Nacharam, Hyderabad office. Please find my profile.") ?>" target="_blank" rel="noopener noreferrer" class="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all">
                <i data-lucide="message-square" class="w-4 h-4"></i>
                <span>Direct Apply on WhatsApp</span>
            </a>

            <a href="mailto:<?= OFFICIAL_EMAIL ?>?subject=<?= rawurlencode("Job Application: Digital Marketing Executive (4 Openings) - Zippy Enterprises") ?>" class="py-3 px-4 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 font-bold text-xs flex items-center justify-center gap-2 transition-all">
                <i data-lucide="mail" class="w-4 h-4"></i>
                <span>Email Resume Directly</span>
            </a>
        </div>

        <div class="mt-4 text-center text-xs text-slate-500">
            <span>Direct Recruitment Desk: </span>
            <a href="tel:<?= CONTACT_PHONE_RAW ?>" class="font-bold text-blue-700 hover:underline"><?= CONTACT_PHONE_DISPLAY ?></a>
        </div>
    </div>
</div>
