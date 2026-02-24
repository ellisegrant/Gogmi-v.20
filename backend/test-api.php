<?php
define('APP_RUNNING', true);
require_once 'config/database.php';
<?php
require_once __DIR__ . '/.htaccess/config/cors.php';

header('Content-Type: text/html; charset=utf-8');
?>
<!DOCTYPE html>
<html>
<head>
    <title>GoGMI API Test</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
        }
        .test-item {
            background: #f5f5f5;
            padding: 15px;
            margin: 10px 0;
            border-left: 4px solid #4CAF50;
        }
        .error {
            border-left-color: #f44336;
        }
        h1 {
            color: #132552;
        }
        .success {
            color: #4CAF50;
        }
        .fail {
            color: #f44336;
        }
    </style>
</head>
<body>
    <h1>🚀 GoGMI Backend API Test</h1>
    
    <?php
    // Test 1: Database Connection
    echo '<div class="test-item">';
    echo '<h3>Test 1: Database Connection</h3>';
    try {
        $database = new Database();
        $db = $database->getConnection();
        if ($db) {
            echo '<p class="success"> Database connected successfully!</p>';
            echo '<p>Host: ' . $db->query("SELECT @@hostname")->fetchColumn() . '</p>';
        }
    } catch (Exception $e) {
        echo '<p class="fail"> Database connection failed: ' . $e->getMessage() . '</p>';
    }
    echo '</div>';
    
    // Test 2: Check Tables
    echo '<div class="test-item">';
    echo '<h3>Test 2: Database Tables</h3>';
    try {
        $tables = ['users', 'memberships', 'payments', 'download_logs', 'contact_submissions'];
        foreach ($tables as $table) {
            $result = $db->query("SHOW TABLES LIKE '$table'")->fetch();
            if ($result) {
                echo '<p class="success"> Table exists: ' . $table . '</p>';
            } else {
                echo '<p class="fail"> Table missing: ' . $table . '</p>';
            }
        }
    } catch (Exception $e) {
        echo '<p class="fail"> Error: ' . $e->getMessage() . '</p>';
    }
    echo '</div>';
    
    // Test 3: Configuration
    echo '<div class="test-item">';
    echo '<h3>Test 3: Configuration</h3>';
    echo '<p>Environment: <strong>' . APP_ENV . '</strong></p>';
    echo '<p>Frontend URL: <strong>' . FRONTEND_URL . '</strong></p>';
    echo '<p>Backend URL: <strong>' . BACKEND_URL . '</strong></p>';
    echo '<p>JWT Secret: ' . (defined('JWT_SECRET') ? '<span class="success">✅ Set</span>' : '<span class="fail">❌ Not set</span>') . '</p>';
    echo '<p>Paystack Keys: ' . (defined('PAYSTACK_SECRET_KEY') ? '<span class="success">✅ Set</span>' : '<span class="fail">❌ Not set</span>') . '</p>';
    echo '</div>';
    
    // Test 4: API Endpoints
    echo '<div class="test-item">';
    echo '<h3>Test 4: API Endpoints</h3>';
    $endpoints = [
        'api/auth/register.php',
        'api/auth/login.php',
        'api/auth/me.php',
        'api/membership/activate.php',
        'api/membership/status.php',
        'api/resources/check-access.php'
    ];
    foreach ($endpoints as $endpoint) {
        if (file_exists(__DIR__ . '/' . $endpoint)) {
            echo '<p class="success"> ' . $endpoint . '</p>';
        } else {
            echo '<p class="fail"> Missing: ' . $endpoint . '</p>';
        }
    }
    echo '</div>';
    
    // Test 5: Utilities
    echo '<div class="test-item">';
    echo '<h3>Test 5: Utility Classes</h3>';
    $utils = [
        'utils/JWT.php',
        'utils/Response.php',
        'utils/Validator.php'
    ];
    foreach ($utils as $util) {
        if (file_exists(__DIR__ . '/' . $util)) {
            echo '<p class="success"> ' . $util . '</p>';
        } else {
            echo '<p class="fail"> Missing: ' . $util . '</p>';
        }
    }
    echo '</div>';
    ?>
    
    <div class="test-item">
        <h3>Next Steps:</h3>
        <ol>
            <li>If database tables are missing, run the SQL in phpMyAdmin</li>
            <li>Update config/database.php with your Hostinger credentials</li>
            <li>Update config/config.php with your domain URLs</li>
            <li>Test API endpoints with Postman or your frontend</li>
        </ol>
    </div>
</body>
</html>