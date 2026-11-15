<?php
/**
 * Zippy Softwares - Privacy Policy
 * A Division of Zippy Enterprises Private Limited
 */
require_once __DIR__ . '/includes/config.php';
require_once __DIR__ . '/includes/data.php';

$pageTitle = "Privacy Policy | Zippy Enterprises Private Limited & Zippy Softwares";
$pageDescription = "Official Privacy Policy of Zippy Enterprises Private Limited (CIN: U72900TG2024PTC184920). Details on data protection, client intellectual property confidentiality, and security measures.";
$canonicalPath = "/privacy-policy.php";

include __DIR__ . '/includes/header.php';
?>

<section class="py-16 md:py-20 bg-slate-900 text-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">Privacy Policy</h1>
        <p class="mt-4 text-slate-300 text-sm">Last updated: November 2026 • Zippy Enterprises Private Limited</p>
    </div>
</section>

<section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-6">
        <div>
            <h2 class="text-2xl font-bold text-slate-900 mb-2">1. Corporate Identity & Scope</h2>
            <p>
                This Privacy Policy governs the manner in which <strong><?php echo COMPANY_LEGAL_NAME; ?></strong> (operating its technology division as <strong>Zippy Softwares</strong>, Corporate Identity Number: <?php echo COMPANY_CIN; ?>), collects, maintains, protects, and discloses information gathered from users of the website <code>https://zippysoftwares.in</code> and clients engaging in our software development, mobile application, and AI automation engineering services.
            </p>
        </div>

        <div>
            <h2 class="text-2xl font-bold text-slate-900 mb-2">2. Information We Collect</h2>
            <p>We may collect personal and technical information from users in various ways, including:</p>
            <ul class="list-disc pl-5 space-y-1">
                <li><strong>Direct Inquiries:</strong> Name, work email address, phone/WhatsApp number, company name, and project scope submitted through our contact forms or email.</li>
                <li><strong>Project Artifacts:</strong> Client API credentials, database schemas, mockups, and internal business logic shared under non-disclosure confidentiality for the purpose of executing the agreed engineering project.</li>
                <li><strong>Technical Data:</strong> IP addresses, browser types, and standard telemetry collected via server logs to prevent DDoS attacks and optimize site performance.</li>
            </ul>
        </div>

        <div>
            <h2 class="text-2xl font-bold text-slate-900 mb-2">3. Client Intellectual Property & Source Code Confidentiality</h2>
            <p>
                At Zippy Enterprises Private Limited, client confidentiality is paramount. All proprietary business logic, custom source code, training datasets, and trade secrets provided to us or developed exclusively for the client are held strictly confidential. We execute standard Non-Disclosure Agreements (NDAs) prior to commencing any enterprise project.
            </p>
        </div>

        <div>
            <h2 class="text-2xl font-bold text-slate-900 mb-2">4. Third-Party Data Sharing</h2>
            <p>
                We do not sell, trade, or rent client personal or corporate data to third parties. Data is only shared with trusted cloud infrastructure providers (such as AWS, Cloudflare, Google Cloud, or payment gateways like Razorpay) strictly as required to fulfill hosting, database, and transaction processing services requested by the client.
            </p>
        </div>

        <div>
            <h2 class="text-2xl font-bold text-slate-900 mb-2">5. Data Retention & Security Measures</h2>
            <p>
                We adopt industry-standard data collection, storage, and processing practices and bank-grade security measures (including SSL/TLS encryption, bcrypt credential hashing, and encrypted database backups) to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
            </p>
        </div>

        <div>
            <h2 class="text-2xl font-bold text-slate-900 mb-2">6. Contacting Us About Privacy</h2>
            <p>
                If you have questions about this Privacy Policy or wish to request data deletion, contact our Grievance Officer at:
            </p>
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 space-y-1 mt-2">
                <p><strong>Entity:</strong> <?php echo COMPANY_LEGAL_NAME; ?> (Division: Zippy Softwares)</p>
                <p><strong>CIN:</strong> <?php echo COMPANY_CIN; ?></p>
                <p><strong>Address:</strong> <?php echo COMPANY_ADDRESS; ?></p>
                <p><strong>Email:</strong> <?php echo COMPANY_EMAIL; ?></p>
                <p><strong>Telephone:</strong> <?php echo COMPANY_PHONE; ?></p>
            </div>
        </div>
    </div>
</section>

<?php include __DIR__ . '/includes/footer.php'; ?>
