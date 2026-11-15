<?php
/**
 * Zippy Softwares - Floating Internship Side Quotation Badge
 * Pinned to the side of the screen with 3D levitation & pulsating indicator
 */
?>
<div class="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden sm:block">
    <div class="relative group">
        <button 
            type="button" 
            onclick="openInternshipModal()" 
            class="flex items-center gap-2.5 bg-gradient-to-l from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white pl-4 pr-3 py-3 rounded-l-2xl shadow-2xl border-y border-l border-sky-400/40 transition-all duration-300 transform hover:-translate-x-1 cursor-pointer"
            title="We are opening internships! Apply now"
        >
            <!-- Pulsing Badge Indicator -->
            <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
            </span>

            <div class="flex flex-col text-left">
                <span class="text-[10px] font-extrabold uppercase tracking-widest text-sky-200 leading-none">Hiring Alert</span>
                <span class="text-xs font-black tracking-tight text-white mt-0.5">We are Opening Internships!</span>
            </div>

            <span class="ml-1 px-2 py-1 rounded-lg bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider group-hover:bg-white group-hover:text-blue-800 transition-colors">
                Apply &rarr;
            </span>
        </button>
    </div>
</div>

<!-- Mobile Bottom Floating Quotation Bar -->
<div class="fixed bottom-16 left-3 right-3 sm:hidden z-40">
    <button 
        type="button" 
        onclick="openInternshipModal()" 
        class="w-full flex items-center justify-between bg-gradient-to-r from-sky-600 via-blue-700 to-slate-900 text-white px-4 py-2.5 rounded-2xl shadow-2xl border border-sky-400/40 backdrop-blur-md"
    >
        <div class="flex items-center gap-2">
            <span class="relative flex h-2.5 w-2.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span class="text-xs font-black">🎓 We are Opening Internships!</span>
        </div>
        <span class="px-2.5 py-1 rounded-lg bg-sky-400 text-slate-950 text-[10px] font-black uppercase tracking-wider">
            Apply Now
        </span>
    </button>
</div>
