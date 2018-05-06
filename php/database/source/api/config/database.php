<?php
class Database{
 
    // specify your own database credentials
    private $host = "localhost";
    private $db_name = "ecommerce";
    private $username = "ecommerce_user";
    private $password = "S3nh4S3gur4!";
    public $conn;
 
    // get the database connection
    public function getConnection() {
        $this->conn = null;
 
        try {
            $connString = "mysql:host=" . $this->host . ";dbname=" . $this->db_name;
            $this->conn = new PDO($connString, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        } catch(PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }
 
        return $this->conn;
    }
}
?>