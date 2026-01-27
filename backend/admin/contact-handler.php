<?php
/**
 * GOGMI Contact Form Handler with Database Logging
 * Upload this file to your Hostinger public_html directory
 * 
 * Features:
 * - Sends email notifications
 * - Saves all submissions to database
 * - Rate limiting & spam protection
 * - IP tracking and logging
 * 
 * Setup Required:
 * 1. Create database table (see SQL below)
 * 2. Update database credentials
 * 3. Upload to Hostinger
 */

// ============================================
// DATABASE CONFIGURATION
// ============================================
// IMPORTANT: Update these with your Hostinger database credentials
// Find these in: Hostinger Panel → Databases → MySQL Databases

$db_host = 'localhost';
$db_name = 'u448928185_gogmi';     // Change this
$db_user = 'u448928185_gogmi';  // Change this
$db_pass = 'CDCTeam2o25';  // Change this

/*
CREATE DATABASE TABLE WITH THIS SQL:

CREATE TABLE IF NOT EXISTS contact_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    ip_address VARCHAR(45),
    user_agent TEXT,
    status VARCHAR(20) DEFAULT 'new',
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_status (status),
    INDEX idx_date (submitted_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

*/

// ============================================
// CORS & HEADERS
// ============================================
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// ============================================
// RATE LIMITING
// ============================================
session_start();
$max_submissions = 5;
$time_window = 3600;

if (!isset($_SESSION['form_submissions'])) {
    $_SESSION['form_submissions'] = [];
}

$_SESSION['form_submissions'] = array_filter(
    $_SESSION['form_submissions'],
    function($timestamp) use ($time_window) {
        return (time() - $timestamp) < $time_window;
    }
);

if (count($_SESSION['form_submissions']) >= $max_submissions) {
    http_response_code(429);
    echo json_encode([
        'success' => false, 
        'message' => 'Too many requests. Please try again in an hour.'
    ]);
    exit();
}

// ============================================
// GET AND VALIDATE DATA
// ============================================
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Honeypot check
if (isset($data['website']) && !empty($data['website'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Spam detected']);
    exit();
}

// Validate required fields
$required_fields = ['name', 'email', 'subject', 'message'];
foreach ($required_fields as $field) {
    if (!isset($data[$field]) || empty(trim($data[$field]))) {
        http_response_code(400);
        echo json_encode([
            'success' => false, 
            'message' => ucfirst($field) . ' is required'
        ]);
        exit();
    }
}

// Sanitize data
$name = filter_var(trim($data['name']), FILTER_SANITIZE_STRING);
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$phone = isset($data['phone']) ? filter_var(trim($data['phone']), FILTER_SANITIZE_STRING) : '';
$subject = filter_var(trim($data['subject']), FILTER_SANITIZE_STRING);
$message = filter_var(trim($data['message']), FILTER_SANITIZE_STRING);
$ip_address = $_SERVER['REMOTE_ADDR'];
$user_agent = $_SERVER['HTTP_USER_AGENT'];

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit();
}

// Validate message length
if (strlen($message) < 10) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Message too short']);
    exit();
}

// ============================================
// SAVE TO DATABASE
// ============================================
$database_saved = false;
$submission_id = null;

try {
    $pdo = new PDO(
        "mysql:host=$db_host;dbname=$db_name;charset=utf8mb4", 
        $db_user, 
        $db_pass,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false
        ]
    );
    
    $stmt = $pdo->prepare("
        INSERT INTO contact_submissions 
        (name, email, phone, subject, message, ip_address, user_agent) 
        VALUES 
        (:name, :email, :phone, :subject, :message, :ip, :user_agent)
    ");
    
    $stmt->execute([
        ':name' => $name,
        ':email' => $email,
        ':phone' => $phone,
        ':subject' => $subject,
        ':message' => $message,
        ':ip' => $ip_address,
        ':user_agent' => $user_agent
    ]);
    
    $submission_id = $pdo->lastInsertId();
    $database_saved = true;
    
    error_log("Contact submission #$submission_id saved to database");
    
} catch(PDOException $e) {
    error_log("Database error: " . $e->getMessage());
    // Continue to send email even if database fails
}

// ============================================
// SEND EMAIL
// ============================================
$to = 'info@gogmi.org.gh';
$email_subject = "GOGMI Contact Form: " . $subject;

$email_body = "New contact form submission from GOGMI website\n\n";
$email_body .= "==========================================\n";
$email_body .= "CONTACT INFORMATION\n";
$email_body .= "==========================================\n\n";
$email_body .= "Name: $name\n";
$email_body .= "Email: $email\n";
$email_body .= "Phone: " . ($phone ?: 'Not provided') . "\n";
$email_body .= "Subject: $subject\n\n";
$email_body .= "==========================================\n";
$email_body .= "MESSAGE\n";
$email_body .= "==========================================\n\n";
$email_body .= "$message\n\n";
$email_body .= "==========================================\n";
$email_body .= "SUBMISSION DETAILS\n";
$email_body .= "==========================================\n\n";

if ($submission_id) {
    $email_body .= "Submission ID: #$submission_id\n";
}

$email_body .= "IP Address: $ip_address\n";
$email_body .= "Date/Time: " . date('Y-m-d H:i:s') . "\n";
$email_body .= "Browser: $user_agent\n\n";
$email_body .= "==========================================\n\n";
$email_body .= "Reply directly to this email to respond to the sender.\n";

$headers = "From: noreply@gogmi.org.gh\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$email_sent = mail($to, $email_subject, $email_body, $headers);

// ============================================
// SEND RESPONSE
// ============================================
if ($email_sent) {
    $_SESSION['form_submissions'][] = time();
    
    error_log("Contact form email sent successfully from: $email");
    
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for contacting us! We will respond within 24-48 hours.',
        'submission_id' => $submission_id,
        'saved_to_database' => $database_saved
    ]);
} else {
    error_log("Failed to send contact form email from: $email");
    
    // Even if email fails, if we saved to database it's not a total failure
    if ($database_saved) {
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'message' => 'Your message has been recorded. We will respond soon.',
            'submission_id' => $submission_id,
            'saved_to_database' => true,
            'email_sent' => false
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Failed to send message. Please email us directly at info@gogmi.org.gh'
        ]);
    }
}

exit();
?>
