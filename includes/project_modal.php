<?php
/**
 * Project Details Architecture Modal
 */
?>
<div id="projectModal" class="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm hidden items-center justify-center p-4 sm:p-6" onclick="closeProjectModal()">
    <div class="relative max-w-2xl w-full bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 max-h-[90vh] overflow-y-auto" onclick="event.stopPropagation()">
        
        <!-- Close Button -->
        <button type="button" onclick="closeProjectModal()" class="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors">
            <i data-lucide="x" class="w-5 h-5"></i>
        </button>

        <div class="flex items-center gap-2 mb-2">
            <span id="modalProjectCategory" class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                Category
            </span>
            <span id="modalProjectIndustry" class="text-xs text-slate-500 font-medium">Industry</span>
        </div>

        <h3 id="modalProjectTitle" class="text-2xl font-extrabold text-slate-900 tracking-tight">
            Project Architecture
        </h3>

        <p id="modalProjectDesc" class="mt-3 text-slate-600 text-sm leading-relaxed">
            Project description details.
        </p>

        <!-- Deliverables -->
        <div class="mt-6 pt-5 border-t border-slate-100">
            <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Engineering Deliverables:
            </h4>
            <ul id="modalProjectDeliverables" class="space-y-2">
                <!-- Injected via JS -->
            </ul>
        </div>

        <!-- Tech Stack -->
        <div class="mt-6 pt-5 border-t border-slate-100">
            <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Technologies Utilized:
            </h4>
            <div id="modalProjectTech" class="flex flex-wrap gap-1.5">
                <!-- Injected via JS -->
            </div>
        </div>

        <!-- Action Call -->
        <div class="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <a href="<?= get_whatsapp_url('Hello Zippy Softwares, I saw your portfolio case study and want to build a similar architecture.') ?>" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all">
                <i data-lucide="message-square" class="w-4 h-4"></i>
                <span>Discuss Similar Solution</span>
            </a>

            <button type="button" onclick="closeProjectModal()" class="w-full sm:w-auto py-3 px-5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs hover:bg-slate-200">
                Close Window
            </button>
        </div>
    </div>
</div>

<script>
    window.PORTFOLIO_DATA = <?= json_encode(array_column($portfolioProjects, null, 'id')) ?>;
</script>
