<?php
// Prevent direct access
if (!defined('APP_RUNNING')) {
    http_response_code(403);
    exit('Direct access not permitted');
}

// Environment
define('APP_ENV', 'development'); // Change to 'production' on Hostinger

// JWT Configuration
define('JWT_SECRET', 'your_super_secret_jwt_key_CHANGE_THIS'); // CHANGE THIS!
define('JWT_EXPIRE', 30 * 24 * 60 * 60); // 30 days in seconds

// Paystack Configuration
define('PAYSTACK_SECRET_KEY', 'sk_test_your_secret_key_here');
define('PAYSTACK_PUBLIC_KEY', 'pk_test_bcc51111bf5578e46e157a62180b11db89302000');

// URLs - UPDATE THESE
if (APP_ENV === 'development') {
    define('FRONTEND_URL', 'http://localhost:5173'); // Your Vite dev server
    define('BACKEND_URL', 'http://localhost/backend');
    define('ALLOWED_ORIGINS', [
        'http://localhost:5173',
        'http://localhost:3000',
        'http://localhost:5174'
    ]);
} else {
    define('FRONTEND_URL', 'https://yourdomain.com');
    define('BACKEND_URL', 'https://yourdomain.com/backend');
    define('ALLOWED_ORIGINS', [
        'https://yourdomain.com',
        'https://www.yourdomain.com'
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
?>