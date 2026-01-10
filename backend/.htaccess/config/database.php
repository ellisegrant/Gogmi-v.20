<?php
class Database {
    // UPDATE WITH YOUR HOSTINGER DATABASE CREDENTIALS
    private $host = "localhost";
    private $db_name = "u448928185_gogmi";  // From Hostinger
    private $username = "u448928185_gogmi"; // From Hostinger
    private $password = "CDTeam2o25"; // From Hostinger
    public $conn;

    public function getConnection() {
        $this->conn = null;

        try {
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";dbname=" . $this->db_name,
                $this->username,
                $this->password
            );
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            $this->conn->exec("set names utf8mb4");
        } catch(PDOException $exception) {
            error_log("Database Connection Error: " . $exception->getMessage());
            die(json_encode([
                'success' => false,
                'message' => 'Database connection failed'
            ]));
        }

        return $this->conn;
    }
}
?>