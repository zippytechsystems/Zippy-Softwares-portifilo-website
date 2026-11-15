<?php
/**
 * Zippy Softwares - Instant Lead Capture & WhatsApp Tracking API
 * Automatically logs WhatsApp clicks & inquiries into the Admin Leads database
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require_once __DIR__ . '/../includes/config.php';
require_once __DIR__ . '/../includes/storage.php';

// Accept both JSON payload and standard POST / GET
$input = [];
$rawBody = file_get_contents('php://input');
if (!empty($rawBody)) {
    $decoded = json_decode($rawBody, true);
    if (is_array($decoded)) {
        $input = $decoded;
    }
}
if (empty($input)) {
    $input = $_POST ?: $_GET;
}

$service = !empty($input['service']) ? trim(strip_tags((string)$input['service'])) : 'General Software Inquiry';
$name = !empty($input['name']) ? trim(strip_tags((string)$input['name'])) : 'WhatsApp Visitor';
$phone = !empty($input['phone']) ? trim(strip_tags((string)$input['phone'])) : 'Initiated via WhatsApp Click';
$email = !empty($input['email']) ? trim(strip_tags((string)$input['email'])) : '';
$budget = !empty($input['budget']) ? trim(strip_tags((string)$input['budget'])) : 'Not Specified';
$source = !empty($input['source']) ? trim(strip_tags((string)$input['source'])) : 'Website WhatsApp Button';
$message = !empty($input['message']) ? trim(strip_tags((string)$input['message'])) : ('Clicked WhatsApp Inquiry for ' . $service);

try {
    $res = saveLead([
        'name' => $name,
        'phone' => $phone,
        'email' => $email,
        'service' => $service,
        'budget' => $budget,
        'message' => $message,
        'source' => $source
    ]);

    echo json_encode([
        'success' => true,
        'reference_id' => $res['reference_id'],
        'message' => 'Lead logged successfully'
    ]);
} catch (Throwable $e) {
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
exit;
