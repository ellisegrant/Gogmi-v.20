<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// CHANGE THESE 3 LINES WITH YOUR DATABASE INFO
$host = 'localhost';
$dbname = 'u448928185_gogmi';  
$username = 'u448928185_gogmi';           
$password = 'CDCTeam2o25';               

try {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    
    if (!$data) {
        throw new Exception('Invalid data');
    }
    
    $required = ['fullName', 'email', 'position', 'bio', 'country', 'areaOfExpertise'];
    foreach ($required as $field) {
        if (empty($data[$field])) {
            throw new Exception("$field is required");
        }
    }
    
    if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Invalid email');
    }
    
    $fullName = htmlspecialchars(trim($data['fullName']));
    $email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
    $whatsappNumber = htmlspecialchars(trim($data['whatsappNumber'] ?? ''));
    $position = htmlspecialchars(trim($data['position']));
    $bio = htmlspecialchars(trim($data['bio']));
    $country = htmlspecialchars(trim($data['country']));
    $areaOfInterest = htmlspecialchars(trim($data['areaOfInterest'] ?? ''));
    $areaOfExpertise = htmlspecialchars(trim($data['areaOfExpertise']));
    
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $createTable = "
        CREATE TABLE IF NOT EXISTS imswg_applications (
            id INT AUTO_INCREMENT PRIMARY KEY,
            full_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            whatsapp_number VARCHAR(50),
            position VARCHAR(255) NOT NULL,
            bio TEXT NOT NULL,
            country VARCHAR(100) NOT NULL,
            area_of_interest VARCHAR(255),
            area_of_expertise VARCHAR(255) NOT NULL,
            application_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending'
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    ";
    $pdo->exec($createTable);
    
    $checkStmt = $pdo->prepare("SELECT id FROM imswg_applications WHERE email = ?");
    $checkStmt->execute([$email]);
    if ($checkStmt->fetch()) {
        throw new Exception('Email already registered');
    }
    
    $stmt = $pdo->prepare("
        INSERT INTO imswg_applications 
        (full_name, email, whatsapp_number, position, bio, country, area_of_interest, area_of_expertise) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ");
    
    $stmt->execute([
        $fullName, $email, $whatsappNumber, $position, $bio, $country, $areaOfInterest, $areaOfExpertise
    ]);
    
    $applicationId = $pdo->lastInsertId();
    
    // Send email
    $to = 'info@gogmi.org.gh';
    $subject = 'New IMSWG Application - ' . $fullName;
    $emailBody = "<h2>New IMSWG Application</h2>
                  <p><strong>Name:</strong> $fullName</p>
                  <p><strong>Email:</strong> $email</p>
                  <p><strong>WhatsApp:</strong> $whatsappNumber</p>
                  <p><strong>Position:</strong> $position</p>
                  <p><strong>Country:</strong> $country</p>
                  <p><strong>Expertise:</strong> $areaOfExpertise</p>
                  <p><strong>Interest:</strong> $areaOfInterest</p>
                  <p><strong>Bio:</strong> $bio</p>";
    
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8\r\n";
    $headers .= "From: noreply@gogmi.org.gh\r\n";
    
    mail($to, $subject, $emailBody, $headers);
    
    echo json_encode(['success' => true, 'message' => 'Application submitted', 'data' => ['applicationId' => $applicationId]]);
    
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}
?>