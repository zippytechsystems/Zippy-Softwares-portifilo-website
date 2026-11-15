<?php
/**
 * Zippy Softwares - Operations, Leads & Recruitment Admin Portal
 * A Division of Zippy Enterprises Private Limited
 * Office: Sneha Apartments, HMT Nagar, Nacharam, 500076, Hyderabad, Telangana
 */

declare(strict_types=1);

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

require_once __DIR__ . '/includes/config.php';
require_once __DIR__ . '/includes/storage.php';

// Valid Administrator Passkeys
$validPasskeys = ['Zippy@2026', 'M.Linga@123', 'zippy123'];

// 1. Handle Logout
if (isset($_GET['action']) && $_GET['action'] === 'logout') {
    unset($_SESSION['zippy_softwares_admin']);
    session_destroy();
    header('Location: /admin.php');
    exit;
}

// 2. Handle Login Submission
$loginError = '';
if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'POST' && isset($_POST['login_passkey'])) {
    $enteredKey = trim($_POST['login_passkey']);
    if (in_array($enteredKey, $validPasskeys, true)) {
        $_SESSION['zippy_softwares_admin'] = true;
        header('Location: /admin.php');
        exit;
    } else {
        $loginError = 'Invalid Administrator Passkey. Please verify and try again.';
    }
}

$isLoggedIn = !empty($_SESSION['zippy_softwares_admin']);

// 3. Handle Actions (Status Updates & Deletions) when Authenticated
if ($isLoggedIn && ($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'POST') {
    if (isset($_POST['action_type'])) {
        $type = $_POST['action_type'];
        $id = (int)($_POST['id'] ?? 0);

        if ($type === 'update_lead_status' && $id > 0) {
            $status = trim($_POST['status'] ?? 'NEW');
            updateLeadStatus($id, $status);
            header('Location: /admin.php?tab=leads&updated=1');
            exit;
        }

        if ($type === 'delete_lead' && $id > 0) {
            deleteLead($id);
            header('Location: /admin.php?tab=leads&deleted=1');
            exit;
        }

        if ($type === 'update_internship_status' && $id > 0) {
            $status = trim($_POST['status'] ?? 'NEW');
            updateInternshipStatus($id, $status);
            header('Location: /admin.php?tab=internships&updated=1');
            exit;
        }

        if ($type === 'delete_internship' && $id > 0) {
            deleteInternshipApplication($id);
            header('Location: /admin.php?tab=internships&deleted=1');
            exit;
        }
    }
}

// 4. Handle CSV Exports
if ($isLoggedIn && isset($_GET['export'])) {
    $exportType = $_GET['export'];

    if ($exportType === 'leads') {
        $leads = getAllLeads();
        header('Content-Type: text/csv; charset=utf-8');
        header('Content-Disposition: attachment; filename="zippy_leads_' . date('Ymd_His') . '.csv"');
        $output = fopen('php://output', 'w');
        fputcsv($output, ['ID', 'Reference ID', 'Full Name', 'Mobile Number', 'Email', 'Service', 'Budget', 'Message', 'Source Context', 'Status', 'Date']);
        foreach ($leads as $l) {
            fputcsv($output, [
                $l['id'],
                $l['reference_id'],
                $l['full_name'],
                $l['mobile_number'],
                $l['email'],
                $l['service'],
                $l['budget'],
                $l['message'],
                $l['source_context'],
                $l['status'],
                $l['created_at']
            ]);
        }
        fclose($output);
        exit;
    }

    if ($exportType === 'internships') {
        $apps = getAllInternshipApplications();
        header('Content-Type: text/csv; charset=utf-8');
        header('Content-Disposition: attachment; filename="zippy_internships_' . date('Ymd_His') . '.csv"');
        $output = fopen('php://output', 'w');
        fputcsv($output, ['ID', 'Application ID', 'Full Name', 'Mobile Number', 'Email', 'Domain', 'College', 'Year of Study', 'Duration', 'Portfolio / Resume', 'Skills / Notes', 'Status', 'Date']);
        foreach ($apps as $a) {
            fputcsv($output, [
                $a['id'],
                $a['application_id'],
                $a['full_name'],
                $a['mobile_number'],
                $a['email'],
                $a['domain'],
                $a['college'],
                $a['year_of_study'],
                $a['duration'],
                $a['portfolio_link'],
                $a['skills_notes'],
                $a['status'],
                $a['created_at']
            ]);
        }
        fclose($output);
        exit;
    }
}

// Active Tab
$activeTab = isset($_GET['tab']) && $_GET['tab'] === 'internships' ? 'internships' : 'leads';

// Fetch Data if Logged In
$allLeads = $isLoggedIn ? getAllLeads() : [];
$allInternships = $isLoggedIn ? getAllInternshipApplications() : [];

$totalLeads = count($allLeads);
$totalInternships = count($allInternships);
$todayLeads = count(array_filter($allLeads, fn($l) => str_starts_with($l['created_at'], date('Y-m-d'))));
$todayInternships = count(array_filter($allInternships, fn($a) => str_starts_with($a['created_at'], date('Y-m-d'))));
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Portal | Leads & Hiring | Zippy Softwares</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
    </style>
</head>
<body class="bg-slate-900 text-slate-100 min-h-screen">

<?php if (!$isLoggedIn): ?>
<!-- ========================================================================= -->
<!-- LOGIN SCREEN                                                             -->
<!-- ========================================================================= -->
<div class="min-h-screen flex items-center justify-center p-4">
    <div class="max-w-md w-full bg-slate-800/90 border border-slate-700 p-8 rounded-3xl shadow-2xl backdrop-blur-md">
        
        <div class="text-center mb-8">
            <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-black border-2 border-sky-400 p-1 overflow-hidden shadow-lg">
                <img src="/assets/images/zippy-logo.jpg" alt="Zippy Softwares" class="w-full h-full object-cover">
            </div>
            <h1 class="text-2xl font-black text-white tracking-tight">Admin Operations Portal</h1>
            <p class="text-xs text-sky-400 mt-1 font-semibold"><?= LEGAL_NAME ?></p>
            <p class="text-[11px] text-slate-400 mt-0.5">Leads, WhatsApp Inquiries & Hiring Control</p>
        </div>

        <?php if (!empty($loginError)): ?>
            <div class="mb-5 p-3.5 rounded-xl bg-red-500/20 border border-red-500/50 text-red-300 text-xs font-semibold">
                <?= htmlspecialchars($loginError) ?>
            </div>
        <?php endif; ?>

        <form method="POST" action="/admin.php" class="space-y-5">
            <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Administrator Passkey</label>
                <input 
                    type="password" 
                    name="login_passkey" 
                    required 
                    autofocus
                    placeholder="Enter security passkey..." 
                    class="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                >
            </div>

            <button 
                type="submit" 
                class="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-sm shadow-lg shadow-sky-500/25 transition-all cursor-pointer"
            >
                Authorize & Access Dashboard
            </button>
        </form>

        <div class="mt-6 pt-5 border-t border-slate-700 text-center text-xs text-slate-400">
            <span class="flex items-center justify-center gap-1.5 text-slate-500 text-[11px]">
                <i data-lucide="shield-check" class="w-3.5 h-3.5 text-sky-400"></i>
                <span>Authorized Personnel Only • Secure 256-bit Encrypted Session</span>
            </span>
        </div>
    </div>
</div>

<?php else: ?>
<!-- ========================================================================= -->
<!-- AUTHENTICATED ADMIN DASHBOARD                                            -->
<!-- ========================================================================= -->
<div class="min-h-screen flex flex-col">
    
    <!-- Top Bar -->
    <header class="bg-slate-800 border-b border-slate-700 px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
        <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-black border border-slate-600 overflow-hidden shrink-0">
                <img src="/assets/images/zippy-logo.jpg" alt="Logo" class="w-full h-full object-cover">
            </div>
            <div>
                <div class="flex items-center gap-2">
                    <span class="font-black text-white text-base">Zippy Operations Center</span>
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">Live Database</span>
                </div>
                <span class="text-xs text-slate-400"><?= LEGAL_NAME ?> &bull; Nacharam, Hyderabad</span>
            </div>
        </div>

        <div class="flex items-center gap-3">
            <a href="/index.php" target="_blank" class="px-3.5 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-bold inline-flex items-center gap-1.5 transition-colors">
                <i data-lucide="globe" class="w-3.5 h-3.5 text-sky-400"></i>
                <span>View Website</span>
            </a>
            <a href="/admin.php?action=logout" class="px-3.5 py-2 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/40 text-xs font-bold inline-flex items-center gap-1.5 transition-colors">
                <i data-lucide="log-out" class="w-3.5 h-3.5"></i>
                <span>Logout</span>
            </a>
        </div>
    </header>

    <!-- Main Container -->
    <main class="flex-grow p-4 sm:p-8 max-w-7xl w-full mx-auto space-y-6">
        
        <!-- KPI Metrics Grid -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 shadow-md">
                <div class="flex items-center justify-between text-xs text-slate-400 font-semibold mb-2">
                    <span>Total Inquiries & Leads</span>
                    <i data-lucide="users" class="w-4 h-4 text-sky-400"></i>
                </div>
                <div class="text-3xl font-black text-white"><?= $totalLeads ?></div>
                <div class="text-[11px] text-emerald-400 mt-1 font-semibold">+<?= $todayLeads ?> received today</div>
            </div>

            <div class="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 shadow-md">
                <div class="flex items-center justify-between text-xs text-slate-400 font-semibold mb-2">
                    <span>Internship Applications</span>
                    <i data-lucide="graduation-cap" class="w-4 h-4 text-emerald-400"></i>
                </div>
                <div class="text-3xl font-black text-white"><?= $totalInternships ?></div>
                <div class="text-[11px] text-emerald-400 mt-1 font-semibold">+<?= $todayInternships ?> applied today</div>
            </div>

            <div class="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 shadow-md">
                <div class="flex items-center justify-between text-xs text-slate-400 font-semibold mb-2">
                    <span>WhatsApp Conversions</span>
                    <i data-lucide="message-square" class="w-4 h-4 text-emerald-400"></i>
                </div>
                <div class="text-3xl font-black text-emerald-400">Auto-Logged</div>
                <div class="text-[11px] text-slate-400 mt-1">Real-time click sync</div>
            </div>

            <div class="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 shadow-md">
                <div class="flex items-center justify-between text-xs text-slate-400 font-semibold mb-2">
                    <span>Database Status</span>
                    <i data-lucide="database" class="w-4 h-4 text-sky-400"></i>
                </div>
                <div class="text-lg font-black text-white">SQLite + JSON</div>
                <div class="text-[11px] text-slate-400 mt-1">Zero downtime sync</div>
            </div>
        </div>

        <!-- Navigation Tabs & Actions -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-700 pb-4">
            <div class="flex items-center gap-2">
                <a 
                    href="/admin.php?tab=leads" 
                    class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all <?= $activeTab === 'leads' ? 'bg-sky-500 text-slate-950 shadow-md' : 'bg-slate-800 text-slate-300 hover:bg-slate-700' ?>"
                >
                    <i data-lucide="inbox" class="w-4 h-4"></i>
                    <span>Inquiries & Leads (<?= $totalLeads ?>)</span>
                </a>

                <a 
                    href="/admin.php?tab=internships" 
                    class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all <?= $activeTab === 'internships' ? 'bg-sky-500 text-slate-950 shadow-md' : 'bg-slate-800 text-slate-300 hover:bg-slate-700' ?>"
                >
                    <i data-lucide="graduation-cap" class="w-4 h-4"></i>
                    <span>Internships & Hiring (<?= $totalInternships ?>)</span>
                </a>
            </div>

            <div>
                <a 
                    href="/admin.php?export=<?= $activeTab ?>" 
                    class="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold inline-flex items-center gap-2 transition-all"
                >
                    <i data-lucide="download" class="w-4 h-4 text-sky-400"></i>
                    <span>Export <?= ucfirst($activeTab) ?> CSV</span>
                </a>
            </div>
        </div>

        <!-- TAB 1: LEADS MANAGEMENT -->
        <?php if ($activeTab === 'leads'): ?>
        <div class="bg-slate-800/90 border border-slate-700 rounded-3xl overflow-hidden shadow-xl">
            <div class="p-6 border-b border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                    <h2 class="text-xl font-black text-white tracking-tight flex items-center gap-2">
                        <span>Customer Leads & WhatsApp Inquiries</span>
                        <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-500/20 text-sky-300"><?= $totalLeads ?> Total</span>
                    </h2>
                    <p class="text-xs text-slate-400 mt-1">Every contact form inquiry and WhatsApp button click is tracked automatically below.</p>
                </div>
            </div>

            <?php if (empty($allLeads)): ?>
                <div class="p-12 text-center text-slate-400 text-sm">
                    <i data-lucide="inbox" class="w-12 h-12 text-slate-600 mx-auto mb-3"></i>
                    <p>No leads captured yet. Any WhatsApp click or form submission will appear here automatically in real time!</p>
                </div>
            <?php else: ?>
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs">
                        <thead class="bg-slate-900/60 text-slate-400 uppercase tracking-wider text-[11px] border-b border-slate-700">
                            <tr>
                                <th class="p-4">Reference & Date</th>
                                <th class="p-4">Lead Name / Context</th>
                                <th class="p-4">Contact Info</th>
                                <th class="p-4">Service & Budget</th>
                                <th class="p-4">Message / Scope</th>
                                <th class="p-4">Status</th>
                                <th class="p-4 text-right">Quick Actions</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-700/60 text-slate-300">
                            <?php foreach ($allLeads as $lead): ?>
                                <tr class="hover:bg-slate-750 transition-colors">
                                    <td class="p-4 whitespace-nowrap">
                                        <span class="font-mono font-bold text-sky-400 block"><?= htmlspecialchars($lead['reference_id']) ?></span>
                                        <span class="text-[11px] text-slate-400"><?= htmlspecialchars($lead['created_at']) ?></span>
                                    </td>

                                    <td class="p-4">
                                        <strong class="text-white block text-sm"><?= htmlspecialchars($lead['full_name']) ?></strong>
                                        <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-700 text-slate-300 inline-block mt-1">
                                            <?= htmlspecialchars($lead['source_context'] ?? 'Website') ?>
                                        </span>
                                    </td>

                                    <td class="p-4 whitespace-nowrap">
                                        <div class="font-semibold text-white"><?= htmlspecialchars($lead['mobile_number']) ?></div>
                                        <?php if (!empty($lead['email'])): ?>
                                            <div class="text-[11px] text-slate-400"><?= htmlspecialchars($lead['email']) ?></div>
                                        <?php endif; ?>
                                    </td>

                                    <td class="p-4">
                                        <span class="font-bold text-white block"><?= htmlspecialchars($lead['service']) ?></span>
                                        <span class="text-[11px] text-emerald-400 font-semibold"><?= htmlspecialchars($lead['budget']) ?></span>
                                    </td>

                                    <td class="p-4 max-w-xs">
                                        <p class="text-xs line-clamp-2 text-slate-300"><?= htmlspecialchars($lead['message']) ?></p>
                                    </td>

                                    <td class="p-4 whitespace-nowrap">
                                        <form method="POST" action="/admin.php" class="inline">
                                            <input type="hidden" name="action_type" value="update_lead_status">
                                            <input type="hidden" name="id" value="<?= $lead['id'] ?>">
                                            <select name="status" onchange="this.form.submit()" class="px-2.5 py-1 rounded-lg text-xs font-bold border border-slate-600 bg-slate-900 text-white focus:outline-none cursor-pointer">
                                                <option value="NEW" <?= $lead['status'] === 'NEW' ? 'selected' : '' ?>>🟡 NEW</option>
                                                <option value="CONTACTED" <?= $lead['status'] === 'CONTACTED' ? 'selected' : '' ?>>🔵 CONTACTED</option>
                                                <option value="IN DISCUSSION" <?= $lead['status'] === 'IN DISCUSSION' ? 'selected' : '' ?>>🟣 IN DISCUSSION</option>
                                                <option value="CONVERTED" <?= $lead['status'] === 'CONVERTED' ? 'selected' : '' ?>>🟢 CONVERTED</option>
                                                <option value="CLOSED" <?= $lead['status'] === 'CLOSED' ? 'selected' : '' ?>>⚪ CLOSED</option>
                                            </select>
                                        </form>
                                    </td>

                                    <td class="p-4 text-right whitespace-nowrap">
                                        <div class="flex items-center justify-end gap-2">
                                            <?php 
                                            $cleanPhone = preg_replace('/[^0-9]/', '', $lead['mobile_number']);
                                            $waHref = "https://wa.me/" . (str_starts_with($cleanPhone, '91') ? $cleanPhone : '91' . $cleanPhone) . "?text=" . rawurlencode("Hello " . $lead['full_name'] . ", this is Zippy Softwares regarding your project inquiry for " . $lead['service'] . ".");
                                            ?>
                                            <?php if (!empty($cleanPhone) && strlen($cleanPhone) >= 10): ?>
                                                <a href="<?= $waHref ?>" target="_blank" class="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors" title="Chat on WhatsApp">
                                                    <i data-lucide="message-square" class="w-3.5 h-3.5"></i>
                                                </a>
                                            <?php endif; ?>

                                            <form method="POST" action="/admin.php" onsubmit="return confirm('Are you sure you want to delete this lead?');" class="inline">
                                                <input type="hidden" name="action_type" value="delete_lead">
                                                <input type="hidden" name="id" value="<?= $lead['id'] ?>">
                                                <button type="submit" class="p-2 rounded-xl bg-slate-700 hover:bg-red-500/80 text-slate-300 hover:text-white transition-colors" title="Delete Lead">
                                                    <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            <?php endif; ?>
        </div>
        <?php endif; ?>

        <!-- TAB 2: INTERNSHIPS & HIRING MANAGEMENT -->
        <?php if ($activeTab === 'internships'): ?>
        <div class="bg-slate-800/90 border border-slate-700 rounded-3xl overflow-hidden shadow-xl">
            <div class="p-6 border-b border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                    <h2 class="text-xl font-black text-white tracking-tight flex items-center gap-2">
                        <span>Internship & Recruitment Applications</span>
                        <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300"><?= $totalInternships ?> Applicants</span>
                    </h2>
                    <p class="text-xs text-slate-400 mt-1">Review candidate applications, verify colleges, resume links, and message applicants directly on WhatsApp.</p>
                </div>
            </div>

            <?php if (empty($allInternships)): ?>
                <div class="p-12 text-center text-slate-400 text-sm">
                    <i data-lucide="graduation-cap" class="w-12 h-12 text-slate-600 mx-auto mb-3"></i>
                    <p>No internship applications submitted yet. Candidates applying from the website will appear here instantly!</p>
                </div>
            <?php else: ?>
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs">
                        <thead class="bg-slate-900/60 text-slate-400 uppercase tracking-wider text-[11px] border-b border-slate-700">
                            <tr>
                                <th class="p-4">App ID & Date</th>
                                <th class="p-4">Applicant Name</th>
                                <th class="p-4">Domain / Role</th>
                                <th class="p-4">College & Year</th>
                                <th class="p-4">Duration & Portfolio</th>
                                <th class="p-4">Skills / Notes</th>
                                <th class="p-4">Status</th>
                                <th class="p-4 text-right">Quick Actions</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-700/60 text-slate-300">
                            <?php foreach ($allInternships as $app): ?>
                                <tr class="hover:bg-slate-750 transition-colors">
                                    <td class="p-4 whitespace-nowrap">
                                        <span class="font-mono font-bold text-emerald-400 block"><?= htmlspecialchars($app['application_id']) ?></span>
                                        <span class="text-[11px] text-slate-400"><?= htmlspecialchars($app['created_at']) ?></span>
                                    </td>

                                    <td class="p-4">
                                        <strong class="text-white block text-sm"><?= htmlspecialchars($app['full_name']) ?></strong>
                                        <div class="text-[11px] text-slate-400"><?= htmlspecialchars($app['email']) ?></div>
                                        <div class="text-[11px] text-sky-400 font-semibold"><?= htmlspecialchars($app['mobile_number']) ?></div>
                                    </td>

                                    <td class="p-4 whitespace-nowrap">
                                        <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                                            <?= htmlspecialchars($app['domain']) ?>
                                        </span>
                                    </td>

                                    <td class="p-4">
                                        <span class="font-semibold text-white block"><?= htmlspecialchars($app['college']) ?></span>
                                        <span class="text-[11px] text-slate-400"><?= htmlspecialchars($app['year_of_study']) ?></span>
                                    </td>

                                    <td class="p-4 whitespace-nowrap">
                                        <span class="text-slate-300 font-semibold block"><?= htmlspecialchars($app['duration'] ?? '3 Months') ?></span>
                                        <?php if (!empty($app['portfolio_link'])): ?>
                                            <a href="<?= htmlspecialchars($app['portfolio_link']) ?>" target="_blank" class="inline-flex items-center gap-1 text-[11px] text-cyan-400 hover:underline mt-1 font-semibold">
                                                <i data-lucide="external-link" class="w-3 h-3"></i>
                                                <span>View Resume / Work</span>
                                            </a>
                                        <?php else: ?>
                                            <span class="text-[11px] text-slate-500">No link provided</span>
                                        <?php endif; ?>
                                    </td>

                                    <td class="p-4 max-w-xs">
                                        <p class="text-xs line-clamp-2 text-slate-300"><?= htmlspecialchars($app['skills_notes'] ?? 'None') ?></p>
                                    </td>

                                    <td class="p-4 whitespace-nowrap">
                                        <form method="POST" action="/admin.php?tab=internships" class="inline">
                                            <input type="hidden" name="action_type" value="update_internship_status">
                                            <input type="hidden" name="id" value="<?= $app['id'] ?>">
                                            <select name="status" onchange="this.form.submit()" class="px-2.5 py-1 rounded-lg text-xs font-bold border border-slate-600 bg-slate-900 text-white focus:outline-none cursor-pointer">
                                                <option value="NEW" <?= $app['status'] === 'NEW' ? 'selected' : '' ?>>🟡 NEW</option>
                                                <option value="REVIEWED" <?= $app['status'] === 'REVIEWED' ? 'selected' : '' ?>>🔵 REVIEWED</option>
                                                <option value="SHORTLISTED" <?= $app['status'] === 'SHORTLISTED' ? 'selected' : '' ?>>🟢 SHORTLISTED</option>
                                                <option value="INTERVIEWED" <?= $app['status'] === 'INTERVIEWED' ? 'selected' : '' ?>>🟣 INTERVIEWED</option>
                                                <option value="REJECTED" <?= $app['status'] === 'REJECTED' ? 'selected' : '' ?>>🔴 REJECTED</option>
                                            </select>
                                        </form>
                                    </td>

                                    <td class="p-4 text-right whitespace-nowrap">
                                        <div class="flex items-center justify-end gap-2">
                                            <?php 
                                            $cleanPhone = preg_replace('/[^0-9]/', '', $app['mobile_number']);
                                            $waHref = "https://wa.me/" . (str_starts_with($cleanPhone, '91') ? $cleanPhone : '91' . $cleanPhone) . "?text=" . rawurlencode("Hello " . $app['full_name'] . ", this is Zippy Softwares HR regarding your Internship Application (ID: " . $app['application_id'] . ") for " . $app['domain'] . ".");
                                            ?>
                                            <?php if (!empty($cleanPhone) && strlen($cleanPhone) >= 10): ?>
                                                <a href="<?= $waHref ?>" target="_blank" class="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors" title="Message Applicant on WhatsApp">
                                                    <i data-lucide="message-square" class="w-3.5 h-3.5"></i>
                                                </a>
                                            <?php endif; ?>

                                            <form method="POST" action="/admin.php?tab=internships" onsubmit="return confirm('Delete this application?');" class="inline">
                                                <input type="hidden" name="action_type" value="delete_internship">
                                                <input type="hidden" name="id" value="<?= $app['id'] ?>">
                                                <button type="submit" class="p-2 rounded-xl bg-slate-700 hover:bg-red-500/80 text-slate-300 hover:text-white transition-colors" title="Delete Application">
                                                    <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            <?php endif; ?>
        </div>
        <?php endif; ?>

    </main>

    <!-- Admin Footer -->
    <footer class="bg-slate-900 border-t border-slate-800 py-4 px-8 text-center text-xs text-slate-500">
        &copy; <?= date('Y') ?> <strong><?= LEGAL_NAME ?></strong> &bull; Administrative Operations & CRM &bull; Nacharam, Hyderabad 500076
    </footer>

</div>
<?php endif; ?>

<script>
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
</script>
</body>
</html>
