<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Database configuration
$db_host = 'localhost';
$db_name = 'your_database_name';
$db_user = 'your_database_user';
$db_pass = 'your_database_password';

try {
    // Create database connection
    $conn = new PDO("mysql:host=$db_host;dbname=$db_name;charset=utf8mb4", $db_user, $db_pass);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Create table if it doesn't exist
    $createTableSQL = "CREATE TABLE IF NOT EXISTS maritime_governance_interest (
        id INT AUTO_INCREMENT PRIMARY KEY,
        type VARCHAR(20) NOT NULL,
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        organization VARCHAR(255) NOT NULL,
        position VARCHAR(255) NOT NULL,
        country VARCHAR(100) NOT NULL,
        interest TEXT NOT NULL,
        submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        status VARCHAR(20) DEFAULT 'pending',
        INDEX idx_email (email),
        INDEX idx_type (type),
        INDEX idx_status (status)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";
    
    $conn->exec($createTableSQL);
    
    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    
    // Validate required fields
    $required_fields = ['type', 'fullName', 'email', 'phone', 'organization', 'position', 'country', 'interest'];
    foreach ($required_fields as $field) {
        if (empty($input[$field])) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => "Missing required field: $field"]);
            exit();
        }
    }
    
    // Sanitize and validate input
    $type = filter_var($input['type'], FILTER_SANITIZE_STRING);
    $fullName = filter_var($input['fullName'], FILTER_SANITIZE_STRING);
    $email = filter_var($input['email'], FILTER_SANITIZE_EMAIL);
    $phone = filter_var($input['phone'], FILTER_SANITIZE_STRING);
    $organization = filter_var($input['organization'], FILTER_SANITIZE_STRING);
    $position = filter_var($input['position'], FILTER_SANITIZE_STRING);
    $country = filter_var($input['country'], FILTER_SANITIZE_STRING);
    $interest = filter_var($input['interest'], FILTER_SANITIZE_STRING);
    
    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid email format']);
        exit();
    }
    
    // Validate type
    if (!in_array($type, ['apply', 'download'])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid request type']);
        exit();
    }
    
    // Check if email already exists for application (prevent duplicate applications)
    if ($type === 'apply') {
        $checkSQL = "SELECT COUNT(*) FROM maritime_governance_interest WHERE email = :email AND type = 'apply'";
        $checkStmt = $conn->prepare($checkSQL);
        $checkStmt->bindParam(':email', $email);
        $checkStmt->execute();
        
        if ($checkStmt->fetchColumn() > 0) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'An application with this email already exists']);
            exit();
        }
    }
    
    // Insert into database
    $sql = "INSERT INTO maritime_governance_interest 
            (type, full_name, email, phone, organization, position, country, interest, status) 
            VALUES 
            (:type, :full_name, :email, :phone, :organization, :position, :country, :interest, 'pending')";
    
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':type', $type);
    $stmt->bindParam(':full_name', $fullName);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':phone', $phone);
    $stmt->bindParam(':organization', $organization);
    $stmt->bindParam(':position', $position);
    $stmt->bindParam(':country', $country);
    $stmt->bindParam(':interest', $interest);
    
    if ($stmt->execute()) {
        // Send email notification to GoGMI
        $to = "info@gogmi.org.gh";
        $subject = $type === 'apply' 
            ? "New Maritime Governance Course Application - $fullName"
            : "New Syllabus Download Request - $fullName";
        
        $message = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #132552; color: white; padding: 20px; text-align: center; }
                .content { background-color: #f9f9f9; padding: 20px; margin: 20px 0; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #8E3400; }
                .value { margin-top: 5px; }
                .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h2>Maritime Governance Course - " . ($type === 'apply' ? 'New Application' : 'Syllabus Request') . "</h2>
                </div>
                <div class='content'>
                    <div class='field'>
                        <div class='label'>Type:</div>
                        <div class='value'>" . ucfirst($type) . "</div>
                    </div>
                    <div class='field'>
                        <div class='label'>Full Name:</div>
                        <div class='value'>$fullName</div>
                    </div>
                    <div class='field'>
                        <div class='label'>Email:</div>
                        <div class='value'>$email</div>
                    </div>
                    <div class='field'>
                        <div class='label'>Phone:</div>
                        <div class='value'>$phone</div>
                    </div>
                    <div class='field'>
                        <div class='label'>Organization:</div>
                        <div class='value'>$organization</div>
                    </div>
                    <div class='field'>
                        <div class='label'>Position:</div>
                        <div class='value'>$position</div>
                    </div>
                    <div class='field'>
                        <div class='label'>Country:</div>
                        <div class='value'>$country</div>
                    </div>
                    <div class='field'>
                        <div class='label'>Why Interested:</div>
                        <div class='value'>$interest</div>
                    </div>
                    <div class='field'>
                        <div class='label'>Submission Date:</div>
                        <div class='value'>" . date('F j, Y, g:i a') . "</div>
                    </div>
                </div>
                <div class='footer'>
                    <p>This is an automated message from the GoGMI website.</p>
                </div>
            </div>
        </body>
        </html>
        ";
        
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: GoGMI Website <noreply@gogmi.org.gh>" . "\r\n";
        $headers .= "Reply-To: $email" . "\r\n";
        
        mail($to, $subject, $message, $headers);
        
        // Send confirmation email to applicant
        $confirmSubject = $type === 'apply'
            ? "Maritime Governance Course Application Received"
            : "Maritime Governance Course Syllabus";
        
        $confirmMessage = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #132552; color: white; padding: 20px; text-align: center; }
                .content { padding: 20px; }
                .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; border-top: 1px solid #ddd; padding-top: 20px; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h2>Gulf of Guinea Maritime Institute</h2>
                </div>
                <div class='content'>
                    <p>Dear $fullName,</p>
                    ";
        
        if ($type === 'apply') {
            $confirmMessage .= "
                    <p>Thank you for your interest in the <strong>Maritime Security Strategy Development and Implementation: A Focus on Africa</strong> course.</p>
                    <p>We have received your application and our admissions team will review it shortly. You will receive further communication from us within the next 5-7 business days.</p>
                    <h3>Course Details:</h3>
                    <ul>
                        <li><strong>Dates:</strong> May 5 - 28, 2026</li>
                        <li><strong>Format:</strong> Virtual/Online (Zoom)</li>
                        <li><strong>Duration:</strong> 4 weeks, 8 modules</li>
                    </ul>
                    <p>If you have any questions in the meantime, please don't hesitate to contact us at info@gogmi.org.gh</p>
                    ";
        } else {
            $confirmMessage .= "
                    <p>Thank you for your interest in the <strong>Maritime Security Strategy Development and Implementation: A Focus on Africa</strong> course.</p>
                    <p>Please find the course syllabus attached to this email. We hope you find the information useful.</p>
                    <p>If you would like to apply for the course, please visit our website or contact us at info@gogmi.org.gh</p>
                    <h3>Course Information:</h3>
                    <ul>
                        <li><strong>Dates:</strong> May 5 - 28, 2026</li>
                        <li><strong>Format:</strong> Virtual/Online (Zoom)</li>
                        <li><strong>Duration:</strong> 4 weeks, 8 modules</li>
                        <li><strong>Status:</strong> Now Accepting Applications</li>
                    </ul>
                    ";
        }
        
        $confirmMessage .= "
                    <p>Best regards,<br>
                    <strong>Gulf of Guinea Maritime Institute</strong><br>
                    Website: www.gogmi.org.gh<br>
                    Email: info@gogmi.org.gh</p>
                </div>
                <div class='footer'>
                    <p>This is an automated message. Please do not reply to this email.</p>
                </div>
            </div>
        </body>
        </html>
        ";
        
        $confirmHeaders = "MIME-Version: 1.0" . "\r\n";
        $confirmHeaders .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $confirmHeaders .= "From: Gulf of Guinea Maritime Institute <info@gogmi.org.gh>" . "\r\n";
        
        mail($email, $confirmSubject, $confirmMessage, $confirmHeaders);
        
        // Return success response
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'message' => $type === 'apply' 
                ? 'Application submitted successfully'
                : 'Download request received. Check your email.',
            'data' => [
                'id' => $conn->lastInsertId(),
                'name' => $fullName,
                'email' => $email,
                'type' => $type
            ]
        ]);
    } else {
        throw new Exception('Failed to save data');
    }
    
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Database error: ' . $e->getMessage()
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Error: ' . $e->getMessage()
    ]);
}
?>