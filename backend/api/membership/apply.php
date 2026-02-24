<?php
<?php
require_once __DIR__ . '/.htaccess/config/cors.php';
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../utils/Response.php';
require_once __DIR__ . '/../../utils/Validator.php';

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    Response::error('Method not allowed', 405);
}

$input = file_get_contents("php://input");
$data = json_decode($input, true);

if (!$data) {
    Response::error('Invalid JSON data', 400);
}

// Validate required fields
$required = ['fullName', 'email', 'phone', 'country', 'planId', 'planName', 'membershipType', 'amount', 'paymentReference'];
foreach ($required as $field) {
    if (empty($data[$field])) {
        Response::error("Field '$field' is required", 400);
    }
}

// Validate email
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    Response::error('Invalid email format', 400);
}

try {
    $database = new Database();
    $db = $database->getConnection();
    
    // Check if payment reference already exists
    $checkPayment = "SELECT id FROM payments WHERE payment_reference = :ref LIMIT 1";
    $checkStmt = $db->prepare($checkPayment);
    $checkStmt->bindParam(':ref', $data['paymentReference']);
    $checkStmt->execute();
    
    if ($checkStmt->fetch()) {
        Response::error('Payment has already been processed', 400);
    }
    
    // Start transaction
    $db->beginTransaction();
    
    // Check if user exists
    $checkUser = "SELECT id FROM users WHERE email = :email LIMIT 1";
    $userCheckStmt = $db->prepare($checkUser);
    $userCheckStmt->bindParam(':email', $data['email']);
    $userCheckStmt->execute();
    $existingUser = $userCheckStmt->fetch();
    
    if ($existingUser) {
        $userId = $existingUser['id'];
        
        // Check if user already has active membership
        $checkMembership = "SELECT id FROM memberships 
                           WHERE user_id = :user_id 
                           AND status = 'active' 
                           AND (expiry_date IS NULL OR expiry_date > NOW())";
        $membershipCheck = $db->prepare($checkMembership);
        $membershipCheck->bindParam(':user_id', $userId);
        $membershipCheck->execute();
        
        if ($membershipCheck->fetch()) {
            $db->rollBack();
            Response::error('You already have an active membership', 400);
        }
    } else {
        // Create new user account with auto-generated password
        $autoPassword = bin2hex(random_bytes(8)); // Generate 16-char password
        $hashedPassword = password_hash($autoPassword, PASSWORD_BCRYPT, ['cost' => 12]);
        
        $userQuery = "INSERT INTO users 
                      (full_name, email, password, phone, country, organization, position, is_verified) 
                      VALUES 
                      (:full_name, :email, :password, :phone, :country, :organization, :position, 1)";
        
        $userStmt = $db->prepare($userQuery);
        $userStmt->bindParam(':full_name', $data['fullName']);
        $userStmt->bindParam(':email', $data['email']);
        $userStmt->bindParam(':password', $hashedPassword);
        $userStmt->bindParam(':phone', $data['phone']);
        $userStmt->bindParam(':country', $data['country']);
        
        $organization = $data['organization'] ?? null;
        $position = $data['position'] ?? null;
        
        $userStmt->bindParam(':organization', $organization);
        $userStmt->bindParam(':position', $position);
        
        if (!$userStmt->execute()) {
            throw new Exception('Failed to create user account');
        }
        
        $userId = $db->lastInsertId();
    }
    
    // Create membership
    $membershipQuery = "INSERT INTO memberships 
                        (user_id, plan_id, plan_name, membership_type, amount, currency, 
                         status, start_date, expiry_date, payment_reference) 
                        VALUES 
                        (:user_id, :plan_id, :plan_name, :membership_type, :amount, :currency, 
                         'active', NOW(), DATE_ADD(NOW(), INTERVAL 1 YEAR), :payment_reference)";
    
    $membershipStmt = $db->prepare($membershipQuery);
    $membershipStmt->bindParam(':user_id', $userId);
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
    $paymentStmt->bindParam(':user_id', $userId);
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
    
    // Get complete user data
    $getUserQuery = "SELECT id, full_name, email, phone, country, organization, position, role, is_verified 
                     FROM users WHERE id = :id LIMIT 1";
    $getUserStmt = $db->prepare($getUserQuery);
    $getUserStmt->bindParam(':id', $userId);
    $getUserStmt->execute();
    $user = $getUserStmt->fetch();
    
    // Get complete membership data
    $getMembershipQuery = "SELECT * FROM memberships WHERE id = :id LIMIT 1";
    $getMembershipStmt = $db->prepare($getMembershipQuery);
    $getMembershipStmt->bindParam(':id', $membershipId);
    $getMembershipStmt->execute();
    $membership = $getMembershipStmt->fetch();
    
    // Generate JWT token
    require_once __DIR__ . '/../../utils/JWT.php';
    $token = JWT::encode(['user_id' => $userId]);
    
    // TODO: Send welcome email with login credentials
    // sendWelcomeEmail($data['email'], $data['fullName'], $autoPassword ?? null, $certNumber, $membership);
    
    Response::success('Membership activated successfully', [
        'token' => $token,
        'user' => $user,
        'membership' => $membership,
        'certificateNumber' => $certNumber,
        'isNewAccount' => isset($autoPassword),
        'temporaryPassword' => $autoPassword ?? null // Only sent if new account
    ], 201);
    
} catch (Exception $e) {
    if (isset($db) && $db->inTransaction()) {
        $db->rollBack();
    }
    error_log("Membership application error: " . $e->getMessage());
    Response::error('Failed to process membership application: ' . $e->getMessage(), 500);
}
?>