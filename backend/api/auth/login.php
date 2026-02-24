<?php
<?php
require_once __DIR__ . '/.htaccess/config/cors.php';
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../utils/Response.php';
require_once __DIR__ . '/../../utils/JWT.php';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    Response::error('Method not allowed', 405);
}

// Get JSON input
$input = file_get_contents("php://input");
$data = json_decode($input, true);

if (!$data) {
    Response::error('Invalid JSON data', 400);
}

// Validate input
if (empty($data['email']) || empty($data['password'])) {
    Response::error('Email and password are required', 400);
}

try {
    $database = new Database();
    $db = $database->getConnection();
    
    // Get user with password
    $query = "SELECT id, full_name, email, password, phone, country, organization, position, role, is_verified 
              FROM users WHERE email = :email LIMIT 1";
    
    $stmt = $db->prepare($query);
    $stmt->bindParam(':email', $data['email']);
    $stmt->execute();
    
    $user = $stmt->fetch();
    
    if (!$user) {
        Response::error('Invalid email or password', 401);
    }
    
    // Verify password
    if (!password_verify($data['password'], $user['password'])) {
        Response::error('Invalid email or password', 401);
    }
    
    // Remove password from response
    unset($user['password']);
    
    // Generate JWT token
    $token = JWT::encode(['user_id' => $user['id']]);
    
    // Check for active membership
    $membershipQuery = "SELECT * FROM memberships 
                        WHERE user_id = :user_id 
                        AND status = 'active' 
                        AND (expiry_date IS NULL OR expiry_date > NOW())
                        ORDER BY created_at DESC LIMIT 1";
    
    $membershipStmt = $db->prepare($membershipQuery);
    $membershipStmt->bindParam(':user_id', $user['id']);
    $membershipStmt->execute();
    
    $membership = $membershipStmt->fetch();
    
    Response::success('Login successful', [
        'token' => $token,
        'user' => $user,
        'membership' => $membership ?: null
    ]);
    
} catch (Exception $e) {
    error_log("Login error: " . $e->getMessage());
    Response::error('Login failed. Please try again.', 500);
}
?>