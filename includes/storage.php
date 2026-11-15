<?php
/**
 * Zippy Softwares - Unified Data Storage Engine
 * High-performance SQLite & JSON dual-storage for Leads and Internship Applications
 * Office: Sneha Apartments, HMT Nagar, Nacharam, 500076, Hyderabad, Telangana
 */

declare(strict_types=1);

function getStorageDb(): PDO {
    static $pdo = null;
    if ($pdo !== null) {
        return $pdo;
    }

    $dataDir = __DIR__ . '/../data';
    if (!is_dir($dataDir)) {
        @mkdir($dataDir, 0755, true);
    }

    $dbFile = $dataDir . '/zippy_softwares.sqlite';
    $pdo = new PDO('sqlite:' . $dbFile, null, null, [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_TIMEOUT            => 5
    ]);

    // Initialize Tables
    $pdo->exec("CREATE TABLE IF NOT EXISTS leads (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        reference_id TEXT NOT NULL UNIQUE,
        full_name TEXT NOT NULL,
        mobile_number TEXT NOT NULL,
        email TEXT,
        service TEXT,
        budget TEXT,
        message TEXT,
        source_context TEXT DEFAULT 'Website Enquiry',
        status TEXT DEFAULT 'NEW',
        ip_address TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );");

    $pdo->exec("CREATE TABLE IF NOT EXISTS internship_applications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        application_id TEXT NOT NULL UNIQUE,
        full_name TEXT NOT NULL,
        mobile_number TEXT NOT NULL,
        email TEXT NOT NULL,
        domain TEXT NOT NULL,
        college TEXT,
        year_of_study TEXT,
        duration TEXT,
        portfolio_link TEXT,
        skills_notes TEXT,
        status TEXT DEFAULT 'NEW',
        ip_address TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );");

    return $pdo;
}

/**
 * Save Lead (from Form or WhatsApp click)
 */
function saveLead(array $data): array {
    $pdo = getStorageDb();

    $refId = 'LD-' . date('ymd') . '-' . strtoupper(substr(bin2hex(random_bytes(3)), 0, 5));
    $fullName = trim($data['name'] ?? $data['full_name'] ?? 'WhatsApp Visitor');
    $mobile = trim($data['phone'] ?? $data['mobile_number'] ?? 'Not Provided');
    $email = trim($data['email'] ?? '');
    $service = trim($data['service'] ?? 'General Software Inquiry');
    $budget = trim($data['budget'] ?? 'Not Specified');
    $message = trim($data['message'] ?? 'Clicked WhatsApp Enquiry on website');
    $source = trim($data['source'] ?? $data['source_context'] ?? 'Website WhatsApp Click');
    $ip = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';

    $stmt = $pdo->prepare("INSERT INTO leads 
        (reference_id, full_name, mobile_number, email, service, budget, message, source_context, status, ip_address, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'NEW', ?, datetime('now', 'localtime'))");
    $stmt->execute([$refId, $fullName, $mobile, $email, $service, $budget, $message, $source, $ip]);

    // Also sync to JSON backup
    syncLeadsToJson();

    return [
        'id' => $pdo->lastInsertId(),
        'reference_id' => $refId
    ];
}

/**
 * Fetch all Leads
 */
function getAllLeads(): array {
    $pdo = getStorageDb();
    $stmt = $pdo->query("SELECT * FROM leads ORDER BY id DESC");
    return $stmt->fetchAll();
}

/**
 * Update Lead Status
 */
function updateLeadStatus(int $id, string $status): bool {
    $pdo = getStorageDb();
    $stmt = $pdo->prepare("UPDATE leads SET status = ? WHERE id = ?");
    $res = $stmt->execute([$status, $id]);
    syncLeadsToJson();
    return $res;
}

/**
 * Delete Lead
 */
function deleteLead(int $id): bool {
    $pdo = getStorageDb();
    $stmt = $pdo->prepare("DELETE FROM leads WHERE id = ?");
    $res = $stmt->execute([$id]);
    syncLeadsToJson();
    return $res;
}

/**
 * Save Internship Application
 */
function saveInternshipApplication(array $data): array {
    $pdo = getStorageDb();

    $appId = 'INT-' . date('ymd') . '-' . strtoupper(substr(bin2hex(random_bytes(3)), 0, 5));
    $fullName = trim($data['name'] ?? $data['full_name'] ?? '');
    $mobile = trim($data['phone'] ?? $data['mobile_number'] ?? '');
    $email = trim($data['email'] ?? '');
    $domain = trim($data['domain'] ?? $data['role'] ?? 'Web Development');
    $college = trim($data['college'] ?? '');
    $yearOfStudy = trim($data['year_of_study'] ?? 'Final Year');
    $duration = trim($data['duration'] ?? '3 Months');
    $portfolio = trim($data['portfolio_link'] ?? $data['resume_link'] ?? '');
    $notes = trim($data['skills_notes'] ?? $data['statement'] ?? '');
    $ip = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';

    $stmt = $pdo->prepare("INSERT INTO internship_applications 
        (application_id, full_name, mobile_number, email, domain, college, year_of_study, duration, portfolio_link, skills_notes, status, ip_address, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'NEW', ?, datetime('now', 'localtime'))");
    $stmt->execute([$appId, $fullName, $mobile, $email, $domain, $college, $yearOfStudy, $duration, $portfolio, $notes, $ip]);

    // Also sync to JSON backup
    syncInternshipsToJson();

    return [
        'id' => $pdo->lastInsertId(),
        'application_id' => $appId
    ];
}

/**
 * Fetch all Internship Applications
 */
function getAllInternshipApplications(): array {
    $pdo = getStorageDb();
    $stmt = $pdo->query("SELECT * FROM internship_applications ORDER BY id DESC");
    return $stmt->fetchAll();
}

/**
 * Update Internship Status
 */
function updateInternshipStatus(int $id, string $status): bool {
    $pdo = getStorageDb();
    $stmt = $pdo->prepare("UPDATE internship_applications SET status = ? WHERE id = ?");
    $res = $stmt->execute([$status, $id]);
    syncInternshipsToJson();
    return $res;
}

/**
 * Delete Internship Application
 */
function deleteInternshipApplication(int $id): bool {
    $pdo = getStorageDb();
    $stmt = $pdo->prepare("DELETE FROM internship_applications WHERE id = ?");
    $res = $stmt->execute([$id]);
    syncInternshipsToJson();
    return $res;
}

/**
 * Helper to sync leads to JSON backup
 */
function syncLeadsToJson(): void {
    try {
        $pdo = getStorageDb();
        $stmt = $pdo->query("SELECT * FROM leads ORDER BY id DESC");
        $leads = $stmt->fetchAll();
        $jsonFile = __DIR__ . '/../data/leads.json';
        @file_put_contents($jsonFile, json_encode($leads, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    } catch (Throwable $e) {}
}

/**
 * Helper to sync internships to JSON backup
 */
function syncInternshipsToJson(): void {
    try {
        $pdo = getStorageDb();
        $stmt = $pdo->query("SELECT * FROM internship_applications ORDER BY id DESC");
        $apps = $stmt->fetchAll();
        $jsonFile = __DIR__ . '/../data/internships.json';
        @file_put_contents($jsonFile, json_encode($apps, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    } catch (Throwable $e) {}
}
