<?php
/**
 * Zippy Softwares - Terms and Conditions
 * A Division of Zippy Enterprises Private Limited
 */
require_once __DIR__ . '/includes/config.php';
require_once __DIR__ . '/includes/data.php';

$pageTitle = "Terms and Conditions | Zippy Enterprises Private Limited & Zippy Softwares";
$pageDescription = "Terms and Conditions governing engineering services, software development contracts, milestone billing, and IP ownership by Zippy Enterprises Private Limited (Nacharam, Hyderabad).";
$canonicalPath = "/terms-conditions.php";

include __DIR__ . '/includes/header.php';
?>

<section class="py-16 md:py-20 bg-slate-900 text-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">Terms and Conditions</h1>
        <p class="mt-4 text-slate-300 text-sm">Last updated: November 2026 • Zippy Enterprises Private Limited</p>
    </div>
</section>

<section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-6">
        <div>
            <h2 class="text-2xl font-bold text-slate-900 mb-2">1. Agreement to Terms</h2>
            <p>
                By accessing <code>https://zippysoftwares.in</code> or entering into a Statement of Work (SOW) with <strong><?php echo COMPANY_LEGAL_NAME; ?></strong> (operating as <strong>Zippy Softwares</strong>), you agree to be bound by these Terms and Conditions. These terms apply to all visitors, clients, and partners who utilize our software engineering, web development, mobile applications, and AI automation solutions.
            </p>
        </div>

        <div>
            <h2 class="text-2xl font-bold text-slate-900 mb-2">2. Scope of Engineering Services & Milestones</h2>
            <p>
                All custom development projects are governed by individual Statements of Work detailing deliverables, timelines, and acceptance criteria. Development proceeds through iterative sprints (typically 1 to 2 weeks), with weekly staging demos for client verification and formal milestone sign-offs.
            </p>
        </div>

        <div>
            <h2 class="text-2xl font-bold text-slate-900 mb-2">3. Intellectual Property Ownership & Source Code Assignment</h2>
            <p>
                <strong>Complete Client Ownership Guarantee:</strong> Upon 100% settlement of milestone invoices specified in the project agreement, Zippy Enterprises Private Limited irrevocably transfers all title, copyright, and intellectual property rights in the custom source code, documentation, and digital assets developed exclusively for the client. Clients are free to host, modify, license, or sell the software without paying any royalties or recurring vendor lock-in fees.
            </p>
        </div>

        <div>
            <h2 class="text-2xl font-bold text-slate-900 mb-2">4. Payment Terms & Disbursements</h2>
            <p>
                Payments are structured around milestone deliverables (e.g. 30% advance on architecture discovery, 40% on staging completion, 30% on production deployment). Invoices are payable within 7 business days via RTGS/NEFT/IMPS/UPI/Payment Gateway. Invoices include applicable GST as mandated by Indian tax law.
            </p>
        </div>

        <div>
            <h2 class="text-2xl font-bold text-slate-900 mb-2">5. Warranty & 30-Day Hypercare</h2>
            <p>
                Every bespoke software build includes a complimentary 30-day Hypercare warranty following production launch. During this period, our engineering team fixes any functional bugs or regressions that diverge from the agreed specification at zero additional cost.
            </p>
        </div>

        <div>
            <h2 class="text-2xl font-bold text-slate-900 mb-2">6. Governing Law & Jurisdiction</h2>
            <p>
                These Terms and all project agreements shall be governed by and construed in accordance with the laws of the Republic of India. Any legal dispute or proceeding arising out of or related to our services shall be subject exclusively to the courts of competent jurisdiction located in <strong>Hyderabad, Telangana, India</strong>.
            </p>
        </div>
    </div>
</section>

<?php include __DIR__ . '/includes/footer.php'; ?>
