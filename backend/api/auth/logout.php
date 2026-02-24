<?php
<?php
require_once __DIR__ . '/.htaccess/config/cors.php';
require_once __DIR__ . '/../../utils/Response.php';

header('Content-Type: application/json; charset=utf-8');

// Logout is mostly handled on the client side (removing token)
// But we can log it or invalidate tokens if needed in the future

Response::success('Logged out successfully');
?>