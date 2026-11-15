<?php
/**
 * Zippy Softwares - Internship Application Modal
 * A Division of Zippy Enterprises Private Limited
 */
?>
<div id="internshipModal" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md hidden items-center justify-center p-4 sm:p-6" onclick="closeInternshipModal()">
    <div class="relative max-w-xl w-full bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 max-h-[92vh] overflow-y-auto" onclick="event.stopPropagation()">
        
        <!-- Close Button -->
        <button type="button" onclick="closeInternshipModal()" class="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer">
            <i data-lucide="x" class="w-5 h-5"></i>
        </button>

        <div class="flex items-center gap-2 mb-2">
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200 inline-flex items-center gap-1.5">
                <i data-lucide="sparkles" class="w-3.5 h-3.5 text-sky-600"></i>
                <span>Open for 2026 Batches</span>
            </span>
            <span class="text-xs text-slate-500 font-medium">Hyderabad / Remote</span>
        </div>

        <h3 class="text-2xl font-black text-slate-900 tracking-tight">
            We are Opening Internships! 🎓
        </h3>

        <p class="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
            Gain hands-on industry experience building real-world enterprise applications, AI agents, and custom mobile platforms with mentorship from senior engineers at <strong>Zippy Enterprises</strong>.
        </p>

        <!-- Alert Container -->
        <div id="internshipAlert" class="hidden my-4 p-4 rounded-xl text-xs sm:text-sm font-semibold"></div>

        <!-- Form -->
        <form id="internshipForm" action="api/apply_internship.php" method="POST" class="mt-5 space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Full Name *</label>
                    <input type="text" name="name" required placeholder="e.g. Sai Krishna" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-slate-900 text-xs sm:text-sm outline-none transition-all">
                </div>

                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">WhatsApp Number *</label>
                    <input type="tel" name="phone" required placeholder="e.g. +91 98765 43210" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-slate-900 text-xs sm:text-sm outline-none transition-all">
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Email Address *</label>
                    <input type="email" name="email" required placeholder="e.g. sai@example.com" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-slate-900 text-xs sm:text-sm outline-none transition-all">
                </div>

                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Internship Domain *</label>
                    <select name="domain" required class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-slate-900 text-xs sm:text-sm outline-none transition-all bg-white">
                        <option value="Web Development">Division 01: Web Development (React / Next.js / PHP)</option>
                        <option value="App Development">Division 02: App Development (Flutter / Android / iOS)</option>
                        <option value="AI Automation">Division 03: AI Automation & Agents (Python / LLM)</option>
                        <option value="UI/UX Design">UI/UX Product Design (Figma)</option>
                        <option value="Digital Marketing & SEO">Digital Marketing & SEO Executive</option>
                    </select>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">College / University *</label>
                    <input type="text" name="college" required placeholder="e.g. JNTU / Osmania / CBIT" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-slate-900 text-xs sm:text-sm outline-none transition-all">
                </div>

                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Year of Study *</label>
                    <select name="year_of_study" required class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-slate-900 text-xs sm:text-sm outline-none transition-all bg-white">
                        <option value="2nd Year">2nd Year (B.Tech / BCA / Degree)</option>
                        <option value="3rd Year">3rd Year (B.Tech / BCA / MCA)</option>
                        <option value="Final Year" selected>Final Year (2025/2026 Batch)</option>
                        <option value="Recent Graduate">Recent Graduate (2024/2025 Passout)</option>
                    </select>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Preferred Duration</label>
                    <select name="duration" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-slate-900 text-xs sm:text-sm outline-none transition-all bg-white">
                        <option value="1 Month">1 Month Fast-Track</option>
                        <option value="3 Months" selected>3 Months Industrial Project</option>
                        <option value="6 Months">6 Months Comprehensive Internship</option>
                    </select>
                </div>

                <div>
                    <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Portfolio / GitHub / Resume Link</label>
                    <input type="url" name="portfolio_link" placeholder="e.g. https://github.com/username or Drive link" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-slate-900 text-xs sm:text-sm outline-none transition-all">
                </div>
            </div>

            <div>
                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Skills / Statement of Interest</label>
                <textarea name="skills_notes" rows="2" placeholder="Briefly describe technologies you know (HTML, CSS, JS, Python, Flutter...) or why you want this internship..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-slate-900 text-xs sm:text-sm outline-none transition-all resize-none"></textarea>
            </div>

            <div class="pt-2">
                <button type="submit" id="internshipSubmitBtn" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-sm shadow-lg shadow-sky-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer">
                    <span>Submit Internship Application</span>
                    <i data-lucide="send" class="w-4 h-4"></i>
                </button>
            </div>

            <div class="text-center pt-1">
                <span class="text-[11px] text-slate-400">
                    Office: Sneha Apartments, HMT Nagar, Nacharam, Hyderabad • Certificate upon successful completion.
                </span>
            </div>
        </form>

    </div>
</div>

<script>
window.openInternshipModal = function() {
    const modal = document.getElementById('internshipModal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }
};

window.closeInternshipModal = function() {
    const modal = document.getElementById('internshipModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('internshipForm');
    const alertBox = document.getElementById('internshipAlert');
    const submitBtn = document.getElementById('internshipSubmitBtn');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const originalBtn = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Submitting Application...</span>';

            const formData = new FormData(form);

            fetch('api/apply_internship.php', {
                method: 'POST',
                body: formData
            })
            .then(res => res.json())
            .then(data => {
                alertBox.classList.remove('hidden', 'bg-red-50', 'text-red-700', 'border-red-200', 'bg-emerald-50', 'text-emerald-700', 'border-emerald-200');
                if (data.success) {
                    alertBox.classList.add('bg-emerald-50', 'text-emerald-700', 'border', 'border-emerald-200');
                    alertBox.innerHTML = '<strong>' + data.message + '</strong><br><a href="' + data.whatsapp_url + '" target="_blank" class="inline-flex items-center gap-1.5 mt-2.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-xs"><i data-lucide="message-square" class="w-3.5 h-3.5"></i> Notify HR on WhatsApp &rarr;</a>';
                    form.reset();
                    if (window.lucide) window.lucide.createIcons();
                } else {
                    alertBox.classList.add('bg-red-50', 'text-red-700', 'border', 'border-red-200');
                    alertBox.innerHTML = '<strong>Error:</strong> ' + (data.message || 'Submission failed.');
                }
            })
            .catch(err => {
                alertBox.classList.remove('hidden');
                alertBox.classList.add('bg-red-50', 'text-red-700', 'border', 'border-red-200');
                alertBox.innerHTML = '<strong>Network error.</strong> Please try again or WhatsApp us directly.';
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtn;
                alertBox.scrollIntoView({ behavior: 'smooth' });
            });
        });
    }
});
</script>
