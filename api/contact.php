<?php
/**
 * Zippy Softwares - Contact Form & Lead Capture API
 * A Division of Zippy Enterprises Private Limited
 */
header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/../includes/config.php';

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
$service = isset($_POST['service']) ? trim(strip_tags($_POST['service'])) : 'General Software Inquiry';
$budget = isset($_POST['budget']) ? trim(strip_tags($_POST['budget'])) : 'Not Specified';
$message = isset($_POST['message']) ? trim(strip_tags($_POST['message'])) : '';

// Validation
if (empty($name) || empty($email) || empty($phone) || empty($message)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Please fill in all mandatory fields (Name, Email, Phone, and Project Brief).'
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

// Generate pre-filled WhatsApp direct message
$waText = "Hello Zippy Enterprises,\n"
        . "New Project Inquiry from Website:\n"
        . "• Name: " . $name . "\n"
        . "• Phone: " . $phone . "\n"
        . "• Email: " . $email . "\n"
        . "• Service: " . $service . "\n"
        . "• Budget: " . $budget . "\n"
        . "• Details: " . $message;

$whatsappUrl = 'https://wa.me/916302690251?text=' . rawurlencode($waText);

// Save lead locally to leads.json for record-keeping
$leadsFile = __DIR__ . '/leads.json';
$leadRecord = [
    'timestamp' => date('Y-m-d H:i:s'),
    'name' => $name,
    'email' => $email,
    'phone' => $phone,
    'service' => $service,
    'budget' => $budget,
    'message' => $message,
    'ip' => $_SERVER['REMOTE_ADDR'] ?? 'Unknown'
];

$existingLeads = [];
if (file_exists($leadsFile)) {
    $content = file_get_contents($leadsFile);
    $existingLeads = json_decode($content, true) ?: [];
}
$existingLeads[] = $leadRecord;
@file_put_contents($leadsFile, json_encode($existingLeads, JSON_PRETTY_PRINT));

// Return success response
echo json_encode([
    'success' => true,
    'message' => 'Thank you ' . htmlspecialchars($name) . '! Your project inquiry has been received. Our solutions architect will review your scope and get in touch shortly.',
    'whatsapp_url' => $whatsappUrl
]);
exit;
