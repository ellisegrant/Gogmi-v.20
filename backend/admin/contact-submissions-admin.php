<?php
/**
 * GOGMI Contact Submissions Admin Dashboard
 * 
 * Upload to: public_html/admin/contact-submissions.php
 * Access at: https://gogmi.org.gh/admin/contact-submissions.php
 * 
 * IMPORTANT: Add password protection! (See security section below)
 */

// ============================================
// SIMPLE PASSWORD PROTECTION
// ============================================
session_start();

// Change this password!
$admin_password = 'gogmi2024admin'; // CHANGE THIS!

if (!isset($_SESSION['admin_logged_in'])) {
    if (isset($_POST['password'])) {
        if ($_POST['password'] === $admin_password) {
            $_SESSION['admin_logged_in'] = true;
        } else {
            $login_error = 'Invalid password';
        }
    }
    
    if (!isset($_SESSION['admin_logged_in'])) {
        ?>
        <!DOCTYPE html>
        <html>
        <head>
            <title>Admin Login - GOGMI</title>
            <style>
                body { font-family: Arial, sans-serif; background: #f5f7fa; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
                .login-box { background: white; padding: 40px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); max-width: 400px; width: 100%; }
                h2 { color: #132552; margin-bottom: 20px; }
                input[type="password"] { width: 100%; padding: 12px; border: 2px solid #8E3400; border-radius: 5px; margin-bottom: 15px; font-size: 16px; }
                button { width: 100%; padding: 12px; background: #8E3400; color: white; border: none; border-radius: 5px; font-size: 16px; font-weight: bold; cursor: pointer; }
                button:hover { background: #6B2700; }
                .error { color: red; margin-bottom: 15px; }
            </style>
        </head>
        <body>
            <div class="login-box">
                <h2>GOGMI Admin Login</h2>
                <?php if (isset($login_error)): ?>
                    <div class="error"><?php echo $login_error; ?></div>
                <?php endif; ?>
                <form method="POST">
                    <input type="password" name="password" placeholder="Enter admin password" required>
                    <button type="submit">Login</button>
                </form>
            </div>
        </body>
        </html>
        <?php
        exit();
    }
}

// Logout
if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: ' . $_SERVER['PHP_SELF']);
    exit();
}

// ============================================
// DATABASE CONFIGURATION
// ============================================
$db_host = 'localhost';
$db_name = 'your_database_name';
$db_user = 'your_database_username';
$db_pass = 'your_database_password';

try {
    $pdo = new PDO("mysql:host=$db_host;dbname=$db_name;charset=utf8mb4", $db_user, $db_pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}

// ============================================
// HANDLE ACTIONS
// ============================================
if (isset($_GET['action']) && isset($_GET['id'])) {
    $id = (int)$_GET['id'];
    
    if ($_GET['action'] === 'mark_read') {
        $stmt = $pdo->prepare("UPDATE contact_submissions SET status = 'read' WHERE id = ?");
        $stmt->execute([$id]);
    } elseif ($_GET['action'] === 'delete') {
        $stmt = $pdo->prepare("DELETE FROM contact_submissions WHERE id = ?");
        $stmt->execute([$id]);
    }
    
    header('Location: ' . $_SERVER['PHP_SELF']);
    exit();
}

// ============================================
// GET SUBMISSIONS
// ============================================
$filter = isset($_GET['filter']) ? $_GET['filter'] : 'all';
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$per_page = 20;
$offset = ($page - 1) * $per_page;

$where = '';
if ($filter === 'new') {
    $where = "WHERE status = 'new'";
} elseif ($filter === 'read') {
    $where = "WHERE status = 'read'";
}

$stmt = $pdo->query("SELECT COUNT(*) FROM contact_submissions $where");
$total = $stmt->fetchColumn();
$total_pages = ceil($total / $per_page);

$stmt = $pdo->query("
    SELECT * FROM contact_submissions 
    $where 
    ORDER BY submitted_at DESC 
    LIMIT $per_page OFFSET $offset
");
$submissions = $stmt->fetchAll();

// Get counts
$new_count = $pdo->query("SELECT COUNT(*) FROM contact_submissions WHERE status = 'new'")->fetchColumn();
$read_count = $pdo->query("SELECT COUNT(*) FROM contact_submissions WHERE status = 'read'")->fetchColumn();
$total_count = $pdo->query("SELECT COUNT(*) FROM contact_submissions")->fetchColumn();
?>

<!DOCTYPE html>
<html>
<head>
    <title>Contact Submissions - GOGMI Admin</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; background: #f5f7fa; }
        .header { background: linear-gradient(135deg, #132552 0%, #1A336C 100%); color: white; padding: 20px 30px; display: flex; justify-content: space-between; align-items: center; }
        .header h1 { font-size: 24px; font-weight: 900; }
        .logout-btn { background: #8E3400; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: 600; }
        .logout-btn:hover { background: #6B2700; }
        .container { max-width: 1400px; margin: 30px auto; padding: 0 20px; }
        .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .stat-card { background: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        .stat-card h3 { color: #4B5563; font-size: 14px; font-weight: 600; margin-bottom: 10px; text-transform: uppercase; }
        .stat-card .number { font-size: 36px; font-weight: 900; color: #132552; }
        .filters { background: white; padding: 20px; border-radius: 12px; margin-bottom: 20px; display: flex; gap: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        .filter-btn { padding: 10px 20px; border: 2px solid #8E3400; background: white; color: #8E3400; border-radius: 8px; cursor: pointer; font-weight: 600; text-decoration: none; }
        .filter-btn:hover, .filter-btn.active { background: #8E3400; color: white; }
        .submissions { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        table { width: 100%; border-collapse: collapse; }
        th { background: #132552; color: white; padding: 15px; text-align: left; font-weight: 600; }
        td { padding: 15px; border-bottom: 1px solid #f5f7fa; }
        tr:hover { background: #f9fafb; }
        .badge { padding: 5px 12px; border-radius: 6px; font-size: 12px; font-weight: 700; text-transform: uppercase; }
        .badge-new { background: #FEE2E2; color: #DC2626; }
        .badge-read { background: #DBEAFE; color: #2563EB; }
        .actions { display: flex; gap: 10px; }
        .btn { padding: 6px 12px; border-radius: 6px; text-decoration: none; font-size: 12px; font-weight: 600; }
        .btn-view { background: #8E3400; color: white; }
        .btn-delete { background: #DC2626; color: white; }
        .btn:hover { opacity: 0.8; }
        .pagination { display: flex; justify-content: center; gap: 10px; margin-top: 30px; }
        .page-btn { padding: 10px 15px; background: white; border: 2px solid #8E3400; color: #8E3400; border-radius: 8px; text-decoration: none; font-weight: 600; }
        .page-btn:hover, .page-btn.active { background: #8E3400; color: white; }
        .no-data { text-align: center; padding: 60px 20px; color: #9CA3AF; }
        .modal { display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 1000; justify-content: center; align-items: center; }
        .modal-content { background: white; padding: 30px; border-radius: 12px; max-width: 600px; width: 90%; max-height: 80vh; overflow-y: auto; }
        .modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .modal-header h2 { color: #132552; font-weight: 900; }
        .close-btn { background: #DC2626; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: 600; }
        .detail-row { margin-bottom: 20px; }
        .detail-label { color: #4B5563; font-weight: 600; font-size: 12px; text-transform: uppercase; margin-bottom: 5px; }
        .detail-value { color: #132552; font-size: 16px; }
        .message-box { background: #f5f7fa; padding: 15px; border-radius: 8px; margin-top: 10px; line-height: 1.6; }
    </style>
</head>
<body>
    <div class="header">
        <h1>📧 GOGMI Contact Submissions</h1>
        <a href="?logout" class="logout-btn">Logout</a>
    </div>

    <div class="container">
        <!-- Stats -->
        <div class="stats">
            <div class="stat-card">
                <h3>Total Submissions</h3>
                <div class="number"><?php echo $total_count; ?></div>
            </div>
            <div class="stat-card">
                <h3>New Messages</h3>
                <div class="number" style="color: #DC2626;"><?php echo $new_count; ?></div>
            </div>
            <div class="stat-card">
                <h3>Read Messages</h3>
                <div class="number" style="color: #2563EB;"><?php echo $read_count; ?></div>
            </div>
        </div>

        <!-- Filters -->
        <div class="filters">
            <a href="?filter=all" class="filter-btn <?php echo $filter === 'all' ? 'active' : ''; ?>">
                All (<?php echo $total_count; ?>)
            </a>
            <a href="?filter=new" class="filter-btn <?php echo $filter === 'new' ? 'active' : ''; ?>">
                New (<?php echo $new_count; ?>)
            </a>
            <a href="?filter=read" class="filter-btn <?php echo $filter === 'read' ? 'active' : ''; ?>">
                Read (<?php echo $read_count; ?>)
            </a>
        </div>

        <!-- Submissions Table -->
        <div class="submissions">
            <?php if (count($submissions) > 0): ?>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($submissions as $sub): ?>
                    <tr>
                        <td><strong>#<?php echo $sub['id']; ?></strong></td>
                        <td><?php echo htmlspecialchars($sub['name']); ?></td>
                        <td><?php echo htmlspecialchars($sub['email']); ?></td>
                        <td><?php echo htmlspecialchars(substr($sub['subject'], 0, 40)); ?></td>
                        <td><?php echo date('M d, Y H:i', strtotime($sub['submitted_at'])); ?></td>
                        <td>
                            <span class="badge badge-<?php echo $sub['status']; ?>">
                                <?php echo $sub['status']; ?>
                            </span>
                        </td>
                        <td>
                            <div class="actions">
                                <a href="#" onclick="viewSubmission(<?php echo $sub['id']; ?>); return false;" class="btn btn-view">View</a>
                                <a href="?action=delete&id=<?php echo $sub['id']; ?>" 
                                   onclick="return confirm('Delete this submission?');" 
                                   class="btn btn-delete">Delete</a>
                            </div>
                        </td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
            <?php else: ?>
            <div class="no-data">
                <h3>No submissions found</h3>
                <p>Contact form submissions will appear here</p>
            </div>
            <?php endif; ?>
        </div>

        <!-- Pagination -->
        <?php if ($total_pages > 1): ?>
        <div class="pagination">
            <?php for ($i = 1; $i <= $total_pages; $i++): ?>
                <a href="?filter=<?php echo $filter; ?>&page=<?php echo $i; ?>" 
                   class="page-btn <?php echo $page === $i ? 'active' : ''; ?>">
                    <?php echo $i; ?>
                </a>
            <?php endfor; ?>
        </div>
        <?php endif; ?>
    </div>

    <!-- Modal for viewing submission details -->
    <div id="modal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Submission Details</h2>
                <button class="close-btn" onclick="closeModal()">Close</button>
            </div>
            <div id="modal-body"></div>
        </div>
    </div>

    <script>
        const submissions = <?php echo json_encode($submissions); ?>;

        function viewSubmission(id) {
            const sub = submissions.find(s => s.id == id);
            if (!sub) return;

            const modalBody = document.getElementById('modal-body');
            modalBody.innerHTML = `
                <div class="detail-row">
                    <div class="detail-label">Submission ID</div>
                    <div class="detail-value">#${sub.id}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Name</div>
                    <div class="detail-value">${sub.name}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Email</div>
                    <div class="detail-value"><a href="mailto:${sub.email}">${sub.email}</a></div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Phone</div>
                    <div class="detail-value">${sub.phone || 'Not provided'}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Subject</div>
                    <div class="detail-value">${sub.subject}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Message</div>
                    <div class="message-box">${sub.message.replace(/\n/g, '<br>')}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">IP Address</div>
                    <div class="detail-value">${sub.ip_address}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">Submitted</div>
                    <div class="detail-value">${new Date(sub.submitted_at).toLocaleString()}</div>
                </div>
                <div class="detail-row">
                    <a href="?action=mark_read&id=${sub.id}" class="btn btn-view" style="display: inline-block;">Mark as Read</a>
                </div>
            `;

            document.getElementById('modal').style.display = 'flex';

            // Mark as read
            if (sub.status === 'new') {
                fetch(`?action=mark_read&id=${sub.id}`);
            }
        }

        function closeModal() {
            document.getElementById('modal').style.display = 'none';
        }

        // Close modal on outside click
        window.onclick = function(event) {
            const modal = document.getElementById('modal');
            if (event.target === modal) {
                closeModal();
            }
        }
    </script>
</body>
</html>
