<?php
// Prevent direct access
if (!defined('APP_RUNNING')) {
    http_response_code(403);
    exit('Direct access not permitted');
}

// Environment
define('APP_ENV', 'production'); // ✅ CHANGED to production

// Database Configuration - ADD YOUR HOSTINGER CREDENTIALS
define('DB_HOST', 'localhost');
define('DB_NAME', 'u448928185_gogmi'); // Your database name from Hostinger
define('DB_USER', 'u448928185_gogmi'); // Your database user from Hostinger
define('DB_PASS', 'YOUR_DATABASE_PASSWORD_HERE'); // ⚠️ CHANGE THIS!

// Email Configuration - ADD YOUR EMAIL CREDENTIALS
define('SMTP_HOST', 'smtp.hostinger.com');
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'info@gogmi.org.gh');
define('SMTP_PASSWORD', 'YOUR_EMAIL_PASSWORD_HERE'); // ⚠️ CHANGE THIS!
define('SMTP_FROM_EMAIL', 'info@gogmi.org.gh');
define('SMTP_FROM_NAME', 'GoGMI');
define('ADMIN_EMAIL', 'info@gogmi.org.gh'); // Receives all form notifications

// JWT Configuration
define('JWT_SECRET', 'your_super_secret_jwt_key_CHANGE_THIS'); // ⚠️ CHANGE THIS to a random string!
define('JWT_EXPIRE', 30 * 24 * 60 * 60); // 30 days in seconds

// Paystack Configuration
define('PAYSTACK_SECRET_KEY', 'sk_test_your_secret_key_here'); // ⚠️ ADD your Paystack secret key
define('PAYSTACK_PUBLIC_KEY', 'pk_test_bcc51111bf5578e46e157a62180b11db89302000');

// URLs - ✅ UPDATED for gogmi.org.gh
if (APP_ENV === 'development') {
    define('FRONTEND_URL', 'http://localhost:5173'); // Your Vite dev server
    define('BACKEND_URL', 'http://localhost/backend');
    define('ALLOWED_ORIGINS', [
        'http://localhost:5173',
        'http://localhost:3000',
        'http://localhost:5174'
    ]);
} else {
    // ✅ Production settings for gogmi.org.gh
    define('FRONTEND_URL', 'https://gogmi.org.gh');
    define('BACKEND_URL', 'https://gogmi.org.gh/api');
    define('ALLOWED_ORIGINS', [
        'https://gogmi.org.gh',
        'https://www.gogmi.org.gh'
    ]);
}

// Error Reporting
if (APP_ENV === 'development') {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
} else {
    error_reporting(0);
    ini_set('display_errors', 0);
    ini_set('log_errors', 1);
    ini_set('error_log', __DIR__ . '/../logs/error.log');
}

// Database Connection Function
function getDBConnection() {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    
    if ($conn->connect_error) {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Database connection failed'
        ]);
        error_log('DB Connection Error: ' . $conn->connect_error);
        exit();
    }
    
    $conn->set_charset('utf8mb4');
    return $conn;
}

// Email Sending Function
function sendEmail($to, $subject, $body, $isHTML = true) {
    $headers = [];
    $headers[] = 'From: ' . SMTP_FROM_NAME . ' <' . SMTP_FROM_EMAIL . '>';
    $headers[] = 'Reply-To: ' . SMTP_FROM_EMAIL;
    
    if ($isHTML) {
        $headers[] = 'Content-Type: text/html; charset=UTF-8';
        $headers[] = 'MIME-Version: 1.0';
    }
    
    $headersString = implode("\r\n", $headers);
    
    $success = mail($to, $subject, $body, $headersString);
    
    if (!$success) {
        error_log("Email failed to send to: $to");
    }
    
    return $success;
}

// JSON Response Helper
function sendJSON($success, $message, $data = null) {
    $response = [
        'success' => $success,
        'message' => $message
    ];
    
    if ($data !== null) {
        $response['data'] = $data;
    }
    
    echo json_encode($response);
    exit();
}
?>