<?php
/**
 * Zippy Softwares - Contact & Office Inquiry
 * A Division of Zippy Enterprises Private Limited
 */
require_once __DIR__ . '/includes/config.php';
require_once __DIR__ . '/includes/data.php';

$pageTitle = "Contact Us & Office Location in Nacharam, Hyderabad | Zippy Softwares";
$pageDescription = "Get in touch with Zippy Softwares (A Division of Zippy Enterprises Private Limited) at Sneha Apartments, HMT Nagar, Nacharam, Hyderabad (500076). Call +91 63026 90251 or submit your software requirements.";
$canonicalPath = "/contact.php";

$preselectedService = isset($_GET['service']) ? trim($_GET['service']) : '';

$whatsappUrl = get_whatsapp_url("Direct Consultation", "Hello Zippy Enterprises, I want to discuss a new software project requirement.");

include __DIR__ . '/includes/header.php';
?>

<!-- Hero Section -->
<section class="relative py-16 md:py-20 bg-slate-900 text-white overflow-hidden">
    <div class="absolute inset-0 cyber-grid opacity-25"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase bg-sky-500/10 border border-sky-400/30 text-sky-300 mb-6 backdrop-blur-md">
            <i data-lucide="mail" class="w-4 h-4 text-sky-400"></i>
            <span>Engineering Consultation</span>
        </div>

        <h1 class="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto text-3d-hero">
            Let's Engineer Something <br class="hidden sm:inline" />
            <span class="text-gradient-cyan-3d">Exceptional Together</span>
        </h1>

        <p class="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Have an RFP, a new digital product concept, or need workflow automation? Submit your requirements below or meet our engineering team at our Nacharam office.
        </p>
    </div>
</section>

<!-- Form & Office Grid -->
<section class="py-16 md:py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <!-- Left: Contact Form -->
            <div class="lg:col-span-7">
                <div class="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl">
                    <h2 class="text-2xl font-black text-slate-900 mb-2">Initiate Project Inquiry</h2>
                    <p class="text-slate-500 text-xs sm:text-sm mb-8">Fill in your requirements below. Our solutions architect will respond within 4 business hours.</p>

                    <div id="contactAlert" class="hidden mb-6 p-4 rounded-xl text-sm font-semibold"></div>

                    <form id="contactForm" action="api/contact.php" method="POST" class="space-y-5">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Your Full Name *</label>
                                <input type="text" name="name" required placeholder="e.g. Rajesh Kumar" class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-slate-900 text-sm outline-none transition-all">
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Work Email *</label>
                                <input type="email" name="email" required placeholder="e.g. rajesh@company.com" class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-slate-900 text-sm outline-none transition-all">
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Phone / WhatsApp Number *</label>
                                <input type="tel" name="phone" required placeholder="e.g. +91 98765 43210" class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-slate-900 text-sm outline-none transition-all">
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Primary Service *</label>
                                <select name="service" required class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-slate-900 text-sm outline-none transition-all bg-white">
                                    <option value="">Select an engineering division...</option>
                                    <option value="Web Development" <?php echo ($preselectedService === 'Web Development') ? 'selected' : ''; ?>>Division 01: Web Development & Portals</option>
                                    <option value="App Development" <?php echo ($preselectedService === 'App Development') ? 'selected' : ''; ?>>Division 02: Custom Software & App Development</option>
                                    <option value="AI Automation" <?php echo ($preselectedService === 'AI Automation') ? 'selected' : ''; ?>>Division 03: AI Automation Services & Agents</option>
                                    <option value="Enterprise ERP" <?php echo ($preselectedService === 'Custom ERP') ? 'selected' : ''; ?>>Custom Business ERP / CRM System</option>
                                    <option value="E-Commerce" <?php echo ($preselectedService === 'Ecommerce') ? 'selected' : ''; ?>>E-Commerce Storefront & Payment Engine</option>
                                    <option value="Other Consulting">Other Engineering Advisory</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Estimated Investment Budget</label>
                            <select name="budget" class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-slate-900 text-sm outline-none transition-all bg-white">
                                <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000 (Standard Website / Starter Bot)</option>
                                <option value="₹50,000 - ₹1.5 Lakhs" selected>₹50,000 - ₹1.5 Lakhs (Full Business Portal / Custom App)</option>
                                <option value="₹1.5 Lakhs - ₹5 Lakhs">₹1.5 Lakhs - ₹5 Lakhs (Enterprise ERP / Advanced AI Multi-Agent)</option>
                                <option value="₹5 Lakhs+">₹5 Lakhs+ (Full Scale Enterprise Architecture)</option>
                            </select>
                        </div>

                        <div>
                            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Project Brief & Requirements *</label>
                            <textarea name="message" required rows="4" placeholder="Briefly describe what your business needs, desired features, target timeline, or reference links..." class="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 text-slate-900 text-sm outline-none transition-all resize-none"></textarea>
                        </div>

                        <div class="pt-2">
                            <button type="submit" id="submitBtn" class="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-base shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2">
                                <span>Transmit Inquiry & Request Callback</span>
                                <i data-lucide="send" class="w-4 h-4"></i>
                            </button>
                        </div>

                        <div class="text-center pt-2">
                            <p class="text-xs text-slate-400">
                                🔒 Your data is confidential and protected by non-disclosure standards. Zero spam guarantee.
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Right: Office Contact Info & Quick Reach -->
            <div class="lg:col-span-5 space-y-6">
                
                <!-- Quick WhatsApp Card with 3D Tilt -->
                <div class="tilt-card p-6 rounded-3xl bg-emerald-600 text-white shadow-xl" data-tilt="true">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                            <i data-lucide="message-square" class="w-5 h-5 text-white"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-white text-base">Instant WhatsApp Connection</h3>
                            <p class="text-emerald-100 text-xs">Direct chat with solutions team</p>
                        </div>
                    </div>
                    <p class="text-xs text-emerald-50 leading-relaxed mb-5">
                        Prefer real-time messaging? Click below to open an encrypted WhatsApp chat directly with our technical director.
                    </p>
                    <a href="<?php echo htmlspecialchars($whatsappUrl); ?>" target="_blank" rel="noopener noreferrer" class="w-full py-3 rounded-xl bg-white text-emerald-800 hover:bg-emerald-50 font-black text-xs text-center block transition-all shadow-md">
                        Open WhatsApp Direct (+91 63026 90251)
                    </a>
                </div>

                <!-- Office Information Card -->
                <div class="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-4">
                    <h3 class="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">Corporate Office</h3>

                    <div class="space-y-3 text-xs text-slate-600">
                        <div class="flex items-start gap-3">
                            <i data-lucide="building-2" class="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5"></i>
                            <div>
                                <strong class="text-slate-900 block"><?php echo COMPANY_LEGAL_NAME; ?></strong>
                                <span>CIN: <?php echo COMPANY_CIN; ?></span>
                            </div>
                        </div>

                        <div class="flex items-start gap-3">
                            <i data-lucide="map-pin" class="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5"></i>
                            <div>
                                <strong class="text-slate-900 block">Physical Address</strong>
                                <span><?php echo COMPANY_ADDRESS; ?></span>
                            </div>
                        </div>

                        <div class="flex items-start gap-3">
                            <i data-lucide="phone" class="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5"></i>
                            <div>
                                <strong class="text-slate-900 block">Direct Telephone</strong>
                                <span><?php echo COMPANY_PHONE; ?></span>
                            </div>
                        </div>

                        <div class="flex items-start gap-3">
                            <i data-lucide="mail" class="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5"></i>
                            <div>
                                <strong class="text-slate-900 block">General Inquiries</strong>
                                <span><?php echo COMPANY_EMAIL; ?></span>
                            </div>
                        </div>

                        <div class="flex items-start gap-3">
                            <i data-lucide="clock" class="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5"></i>
                            <div>
                                <strong class="text-slate-900 block">Office Hours</strong>
                                <span>Mon - Sat: 9:30 AM - 7:00 PM IST (Sunday Closed)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Google Maps Embed -->
                <div class="rounded-3xl overflow-hidden border border-slate-200 shadow-md h-56 bg-slate-100">
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

<!-- Contact Form AJAX script -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const contactAlert = document.getElementById('contactAlert');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const originalBtnHtml = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Processing Inquiry...</span>';

            const formData = new FormData(contactForm);

            fetch('api/contact.php', {
                method: 'POST',
                body: formData
            })
            .then(res => res.json())
            .then(data => {
                contactAlert.classList.remove('hidden', 'bg-red-50', 'text-red-700', 'border-red-200', 'bg-emerald-50', 'text-emerald-700', 'border-emerald-200');
                if (data.success) {
                    contactAlert.classList.add('bg-emerald-50', 'text-emerald-700', 'border', 'border-emerald-200');
                    contactAlert.innerHTML = '<strong>Inquiry Received!</strong> ' + data.message + '<br><a href="' + data.whatsapp_url + '" target="_blank" class="underline font-bold mt-2 inline-block">Click here to forward directly to WhatsApp &rarr;</a>';
                    contactForm.reset();
                } else {
                    contactAlert.classList.add('bg-red-50', 'text-red-700', 'border', 'border-red-200');
                    contactAlert.innerHTML = '<strong>Submission Error:</strong> ' + (data.message || 'Please check your input.');
                }
            })
            .catch(err => {
                contactAlert.classList.remove('hidden');
                contactAlert.classList.add('bg-emerald-50', 'text-emerald-700', 'border', 'border-emerald-200');
                // Graceful fallback to WhatsApp URL
                const name = formData.get('name') || '';
                const service = formData.get('service') || '';
                const msg = formData.get('message') || '';
                const waUrl = 'https://wa.me/916302690251?text=' + encodeURIComponent('Hello Zippy Enterprises, my name is ' + name + '. I need ' + service + ': ' + msg);
                contactAlert.innerHTML = '<strong>Inquiry Prepared!</strong> Redirecting to WhatsApp... <br><a href="' + waUrl + '" target="_blank" class="underline font-bold mt-2 inline-block">Click here if not redirected automatically &rarr;</a>';
                window.open(waUrl, '_blank');
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHtml;
                contactAlert.scrollIntoView({ behavior: 'smooth' });
            });
        });
    }
});
</script>

<?php include __DIR__ . '/includes/footer.php'; ?>
