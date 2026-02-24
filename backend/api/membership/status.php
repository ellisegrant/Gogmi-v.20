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
    
    $database = new Database();
    $db = $database->getConnection();
    
    // Get active membership
    $query = "SELECT * FROM memberships 
              WHERE user_id = :user_id 
              AND status = 'active' 
              AND (expiry_date IS NULL OR expiry_date > NOW())
              ORDER BY created_at DESC 
              LIMIT 1";
    
    $stmt = $db->prepare($query);
    $stmt->bindParam(':user_id', $user['id']);
    $stmt->execute();
    
    $membership = $stmt->fetch();
    
    // Get all memberships (history)
    $historyQuery = "SELECT * FROM memberships 
                     WHERE user_id = :user_id 
                     ORDER BY created_at DESC";
    
    $historyStmt = $db->prepare($historyQuery);
    $historyStmt->bindParam(':user_id', $user['id']);
    $historyStmt->execute();
    
    $allMemberships = $historyStmt->fetchAll();
    
    Response::success('Membership status retrieved', [
        'isMember' => $membership !== false,
        'activeMembership' => $membership ?: null,
        'membershipHistory' => $allMemberships
    ]);
    
} catch (Exception $e) {
    error_log("Membership status error: " . $e->getMessage());
    Response::error('Failed to check membership status', 500);
}
?>