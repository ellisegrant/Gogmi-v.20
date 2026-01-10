<?php
require_once __DIR__ . '/../utils/JWT.php';
require_once __DIR__ . '/../utils/Response.php';
require_once __DIR__ . '/../config/database.php';

function authenticate() {
    // Get authorization header
    $headers = getallheaders();
    $authHeader = $headers['Authorization'] ?? $headers['authorization'] ?? '';
    
    if (!$authHeader || !preg_match('/Bearer\s(\S+)/', $authHeader, $matches)) {
        Response::error('Authentication required. Please login.', 401);
    }
    
    $token = $matches[1];
    $decoded = JWT::decode($token);
    
    if (!$decoded) {
        Response::error('Invalid or expired token. Please login again.', 401);
    }
    
    // Get user from database
    $database = new Database();
    $db = $database->getConnection();
    
    $query = "SELECT id, full_name, email, phone, country, organization, position, role, is_verified 
              FROM users WHERE id = :id LIMIT 1";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':id', $decoded['user_id']);
    $stmt->execute();
    
    $user = $stmt->fetch();
    
    if (!$user) {
        Response::error('User not found', 401);
    }
    
    return $user;
}

function checkMembership($user) {
    $database = new Database();
    $db = $database->getConnection();
    
    $query = "SELECT * FROM memberships 
              WHERE user_id = :user_id AND status = 'active' 
              AND (expiry_date IS NULL OR expiry_date > NOW())
              ORDER BY created_at DESC LIMIT 1";
    
    $stmt = $db->prepare($query);
    $stmt->bindParam(':user_id', $user['id']);
    $stmt->execute();
    
    $membership = $stmt->fetch();
    
    if (!$membership) {
        Response::error('Active membership required to access this resource', 403, [
            'requiresMembership' => true
        ]);
    }
    
    return $membership;
}
?>