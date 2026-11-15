<?php
/**
 * Zippy Softwares - Internship & Recruitment Application API
 * A Division of Zippy Enterprises Private Limited
 */

header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/../includes/config.php';
require_once __DIR__ . '/../includes/storage.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method Not Allowed. Use POST.'
    ]);
    exit;
}

$name = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : '';
$email = isset($_POST['email']) ? trim(filter_var($_POST['email'], FILTER_SANITIZE_EMAIL)) : '';
$phone = isset($_POST['phone']) ? trim(strip_tags($_POST['phone'])) : '';
$domain = isset($_POST['domain']) ? trim(strip_tags($_POST['domain'])) : 'Web Development';
$college = isset($_POST['college']) ? trim(strip_tags($_POST['college'])) : '';
$yearOfStudy = isset($_POST['year_of_study']) ? trim(strip_tags($_POST['year_of_study'])) : 'Final Year';
$duration = isset($_POST['duration']) ? trim(strip_tags($_POST['duration'])) : '3 Months';
$portfolio = isset($_POST['portfolio_link']) ? trim(strip_tags($_POST['portfolio_link'])) : '';
$notes = isset($_POST['skills_notes']) ? trim(strip_tags($_POST['skills_notes'])) : '';

// Validation
if (empty($name) || empty($email) || empty($phone) || empty($college)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Please fill in all mandatory fields (Full Name, Email, WhatsApp Phone, and College).'
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Please provide a valid email address.'
    ]);
    exit;
}

try {
    $res = saveInternshipApplication([
        'name' => $name,
        'email' => $email,
        'phone' => $phone,
        'domain' => $domain,
        'college' => $college,
        'year_of_study' => $yearOfStudy,
        'duration' => $duration,
        'portfolio_link' => $portfolio,
        'skills_notes' => $notes
    ]);

    // Format WhatsApp confirmation text if the applicant wants to ping HR
    $waText = "Hello Zippy Softwares HR Team,\n"
            . "I have submitted my Internship Application on your website:\n"
            . "• Application ID: " . $res['application_id'] . "\n"
            . "• Name: " . $name . "\n"
            . "• Domain: " . $domain . " Intern\n"
            . "• College: " . $college . " (" . $yearOfStudy . ")\n"
            . "• Mobile: " . $phone;
    $whatsappUrl = 'https://wa.me/916302690251?text=' . rawurlencode($waText);

    echo json_encode([
        'success' => true,
        'application_id' => $res['application_id'],
        'message' => 'Congratulations ' . htmlspecialchars($name) . '! Your internship application has been submitted successfully (Application ID: ' . $res['application_id'] . '). Our technical recruiting team will review your profile and contact you on WhatsApp/Email.',
        'whatsapp_url' => $whatsappUrl
    ]);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to save application: ' . $e->getMessage()
    ]);
}
exit;
