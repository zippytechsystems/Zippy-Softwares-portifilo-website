<?php
/**
 * Floating WhatsApp Action Widget
 */
?>
<div class="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
    <!-- Floating Quick Pill -->
    <div class="hidden sm:flex items-center gap-2 py-1.5 px-3 rounded-full bg-white/95 border border-slate-200 shadow-xl text-xs font-bold text-slate-800 backdrop-blur-md image-3d-floating-slow">
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
        <span>Online &bull; Instant Consultation</span>
    </div>

    <!-- WhatsApp Floating Pulse Button -->
    <a href="<?= get_whatsapp_url() ?>" target="_blank" rel="noopener noreferrer" class="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative glow-3d-pulse" title="Chat Directly with Zippy Softwares on WhatsApp">
        <i data-lucide="message-square" class="w-7 h-7 fill-white/20 transition-transform group-hover:scale-110"></i>
        <span class="absolute -top-1 -right-1 flex h-4 w-4">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-emerald-600 border-2 border-white"></span>
        </span>
    </a>
</div>
