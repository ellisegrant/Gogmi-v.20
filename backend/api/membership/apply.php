<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once __DIR__ . '/../../database/config.php';
require_once __DIR__ . '/../../utils/email.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$required = ['fullName', 'email', 'phone', 'country', 'planId', 'planName', 'membershipType', 'password', 'paymentReference'];
foreach ($required as $field) {
    if (empty($input[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => "Missing required field: $field"]);
        exit();
    }
}

try {
    $db = getDBConnection();
    
    // Check if email already exists
    $stmt = $db->prepare("SELECT id FROM users WHERE email = ?");
    $stmt->execute([$input['email']]);
    
    if ($stmt->fetch()) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Email already registered']);
        exit();
    }
    
    // Hash password
    $hashedPassword = password_hash($input['password'], PASSWORD_DEFAULT);
    
    // Generate certificate number
    $year = date('Y');
    $random = str_pad(rand(1, 9999), 4, '0', STR_PAD_LEFT);
    $certificateNumber = "GOGMI-$year-$random";
    
    // Generate token for auto-login
    $token = bin2hex(random_bytes(32));
    
    // Start transaction
    $db->beginTransaction();
    
    // Insert user
    $stmt = $db->prepare("
        INSERT INTO users (
            full_name, 
            email, 
            password, 
            phone, 
            country, 
            organization, 
            position, 
            role,
            created_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, 'member', NOW())
    ");
    
    $stmt->execute([
        $input['fullName'],
        $input['email'],
        $hashedPassword,
        $input['phone'],
        $input['country'],
        $input['organization'] ?? '',
        $input['position'] ?? ''
    ]);
    
    $userId = $db->lastInsertId();
    
    // Insert membership
    $expiryDate = date('Y-m-d', strtotime('+1 year'));
    
    $stmt = $db->prepare("
        INSERT INTO memberships (
            user_id,
            plan_id,
            plan_name,
            membership_type,
            certificate_number,
            amount,
            currency,
            payment_reference,
            status,
            start_date,
            expiry_date,
            created_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'active', NOW(), ?, NOW())
    ");
    
    $stmt->execute([
        $userId,
        $input['planId'],
        $input['planName'],
        $input['membershipType'],
        $certificateNumber,
        $input['amount'] ?? 0,
        $input['currency'] ?? 'USD',
        $input['paymentReference'],
        $expiryDate
    ]);
    
    $membershipId = $db->lastInsertId();
    
    // Insert payment record
    $stmt = $db->prepare("
        INSERT INTO payments (
            user_id,
            membership_id,
            amount,
            currency,
            payment_method,
            payment_reference,
            status,
            created_at
        ) VALUES (?, ?, ?, ?, 'paystack', ?, 'completed', NOW())
    ");
    
    $stmt->execute([
        $userId,
        $membershipId,
        $input['amount'] ?? 0,
        $input['currency'] ?? 'USD',
        $input['paymentReference']
    ]);
    
    // Commit transaction
    $db->commit();
    
    // Send email notification to admin
    $adminEmailBody = "
        <h2>New Membership Application</h2>
        <p><strong>Name:</strong> {$input['fullName']}</p>
        <p><strong>Email:</strong> {$input['email']}</p>
        <p><strong>Phone:</strong> {$input['phone']}</p>
        <p><strong>Country:</strong> {$input['country']}</p>
        <p><strong>Organization:</strong> " . ($input['organization'] ?? 'N/A') . "</p>
        <p><strong>Position:</strong> " . ($input['position'] ?? 'N/A') . "</p>
        <p><strong>Membership Plan:</strong> {$input['planName']}</p>
        <p><strong>Type:</strong> {$input['membershipType']}</p>
        <p><strong>Amount:</strong> {$input['currency']} {$input['amount']}</p>
        <p><strong>Payment Reference:</strong> {$input['paymentReference']}</p>
        <p><strong>Certificate Number:</strong> $certificateNumber</p>
        <p><strong>Date:</strong> " . date('Y-m-d H:i:s') . "</p>
    ";
    
    sendEmail(
        'info@gogmi.org.gh',
        'New GoGMI Membership Application',
        $adminEmailBody
    );
    
    // Send welcome email to member
    $memberEmailBody = "
        <h2>Welcome to GoGMI!</h2>
        <p>Dear {$input['fullName']},</p>
        <p>Thank you for joining the Gulf of Guinea Maritime Institute. Your membership has been successfully activated.</p>
        
        <h3>Membership Details:</h3>
        <p><strong>Plan:</strong> {$input['planName']}</p>
        <p><strong>Certificate Number:</strong> $certificateNumber</p>
        <p><strong>Start Date:</strong> " . date('Y-m-d') . "</p>
        <p><strong>Expiry Date:</strong> $expiryDate</p>
        
        <h3>Login Credentials:</h3>
        <p><strong>Email:</strong> {$input['email']}</p>
        <p><strong>Password:</strong> [Your chosen password]</p>
        
        <p>You can now login at <a href='https://gogmi.org.gh/login'>https://gogmi.org.gh/login</a></p>
        
        <p>For any questions, please contact us at info@gogmi.org.gh</p>
        
        <p>Best regards,<br>GoGMI Team</p>
    ";
    
    sendEmail(
        $input['email'],
        'Welcome to GoGMI - Membership Activated',
        $memberEmailBody
    );
    
    // Return success response
    echo json_encode([
        'success' => true,
        'message' => 'Membership activated successfully',
        'data' => [
            'token' => $token,
            'certificateNumber' => $certificateNumber,
            'user' => [
                'id' => $userId,
                'email' => $input['email'],
                'fullName' => $input['fullName'],
                'role' => 'member'
            ],
            'membership' => [
                'id' => $membershipId,
                'planName' => $input['planName'],
                'certificateNumber' => $certificateNumber,
                'status' => 'active',
                'expiryDate' => $expiryDate
            ]
        ]
    ]);
    
} catch (PDOException $e) {
    if ($db->inTransaction()) {
        $db->rollBack();
    }
    
    error_log("Membership application error: " . $e->getMessage());
    
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Database error occurred',
        'error' => $e->getMessage()
    ]);
} catch (Exception $e) {
    if ($db->inTransaction()) {
        $db->rollBack();
    }
    
    error_log("Membership application error: " . $e->getMessage());
    
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'An error occurred',
        'error' => $e->getMessage()
    ]);
}