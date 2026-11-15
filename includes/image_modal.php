<?php
/**
 * Lightbox Full Clarity Image Zoom Modal
 */
?>
<div id="lightboxModal" class="fixed inset-0 z-50 bg-black/90 backdrop-blur-md hidden items-center justify-center p-3 sm:p-6" onclick="closeImageZoom()">
    <div class="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center" onclick="event.stopPropagation()">
        <!-- Close Button -->
        <button type="button" onclick="closeImageZoom()" class="absolute -top-12 right-0 sm:right-2 p-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-black transition-colors" title="Close Lightbox (ESC)">
            <i data-lucide="x" class="w-6 h-6"></i>
        </button>

        <!-- Full Clarity High-Resolution Poster -->
        <div class="rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-slate-950 p-1 sm:p-2">
            <img id="lightboxModalImg" src="" alt="High Clarity Service Poster" class="w-full h-auto max-h-[82vh] object-contain rounded-xl">
        </div>

        <div class="mt-3 flex items-center justify-between w-full px-2 text-white/80 text-xs">
            <span>🔍 100% Full Clarity HD View &bull; Zippy Enterprises Private Limited</span>
            <a href="<?= get_whatsapp_url('Hello Zippy Softwares, I am inquiring about the service poster details on your website.') ?>" target="_blank" rel="noopener noreferrer" class="text-cyan-400 hover:underline flex items-center gap-1 font-semibold">
                <i data-lucide="message-square" class="w-3.5 h-3.5"></i>
                <span>Order This Service via WhatsApp</span>
            </a>
        </div>
    </div>
</div>
