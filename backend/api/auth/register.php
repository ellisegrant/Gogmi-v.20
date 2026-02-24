<?php
<?php
require_once __DIR__ . '/.htaccess/config/cors.php';
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../utils/Response.php';
require_once __DIR__ . '/../../utils/JWT.php';
require_once __DIR__ . '/../../utils/Validator.php';

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
$errors = Validator::validateRegistration($data);
if (!empty($errors)) {
    Response::error('Validation failed', 400, $errors);
}

try {
    $database = new Database();
    $db = $database->getConnection();
    
    // Check if user already exists
    $checkQuery = "SELECT id FROM users WHERE email = :email LIMIT 1";
    $checkStmt = $db->prepare($checkQuery);
    $checkStmt->bindParam(':email', $data['email']);
    $checkStmt->execute();
    
    if ($checkStmt->fetch()) {
        Response::error('User with this email already exists', 400);
    }
    
    // Hash password
    $hashedPassword = password_hash($data['password'], PASSWORD_BCRYPT, ['cost' => 12]);
    
    // Generate verification token
    $verificationToken = bin2hex(random_bytes(32));
    
    // Insert user
    $query = "INSERT INTO users 
              (full_name, email, password, phone, country, organization, position, verification_token) 
              VALUES 
              (:full_name, :email, :password, :phone, :country, :organization, :position, :verification_token)";
    
    $stmt = $db->prepare($query);
    $stmt->bindParam(':full_name', $data['fullName']);
    $stmt->bindParam(':email', $data['email']);
    $stmt->bindParam(':password', $hashedPassword);
    $stmt->bindParam(':phone', $data['phone']);
    $stmt->bindParam(':country', $data['country']);
    
    $organization = $data['organization'] ?? null;
    $position = $data['position'] ?? null;
    
    $stmt->bindParam(':organization', $organization);
    $stmt->bindParam(':position', $position);
    $stmt->bindParam(':verification_token', $verificationToken);
    
    if (!$stmt->execute()) {
        throw new Exception('Failed to create user');
    }
    
    $userId = $db->lastInsertId();
    
    // Generate JWT token
    $token = JWT::encode(['user_id' => $userId]);
    
    // TODO: Send verification email
    // sendVerificationEmail($data['email'], $data['fullName'], $verificationToken);
    
    Response::success('Registration successful!', [
        'token' => $token,
        'user' => [
            'id' => $userId,
            'fullName' => $data['fullName'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'country' => $data['country'],
            'organization' => $organization,
            'position' => $position,
            'role' => 'user',
            'isVerified' => false
        ]
    ], 201);
    
} catch (Exception $e) {
    error_log("Registration error: " . $e->getMessage());
    Response::error('Registration failed. Please try again.', 500);
}
?>