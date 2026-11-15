<?php
/**
 * Zippy Softwares - Portfolio & Case Studies
 * A Division of Zippy Enterprises Private Limited
 */
require_once __DIR__ . '/includes/config.php';
require_once __DIR__ . '/includes/data.php';

$pageTitle = "Software Portfolio & Case Studies | Zippy Softwares Hyderabad";
$pageDescription = "Explore enterprise software projects built by Zippy Enterprises Private Limited across web applications, business software, mobile applications, and AI automation for clients in Hyderabad and globally.";
$canonicalPath = "/portfolio.php";

$whatsappUrl = get_whatsapp_url("Portfolio Inquiry", "Hello Zippy Enterprises, I was reviewing your portfolio and want to build a similar software system.");

include __DIR__ . '/includes/header.php';
?>

<!-- Hero Section -->
<section class="relative py-16 md:py-24 bg-slate-900 text-white overflow-hidden">
    <div class="absolute inset-0 cyber-grid opacity-25"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase bg-sky-500/10 border border-sky-400/30 text-sky-300 mb-6 backdrop-blur-md">
            <i data-lucide="briefcase" class="w-4 h-4 text-sky-400"></i>
            <span>Proven Engineering Architecture</span>
        </div>

        <h1 class="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto text-3d-hero">
            Our Portfolio & <br class="hidden sm:inline" />
            <span class="text-gradient-cyan-3d">Engineered Solutions</span>
        </h1>

        <p class="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A transparent showcase of our production client platforms, business management systems, and enterprise concept prototypes. Every solution reflects rigorous engineering and measurable business results.
        </p>

        <!-- Filter Controls -->
        <div class="mt-12 max-w-4xl mx-auto">
            <!-- Search bar -->
            <div class="relative max-w-md mx-auto mb-6">
                <input 
                    type="text" 
                    id="portfolioSearch" 
                    placeholder="Search projects by keyword, tech, or industry..." 
                    class="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-sky-400 transition-colors shadow-inner"
                >
                <i data-lucide="search" class="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5"></i>
            </div>

            <!-- Category Pills -->
            <div class="flex flex-wrap items-center justify-center gap-2" id="categoryFilters">
                <button type="button" class="portfolio-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition-all bg-sky-500 text-slate-950 shadow-md" data-category="All">
                    All Projects (<?php echo count($portfolioProjects); ?>)
                </button>
                <button type="button" class="portfolio-filter-btn px-4 py-2 rounded-xl text-xs font-semibold transition-all bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700" data-category="Websites">
                    Websites
                </button>
                <button type="button" class="portfolio-filter-btn px-4 py-2 rounded-xl text-xs font-semibold transition-all bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700" data-category="Web Applications">
                    Web Applications
                </button>
                <button type="button" class="portfolio-filter-btn px-4 py-2 rounded-xl text-xs font-semibold transition-all bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700" data-category="Business Software">
                    Business Software
                </button>
                <button type="button" class="portfolio-filter-btn px-4 py-2 rounded-xl text-xs font-semibold transition-all bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700" data-category="Mobile Applications">
                    Mobile Applications
                </button>
                <button type="button" class="portfolio-filter-btn px-4 py-2 rounded-xl text-xs font-semibold transition-all bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700" data-category="AI Automation">
                    AI Automation
                </button>
            </div>
        </div>
    </div>
</section>

<!-- Projects Grid Section -->
<section class="py-16 md:py-24 bg-slate-50 min-h-[500px]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div id="noProjectsNotice" class="hidden text-center py-16">
            <i data-lucide="alert-circle" class="w-12 h-12 text-slate-400 mx-auto mb-3"></i>
            <h3 class="text-xl font-bold text-slate-800">No matching projects found</h3>
            <p class="text-slate-500 text-sm mt-1">Try clearing your search query or selecting a different category filter.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projectsGrid">
            <?php foreach ($portfolioProjects as $project): ?>
                <div class="portfolio-item tilt-card rounded-2xl bg-white border border-slate-200/80 shadow-md hover:shadow-2xl transition-all overflow-hidden flex flex-col justify-between"
                     data-tilt="true"
                     data-id="<?php echo htmlspecialchars($project['id']); ?>"
                     data-category="<?php echo htmlspecialchars($project['category']); ?>"
                     data-title="<?php echo htmlspecialchars(strtolower($project['title'])); ?>"
                     data-desc="<?php echo htmlspecialchars(strtolower($project['description'])); ?>"
                     data-industry="<?php echo htmlspecialchars(strtolower($project['industry'])); ?>"
                     data-tech="<?php echo htmlspecialchars(strtolower(implode(' ', $project['technologies']))); ?>">
                    
                    <div>
                        <!-- Project Visual Header -->
                        <div class="relative h-48 bg-slate-900 overflow-hidden group cursor-pointer" onclick="openProjectModal('<?php echo $project['id']; ?>')">
                            <?php if (!empty($project['image'])): ?>
                                <img src="<?php echo htmlspecialchars($project['image']); ?>" alt="<?php echo htmlspecialchars($project['title']); ?>" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy">
                            <?php else: ?>
                                <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-slate-400 p-6 text-center">
                                    <i data-lucide="layers" class="w-10 h-10 text-sky-400 mb-2"></i>
                                    <span class="text-xs font-semibold text-slate-300"><?php echo htmlspecialchars($project['industry']); ?></span>
                                </div>
                            <?php endif; ?>

                            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                            <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-sky-500/90 text-slate-950 backdrop-blur-md">
                                <?php echo htmlspecialchars($project['category']); ?>
                            </span>

                            <span class="absolute bottom-3 left-3 text-xs font-medium text-slate-200">
                                <?php echo htmlspecialchars($project['industry']); ?>
                            </span>

                            <button type="button" class="absolute bottom-3 right-3 p-1.5 rounded-lg bg-black/60 text-white hover:bg-black/90 transition-all">
                                <i data-lucide="external-link" class="w-4 h-4 text-sky-400"></i>
                            </button>
                        </div>

                        <!-- Content -->
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-slate-900 mb-2 hover:text-sky-600 transition-colors cursor-pointer" onclick="openProjectModal('<?php echo $project['id']; ?>')">
                                <?php echo htmlspecialchars($project['title']); ?>
                            </h3>

                            <p class="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                                <?php echo htmlspecialchars($project['description']); ?>
                            </p>

                            <!-- Tech tags -->
                            <div class="flex flex-wrap gap-1.5 mb-2">
                                <?php foreach (array_slice($project['technologies'], 0, 4) as $tech): ?>
                                    <span class="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                                        <?php echo htmlspecialchars($tech); ?>
                                    </span>
                                <?php endforeach; ?>
                                <?php if (count($project['technologies']) > 4): ?>
                                    <span class="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 text-slate-500">
                                        +<?php echo count($project['technologies']) - 4; ?> more
                                    </span>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>

                    <!-- Card Footer -->
                    <div class="p-6 pt-0 border-t border-slate-100">
                        <button type="button" onclick="openProjectModal('<?php echo $project['id']; ?>')" class="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs inline-flex items-center justify-center gap-1.5 transition-all shadow-sm">
                            <span>View Architecture Case Study</span>
                            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                        </button>
                    </div>

                </div>
            <?php endforeach; ?>
        </div>

    </div>
</section>

<!-- Filter Script -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('portfolioSearch');
    const filterButtons = document.querySelectorAll('.portfolio-filter-btn');
    const projectItems = document.querySelectorAll('.portfolio-item');
    const noProjectsNotice = document.getElementById('noProjectsNotice');

    let currentCategory = 'All';
    let currentQuery = '';

    function filterProjects() {
        let visibleCount = 0;

        projectItems.forEach(item => {
            const category = item.getAttribute('data-category');
            const title = item.getAttribute('data-title') || '';
            const desc = item.getAttribute('data-desc') || '';
            const industry = item.getAttribute('data-industry') || '';
            const tech = item.getAttribute('data-tech') || '';

            const matchesCategory = currentCategory === 'All' || category === currentCategory;
            const fullText = (title + ' ' + desc + ' ' + industry + ' ' + tech).toLowerCase();
            const matchesQuery = currentQuery === '' || fullText.includes(currentQuery);

            if (matchesCategory && matchesQuery) {
                item.style.display = 'flex';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        });

        if (noProjectsNotice) {
            if (visibleCount === 0) {
                noProjectsNotice.classList.remove('hidden');
            } else {
                noProjectsNotice.classList.add('hidden');
            }
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            currentQuery = e.target.value.trim().toLowerCase();
            filterProjects();
        });
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => {
                b.className = 'portfolio-filter-btn px-4 py-2 rounded-xl text-xs font-semibold transition-all bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700';
            });
            this.className = 'portfolio-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition-all bg-sky-500 text-slate-950 shadow-md';
            currentCategory = this.getAttribute('data-category');
            filterProjects();
        });
    });
});
</script>

<!-- Bottom CTA -->
<section class="py-16 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white relative overflow-hidden">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-3d-hero">Want a Similar Custom Architecture For Your Business?</h2>
        <p class="mt-4 text-slate-300 text-base max-w-2xl mx-auto">
            Our engineering team in Nacharam, Hyderabad will design, architect, and deploy your software with guaranteed quality and code ownership.
        </p>
        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="contact.php" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-base shadow-lg transition-all hover:scale-105">
                Initiate Project Discovery
            </a>
            <a href="<?php echo htmlspecialchars($whatsappUrl); ?>" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white font-semibold text-base transition-all">
                WhatsApp Directly: +91 63026 90251
            </a>
        </div>
    </div>
</section>

<?php include __DIR__ . '/includes/footer.php'; ?>
