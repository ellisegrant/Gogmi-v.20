<?php
<?php
require_once __DIR__ . '/.htaccess/config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../utils/Response.php';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    Response::error('Method not allowed', 405);
}

try {
    $user = authenticate();
    
    // Get membership status
    $database = new Database();
    $db = $database->getConnection();
    
    $membershipQuery = "SELECT * FROM memberships 
                        WHERE user_id = :user_id 
                        AND status = 'active' 
                        AND (expiry_date IS NULL OR expiry_date > NOW())
                        ORDER BY created_at DESC LIMIT 1";
    
    $stmt = $db->prepare($membershipQuery);
    $stmt->bindParam(':user_id', $user['id']);
    $stmt->execute();
    
    $membership = $stmt->fetch();
    
    Response::success('User data retrieved', [
        'user' => $user,
        'membership' => $membership ?: null
    ]);
    
} catch (Exception $e) {
    error_log("Get user error: " . $e->getMessage());
    Response::error('Failed to retrieve user data', 500);
}
?>