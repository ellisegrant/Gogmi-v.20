<?php
define('APP_RUNNING', true);
<?php
require_once __DIR__ . '/.htaccess/config/cors.php';
require_once __DIR__ . '/../../config/database.php';

// Only handle POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit();
}

// Retrieve the request's body
$input = @file_get_contents("php://input");
$event = json_decode($input);

if (!$event) {
    http_response_code(400);
    exit();
}

// Verify Paystack signature
$signature = $_SERVER['HTTP_X_PAYSTACK_SIGNATURE'] ?? '';

if (!$signature) {
    http_response_code(401);
    error_log("Webhook: No signature provided");
    exit();
}

$expectedSignature = hash_hmac('sha512', $input, PAYSTACK_SECRET_KEY);

if ($signature !== $expectedSignature) {
    http_response_code(401);
    error_log("Webhook: Invalid signature");
    exit();
}

// Handle successful charge event
if ($event->event === 'charge.success') {
    $reference = $event->data->reference;
    $amount = $event->data->amount / 100; // Convert from kobo/pesewas
    $email = $event->data->customer->email;
    $metadata = $event->data->metadata;
    
    try {
        $database = new Database();
        $db = $database->getConnection();
        
        // Check if already processed
        $checkQuery = "SELECT id FROM payments WHERE payment_reference = :ref LIMIT 1";
        $checkStmt = $db->prepare($checkQuery);
        $checkStmt->bindParam(':ref', $reference);
        $checkStmt->execute();
        
        if ($checkStmt->fetch()) {
            // Already processed
            http_response_code(200);
            exit();
        }
        
        // Get user ID from metadata or email
        $userId = $metadata->user_id ?? null;
        
        if (!$userId) {
            // Find user by email
            $userQuery = "SELECT id FROM users WHERE email = :email LIMIT 1";
            $userStmt = $db->prepare($userQuery);
            $userStmt->bindParam(':email', $email);
            $userStmt->execute();
            $userRow = $userStmt->fetch();
            $userId = $userRow['id'] ?? null;
        }
        
        if (!$userId) {
            error_log("Webhook: User not found for email: $email");
            http_response_code(404);
            exit();
        }
        
        // Start transaction
        $db->beginTransaction();
        
        // Create membership
        $membershipQuery = "INSERT INTO memberships 
                            (user_id, plan_id, plan_name, membership_type, amount, currency, 
                             status, start_date, expiry_date, payment_reference) 
                            VALUES 
                            (:user_id, :plan_id, :plan_name, :membership_type, :amount, 'GHS', 
                             'active', NOW(), DATE_ADD(NOW(), INTERVAL 1 YEAR), :payment_reference)";
        
        $membershipStmt = $db->prepare($membershipQuery);
        $membershipStmt->bindParam(':user_id', $userId);
        $membershipStmt->bindParam(':plan_id', $metadata->plan_id);
        $membershipStmt->bindParam(':plan_name', $metadata->plan_name);
        $membershipStmt->bindParam(':membership_type', $metadata->membership_type);
        $membershipStmt->bindParam(':amount', $amount);
        $membershipStmt->bindParam(':payment_reference', $reference);
        $membershipStmt->execute();
        
        $membershipId = $db->lastInsertId();
        
        // Generate certificate
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
                          payment_gateway, payment_method, status, paid_at, paystack_response, metadata) 
                         VALUES 
                         (:user_id, :membership_id, :amount, 'GHS', :payment_reference, 
                          'paystack', :payment_method, 'success', NOW(), :paystack_response, :metadata)";
        
        $paymentStmt = $db->prepare($paymentQuery);
        $paymentStmt->bindParam(':user_id', $userId);
        $paymentStmt->bindParam(':membership_id', $membershipId);
        $paymentStmt->bindParam(':amount', $amount);
        $paymentStmt->bindParam(':payment_reference', $reference);
        $paymentStmt->bindParam(':payment_method', $event->data->channel);
        $paymentStmt->bindParam(':paystack_response', json_encode($event->data));
        $paymentStmt->bindParam(':metadata', json_encode($metadata));
        $paymentStmt->execute();
        
        // Commit transaction
        $db->commit();
        
        error_log("Webhook: Membership activated successfully for user ID: $userId");
        
        // TODO: Send confirmation email
        
        http_response_code(200);
        
    } catch (Exception $e) {
        if (isset($db) && $db->inTransaction()) {
            $db->rollBack();
        }
        error_log("Webhook error: " . $e->getMessage());
        http_response_code(500);
    }
} else {
    // Other event types
    http_response_code(200);
}

exit();
?>