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

if (!$data) {
    Response::error('Invalid JSON data', 400);
}

// Validate required fields
$required = ['planId', 'planName', 'membershipType', 'amount', 'paymentReference'];
foreach ($required as $field) {
    if (empty($data[$field])) {
        Response::error("Field '$field' is required", 400);
    }
}

try {
    $database = new Database();
    $db = $database->getConnection();
    
    // Check if payment reference already exists (prevent duplicate activation)
    $checkQuery = "SELECT id FROM payments WHERE payment_reference = :ref LIMIT 1";
    $checkStmt = $db->prepare($checkQuery);
    $checkStmt->bindParam(':ref', $data['paymentReference']);
    $checkStmt->execute();
    
    if ($checkStmt->fetch()) {
        Response::error('Payment has already been processed', 400);
    }
    
    // Start transaction
    $db->beginTransaction();
    
    // Create membership
    $membershipQuery = "INSERT INTO memberships 
                        (user_id, plan_id, plan_name, membership_type, amount, currency, 
                         status, start_date, expiry_date, payment_reference) 
                        VALUES 
                        (:user_id, :plan_id, :plan_name, :membership_type, :amount, :currency, 
                         'active', NOW(), DATE_ADD(NOW(), INTERVAL 1 YEAR), :payment_reference)";
    
    $membershipStmt = $db->prepare($membershipQuery);
    $membershipStmt->bindParam(':user_id', $user['id']);
    $membershipStmt->bindParam(':plan_id', $data['planId']);
    $membershipStmt->bindParam(':plan_name', $data['planName']);
    $membershipStmt->bindParam(':membership_type', $data['membershipType']);
    $membershipStmt->bindParam(':amount', $data['amount']);
    
    $currency = $data['currency'] ?? 'GHS';
    $membershipStmt->bindParam(':currency', $currency);
    $membershipStmt->bindParam(':payment_reference', $data['paymentReference']);
    
    if (!$membershipStmt->execute()) {
        throw new Exception('Failed to create membership');
    }
    
    $membershipId = $db->lastInsertId();
    
    // Generate certificate number
    $year = date('Y');
    $certNumber = "GOGMI-{$year}-" . strtoupper(substr(uniqid(), -8));
    
    $certQuery = "UPDATE memberships SET certificate_number = :cert WHERE id = :id";
    $certStmt = $db->prepare($certQuery);
    $certStmt->bindParam(':cert', $certNumber);
    $certStmt->bindParam(':id', $membershipId);
    $certStmt->execute();
    
    // Record payment
    $paymentQuery = "INSERT INTO payments 
                     (user_id, membership_id, amount, currency, payment_reference, 
                      payment_gateway, status, paid_at, metadata) 
                     VALUES 
                     (:user_id, :membership_id, :amount, :currency, :payment_reference, 
                      'paystack', 'success', NOW(), :metadata)";
    
    $paymentStmt = $db->prepare($paymentQuery);
    $paymentStmt->bindParam(':user_id', $user['id']);
    $paymentStmt->bindParam(':membership_id', $membershipId);
    $paymentStmt->bindParam(':amount', $data['amount']);
    $paymentStmt->bindParam(':currency', $currency);
    $paymentStmt->bindParam(':payment_reference', $data['paymentReference']);
    $paymentStmt->bindParam(':metadata', json_encode($data));
    
    if (!$paymentStmt->execute()) {
        throw new Exception('Failed to record payment');
    }
    
    // Commit transaction
    $db->commit();
    
    // Get the complete membership record
    $getMembership = "SELECT * FROM memberships WHERE id = :id LIMIT 1";
    $getStmt = $db->prepare($getMembership);
    $getStmt->bindParam(':id', $membershipId);
    $getStmt->execute();
    $membership = $getStmt->fetch();
    
    // TODO: Send confirmation email with certificate
    // sendMembershipConfirmationEmail($user['email'], $user['full_name'], $certNumber, $membership);
    
    Response::success('Membership activated successfully', [
        'membership' => $membership,
        'certificateNumber' => $certNumber
    ], 201);
    
} catch (Exception $e) {
    if ($db->inTransaction()) {
        $db->rollBack();
    }
    error_log("Membership activation error: " . $e->getMessage());
    Response::error('Failed to activate membership: ' . $e->getMessage(), 500);
}
?>