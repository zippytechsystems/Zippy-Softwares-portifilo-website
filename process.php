<?php
/**
 * Zippy Softwares - 7-Stage Software Engineering Process
 * A Division of Zippy Enterprises Private Limited
 */
require_once __DIR__ . '/includes/config.php';
require_once __DIR__ . '/includes/data.php';

$pageTitle = "Engineering Lifecycle & Development Process | Zippy Softwares Hyderabad";
$pageDescription = "Explore the 7-stage software development lifecycle at Zippy Enterprises Private Limited. Predictable milestone delivery, weekly client demos, rigorous security audits, and full IP transfer.";
$canonicalPath = "/process.php";

$whatsappUrl = get_whatsapp_url("Process Inquiry", "Hello Zippy Enterprises, I want to discuss your development process and project timelines.");

include __DIR__ . '/includes/header.php';
?>

<!-- Hero Section -->
<section class="relative py-16 md:py-24 bg-slate-900 text-white overflow-hidden">
    <div class="absolute inset-0 cyber-grid opacity-25"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase bg-sky-500/10 border border-sky-400/30 text-sky-300 mb-6 backdrop-blur-md">
            <i data-lucide="git-merge" class="w-4 h-4 text-sky-400"></i>
            <span>Engineering Lifecycle</span>
        </div>

        <h1 class="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto text-3d-hero">
            Our 7-Stage <br class="hidden sm:inline" />
            <span class="text-gradient-cyan-3d">Development Process</span>
        </h1>

        <p class="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Predictable delivery timelines, weekly staging demos, automated testing pipelines, and complete legal ownership transfer upon completion.
        </p>

        <div class="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300">
            <span class="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 shadow-xs">
                <i data-lucide="calendar" class="w-4 h-4 text-sky-400"></i>
                Fixed Sprint Milestones
            </span>
            <span class="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 shadow-xs">
                <i data-lucide="eye" class="w-4 h-4 text-emerald-400"></i>
                Live Staging Previews
            </span>
            <span class="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 shadow-xs">
                <i data-lucide="shield-check" class="w-4 h-4 text-yellow-400"></i>
                100% Legal IP Transfer
            </span>
        </div>
    </div>
</section>

<!-- 7-Stage Process Stepper -->
<section class="py-16 md:py-24 bg-slate-50">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
            <span class="text-xs font-bold text-sky-600 uppercase tracking-wider">Predictable Engineering Roadmap</span>
            <h2 class="text-3xl sm:text-4xl font-black text-slate-900 mt-2">From Concept to Scalable Production</h2>
            <p class="text-slate-600 text-sm mt-3">We eliminate ambiguity with clear deliverables and transparent milestones at each phase.</p>
        </div>

        <div class="relative space-y-8 before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:w-0.5 before:bg-slate-200 before:content-['']">
            <?php foreach ($processSteps as $idx => $step): ?>
                <?php $isEven = ($idx % 2 === 0); ?>
                <div class="relative flex flex-col md:flex-row items-center gap-6 group">
                    
                    <!-- Center Circle Marker -->
                    <div class="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-4 border-white shadow-lg flex items-center justify-center text-sky-400 font-bold text-xs z-10 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                        <?php echo $step['step']; ?>
                    </div>

                    <!-- Left Card (Even) / Right Card (Odd) on Desktop -->
                    <div class="w-full pl-16 md:pl-0 <?php echo $isEven ? 'md:w-1/2 md:pr-12 md:text-right' : 'md:w-1/2 md:pl-12 md:ml-auto'; ?>">
                        <div class="tilt-card p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all" data-tilt="true">
                            <span class="px-3 py-1 rounded-full text-[11px] font-bold bg-sky-50 text-sky-700 border border-sky-200 inline-block mb-3">
                                Stage 0<?php echo $step['step']; ?>
                            </span>

                            <h3 class="text-xl font-bold text-slate-900 mb-2">
                                <?php echo htmlspecialchars($step['title']); ?>
                            </h3>

                            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                                <?php echo htmlspecialchars($step['description']); ?>
                            </p>

                            <!-- Key Deliverables & Timeline -->
                            <div class="pt-3 border-t border-slate-100 <?php echo $isEven ? 'md:text-left' : ''; ?>">
                                <div class="flex items-center gap-2 mb-2">
                                    <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Estimated Timeline:</span>
                                    <span class="text-xs font-semibold text-sky-600"><?php echo htmlspecialchars($step['timeline'] ?? '1-2 Weeks'); ?></span>
                                </div>
                                <?php if (!empty($step['deliverables'])): ?>
                                    <ul class="space-y-1.5 text-xs text-slate-700">
                                        <?php foreach ($step['deliverables'] as $item): ?>
                                            <li class="flex items-center gap-1.5">
                                                <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-500 flex-shrink-0"></i>
                                                <span><?php echo htmlspecialchars($item); ?></span>
                                            </li>
                                        <?php endforeach; ?>
                                    </ul>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>

                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Governance & Transfer Section -->
<section class="py-16 md:py-20 bg-white border-y border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div class="lg:col-span-6 space-y-5">
                <span class="text-xs font-bold text-sky-600 uppercase tracking-wider">Absolute Transparency</span>
                <h2 class="text-3xl font-black text-slate-900 tracking-tight">The Zippy Engineering Guarantee</h2>
                <p class="text-slate-600 text-sm leading-relaxed">
                    We operate with total accountability. You receive weekly video recorded walkthroughs, live staging server URLs, and real-time git branch tracking throughout the build cycle.
                </p>

                <div class="space-y-3 pt-2 text-xs text-slate-700">
                    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                        <i data-lucide="shield-check" class="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">30-Day Post-Launch Hypercare</strong>
                            <p class="text-slate-500 text-xs mt-0.5">Complimentary bug fixing, telemetry monitoring, and performance tuning for 30 days after deployment.</p>
                        </div>
                    </div>

                    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                        <i data-lucide="file-check-2" class="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="text-slate-900 block font-bold text-sm">Legal IP Assignment Agreement</strong>
                            <p class="text-slate-500 text-xs mt-0.5">Formal written intellectual property transfer signed by Zippy Enterprises Private Limited directors.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-6 flex justify-center">
                <div class="p-8 rounded-3xl bg-slate-900 text-white border-2 border-slate-700 shadow-2xl max-w-md w-full">
                    <h3 class="text-xl font-extrabold text-white mb-2">Have a Custom RFP or Project Scope?</h3>
                    <p class="text-slate-300 text-xs leading-relaxed mb-6">
                        Send us your software requirements document or wireframes. Our solutions architects will deliver a comprehensive timeline and milestone estimate within 24 hours.
                    </p>
                    <a href="contact.php" class="w-full py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-sm text-center block transition-all shadow-lg">
                        Submit Project Scope
                    </a>
                </div>
            </div>

        </div>
    </div>
</section>

<!-- Bottom CTA -->
<section class="py-16 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white relative overflow-hidden">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-3d-hero">Start Stage 01 Discovery Today</h2>
        <p class="mt-4 text-slate-300 text-base max-w-2xl mx-auto">
            Schedule a 30-minute discovery call with our engineering leads to outline your technical blueprint.
        </p>
        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="contact.php" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-base shadow-lg transition-all hover:scale-105">
                Initiate Discovery Call
            </a>
            <a href="<?php echo htmlspecialchars($whatsappUrl); ?>" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white font-semibold text-base transition-all">
                WhatsApp Directly: +91 63026 90251
            </a>
        </div>
    </div>
</section>

<?php include __DIR__ . '/includes/footer.php'; ?>
