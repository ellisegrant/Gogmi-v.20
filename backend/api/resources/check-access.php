<?php
<?php
require_once __DIR__ . '/.htaccess/config/cors.php';
require_once __DIR__ . '/../../middleware/auth.php';
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../utils/Response.php';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    Response::error('Method not allowed', 405);
}

$user = authenticate();

// Get JSON input
$input = file_get_contents("php://input");
$data = json_decode($input, true);

try {
    $database = new Database();
    $db = $database->getConnection();
    
    // Check for active membership
    $query = "SELECT * FROM memberships 
              WHERE user_id = :user_id 
              AND status = 'active' 
              AND (expiry_date IS NULL OR expiry_date > NOW())
              LIMIT 1";
    
    $stmt = $db->prepare($query);
    $stmt->bindParam(':user_id', $user['id']);
    $stmt->execute();
    
    $membership = $stmt->fetch();
    
    if (!$membership) {
        Response::error('Active membership required to download resources', 403, [
            'requiresMembership' => true
        ]);
    }
    
    // Log the download if resource info provided
    if (!empty($data['resourceId']) && !empty($data['resourceTitle'])) {
        $logQuery = "INSERT INTO download_logs (user_id, resource_id, resource_title) 
                     VALUES (:user_id, :resource_id, :resource_title)";
        
        $logStmt = $db->prepare($logQuery);
        $logStmt->bindParam(':user_id', $user['id']);
        $logStmt->bindParam(':resource_id', $data['resourceId']);
        $logStmt->bindParam(':resource_title', $data['resourceTitle']);
        $logStmt->execute();
    }
    
    Response::success('Download authorized', [
        'canDownload' => true,
        'membership' => [
            'planName' => $membership['plan_name'],
            'expiryDate' => $membership['expiry_date'],
            'certificateNumber' => $membership['certificate_number']
        ]
    ]);
    
} catch (Exception $e) {
    error_log("Check access error: " . $e->getMessage());
    Response::error('Failed to verify access', 500);
}
?>